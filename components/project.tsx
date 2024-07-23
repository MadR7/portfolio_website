"use client"

import {useRef} from "react"
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";


// hooks/useMediaQuery.ts
import { useState, useEffect } from 'react';
import { useTheme } from "@/context/theme-context";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}


type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const {getSectionBackground, getSectionTextColor} = useTheme()
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isMobile ? ["0 1", "0.3 1"] : ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  return (
    <motion.div
    ref={ref}
    style = {{
        scale: scaleProgress,
        opacity: opacityProgress
    }}
    className = ""
    >
    <section 
    style={{
      backgroundColor: getSectionBackground('skills'),
    }}
    className='group relative bg-[#183059] rounded-lg shadow-lg overflow-hidden hover:bg-[#0b1125] transition mx-auto max-w-5xl'> {/* Added mx-auto and max-w-3xl */}
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 p-8'>
          <h3 
          style={{color: getSectionTextColor('textColor')}}
          className='text-xl sm:text-2xl font-semibold'>{title}</h3>
          <p 
          style={{color:getSectionTextColor('textColor2')}}
          className="mt-4 text-lg sm:text-xl">{description}</p>
          <ul className='flex flex-wrap mt-4 gap-2'>
            {tags.map((tag, index) => (
              <li
                className='bg-gray-200 text-gray-950 px-3 py-1 text-sm rounded-full'
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className='md:w-1/2 relative'> {/* Changed to relative */}
          <Image 
            className="absolute top-4 sm:top-8 -right-20 sm:-right-40 w-[18rem] sm:w-[28.25rem] rounded-t-lg shadow-2xl transition 
                         group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:rotate-2"
            src={imageUrl} 
            alt={`Project: ${title}`} 
            width={500}  // Add a width
            height={300} // Add a height
          />
        </div>
      </div>
    </section>
    </motion.div>
  );
}
