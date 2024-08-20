"use client";

import React from 'react';
import { inputtedAssembly, inputtedBinary, inputtedHexadecimal } from '../../utils/RISCVConverter.js';

interface RISCVConvertButtonProps {
  input: string;
  format: string;
  setResults: (result: string[]) => void; // Expecting an array of strings
}

export default function RISCVConvertButton({ input, format, setResults }: RISCVConvertButtonProps) {
  const handleClick = () => {
    let result: string[];

    switch (format) {
      case 'assembly':
        result = inputtedAssembly(input);
        break;
      case 'binary':
        result = inputtedBinary(input);
        break;
      case 'hexadecimal':
        result = inputtedHexadecimal(input);
        break;
      default:
        result = ['Invalid input', '', ''];
    }

    setResults(result);
    console.log('Convert button clicked!', result);
  };

  return (
    <div className="flex justify-center w-full">
      <button
        onClick={handleClick}
        className="px-6 py-2 bg-[#3a3a3a] text-white rounded-full focus:outline-none mt-4 w-[200px] 
                   hover:bg-[#4a4a4a] active:bg-[#5a5a5a] active:scale-95 active:ring-2 active:ring-white transition-all duration-150 font-mono"
      >
        Convert
      </button>
    </div>
  );
}
