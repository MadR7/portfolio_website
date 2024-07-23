import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { skillsData  } from '@/lib/data'
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from '@/context/active-section-context';
import { motion } from 'framer-motion';

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
  const {ref, inView} = useInView(
    {
      threshold: 0.85
    }
  )
  const {setActiveSection} = useActiveSectionContext();

  useEffect(()=>{
    if (inView){
      setActiveSection("Skills")
    }
  }, [inView, setActiveSection]); 
  
  return (
  <div className="bg-[#183059] w-full sm:pb-[20rem] pb-[10rem]"> {/* Custom padding of 30rem (480px) */}
      <section
        id="skills"
        ref={ref}
        className="max-w-[53rem] mx-auto px-4 text-white text-center pt-20" // Added pt-20 for top padding
      >
        <SectionHeading>My Skills</SectionHeading>
        <ul className='flex flex-wrap justify-center gap-2 text-sm sm:text-lg text-gray-200'>
          {skillsData.map((skill, index) => (
            <motion.li 
              className='bg-[#0f1c42] border border-[#0b1125]/[0.1] rounded-xl px-5 py-3 mb-4'
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
  
