import React, { useCallback, useEffect, useState } from 'react';
import { HiDownload } from 'react-icons/hi';
import { useAuth } from '@clerk/nextjs';
import { useRouter, useSearchParams } from 'next/navigation';
const ResumeButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {isSignedIn} = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleDownload = useCallback(async (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    setIsLoading(true);

    if (!isSignedIn) {
      router.push('/sign-in?redirect=/&downloadResume=true');
      return;
    }

    try {
      const response = await fetch('/api/getLatestResume', {
        method: 'POST',
      });
      if (response.status === 401) {
        router.push('/sign-in?redirect=/&downloadResume=true');
        return;
      }
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
  }, [isSignedIn, router]);

  useEffect(() => {
    const downloadResume = searchParams.get('downloadResume');
    if (isSignedIn && downloadResume === 'true') {
      handleDownload();
    }
  }, [isSignedIn, searchParams, handleDownload]);

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

export default ResumeButton;