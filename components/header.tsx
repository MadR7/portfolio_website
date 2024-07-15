"use client";

import React from 'react';
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from 'next/link';
import clsx from 'clsx';
import { ActiveSectionContext, useActiveSectionContext } from '@/context/active-section-context';

export default function Header() {
  const {activeSection, setActiveSection, lastClickTimeSet} = useActiveSectionContext();
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-black border-opacity-40 bg-[#12274a] bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-5 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -400, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-white sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link, index) => (
            <motion.li
              className="relative h-3/4 flex items-center justify-center "
              key={link.hash}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <Link className={clsx("flex w-full items-center justify-center px-5 py-2 hover:text-gray-950 transition",{
                "text-gray-500": activeSection === link.name, 
              }
              )}
              href={link.hash}
              onClick={()=>{
                lastClickTimeSet(Date.now())
                setActiveSection(link.name)}}
              >
                {link.name}
                {
                  activeSection === link.name && (
                    <motion.span className = "bg-[#183568] rounded-full absolute inset-0 -z-10"
                      layoutId='activeSection'
                      transition = {{
                        type: "spring",
                        stiffness: 380,
                        damping: 30
                      }}
                    
                    >
                    </motion.span>
                  )
                }
                
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
