
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from "@/lib/data"
import Project from './project'
import { useActiveSectionContext } from '@/context/active-section-context'
import { useInView } from 'react-intersection-observer'

export default function Projects() {
  const {ref, inView} = useInView(
    {
      threshold: 0.5
    }
  )
  const {setActiveSection} = useActiveSectionContext();

  useEffect(()=>{
    if (inView){
      setActiveSection("Projects")
    }
  }, [inView, setActiveSection]);
  
  return (
    <div className='bg-[#0f1c42] text-white relative min-h-screen w-full py-20 sm:pb-72'> {/* Added pb-96 for large bottom padding */}
      <section
        ref = {ref}
        className="max-w-5xl mx-auto px-4 mb-40 scroll-mt-28" // Added mb-40 for additional margin at the bottom
        id="projects"
      >
        <div className="text-center mb-36">
          <SectionHeading>My Projects</SectionHeading>
        </div>
        <div className="space-y-20">
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  )
}
