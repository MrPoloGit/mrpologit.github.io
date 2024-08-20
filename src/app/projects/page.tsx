"use client";

import React, { useState } from 'react';
import Navbar from '../../components/NavBar'; // Adjust the path if necessary
import ListOfProjects from '../../components/ListOfProjects';
import DisplayedProject from '../../components/DisplayedProject';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string>('DM Resharing');

  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      <Navbar />
      <div className="flex flex-1 justify-center items-start mt-8"> {/* Adjust the vertical alignment */}
        <div className="flex justify-between w-full max-w-6xl h-full"> {/* Adjust the container width */}
          {/* Left Side: List of Projects */}
          <ListOfProjects onProjectSelect={setSelectedProject} />

          {/* Right Side: Displayed Project */}
          <div className="w-2/3"> {/* Adjust the width of the DisplayedProject container */}
            <DisplayedProject project={selectedProject} />
          </div>
        </div>
      </div>
    </div>
  );
}
