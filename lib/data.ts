import personalwebsite from "@/public/personalwebsite.png"
import vexrobotics from "@/public/vexrobotics.png"
import scioly from "@/public/scienceolympiadrobot.png"
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
    title: "Personal Website",
    description:
      "This website displays information about me including my projects, skills and ways to contact me. This is a personal website that I created as a way to learn HTML, CSS, React, TypeScript, NextJS and Framer Motion. ",
    tags: ["NextJS", "React", "TailwindCSS", "FramerMotion", "TypeScript"],
    imageUrl: personalwebsite
    
  },
  {
    title: "VEX Robotics Program",
    description:
      "During High School, I competed in VEX Robotics Competition on team 1353N to build, program and operate Robots against other teams to do specific tasks such as shooting disks in baskets in rapid succession and maneuvring around the field autonomously. I utilized various Open Source Programs as well as my own functionalities within my program to make my team more competitive.",
    tags: ["C++", "Controls Engineering", "PID", "Odometry", "Autonomous Movement"],
    imageUrl: vexrobotics
  },
  {
    title: "Science Olympiad Robot Tour",
    description:
      "I worked in a team of 2 to build a robot completely from scratch by using CAD, 3d Printed Chassis, Arduino to program it to move in a specific arrangement at the Science Olympiad competition. To achieve this we used Servo Motors as wheels and we wrote a PID program so that the robot would move precisely in a certain path. ",
    tags: ["Arduino", "C++", "PID", "Autonomous Movement"],
    imageUrl: scioly
  },
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