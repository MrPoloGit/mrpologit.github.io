"use client";

import React from 'react';

interface RISCVInputProps {
  input: string;
  setInput: (value: string) => void;
}

export default function RISCVInput({ input, setInput }: RISCVInputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <input
      type="text"
      value={input}
      onChange={handleInputChange}
      className="w-[400px] h-10 bg-[#2a2a2a] text-white rounded-full px-4 
                 hover:bg-[#3a3a3a] focus:bg-[#3a3a3a] focus:outline-none focus:ring-2 focus:ring-white transition-all duration-150 font-mono"
      placeholder="Enter something..."
    />
  );
}
