"use client";

import React, { useState, useEffect } from 'react';
import SpotifyPlayList2MP3 from './projectsinfo/SpotifyPlayList2MP3';
import RISCVConverter from './projectsinfo/RISCVConverter';

interface DisplayedProjectProps {
  project: string;
  githubLink?: string;
}

const DisplayedProject: React.FC<DisplayedProjectProps> = ({ project, githubLink }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Displaying project:', project); // Debug log
    // Simulate loading time with a timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, [project]);

  if (loading) {
    return (
      <div className="flex-[3] p-4 h-full flex justify-center items-center">
        <h1 className="text-white text-2xl font-mono">Loading...</h1>
      </div>
    );
  }

  if (project === "SpotifyPlayList2MP3") {
    return <SpotifyPlayList2MP3 />;
  }

  if (project === "RISCVConverter") {
    return <RISCVConverter />;
  }

  return (
    <div className="flex-[3] p-4 h-full flex justify-center items-center">
        <h1 className="text-white text-2xl font-mono">Project not found</h1>
    </div>
  );
};

export default DisplayedProject;
