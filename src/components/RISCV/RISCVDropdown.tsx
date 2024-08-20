"use client";

import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RISCVDropdownProps {
  format: string;
  setFormat: (value: string) => void;
}

export default function RISCVDropdown({ format, setFormat }: RISCVDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectChange = (value: string) => {
    setFormat(value);
    setIsOpen(false); // Close the dropdown when an option is selected
  };

  return (
    <Select onValueChange={handleSelectChange} defaultValue="assembly">
      <SelectTrigger className="w-[180px] bg-[#2a2a2a] text-white rounded-full px-4 py-2 focus:outline-none focus:ring-0 font-mono">
        <SelectValue placeholder="Select a format" />
      </SelectTrigger>
      <SelectContent className="bg-[#1a1a1a] text-white rounded-md font-mono">
        <SelectGroup>
          <SelectItem value="assembly" className="hover:bg-[#333] px-6 py-2 rounded-md">Assembly</SelectItem>
          <SelectItem value="binary" className="hover:bg-[#333] px-6 py-2 rounded-md">Binary</SelectItem>
          <SelectItem value="hexadecimal" className="hover:bg-[#333] px-6 py-2 rounded-md">Hexadecimal</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
