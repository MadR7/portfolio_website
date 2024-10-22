"use client"
import { SignIn } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

import React from 'react'

export default function Page() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/';
  const downloadResume = searchParams.get('downloadResume') || 'false';

  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <SignIn
      routing="path"
      path="/sign-in"
      forceRedirectUrl={`${redirect}?downloadResume=${downloadResume}`}
    />
    </div>
    </div>
  )
}
