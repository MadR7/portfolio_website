import React, { useState } from 'react';
import { HiDownload } from 'react-icons/hi';

const GitHubResumeButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/getLatestResume', {
        method: 'POST', // Change this to POST
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'Madhav_Rapelli_resume.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Failed to download resume. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      className={`group bg-gray-200 text-xs sm:text-xl
        border-black border-b-2 px-7 py-3 flex items-center
        gap-2 rounded-full outline-none hover:scale-105 active:scale-105
        cursor-pointer ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={handleDownload}
      disabled={isLoading}
    >
      {isLoading ? 'Downloading....' : 'Resume'}
      {isLoading? "": <HiDownload className="group-hover:translate-y-0.5 transition" />}
    </button>
  );
};

export default GitHubResumeButton;