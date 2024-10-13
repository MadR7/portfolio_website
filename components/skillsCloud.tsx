import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { skillsData  } from '@/lib/data'
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from '@/context/active-section-context';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/theme-context';
import IconCloud from './ui/icon-cloud';

const fadeInAnimationsVariants = {
  initial:{
    opacity: 0, 
    y: 100
  }, 
  animate: (index: number)=>({
    opacity: 1, 
    y: 0,
    transition: { delay: 0.05 * index }
  })
}

export function getSkillsList(){
  return [
    "typescript",
    "css3",
    "javascript",
    "react",
    "nextdotjs",
    "node-dot-js",
    "github",
    "git",
    "python",
    "cplusplus",
    "arduino",
    "tailwindcss",
    "archlinux",
    "drizzle",
  ];
}
export default function SkillsCloud() {
  const { getSectionBackground, getSectionTextColor } = useTheme();
  
  
  return (
  <div className="w-full sm:pb-[20rem] pb-[10rem]"
  style={{ backgroundColor: getSectionBackground('skills') }}
  > 
      <section
        id="skills"
        style={{color:getSectionTextColor('textColor')}}
        className="max-w-[53rem] mx-auto px-4 text-center pt-20" // Added pt-20 for top padding
      >
        <SectionHeading>My Skills</SectionHeading>
        <IconCloud iconSlugs={getSkillsList()}/>        
      </section>
    </div>
  )
  }
  
