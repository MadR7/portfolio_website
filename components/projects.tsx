
import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from "@/lib/data"
import Project from './project'

export default function Projects() {
  return (
    <div className='bg-[#0f1c42] text-white relative min-h-screen w-full py-20'>
      <section
        className="max-w-5xl mx-auto px-4" // Changed from max-w-6xl to max-w-5xl
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
