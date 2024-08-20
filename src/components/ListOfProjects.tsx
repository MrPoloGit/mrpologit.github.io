"use client";

import React, { useState, useEffect } from 'react';

interface ListOfProjectsProps {
  onProjectSelect: (project: string) => void;
  height?: string; // Add a height prop
}

const ListOfProjects: React.FC<ListOfProjectsProps> = ({ onProjectSelect, height = '730px' }) => {
  const [selectedProject, setSelectedProject] = useState<string>('');

  const projects = [
    "RISCVConverter",
    "SpotifyPlayList2MP3"
  ];

  // Set the initial selected project to the first project in the list
  useEffect(() => {
    setSelectedProject(projects[0]);
    onProjectSelect(projects[0]);
  }, [onProjectSelect, projects]);
  

  const handleProjectClick = (project: string) => {
    setSelectedProject(project);
    onProjectSelect(project);
  };

  return (
    <div
      className="flex-[2] text-gray-400 p-4 max-w-sm overflow-y-auto space-y-4"
      style={{ height }} // Set the height dynamically based on the prop
    >
      {projects.map((project) => (
        <div
          key={project}
          onClick={() => handleProjectClick(project)}
          className={`relative flex justify-between p-2 rounded cursor-pointer transition-transform transform duration-200 ${
            selectedProject === project 
            ? 'scale-105 bg-gray-800 text-white' 
            : 'hover:scale-105 hover:bg-gray-700 hover:text-white'
          }`}
          style={{
            transition: 'transform 0.3s ease, background-color 0.3s ease, color 0.3s ease'
          }}
        >
          {project}
        </div>
      ))}
    </div>
  );
};

export default ListOfProjects;
