import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className='bg-[#0b1125] pb-[30rem] flex flex-col items-center'>
      <section id= "contact" className='text-white mb-20 sm:mb-28 w-[min(100%,38rem)] scroll-mt-28'>
        <SectionHeading>Contact Me!</SectionHeading>
        <p>
            You can contact me directly at {" "}
            <a className='underline' href='madhavrapelli@gmail.com'>
                madhavrapelli@gmail
            </a>{" "}
            or through this form.
        </p>

        <form className = "mt-10 flex flex-col">
            <input 
            className = "h-14 rounded-lg border border-black"
            type="email" />
            <textarea className='h-52 my-3 rounded-lg border border-black p-4'/>
            <button type = "submit"
            className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-[#000000] text-white rounded-full outline-none transition-all'
            >
                Submit <FaPaperPlane className = "text-xs opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition"/>
            </button>
        </form>
      </section>
    </div>
  )
}
