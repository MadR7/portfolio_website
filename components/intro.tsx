"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import pfp from "@/public/pfp.jpg"
import { useTheme } from '@/context/theme-context';
import { SignInButton} from '@clerk/nextjs';
export default function Intro() {
  const { getSectionBackground, getSectionTextColor } = useTheme();
  const arrowColor = getSectionBackground('arrowDown');
  const {ref, inView} = useInView(
    {
      threshold: 0.5
    }
  )
  const {setActiveSection} = useActiveSectionContext();

  useEffect(()=>{
    if (inView){
      setActiveSection("Home")
    }
  }, [inView, setActiveSection]);
 /* const [showButtons, setShowButtons] = useState(false);*/
  return (
    <div className='relative min-h-screen w-full items-center flex flex-col justify-start pt-40'
    style={{ backgroundColor: getSectionBackground('intro') }}>
    <section ref = {ref} className='relative z-10 mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]' id = "home">
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.3
          }}
        >
          <Image
            src={pfp}
            alt="Madhav Picture"
            width="192"
            height="192"
            quality={95}
            priority={true}
            className="rounded-full h-20 w-20 sm:h-48 sm:w-48 border-[0.05rem] border-[#2a303c] shadow-xl object-cover"
        />
        </motion.div>
        <motion.span className='absolute bottom-0 right-0 text-4xl'
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 125,
            delay: 0.1,
            duration: 0.3
          }}
        >
        </motion.span>
      </div>
      
      
      <motion.h1 className="mt-10 mb-2 sm:mb-10 px-4 text-2xl sm:text-4xl font-medium leading-[1.5]"
        style={{
          color: getSectionTextColor('intro')
        }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(30)
            .typeString("Hi! I'm <span class='font-bold'>Madhav Rapelli.</span>")
            .pauseFor(300)
            .callFunction(() => {
              /*setShowButtons(true);*/
            })
            .start();
        }}
      />
      </motion.h1>

   { /*  {showButtons && ( */}
  <motion.div 
    className="flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-lg font-medium"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <SignInButton>
    <button className="group bg-black text-xs sm:text-xl text-white px-7 py-3 flex items-center
        gap-2 rounded-full outline-none hover:scale-105 hover:bg-gray-950 active:scale-105
        ">
      <span>Email me!</span>
      <BsArrowRight
        className="opacity-70 group-hover:translate-x-2 transition"
      />
    </button>
    </SignInButton>
    <a className="group bg-gray-200 text-xs sm:text-xl
        border-black border-b-2  px-7 py-3 flex items-center
        gap-2 rounded-full outline-none hover:scale-105 active:scale-105
        " href='/resume.pdf' download>
      Resume
      <HiDownload
        className="group-hover:translate-y-0.5 transition"
      />
    </a>

    <a className="group bg-gray-200 p-4 border-black border-b-2 text-gray-700 flex items-center gap-2 rounded-full outline-none cursor-pointer hover:scale-125 hover:text-gray-950 active:scale-125"
    href="https://www.linkedin.com/in/madhav-rapelli-7a986a295/" target="_blank"
    >
      <BsLinkedin
        className="group-hover-translate-y-1 transition"
      />
    </a>

    <a className="group bg-gray-200 p-4 border-black border-b-2 text-gray-700 flex items-center gap-2 rounded-full outline-none cursor-pointer hover:scale-125 hover:text-gray-950 active:scale-125"
    href='https://www.github.com/MadR7' target='_blank'         
    >
      <FaGithubSquare />
    </a>
  </motion.div>
  <Link href="#about">
  <motion.div
      className="w-full flex justify-center mt-16"
      initial={{ opacity: 0, y: 0 }}
      animate={{ 
        opacity: 1, 
        y: [0, -10, 0] // This creates the bounce effect
      }}
      transition={{
        duration: 0.5,
        delay: 1.4,
        y: {
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path
          fill={arrowColor}
          d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"
        />
      </svg>
      
    </motion.div>
    </Link>
    <motion.p
    initial={{ opacity: 0, y: 0 }}
    animate={{ 
      opacity: 1,
    }}
    transition={{
      duration: 0.5,
      delay: 1.4,
    }
    }
    >
      <span className="text-xs italic">{"(Scroll Down)"}</span>
    </motion.p>
    </section>
    </div>
  );
}
