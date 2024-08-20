"use client";

import React from 'react';

interface UnderDevelopmentProps {
  onClose: () => void;
}

const UnderDevelopment: React.FC<UnderDevelopmentProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white text-black p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Hello</h2>
        <p>This website is still under construction so things will be a little empty.</p>
        <button 
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UnderDevelopment;
