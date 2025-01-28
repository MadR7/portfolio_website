import personalwebsite from "@/public/personalwebsite.png"
import vexrobotics from "@/public/vexrobotics.png"
import scioly from "@/public/scienceolympiadrobot.png"
import askthebot from "@/public/askthebot.png"
import docsage from "@/public/docsage.png"
import nexus from "@/public/nexus.png"
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  /*
  {
    name: "Experience",
    hash: "#experience",
  },
  */
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const projectsData = [
  {
    title: "Nexus (in progress)",
    description: "A platform for students from Stony Brook University to find professors and their research based on the student's interests. Currently we have over 250 professors on our website",
    tags: ["NextJS", "React", "TailwindCSS", "PostgreSQL", "Supabase"],
    imageUrl: nexus,
    backgroundColor: "linear-gradient(135deg, #183568 0%, #0b1125 100%)"  // Keeping this dark blue
  },
  {
    title: "DocSage",
    description: "This web app can take in a PDF under 10mb and then store it an AWS S3 Bucket. Then later the PDF is broken into chunks and stored in a vector database(PineconeDB). The user can later ask a chatbot powered by OpenAI any question regarding the PDF and it will be able to answer it",
    tags: ["NextJS", "React", "TailwindCSS", "TypeScript", "PineconeDB", "AWS S3", "RAG"],
    imageUrl: docsage,
    backgroundColor: "linear-gradient(135deg, #183059 0%, #0b1125 100%)"  // Keeping this dark blue
  },
  {
    title: "Ask The Bot",
    description: "This web app can take in any article's URL and then understand it so the user can ask any questions they have about the article. This was made possible because of Upstash's free services. This uses Meta's LLAMA 3 8b LLM to understand the article and answer questions.",
    tags: ["NextJS", "React", "TailwindCSS", "TypeScript", "LLMs", "Upstash", "ChatApp"],
    imageUrl: askthebot,
    backgroundColor: "linear-gradient(135deg, #c4955a 0%, #a67c3b 100%)"  // Darker gold
  },
  {
    title: "VEX Robotics Program",
    description: "During High School, I competed in VEX Robotics Competition on team 1353N to build, program and operate Robots against other teams to do specific tasks such as shooting disks in baskets in rapid succession and maneuvring around the field autonomously. I utilized various Open Source Programs as well as my own functionalities within my program to make my team more competitive. We were top 0.05% at the 2024 VEX Robotics Worlds Championship",
    tags: ["C++", "Controls Engineering", "PID", "Odometry", "Autonomous Movement"],
    imageUrl: vexrobotics,
    backgroundColor: "linear-gradient(135deg, #12274a 0%, #0f1c42 100%)"  // Keeping this dark blue
  },
  {
    title: "Science Olympiad Robot Tour",
    description: "I worked in a team of 2 to build a robot completely from scratch by using CAD, 3d Printed Chassis, Arduino to program it to move in a specific arrangement at the Science Olympiad competition. To achieve this we used Servo Motors as wheels and we wrote a PID program so that the robot would move precisely in a certain path.",
    tags: ["Arduino", "C++", "PID", "Autonomous Movement"],
    imageUrl: scioly,
    backgroundColor: "linear-gradient(135deg, #b89d65 0%, #8f7544 100%)"  // Darker warm gold
  },
  // {
  //   title: "Personal Website",
  //   description: "This website displays information about me including my projects, skills and ways to contact me. This is a personal website that I created as a way to learn HTML, CSS, React, TypeScript, NextJS and Framer Motion.",
  //   tags: ["NextJS", "React", "TailwindCSS", "FramerMotion", "TypeScript"],
  //   imageUrl: personalwebsite,
  //   backgroundColor: "linear-gradient(135deg, #183568 0%, #0b1125 100%)"  // Keeping this dark blue
  // },
] as const;
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Python",
  "Framer Motion",
  "C++",
  "Arduino",
  "Controls Engineering",
  "PID",
  "Odometry",
  "Robotics Autonomous Movement",
] as const;