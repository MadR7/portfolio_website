
import React from 'react'
import { useTheme } from '@/context/theme-context';
export default function Waves4() {
  const { getSectionBackground } = useTheme();
  const waveColor = getSectionBackground('contact');

  return (
    <div className='z-5 relative'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0" aria-hidden="true">
            <path fill={waveColor} fillOpacity="" d="M0,96L24,112C48,128,96,160,144,192C192,224,240,256,288,229.3C336,203,384,117,432,90.7C480,64,528,96,576,117.3C624,139,672,149,720,176C768,203,816,245,864,229.3C912,213,960,139,1008,117.3C1056,96,1104,128,1152,165.3C1200,203,1248,245,1296,234.7C1344,224,1392,160,1416,128L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
          </svg>
      </div>
  )
}
