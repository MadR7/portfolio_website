
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from "@/lib/data"
import Project from './project'
import { useActiveSectionContext } from '@/context/active-section-context'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '@/context/theme-context'
import Card from './card'

export default function Projects() {
  const { getSectionBackground , getSectionTextColor } = useTheme();

  const {ref, inView} = useInView(
    {
      threshold: 0.5
    }
  )
  const {setActiveSection, lastClickTime} = useActiveSectionContext();

  useEffect(()=>{
    if (inView && Date.now() - lastClickTime > 1000){
      setActiveSection("Projects")
    }
  }, [inView, setActiveSection, lastClickTime]);
  
  return (
    <div className='text-white relative min-h-screen w-full py-20 '
    style={{ backgroundColor: getSectionBackground('projects'),
      color: getSectionTextColor('textColor')
    }}
    >
      <section
        ref = {ref}
        className="max-w-5xl mx-auto px-4 mb-2 md:mb-40 scroll-mt-28" // Added mb-40 for additional margin at the bottom
        id="projects"
      >
        <div className="text-center mb-2">
          <SectionHeading>My Projects</SectionHeading>
        </div>
        <div className="">
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              {/* <Project {...project} /> */}
              <Card {...project} />
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  )
}
