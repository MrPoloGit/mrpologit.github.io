import React from 'react';
import { FaRegCopy } from 'react-icons/fa'; // Import an icon from react-icons (or any other icon library)

interface RISCVResultsProps {
  assembly: string;
  binary: string;
  hexadecimal: string;
}

const RISCVResults: React.FC<RISCVResultsProps> = ({ assembly, binary, hexadecimal }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard!`); // Optional: Display an alert or notification
  };

  return (
    <>
      <div className="flex items-center mb-4 w-full font-mono text-white">
        <label className="font-bold mr-2">Assembly = </label>
        <span className="flex-1 bg-[#333] p-3 rounded-full w-[300px] h-[30px] flex items-center justify-between">
          {assembly}
          {assembly && (
            <button 
              onClick={() => copyToClipboard(assembly)} 
              className="ml-2 text-white hover:bg-[#555] p-1 rounded-full transition-colors duration-150"
            >
              <FaRegCopy />
            </button>
          )}
        </span>
      </div>
      <div className="flex items-center mb-4 w-full font-mono text-white">
        <label className="font-bold mr-2">Binary = </label>
        <span className="flex-1 bg-[#333] p-3 rounded-full w-[300px] h-[30px] flex items-center justify-between">
          {binary}
          {binary && (
            <button 
              onClick={() => copyToClipboard(binary)} 
              className="ml-2 text-white hover:bg-[#555] p-1 rounded-full transition-colors duration-150"
            >
              <FaRegCopy />
            </button>
          )}
        </span>
      </div>
      <div className="flex items-center mb-4 w-full font-mono text-white">
        <label className="font-bold mr-2">Hexadecimal = </label>
        <span className="flex-1 bg-[#333] p-3 rounded-full w-[300px] h-[30px] flex items-center justify-between">
          {hexadecimal}
          {hexadecimal && (
            <button 
              onClick={() => copyToClipboard(hexadecimal)} 
              className="ml-2 text-white hover:bg-[#555] p-1 rounded-full transition-colors duration-150"
            >
              <FaRegCopy />
            </button>
          )}
        </span>
      </div>
    </>
  );
};

export default RISCVResults;
