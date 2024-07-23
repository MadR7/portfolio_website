import React from 'react'
import { useTheme } from "@/context/theme-context";

export default function Footer() {
  const { getSectionBackground } = useTheme();

  return (
    <div className='bg-[#0b1125]'>
      <footer className="px-4 mb-8 text-center text-gray-200">
      <small className="mb-2 block text-xs">
        &copy; Madhav Rapelli. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
    </div>
  )
}
