"use client"

import React, { useEffect } from 'react'
import { useTheme } from '@/context/theme-context';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/section-heading';
import { sendEmail } from '@/actions/sendEmail';
import toast from 'react-hot-toast';
import EmailSubmit from '@/components/emailSubmit';
import Link from 'next/link';
import { MdHome } from "react-icons/md";
export default function Email() {
  const { getSectionBackground, getSectionTextColor } = useTheme();
  return (
    <div
    style={{backgroundColor: getSectionBackground("about")}}
    className='flex flex-col items-center min-h-screen'
    >
    <section
      className='text-white pt-10 pb-10 h-full w-[min(100%,38rem)] scroll-mt-28'>
        <Link href= "/" >
        <button
        className="fixed bottom-5 sm:top-5 left-5 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-black border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
        style={{
          backgroundColor: getSectionBackground('header'),
          color: getSectionTextColor('textColor')
        }}>
          <MdHome/>
        </button>
        </Link>
        <div 
        style={{color:getSectionTextColor("textColor")}}
        className = "flex flex-col items-center">
        <SectionHeading>Email Me!</SectionHeading>
        </div>
        <p 
        style={{color:getSectionTextColor("textColor2")}}
        className="text-center -mt-5 text-gray-300
        ">
            You can contact me directly at {" "}
            <a className='underline' href='madhavrapelli@gmail.com'>
                madhavrapelli@gmail
            </a>{" "}
            or through this form.
        </p>
        
        <form className = "mt-10 text-black flex flex-col"
        action = {async (formData)=>{
          const {data, error} = await sendEmail(formData)
          if (error){
            toast.error(error)
            return
          }
          toast.success("Message sent successfully!")
        }}
        >
            <input 
            className = "h-14 rounded-lg border px-4  border-black"
            name = "title"
            required
            maxLength={500}
            placeholder='Title'

            />
            <textarea className='h-52 my-3 rounded-lg border border-black p-4'
            name = "content"
            placeholder='Content'
            required
            maxLength={500}
            />
            <EmailSubmit />
        </form>
      </section>

    </div>
  )
}
