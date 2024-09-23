# Overview

The RISCV Converter is a web-based tool that allows users to convert between RISC-V assembly, binary, and hexadecimal representations. It provides an interactive UI where users can input a RISC-V instruction in any format, select the desired output format, and instantly view the conversion results. The tool includes a copy feature for easy sharing of the results.

## Features
Interactive Form: Input RISC-V instructions in Assembly, Binary, or Hexadecimal format and convert them to the other formats.
Format Dropdown: Select the format you want to convert from (Assembly, Binary, or Hexadecimal).
Conversion Button: A single button triggers the conversion process.
Result Display: Converted results are displayed in Assembly, Binary, and Hexadecimal formats.
Copy to Clipboard: Copy the result of any conversion with one click for easy reuse.
Project Structure
The project is structured as a React application with modular components. Here's an overview of the key files and components:

## Components:
### RISCV.tsx:
This is the main page component for the RISCV Converter. It maintains the state for the different formats (Assembly, Binary, Hexadecimal) and passes it to the interactive form and results display components.

#### RISCVInteractiveForm.tsx:
This component handles the user input, including the text input field and the dropdown to choose the format (Assembly, Binary, or Hexadecimal). It also contains the button to trigger the conversion process.

### RISCVDropdown.tsx:
The dropdown component lets the user select which format (Assembly, Binary, Hexadecimal) they want to input. It uses @/components/ui/select for the UI.

### RISCVConvertButton.tsx:
This button triggers the conversion of the inputted instruction. Based on the selected format, it calls the appropriate function (inputtedAssembly, inputtedBinary, or inputtedHexadecimal) and updates the results.

### RISCVInput.tsx:
This component provides the input field for users to type their instruction. It passes the input back to the parent component (RISCVInteractiveForm) for processing.

### RISCVResults.tsx:
Displays the results of the conversion in all three formats (Assembly, Binary, Hexadecimal). Each result includes a copy button to quickly copy the value to the clipboard.

### Conversion Functions:

#### inputtedAssembly:
Converts a RISC-V assembly instruction to binary and hexadecimal. It parses the instruction, identifies its type (R, I, S, B, U, or J), and constructs the corresponding binary and hexadecimal outputs.

#### inputtedBinary:
Converts a binary instruction to assembly and hexadecimal. It parses the binary string into different fields like opcode, registers, and immediate values based on the instruction type, and returns the assembly equivalent.

#### inputtedHexadecimal:
Converts a hexadecimal instruction to binary and assembly. It first converts the hex input to binary, then uses similar logic as inputtedBinary to extract and convert the instruction.

### RISCVInstructions.json:
This file contains the RISC-V instruction set details such as opcode, funct3, funct7, and the instruction format type (R, I, S, B, U, or J). The converter functions use this JSON file to map the input instructions to their binary/assembly equivalents.
