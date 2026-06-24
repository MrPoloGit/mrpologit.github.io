---
layout: default
title: Projects
---

## Projects

**[Back](index)**

---

### μTheia

**Tools:** SystemVerilog, cocotb, LibreLane/OpenROAD, Magic, KLayout, Netgen, Icarus Verilog, Python, SDC, TCL &nbsp;|&nbsp
**Status:** Submission pending — WaferSpace MPW shuttle deadline July 14, 2026

**Description** — Neuromorphic inference ASIC that decodes EVT2 event streams from a Prophesee event camera, compresses 320×320 spatial coordinates into a 16×16 grid with 16 temporal bins via voxel binning, and performs 8-bit integer MAC scoring across four programmable gesture classes. No CPU, no cache — all computation is streaming and in-order.

- Authored SystemVerilog RTL modules and cocotb/Icarus Verilog testbenches; set up and managed the LibreLane/OpenROAD chip design flow end-to-end, including manual placement and DRC intervention
- Achieved timing closure at 64 MHz on GlobalFoundries GF180MCU (0.18µm); full LVS and DRC sign-off via Magic and KLayout
- Event throughput: 32 Mevent/s; MAC latency: ~64 µs for 16×16×16 feature set (4,098 cycles at 64 MHz)
- Pending fabrication via WaferSpace MPW shuttle on GlobalFoundries GF180MCU

**Links:** [GitHub](https://github.com/MrPoloGit/microTheia)

---

### ternip core

**Tools:** SystemVerilog, Vivado, Yosys, Verilator, VCS, Python, SDC &nbsp;|&nbsp; 
**Status:** U250 deployed; TSMC 6nm tapeout in progress

**Description** — Hardware accelerator for [Scalable MatMul-Free Language Modeling](https://arxiv.org/abs/2406.02528) — replaces matrix multiplication with ternary weight operations (-1/0/+1), deployed on Xilinx UltraScale+ U250 FPGA. Research under Dustin Richmond and PhD student Ethan Sifferman at UCSC Hardware Systems Collective.

- Parameterized element-wise vectorized operations and reduction logic for RMSNorm, extending from fixed dimensions (1024/2048/2560) to arbitrary vector lengths per the original algorithm
- Implemented ternary weight compression and decompression hardware in SystemVerilog, reducing memory bandwidth requirements
- Deployed on Xilinx UltraScale+ U250 at 300 MHz, achieving 110 tokens/sec throughput
- Wrote Verilator and VCS simulation testbenches covering ternary compression and decompression
- Contributing to TSMC 6nm tapeout incorporating a SiFive RISC-V core for system orchestration led by PhD student Yiwei Yang
- Publication in progress

**Links:** [GitHub](https://github.com/sifferman/ternip/)

---

### LiveLLNN

**Tools:** SystemVerilog, Vivado, TCL, Jupyter Notebook, Python &nbsp;|&nbsp; **Status:** Complete — ECE 110 final project (with Raphael Huang and Chad Baker)

**Description** — Heterogeneous SoC architecture for run-time reconfiguration of LUT-Based Logic Neural Networks (LLNNs) on PYNQ-Z2 FPGA. LUT weights are adjustable at runtime without resynthesis or bitstream regeneration — connection topology is fixed; only the weight values update.

- Ported the capo-urjc/llnn library from combinational VHDL to sequential SystemVerilog, enabling runtime weight updates
- Implemented LiveLLNN on PYNQ-Z2, achieving ~4 ns inference latency

**Links:** [GitHub](https://github.com/MrPoloGit/LiveLLNN)

---

### llnn — SystemVerilog Support

**Tools:** SystemVerilog, VHDL, Python &nbsp;|&nbsp; **Status:** Merged upstream

**Description** — Contributed SystemVerilog code generation support to [capo-urjc/llnn](https://github.com/capo-urjc/llnn), an open-source library for LUT-Based Logic Neural Network architectures targeting FPGAs. The library previously generated only combinational VHDL; this PR adds a sequential SystemVerilog output path. Accepted and merged upstream.

**Links:** [Github](https://github.com/mrpologit/llnn)

---

### Multi-Lookahead Offset Prefetching in gem5

**Tools:** C++, gem5 &nbsp;|&nbsp; 
**Status:** Complete — CSE 220 course project (with Matthew Mosher and Erik Chao)

**Description** — Implementation of Multi-Lookahead Offset Prefetching ([Shakerinava et al., DPC3](https://mshakerinava.github.io/papers/mlop-dpc3.pdf)) in the gem5 simulator. MLOP improves over single-best-offset schemes (BOP) by scoring every offset across 16 lookahead levels simultaneously, yielding higher miss coverage and timeliness.

- Implemented Access Map Table with 64-bit spatial locality bitvectors and per-offset, per-lookahead score vectors in C++; parameterized AMT size, evaluation period, and prefetch degree
- Outperformed Stride prefetcher by ~2% IPC on average; achieved 40%+ prefetch coverage consistently across all benchmarks — highest of four prefetchers evaluated (vs. no prefetcher, BOP, and Bingo)
- Evaluated across PARSEC and NAS benchmark suites (14 workloads) on simulated 1 GHz x86 with 64 kB L1D / 16 kB L1I / 256 kB L2

**Links:** [GitHub](https://github.com/MrPoloGit/gem5)

---

### Anomaly Detection of LHC Collision Data

**Tools:** Python, Jupyter Notebook &nbsp;|&nbsp; 
**Status:** Complete — PHYS 152 course project

**Description** — Machine learning analysis of LHC collision data for anomaly detection, completed as part of Computational Physics (PHYS 152) at UCSC.

**Links:** [GitHub](https://github.com/MrPoloGit/Anomaly-Detection-of-LHC-Collision-Data)

---

### zed-elsa

**Tools:** Rust, JavaScript, Tree-sitter &nbsp;|&nbsp; **Status:** Published to Zed extensions marketplace

**Description** — Zed editor extension for the Elsa lambda calculus language. Built a Tree-sitter grammar for syntax highlighting and a language server providing `let` keyword autocompletion.

**Links:** [elsa-lang](https://github.com/MrPoloGit/elsa-lang) · [elsa-lsp](https://github.com/MrPoloGit/elsa-lsp) · [tree-sitter-elsa](https://github.com/MrPoloGit/tree-sitter-elsa)

---

### Slugway Surfers


**Tools:** Verilog, Vivado, Bayas3 Board &nbsp;|&nbsp; **Status:** Complete — PHYS 100 course project

**Description** — CSE 100 (Logic Design) coursework. Synthesized and deployed a 3-lane falling-block dodge game in Verilog on Basys3 FPGA with VGA output.

---

### Simple Monte Carlo Decay Chain Simulation


**Tools:** Python, Jupyter Notebook &nbsp;|&nbsp; 
**Status:** Complete — PHYS 115 course project

**Description** — PHYS 115 coursework. Simulated radioactive decay chains using Monte Carlo methods. 

**Links:** [GitHub](https://github.com/MrPoloGit/Simple-Monte-Carlo-Decay-Chain-Simulation)

---

### tlcmod

**Tools:** tConfig, C#

**Description** — Terraria Legacy Content Mod, adds legacy content from different versions back into the game as mod for tConfig and tAPI

- tlcmod-1.1 in development
- tlcmod-1.2 in development

**Links:** [tlcmod-1.1](https://github.com/MrPoloGit/tlcmod-1.1) · [tlcmod-1.2](https://github.com/MrPoloGit/tlcmod-1.2)

---

### Project-1.1

**Tools:** tConfig, C#

**Description** — Mod for Terraria 1.1 that adds comfort of life features, such as 1 block walk up and smart cursor

**Links:** [GitHub](https://github.com/MrPoloGit/Project-1.1)
