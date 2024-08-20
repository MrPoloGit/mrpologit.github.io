"use client";

import React, { useState } from 'react';
import RISCVInput from './RISCVInput';
import RISCVDropdown from './RISCVDropdown';
import RISCVConvertButton from './RISCVConvertButton';

interface RISCVInteractiveFormProps {
  setResults: (result: string[]) => void; // Expecting an array of strings now
}

export default function RISCVInteractiveForm({ setResults }: RISCVInteractiveFormProps) {
  const [input, setInput] = useState<string>(''); // Explicit type for state
  const [format, setFormat] = useState<string>('assembly'); // Explicit type for state

  return (
    <div className="w-full">
      <div className="flex items-center space-x-4">
        <RISCVInput input={input} setInput={setInput} />
        <RISCVDropdown format={format} setFormat={setFormat} />
      </div>
      <RISCVConvertButton input={input} format={format} setResults={setResults} />
    </div>
  );
}
