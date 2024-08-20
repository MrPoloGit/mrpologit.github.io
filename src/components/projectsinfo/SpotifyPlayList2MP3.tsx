"use client";

import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Importing GitHub icon from react-icons

const SpotifyPlayList2MP3: React.FC = () => {
  const project = "SpotifyPlayList2MP3";
  const githubLink = "https://github.com/MrPoloGit/SpotifyPlayList2MP3";

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
        This is an old simple script I made and finally remade and uploaded, which allows you to download MP3 files for all songs in a given Spotify playlist using YouTube as the source, I made this before realizing spotify-dl exists. At least, I gained some experience working with APIs, and I plan to use Spotify's API in a future project.
        </p>
      </section>

      {/* Why Section */}
      <section className="mt-2">
        <h2 className="text-white text-lg font-mono">Why</h2>
        <p className="text-gray-300 text-base mt-1">
            I am lazy, don't like ads (I ain't paying for premium), and being able to listen to music offline including music that isn't on Spotify would be nice.
        </p>

      </section>

      {/* How Section */}
      <section className="mt-2">
        <h2 className="text-white text-lg font-mono">How</h2>
        <p className="text-gray-300 text-base mt-1">
        Using the Spotify API a user is able to retrieve a PlayList's songs with the playlist ID, once retrieved then yt-dlp is used to search for the corresponding song and then downloaded as a MP3 in a folder, within the mp3 folder, named the playlist and its ID. Users are also capable of passing multiple playlist IDs into the CLI to download multiple playlists in a single call of the script.  
        </p>
      </section>

      {/* Links Section */}
      <section className="mt-2">
        <h2 className="text-white text-lg font-mono">Links</h2>
        {githubLink && (
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline mt-2 inline-block"
          >
            View on GitHub
          </a>
        )}
      </section>
    </div>
  );
};

export default SpotifyPlayList2MP3;
