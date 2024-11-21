import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface CardProps {
    title: string,
    description: string,
    tags: readonly string[],
    imageUrl: StaticImageData,
    backgroundColor: string,
    index?: number
}

const Card: React.FC<CardProps> = ({ 
    title, 
    description, 
    tags, 
    imageUrl, 
    backgroundColor,
    index = 0 
}) => {
    return (
        <div className="h-screen flex items-center justify-center sticky top-20 md:top-0">
            <div 
                className="flex flex-col relative h-[700px] w-[1000px] rounded-[25px] p-[10px] md:p-[50px] transition-all duration-500 hover:shadow-2xl backdrop-blur-sm"
                style={{
                    background: backgroundColor,
                    top: `calc(-5vh + ${index * 25}px)`,
                    transformOrigin: 'top',
                    boxShadow: '0 8px 32px 0 rgb(55 65 81 / 0.5)',                 
                }}
            >
                <div className="absolute inset-0 rounded-[25px] bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />

                <h2 className="text-center m-0 text-[28px] mt-[20px] md:mt-[0px] font-bold relative z-10 text-white mix-blend-exclusion">
                    {title}
                </h2>
                
                <div className="flex  h-full flex-col md:flex-row relative mt-[10px] md:mt-[50px] gap-[50px] z-10">
                    <div className="w-full md:w-[40%] relative top-[2%] md:top-[10%]">
                        <p className="text-center text-base md:text-left first-letter:text-[28px] first-letter:font-serif text-white/90">
                            {description}
                        </p>
                        
                        <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                            {tags.map((tag, index) => (
                                <span 
                                    key={index}
                                    className="px-3 py-1 text-sm bg-white/20 backdrop-blur-md rounded-full 
                                             text-white border border-white/20 hover:bg-white/30 
                                             transition-colors duration-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        
                    </div>

                    <div className="relative w-full md:w-[60%] h-full rounded-[25px] overflow-hidden 
                                  transform transition-transform duration-500 hover:scale-[1.02]">
                        <div className="w-full h-full">
                            <Image
                                src={imageUrl}
                                alt={title}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card