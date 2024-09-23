"use client";

import React from 'react';
import Link from 'next/link'; // Importing Link component from next/link
import { FaGithub } from 'react-icons/fa'; // Importing GitHub icon from react-icons

const RISCVConverter: React.FC = () => {
  const project = "RISCVConverter";
  const githubLink = "https://github.com/MrPoloGit/mrpologit.github.io/tree/main/src/components/RISCV";

  return (
    <div className="flex-[3] p-4 h-full">
      {/* Header with GitHub Icon */}
      <div className="flex items-center mb-4">
        <h1 className="text-white text-xl font-mono font-semibold">
          {project}
        </h1>
        {githubLink && (
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-4 text-gray-300 hover:text-white"
          >
            <FaGithub size={20} />
          </a>
        )}
      </div>

      {/* Description Section */}
      <section className="mt-2">
        <h2 className="text-white text-lg font-mono">Description</h2>
        <p className="text-gray-300 text-base mt-1">
          This project is designed to convert RISC-V assembly instructions into their binary and hexadecimal equivalents, and vice versa. It provides a tool for developers and students to better understand the encoding of RISC-V instructions.
        </p>
      </section>

      {/* Why Section */}
      <section className="mt-2">
        <h2 className="text-white text-lg font-mono">Why</h2>
        <p className="text-gray-300 text-base mt-1">
          The project aims to simplify the learning process for those studying computer architecture and RISC-V assembly. By providing a visual and interactive tool, it helps users quickly grasp the relationship between assembly code and its binary/hex representation.
        </p>
      </section>

      {/* How Section */}
      <section className="mt-2">
        <h2 className="text-white text-lg font-mono">How</h2>
        <p className="text-gray-300 text-base mt-1">
          The converter uses a set of predefined mappings between assembly instructions and their binary/hexadecimal formats. It parses user input and provides the equivalent code in different formats.
        </p>
      </section>

      {/* Links Section */}
      <section className="mt-2">
        <h2 className="text-white text-lg font-mono">Links</h2>
        <div className="flex flex-col space-y-2">
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline mt-2" // Added padding above the GitHub link
            >
              View on GitHub
            </a>
          )}
          <Link href="/projects/riscv" passHref className="text-green-500 hover:underline">
            Use Tool
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RISCVConverter;
