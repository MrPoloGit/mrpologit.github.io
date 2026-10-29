---
layout: default
title: ASIC Reverse Engineering Puzzle 2026
date: 2026-09-12
description: Reverse engineering a Jane Street ASIC puzzle from raw GDS layout to a satisfying input, verified independently with Verilator.
---

## ASIC Reverse Engineering Puzzle 2026

**[Back](/posts)**

Jane Street posted on their blog a puzzle on reverse engineering an asic design [here](https://blog.janestreet.com/can-you-reverse-engineer-an-asic/). I decided to solve it and here is the write up of it, you can find a PDF version [here](https://github.com/MrPoloGit/asic-puzzle-2026/blob/master/WRITEUP.pdf).

## Problem

Given only `puzzle.gds` (raw chip layout geometry, no labels) and a sample input/output trace, recover the netlist, work out the circuit's function, and find the specific input that drives `success` high.

## Approach

0. All the tools I used were first tested with the warmup. It served as a useful reference so I could compare the backwards results I got over time.
1. **Extract a netlist from geometry.** I used Magic to read `puzzle.gds` with the sky130 process rules and extract transistor-level connectivity, then used `ext2spice` to get a SPICE netlist.
2. **Convert SPICE to Verilog.** Since Magic recovered real `sky130_fd_sc_hd__*` cell names (not anonymized), I could use a custom script to match each instance's positional SPICE pins against that cell type's own subckt header to build a proper gate-level Verilog netlist.
3. **Tried direct symbolic solving inside HAL since it worked with the warmup (failed - see Problems).**
4. **Read the real input protocol off the reference waveform** instead of assuming it: two 121-bit input bursts separated by a reset, with four flip-flops that have no reset pin and so carry state from burst 1 into burst 2 - a strong hint burst 1 sets something up and burst 2 checks it.
5. **Bounded model checking with Yosys + SymbiYosys** (Boolector backend). I built a formal harness that drives the real netlist through the exact schedule from step 5, leaves all 242 `I` bits free, and asks for a satisfying assignment where `success` is 1. Found one on the first run.
6. **Independently verified the witness** with a standalone Verilator testbench against the original, untouched netlist and real sky130 cell models so a different tool, different code path, and no shared assumptions.

## Tools used / built

- **Magic** - GDS -> SPICE extraction (existing tool).
- **KLayout** - full-chip rendering of `puzzle.gds` (sky130 tech file) to read the physical placement hint and check for hidden content (existing tool).
- **HAL** (`dataflow` plugin) - register grouping (existing tool).
- **Custom equation extractor** - walks combinational fan-in per flip-flop and composes real Liberty cell functions into one readable Boolean expression per register.
- **Custom protocol reader** - samples `rst_n`/`enable`/`I` at every clock edge of the reference VCD to reconstruct the true burst/reset schedule.
- **Yosys + SymbiYosys** - bounded model checking harness written against the extracted netlist (existing tools, custom harness).
- **Verilator testbench** - independent gate-level replay of the witness against real cell models, for verification.
- **`scripts/load_witness_bits.py`** - general-purpose VCD bit/byte extractor, built specifically to stop hand-transcribing witness data.

## Problems encountered

- **Hand-rolled SMT inside HAL didn't scale.** Three cycle-by-cycle unroll encodings (Z3 via HAL) worked at 3 cycles but died well before 121: timeout, OOM at 12.8 GB, solver `Unknown`

## How the final answer was reached

With the real, programmatically-extracted 242-bit input sequence, gate-level simulation of the *original* netlist against the *real* sky130 cell models gives an unambiguous result:

- **`success = 1`**
- **`O` (read one ASCII byte per clock cycle, cycles 281–295) = `"(* TWO STARS *)"`**

The tooling built during this puzzle was generalized into a reusable flow: [github.com/MrPoloGit/FARE-flow](https://github.com/MrPoloGit/FARE-flow).
