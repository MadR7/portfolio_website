import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { skillsData  } from '@/lib/data'
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from '@/context/active-section-context';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/theme-context';

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
export default function Skills() {
  const { getSectionBackground, getSectionTextColor } = useTheme();
  const {ref, inView} = useInView(
    {
      threshold: 0.85
    }
  )
  const {setActiveSection, lastClickTime} = useActiveSectionContext();

  useEffect(()=>{
    if (inView && Date.now() - lastClickTime > 1000){
      setActiveSection("Skills")
    }
  }, [inView, setActiveSection, lastClickTime]); 
  
  return (
  <div className="w-full sm:pb-[20rem] pb-[10rem]"
  style={{ backgroundColor: getSectionBackground('skills') }}
  > {/* Custom padding of 30rem (480px) */}
      <section
        id="skills"
        ref={ref}
        style={{color:getSectionTextColor('textColor')}}
        className="max-w-[53rem] mx-auto px-4 text-center pt-20" // Added pt-20 for top padding
      >
        <SectionHeading>My Skills</SectionHeading>
        <ul 
        style={{color:getSectionTextColor('textColor2')}}
        className='flex flex-wrap justify-center gap-2 text-sm sm:text-lg'>
          {skillsData.map((skill, index) => (
            <motion.li 
              className='border border-[#0b1125]/[0.1] rounded-xl px-5 py-3 mb-4'
              style={{ backgroundColor: getSectionBackground('skill') }}
              key={index}
              variants={fadeInAnimationsVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </section>
    </div>
  )
  }
  
