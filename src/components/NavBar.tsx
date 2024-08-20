"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-black p-4 text-white font-mono">
      <div className="flex justify-center">
        <div className="flex space-x-4">
          <div className="hover:bg-gray-700 rounded px-2">
            <Link
              href="/"
              className={`font-mono pb-1 ${
                pathname === '/' ? 'border-b-4 border-white' : ''
              } hover:border-b-4 hover:border-white`}
            >
              Home
            </Link>
          </div>
          <div className="hover:bg-gray-700 rounded px-2">
            <Link
              href="/projects"
              className={`font-mono pb-1 ${
                pathname === '/projects' ? 'border-b-4 border-white' : ''
              } hover:border-b-4 hover:border-white`}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
