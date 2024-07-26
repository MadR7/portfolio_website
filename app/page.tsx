"use client"
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import Waves1 from '@/components/waves1';
import Waves2 from '@/components/waves2';
import Waves3 from '@/components/waves3';
import Skills from '@/components/skills';
import Waves4 from '@/components/waves4';
import Contact from '@/components/contact';
import Contact2 from '@/components/contact2';
import Header from '@/components/header';

export default function Home() {
  return (
    <>
    <ParallaxProvider>
      <Parallax speed={-25}>
      <Header />
      <Intro />
      </Parallax>
      <Parallax>
      <Waves1 />
      <About />
      <Waves2 />
      <Projects />
      <Waves3 />
      <Skills />
      <Waves4 />
{/*      <Contact /> */}
      <Contact2 />
      </Parallax>
    </ParallaxProvider>
    </>
  )
}
