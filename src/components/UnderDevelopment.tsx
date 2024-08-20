"use client";

import React, { useState } from 'react';

const UnderDevelopment: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-red-600 text-white p-6 rounded-lg shadow-lg max-w-sm text-center">
        <p className="mb-4">Hello, this website is still under construction, so things will be a little empty.</p>
        <button 
          onClick={closePopup}
          className="bg-white text-red-600 px-4 py-2 rounded hover:bg-gray-100"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UnderDevelopment;
