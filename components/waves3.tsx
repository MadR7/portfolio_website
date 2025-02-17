"use client"

import { motion } from 'framer-motion'
import React from 'react'
import { useTheme } from '@/context/theme-context';


export default function Waves3() {
  const { getSectionBackground } = useTheme();
  const waveColor = getSectionBackground('skills');
  return (
    <div className='z-5 relative'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0" aria-hidden="true">
            <path fill={waveColor} fillOpacity="" d="M0,96L24,112C48,128,96,160,144,192C192,224,240,256,288,229.3C336,203,384,117,432,90.7C480,64,528,96,576,117.3C624,139,672,149,720,176C768,203,816,245,864,229.3C912,213,960,139,1008,117.3C1056,96,1104,128,1152,165.3C1200,203,1248,245,1296,234.7C1344,224,1392,160,1416,128L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
          </svg>
          <motion.svg 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                duration: 0.4,
                delay: 2.1,
                }}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 300" className="absolute bottom-0" aria-hidden="true">
                <path fill = {waveColor} fillOpacity="0.5" d="M0,320L12.6,304C25.3,288,51,256,76,234.7C101.1,213,126,203,152,218.7C176.8,235,202,277,227,282.7C252.6,288,278,256,303,245.3C328.4,235,354,245,379,229.3C404.2,213,429,171,455,176C480,181,505,235,531,266.7C555.8,299,581,309,606,288C631.6,267,657,213,682,186.7C707.4,160,733,160,758,176C783.2,192,808,224,834,224C858.9,224,884,192,909,165.3C934.7,139,960,117,985,128C1010.5,139,1036,181,1061,186.7C1086.3,192,1112,160,1137,176C1162.1,192,1187,256,1213,250.7C1237.9,245,1263,171,1288,165.3C1313.7,160,1339,224,1364,250.7C1389.5,277,1415,267,1427,261.3L1440,256L1440,320L1427.4,320C1414.7,320,1389,320,1364,320C1338.9,320,1314,320,1288,320C1263.2,320,1238,320,1213,320C1187.4,320,1162,320,1137,320C1111.6,320,1086,320,1061,320C1035.8,320,1011,320,985,320C960,320,935,320,909,320C884.2,320,859,320,834,320C808.4,320,783,320,758,320C732.6,320,707,320,682,320C656.8,320,632,320,606,320C581.1,320,556,320,531,320C505.3,320,480,320,455,320C429.5,320,404,320,379,320C353.7,320,328,320,303,320C277.9,320,253,320,227,320C202.1,320,177,320,152,320C126.3,320,101,320,76,320C50.5,320,25,320,13,320L0,320Z"></path>
          </motion.svg>
          <motion.svg
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                duration: 0.4,
                delay: 2.2,
                }}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280" className="absolute bottom-0">
                <path fill={waveColor} fillOpacity="0.4" d="M0,224L15,240C30,256,60,288,90,256C120,224,150,128,180,90.7C210,53,240,75,270,112C300,149,330,203,360,208C390,213,420,171,450,133.3C480,96,510,64,540,69.3C570,75,600,117,630,154.7C660,192,690,224,720,208C750,192,780,128,810,96C840,64,870,64,900,85.3C930,107,960,149,990,160C1020,171,1050,149,1080,170.7C1110,192,1140,256,1170,256C1200,256,1230,192,1260,186.7C1290,181,1320,235,1350,229.3C1380,224,1410,160,1425,128L1440,96L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"></path>
          </motion.svg>
      </div>
  )
}
