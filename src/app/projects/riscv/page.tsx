"use client";

import React, { useState } from 'react';
import RISCVInteractiveForm from '../../../components/RISCV/RISCVInteractiveForm';
import RISCVResults from '../../../components/RISCV/RISCVResults';

export default function RISCV() {
  const [assembly, setAssembly] = useState<string>(''); 
  const [binary, setBinary] = useState<string>(''); 
  const [hexadecimal, setHexadecimal] = useState<string>(''); 

  const setResults = (result: string[]) => { // Explicitly type the parameter as an array of strings
    setAssembly(result[0]);
    setBinary(result[1]);
    setHexadecimal(result[2]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0a0a0a] text-[#cfcfcf]">
        <div className="flex flex-col items-start p-6 bg-[#1a1a1a] rounded-2xl shadow-2xl space-y-4 w-[600px]">
            <RISCVInteractiveForm setResults={setResults} />
            <RISCVResults assembly={assembly} binary={binary} hexadecimal={hexadecimal} />
        </div>
    </div>
  );
}
