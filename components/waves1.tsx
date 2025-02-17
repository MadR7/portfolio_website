"use client"

import { motion } from 'framer-motion'
import React from 'react'
import { useTheme } from '@/context/theme-context';

export default function Waves1() {
  const { getSectionBackground } = useTheme();
  const waveColor = getSectionBackground('about');
  return (
    <div className='z-5 relative'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300" className="absolute bottom-0" aria-hidden="true">
            <path fill={waveColor} fillOpacity="" d="M0,128L48,160C96,192,192,256,288,245.3C384,235,480,149,576,144C672,139,768,213,864,250.7C960,288,1056,288,1152,240C1248,192,1344,96,1392,48L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <motion.svg 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                duration: 0.4,
                delay: 1.2,
                }}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 260" className="absolute bottom-0" aria-hidden="true">
                <path fill = {waveColor} fillOpacity="0.5" d="M0,320L12.6,304C25.3,288,51,256,76,234.7C101.1,213,126,203,152,218.7C176.8,235,202,277,227,282.7C252.6,288,278,256,303,245.3C328.4,235,354,245,379,229.3C404.2,213,429,171,455,176C480,181,505,235,531,266.7C555.8,299,581,309,606,288C631.6,267,657,213,682,186.7C707.4,160,733,160,758,176C783.2,192,808,224,834,224C858.9,224,884,192,909,165.3C934.7,139,960,117,985,128C1010.5,139,1036,181,1061,186.7C1086.3,192,1112,160,1137,176C1162.1,192,1187,256,1213,250.7C1237.9,245,1263,171,1288,165.3C1313.7,160,1339,224,1364,250.7C1389.5,277,1415,267,1427,261.3L1440,256L1440,320L1427.4,320C1414.7,320,1389,320,1364,320C1338.9,320,1314,320,1288,320C1263.2,320,1238,320,1213,320C1187.4,320,1162,320,1137,320C1111.6,320,1086,320,1061,320C1035.8,320,1011,320,985,320C960,320,935,320,909,320C884.2,320,859,320,834,320C808.4,320,783,320,758,320C732.6,320,707,320,682,320C656.8,320,632,320,606,320C581.1,320,556,320,531,320C505.3,320,480,320,455,320C429.5,320,404,320,379,320C353.7,320,328,320,303,320C277.9,320,253,320,227,320C202.1,320,177,320,152,320C126.3,320,101,320,76,320C50.5,320,25,320,13,320L0,320Z"></path>
          </motion.svg>
          <motion.svg
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                duration: 0.4,
                delay: 1.5,
                }}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240" className="absolute bottom-0">
                <path fill={waveColor} fillOpacity="0.4" d="M0,160L26.7,138.7C53.3,117,107,75,160,58.7C213.3,43,267,53,320,64C373.3,75,427,85,480,117.3C533.3,149,587,203,640,224C693.3,245,747,235,800,218.7C853.3,203,907,181,960,170.7C1013.3,160,1067,160,1120,181.3C1173.3,203,1227,245,1280,266.7C1333.3,288,1387,288,1413,288L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
          </motion.svg>
    </div>
  )
}
