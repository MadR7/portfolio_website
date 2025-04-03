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
  const {ref: skillsRef, inView: skillsInView} = useInView({
    threshold: 0.85
  });
  const {ref: contactRef, inView: contactInView} = useInView({
    threshold: 0.8
  });
  const {setActiveSection, lastClickTime} = useActiveSectionContext();

  useEffect(()=>{
    if (skillsInView && Date.now() - lastClickTime > 1000){
      setActiveSection("Skills")
    }
  }, [skillsInView, setActiveSection, lastClickTime]); 

  useEffect(()=>{
    if (contactInView){
      setActiveSection("Contact")
    }
  }, [contactInView, setActiveSection]);
  
  return (
    <div className="bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('/studio_ghibli_background_skills.png')" }}>
      <div className="w-full sm:pb-[20rem] pb-[10rem]"
      >
        <section
          id="skills"
          ref={skillsRef}
          style={{color:getSectionTextColor('textColor')}}
          className="max-w-[53rem] mx-auto px-4 text-center pt-20"
        >
          <SectionHeading>My Skills</SectionHeading>
          <ul 
            style={{color:getSectionTextColor('textColor2')}}
            className='flex flex-wrap justify-center gap-2 text-sm sm:text-lg'
          >
            {skillsData.map((skill, index) => (
              <motion.li 
                className='border bg-[#E2B742] border-[#0b1125]/[0.1] rounded-xl px-5 py-3 mb-4'
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

      <div className='flex flex-col'>
        <motion.section ref={contactRef} id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='px-4 sm:px-8 md:px-20 lg:px-40 pb-20 w-full max-w-8xl mx-auto scroll-mt-28'>
          <div className="flex flex-col md:flex-row md:justify-between md:space-x-8 lg:space-x-16">
            <div
              style={{color:getSectionTextColor("textColor")}}
              className="flex flex-col pt-5 mb-8 md:mb-0 md:w-1/2">
              <SectionHeading>Contact Me!</SectionHeading>
            </div>
            <div
              style={{color:getSectionTextColor("textColor")}}
              className="flex flex-col mb-8 md:mb-0 md:w-1/3">
              <p className="text-2xl md:text-3xl pb-3">Links</p>
              <a className="text-base md:text-lg underline" target='_blank' rel="noopener noreferrer" href="https://github.com/MadR7">Github</a>
              <a className="text-base md:text-lg underline" target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/madhav-rapelli-7a986a295/">Linkedin</a>
              <a className="text-base md:text-lg underline" target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/madhav_rapelli/">Instagram</a>
            </div>
            <div
              style={{color:getSectionTextColor("textColor")}}
              className="flex flex-col md:w-1/3">
              <p className="text-2xl md:text-3xl pb-3">Emails</p>
              <p className="text-base md:text-lg break-all">madhavrapelli@gmail.com(personal)</p>
              <p className="text-base md:text-lg break-all">madhav.rapelli@stonybrook.edu(academic)</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
