import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/theme-context';

export default function Contact2() {
  const { getSectionBackground, getSectionTextColor } = useTheme();
  const {ref, inView} = useInView(
    {
      threshold: 0.8
    }
  )
  const {setActiveSection} = useActiveSectionContext();

  useEffect(()=>{
    if (inView){
      setActiveSection("Contact")
    }
  }, [inView, setActiveSection]);


  return (
    <div className='flex flex-col'
    style={{ backgroundColor: getSectionBackground('contact') }}>
    <motion.section ref={ref} id="contact"
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
                        <a className= "text-base md:text-lg underline" target='_blank' rel="noopener noreferrer" href="https://github.com/MadR7">Github</a>
                        <a className= "text-base md:text-lg underline" target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/madhav-rapelli-7a986a295/">Linkedin</a>
                        <a className= "text-base md:text-lg underline" target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/madhav_rapelli/">Instagram</a>
                </div>
                <div
                    style={{color:getSectionTextColor("textColor")}}
                    className="flex flex-col md:w-1/3">
                        <p className="text-2xl md:text-3xl pb-3">Emails</p>
                        <p className= "text-base md:text-lg break-all">madhavrapelli@gmail.com(personal)</p>
                        <p className= "text-base md:text-lg break-all">madhav.rapelli@stonybrook.edu(academic)</p>
                </div>
            </div>
    </motion.section>
</div>

)
}
