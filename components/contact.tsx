import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import EmailSubmit from './emailSubmit';
import toast from 'react-hot-toast';
import { useTheme } from '@/context/theme-context';

export default function Contact() {
  const { getSectionBackground, getSectionTextColor } = useTheme();
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
    <div className='flex flex-col items-center'
    style={{ backgroundColor: getSectionBackground('contact') }}>
      <motion.section ref = {ref} id= "contact" 
      initial = {{opacity: 0}}
      whileInView = {{
        opacity: 1
      }}
      transition = {{
        duration: 1
      }}
      className='text-white mb-20 sm:mb-28 w-[min(100%,38rem)] scroll-mt-28'>
        <div 
        style={{color:getSectionTextColor("textColor")}}
        className = "flex flex-col items-center">
        <SectionHeading>Contact Me!</SectionHeading>
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
            <EmailSubmit />
        </form>
      </motion.section>
    </div>
  )
}
