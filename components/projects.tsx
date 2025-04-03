import React, { useEffect, useState } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from "@/lib/data"
import { useActiveSectionContext } from '@/context/active-section-context'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '@/context/theme-context'
import Card from './card'
import { motion } from 'framer-motion'

export default function Projects() {
  const { getSectionBackground, getSectionTextColor } = useTheme();
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

  const {ref, inView} = useInView({
    threshold: 0.5
  });
  
  const {setActiveSection, lastClickTime} = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - lastClickTime > 1000) {
      setActiveSection("Projects")
    }
  }, [inView, setActiveSection, lastClickTime]);
  
  return (
    <div 
      className='relative w-full pt-20 bg-no-repeat bg-cover bg-center pb-60 md:pt-28 md:pb-80'
      style={{ backgroundImage: "url('/studio_ghibli_background_projects.png')" }}
    >
      <motion.section
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28"
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <div style={{ color: getSectionTextColor('textColor') }}>
            <SectionHeading>My Projects</SectionHeading>
          </div>
          <p 
            className="mt-6 text-lg mx-auto max-w-2xl"
            style={{ color: getSectionTextColor('textColor2') }}
          >
            Here are some of my recent projects. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {displayedProjects.map((project, index) => (
            <Card key={index} {...project}  />
          ))}
        </div>

        {projectsData.length > 3 && (
          <div className="text-center relative z-10">
            <button
              onClick={() => setShowAll(!showAll)}
              style={{ 
                color: getSectionTextColor('textColor'),
                borderColor: getSectionTextColor('textColor2')
              }}
              className="px-8 py-4 rounded-full bg-white/10 border 
                       hover:bg-white/20 transition-all duration-300 backdrop-blur-sm
                       shadow-lg hover:shadow-xl text-lg"
            >
              {showAll ? 'Show Less' : 'Show More Projects'}
            </button>
          </div>
        )}
      </motion.section>
    </div>
  )
}
