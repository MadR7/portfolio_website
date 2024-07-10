"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

export default function Intro() {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <section className='relative z-10 mb-28 max-w-[50rem] text-center sm:mb-0'>
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
            src="https://scontent-lga3-2.cdninstagram.com/v/t51.2885-19/448494791_455174687222568_2603366267414290324_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=100&_nc_ohc=BTWR-PfzgRsQ7kNvgEM5NFO&gid=e01be2d078e649938f8b253ee0dc13d2&edm=APHcPcMBAAAA&ccb=7-5&oh=00_AYAplpFItHJ7fviiBbALcTSnN74SgE5_1jtLa9p3lzx_lg&oe=6691307D&_nc_sid=bef7bc"
            alt="Madhav Picture"
            width="192"
            height="192"
            quality={95}
            priority={true}
            className="rounded-full h-32 w-32 border-[0.05rem] border-[#2a303c] shadow-xl object-cover"
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
      
      <motion.div className="text-white mt-10 mb-10 px-4 text-xl font-medium leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(20)
            .typeString("Hi! I'm <span class='font-bold'>Madhav Rapelli.</span>")
            .pauseFor(1000)
            .changeDelay(10)
            .typeString(" I'm a student at <span class='font-bold'>Stony Brook University</span>")
            .changeDelay(10)
            .typeString(" studying <span class='font-bold'>Computer Science</span> and <span class='font-bold'>Applied Math and Statistics</span>.")
            .changeDelay(5)
            .typeString(" I'm passionate about <span class='font-bold'>Robotics</span> and <span class='font-bold'>Machine Learning</span>.")
            .pauseFor(300)
            .callFunction(() => {
              setShowButtons(true);
            })
            .start();
        }}
      />
      </motion.div>

      {showButtons && (
  <motion.div 
    className="flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-lg font-medium"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Link href="#contact" className="group bg-black text-white px-7 py-3 flex items-center
        gap-2 rounded-full outline-none hover:scale-105 hover:bg-gray-950 active:scale-105
        ">
      <span>Contact me!</span>
      <BsArrowRight
        className="opacity-70 group-hover:translate-x-2 transition"
      />
    </Link>

    <a className="group bg-gray-200
        border-black  px-7 py-3 flex items-center
        gap-2 rounded-full outline-none hover:scale-105 active:scale-105
        ">
      Resume
      <HiDownload
        className="group-hover:translate-y-0.5 transition"
      />
    </a>

    <a className="group bg-gray-200 p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none hover:scale-125 active:scale-125">
      <BsLinkedin
        className="group-hover-translate-y-1 transition"
      />
    </a>

    <a className="group bg-gray-200 p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none hover:scale-125 active:scale-125">
      <FaGithubSquare />
    </a>
  </motion.div>
)}
    </section>
  );
}
