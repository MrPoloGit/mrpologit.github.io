import RISCVInstructions from '../../public/RISCVInstructions.json'; // Importing the correct JSON file

export function inputtedAssembly(assemblyInstruction) {
    const [inst, rd, rs1, rs2, imm] = assemblyInstruction.split(' '); // Basic parsing, may need adjustment based on the input format

    // Find the instruction in the JSON data
    const instruction = RISCVInstructions.find((item) => item.inst === inst);

    if (!instruction) {
        return ['Invalid instruction', '', ''];
    }

    let binaryInstruction = '';

    // Check the instruction type and build the binary string accordingly
    switch (instruction.type) {
        case 'R':
            binaryInstruction =
                `${instruction.funct7}` + 
                `${parseInt(rs2.replace('x', '')).toString(2).padStart(5, '0')}` + 
                `${parseInt(rs1.replace('x', '')).toString(2).padStart(5, '0')}` + 
                `${instruction.funct3}` + 
                `${parseInt(rd.replace('x', '')).toString(2).padStart(5, '0')}` + 
                `${instruction.opcode}`;
            break;
        case 'I':
            binaryInstruction =
                `${parseInt(imm).toString(2).padStart(12, '0')}` + 
                `${parseInt(rs1.replace('x', '')).toString(2).padStart(5, '0')}` + 
                `${instruction.funct3}` + 
                `${parseInt(rd.replace('x', '')).toString(2).padStart(5, '0')}` + 
                `${instruction.opcode}`;
            break;
        case 'S':
            binaryInstruction =
                `${parseInt(imm).toString(2).slice(0, 7)}` + 
                `${parseInt(rs2.replace('x', '')).toString(2).padStart(5, '0')}` + 
                `${parseInt(rs1.replace('x', '')).toString(2).padStart(5, '0')}` + 
                `${instruction.funct3}` + 
                `${parseInt(imm).toString(2).slice(7)}` + 
                `${instruction.opcode}`;
            break;
        case 'B':
            binaryInstruction =
                `${parseInt(imm).toString(2).slice(0, 1)}` + 
                `${parseInt(imm).toString(2).slice(2, 8)}` + 
                `${parseInt(rs2.replace('x', '')).toString(2).padStart(5, '0')}` + 
                `${parseInt(rs1.replace('x', '')).toString(2).padStart(5, '0')}` + 
                `${instruction.funct3}` + 
                `${parseInt(imm).toString(2).slice(8, 12)}` + 
                `${parseInt(imm).toString(2).slice(1, 2)}` + 
                `${instruction.opcode}`;
            break;
        case 'U':
            binaryInstruction =
                `${parseInt(imm).toString(2).padStart(20, '0')}` + 
                `${parseInt(rd.replace('x', '')).toString(2).padStart(5, '0')}` + 
                `${instruction.opcode}`;
            break;
        case 'J':
            binaryInstruction =
                `${parseInt(imm).toString(2).slice(0, 1)}` + 
                `${parseInt(imm).toString(2).slice(9, 19)}` + 
                `${parseInt(imm).toString(2).slice(8, 9)}` + 
                `${parseInt(imm).toString(2).slice(1, 8)}` + 
                `${parseInt(rd.replace('x', '')).toString(2).padStart(5, '0')}` + 
                `${instruction.opcode}`;
            break;
        default:
            return ['Invalid instruction type', '', ''];
    }

    // Convert the binary string to hexadecimal
    const hexInstruction = `0x${parseInt(binaryInstruction, 2).toString(16).padStart(8, '0')}`;

    // Return the array containing the original input, the binary string, and the hexadecimal string
    return [assemblyInstruction, binaryInstruction, hexInstruction];
}

export function inputtedBinary(binaryInstruction) {
    // Ensure the input is exactly 32 bits long
    if (binaryInstruction.length !== 32) {
        return ['Invalid binary instruction length', binaryInstruction, ''];
    }

    // Convert the binary instruction to hexadecimal
    const hexInstruction = `0x${parseInt(binaryInstruction, 2).toString(16).padStart(8, '0')}`;

    // Parse the binary instruction to extract parts for assembly
    const opcode = binaryInstruction.slice(25, 32);
    const rd = parseInt(binaryInstruction.slice(20, 25), 2);
    const funct3 = binaryInstruction.slice(17, 20);
    const rs1 = parseInt(binaryInstruction.slice(12, 17), 2);
    const rs2 = parseInt(binaryInstruction.slice(7, 12), 2);
    const funct7 = binaryInstruction.slice(0, 7);
    const imm = binaryInstruction.slice(0, 12); // For I-type instructions
    const immB = binaryInstruction.slice(0, 1) + binaryInstruction.slice(24, 25) + binaryInstruction.slice(1, 7) + binaryInstruction.slice(20, 24); // For B-type instructions
    const immU = binaryInstruction.slice(0, 20); // For U-type instructions
    const immJ = binaryInstruction.slice(0, 1) + binaryInstruction.slice(12, 20) + binaryInstruction.slice(11, 12) + binaryInstruction.slice(1, 11); // For J-type instructions

    // Find the instruction in the JSON data using the opcode and funct3
    const instruction = RISCVInstructions.find((item) => item.opcode === opcode && item.funct3 === funct3 && item.funct7 === funct7);

    if (!instruction) {
        return ['Invalid instruction', binaryInstruction, hexInstruction];
    }

    let assemblyInstruction = '';

    // Check the instruction type and build the assembly string accordingly
    switch (instruction.type) {
        case 'R':
            assemblyInstruction = `${instruction.inst} x${rd}, x${rs1}, x${rs2}`;
            break;
        case 'I':
            assemblyInstruction = `${instruction.inst} x${rd}, x${rs1}, ${parseInt(imm, 2)}`;
            break;
        case 'S':
            assemblyInstruction = `${instruction.inst} x${rs2}, ${parseInt(imm, 2)}(x${rs1})`;
            break;
        case 'B':
            assemblyInstruction = `${instruction.inst} x${rs1}, x${rs2}, ${parseInt(immB, 2)}`;
            break;
        case 'U':
            assemblyInstruction = `${instruction.inst} x${rd}, ${parseInt(immU, 2)}`;
            break;
        case 'J':
            assemblyInstruction = `${instruction.inst} x${rd}, ${parseInt(immJ, 2)}`;
            break;
        default:
            return ['Invalid instruction type', binaryInstruction, hexInstruction];
    }

    return [assemblyInstruction, binaryInstruction, hexInstruction];
}

export function inputtedHexadecimal(hexInstruction) {
    // Remove the "0x" prefix if it's included
    let hex = hexInstruction.startsWith('0x') ? hexInstruction.slice(2) : hexInstruction;

    // Convert the hexInstruction to binary
    let binaryInstruction = parseInt(hex, 16).toString(2).padStart(32, '0');

    // Ensure the binary instruction is exactly 32 bits long
    if (binaryInstruction.length !== 32) {
        return ['Invalid binary instruction length', binaryInstruction, hexInstruction];
    }

    // Parse the binary instruction to extract parts for assembly
    const opcode = binaryInstruction.slice(25, 32);
    const rd = parseInt(binaryInstruction.slice(20, 25), 2);
    const funct3 = binaryInstruction.slice(17, 20);
    const rs1 = parseInt(binaryInstruction.slice(12, 17), 2);
    const rs2 = parseInt(binaryInstruction.slice(7, 12), 2);
    const funct7 = binaryInstruction.slice(0, 7);
    const imm = binaryInstruction.slice(0, 12); // For I-type instructions
    const immB = binaryInstruction.slice(0, 1) + binaryInstruction.slice(24, 25) + binaryInstruction.slice(1, 7) + binaryInstruction.slice(20, 24); // For B-type instructions
    const immU = binaryInstruction.slice(0, 20); // For U-type instructions
    const immJ = binaryInstruction.slice(0, 1) + binaryInstruction.slice(12, 20) + binaryInstruction.slice(11, 12) + binaryInstruction.slice(1, 11); // For J-type instructions

    // Find the instruction in the JSON data using the opcode and funct3
    const instruction = RISCVInstructions.find((item) => item.opcode === opcode && item.funct3 === funct3 && item.funct7 === funct7);

    if (!instruction) {
        return ['Invalid instruction', binaryInstruction, hexInstruction];
    }

    let assemblyInstruction = '';

    // Check the instruction type and build the assembly string accordingly
    switch (instruction.type) {
        case 'R':
            assemblyInstruction = `${instruction.inst} x${rd}, x${rs1}, x${rs2}`;
            break;
        case 'I':
            assemblyInstruction = `${instruction.inst} x${rd}, x${rs1}, ${parseInt(imm, 2)}`;
            break;
        case 'S':
            assemblyInstruction = `${instruction.inst} x${rs2}, ${parseInt(imm, 2)}(x${rs1})`;
            break;
        case 'B':
            assemblyInstruction = `${instruction.inst} x${rs1}, x${rs2}, ${parseInt(immB, 2)}`;
            break;
        case 'U':
            assemblyInstruction = `${instruction.inst} x${rd}, ${parseInt(immU, 2)}`;
            break;
        case 'J':
            assemblyInstruction = `${instruction.inst} x${rd}, ${parseInt(immJ, 2)}`;
            break;
        default:
            return ['Invalid instruction type', binaryInstruction, hexInstruction];
    }

    return [assemblyInstruction, binaryInstruction, `0x${hex.toUpperCase()}`];
}

