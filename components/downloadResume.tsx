import React from 'react';
import { HiDownload } from 'react-icons/hi';

const GitHubResumeButton = () => {
  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/getResume');
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch PDF: ${response.status} ${response.statusText}\n${errorText}`);
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'madhav_rapelli_resume.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      if (error instanceof Error) {
        alert(`Failed to download resume. Please try again. Error: ${error.message}`);
      } else {
        alert('Failed to download resume. Please try again.');
      }
    }
  };

  return (
    <a
      className="group bg-gray-200 text-xs sm:text-xl
        border-black border-b-2 px-7 py-3 flex items-center
        gap-2 rounded-full outline-none hover:scale-105 active:scale-105
        cursor-pointer"
      onClick={handleDownload}
    >
      Resume
      <HiDownload
        className="group-hover:translate-y-0.5 transition"
      />
    </a>
  );
};

export default GitHubResumeButton;