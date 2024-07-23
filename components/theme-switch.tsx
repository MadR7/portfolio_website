'use client';

import { useTheme } from "@/context/theme-context";
import { BsSun, BsMoon, BsMoonStarsFill } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const {getSectionBackground, getSectionTextColor} = useTheme()
  return (
    <button
      className="fixed bottom-5 sm:top-5 right-5 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-black border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
      style={{
        backgroundColor: getSectionBackground('header'),
        color: getSectionTextColor('textColor')
      }}
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoonStarsFill />}
    </button>
  );
}