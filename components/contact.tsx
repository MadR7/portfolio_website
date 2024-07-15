import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { motion } from 'framer-motion';

export default function Contact() {
  const sendEmail = async (formData: FormData) =>{
    
  }

  const {ref, inView} = useInView(
    {
      threshold: 0.5
    }
  )
  const {setActiveSection} = useActiveSectionContext();

  useEffect(()=>{
    if (inView){
      setActiveSection("Contact")
    }
  }, [inView, setActiveSection]);
  return (
    <div className='bg-[#0b1125] pb-[30rem] flex flex-col items-center'>
      <motion.section ref = {ref} id= "contact" 
      initial = {{opacity: 0}}
      whileInView = {{
        opacity: 1
      }}
      transition = {{
        duration: 1
      }}
      className='text-white mb-20 sm:mb-28 w-[min(100%,38rem)] scroll-mt-28'>
        <div className = "flex flex-col items-center">
        <SectionHeading>Contact Me!</SectionHeading>
        </div>
        <p className="text-center -mt-5 text-gray-300
        ">
            You can contact me directly at {" "}
            <a className='underline' href='madhavrapelli@gmail.com'>
                madhavrapelli@gmail
            </a>{" "}
            or through this form.
        </p>

        <form className = "mt-10 text-black flex flex-col"
        action = {async (formData)=>{
          await sendEmail(formData)
        }}
        >
            <input 
            className = "h-14 rounded-lg border px-4  border-black"
            name = "sender"
            type="email"
            required
            maxLength={500}
            placeholder='Your Email'

            />
            <textarea className='h-52 my-3 rounded-lg border border-black p-4'
            name = "content"
            placeholder='Your Message'
            required
            maxLength={500}
            />
            <div className='flex flex-col items-center'>
            <button type = "submit"
            className='mt-3 group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-[#183059] text-white border border-[#0b1125] rounded-full outline-none transition-all hover:scale-125'
            >
                Submit <FaPaperPlane className = "text-xs opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition"/>
            </button>
            </div>
        </form>
      </motion.section>
    </div>
  )
}
