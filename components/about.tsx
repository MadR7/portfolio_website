/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";

export default function About() {
  const { getSectionBackground, getSectionTextColor } = useTheme();
  const {ref, inView} = useInView(
    {
      threshold: 0.75
    }
  )
  const {setActiveSection, lastClickTime} = useActiveSectionContext();

  useEffect(()=>{
    if (inView && Date.now() - lastClickTime > 1000){
      setActiveSection("About")
    }
  }, [inView, setActiveSection, lastClickTime]);
  
  return (
    <div
  className="relative min-h-screen w-full items-center bg-no-repeat bg-cover bg-center flex flex-col px-4 py-12 sm:px-6 md:px-8 pb-20"
  style={{ backgroundImage: "url('/studio_ghibli_background_about.png')" }}
>
      <section
      ref = {ref}
      className=" mt-20 max-w-[45rem] text-lg sm:text-xl text-center sm:leading-10 scroll-mt-28"
      style={{
      color: getSectionTextColor('textColor'),
    }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I am an undergraduate student at 
        <span className="font-bold"> Stony Brook University </span>
        studying
        <span className="font-bold"> Computer Science </span>
        and
        <span className="font-bold"> Applied Math & Statistics.  </span>
        I'm passionate about <span className='font-bold'>Robotics</span> and <span className='font-bold'>Machine Learning</span>.
        I love finding intersections between different fields of life and building projects around that. 
      </p>

      <p className= "mb-3">
        Now, I'm exploring Web development with 
        <span className="font-bold"> React.js </span>
        and
        <span className="font-bold"> Next.js </span>
        and
        <span className="font-bold"> Tailwind CSS </span>   
        with animations from 
        <span className="font-bold"> Framer Motion </span>
        as well as 
        <span className="font-bold"> Machine Learning </span> and 
        <span className="font-bold"> AI </span>
        projects.
      </p>

      <p>
        In my free time, I mentor a High School VEX Robotics team competing in Southern New York.
      </p>
    </section>
    </div>
  );
  
}