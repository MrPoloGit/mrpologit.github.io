"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavBar'; // Adjust the path if necessary
import Avatar from '../../public/LinkedInProfile.jpeg'; // Importing the avatar image
import UnderDevelopment from '../components/UnderDevelopment'; // Import the UnderDevelopment component

interface HomeProps {
  width?: string;
  height?: string;
  padding?: string;
}

export default function Home({ width = 'w-full', height = 'h-auto', padding = 'p-8' }: HomeProps) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      {showPopup && <UnderDevelopment onClose={handleClosePopup} />}
      <div className={`flex flex-col items-center mt-8 ${width} ${height} ${padding}`}>
        <div className="flex items-center space-x-4">
          {/* Circle Picture */}
          <img 
            src={Avatar.src} 
            alt="Your Name" 
            className="w-32 h-32 rounded-full object-cover" 
          />

          <div className="flex flex-col">
            {/* Name */}
            <h1 className="text-white text-2xl font-mono">Hello I'm Marco Alexander Frank</h1>

            {/* Description */}
            <p className="text-gray-300 text-center mt-2 max-w-xl">
              I am a 4th year double major in Computer Engineering and Applied Physics at UCSC. I like learning and building new things.
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="mt-8 w-full flex flex-col items-center">
          <h2 className="text-white text-xl font-mono mb-4">Links</h2>
          <div className="flex space-x-4">
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/marcoafrank/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline font-mono"
            >
              LinkedIn
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/MrPoloGit" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:underline font-mono"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
