"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavBar'; // Adjust the path if necessary
import Avatar from '../../public/LinkedInProfile.jpeg'; // Importing the avatar image
import UnderDevelopment from '../components/UnderDevelopment'; // Import the UnderDevelopment component
import Image from 'next/image';

const Home: React.FC = () => {
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
      <div className="flex flex-col items-center mt-8 w-full h-auto p-8">
        <div className="flex items-center space-x-4">
          <Image 
            src={Avatar} 
            alt="Your Name" 
            width={128} 
            height={128} 
            className="rounded-full object-cover" 
          />
          <div className="flex flex-col">
            <h1 className="text-white text-2xl font-mono">Hello I&apos;m Marco Alexander Frank</h1>
            <p className="text-gray-300 text-center mt-2 max-w-xl">
              I am a 4th year double major in Computer Engineering and Applied Physics at UCSC. I like learning and building new things.
            </p>
          </div>
        </div>
        <div className="mt-8 w-full flex flex-col items-center">
          <h2 className="text-white text-xl font-mono mb-4">Links</h2>
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/marcoafrank/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline font-mono"
            >
              LinkedIn
            </a>
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
};

export default Home;
