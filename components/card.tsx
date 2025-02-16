import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/theme-context'
import Link from 'next/link'
import { TeamMember, Project } from '@/lib/data'

type CardProps = Project;

const Card: React.FC<CardProps> = ({ 
    title, 
    description, 
    tags, 
    imageUrl,
    link,
    team,
}) => {
    const { getSectionTextColor, getSectionBackground } = useTheme();

    return (
        <motion.div 
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div 
                className="group h-full backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                style={{
                    background: getSectionBackground('skill'),
                }}
            >
                {/* Image Section */}
                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                    <h3 
                        className="text-xl font-bold"
                        style={{ color: getSectionTextColor('textColor') }}
                    >
                        {title}
                    </h3>
                    
                    <p 
                        className="text-sm"
                        style={{ color: getSectionTextColor('textColor2') }}
                    >
                        {description}
                    </p>

                    {team && (
                        <div className="flex flex-wrap gap-2">
                            <span 
                                className="text-sm font-medium"
                                style={{ color: getSectionTextColor('textColor') }}
                            >
                                Team:
                            </span>
                            {team.map((member, index) => (
                                <Link 
                                    key={index}
                                    href={member.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm hover:underline transition-all duration-300"
                                    style={{ color: getSectionTextColor('textColor2') }}
                                >
                                    {member.name}{index < team.length - 1 ? "," : ""}
                                </Link>
                            ))}
                        </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                        {tags.map((tag, index) => (
                            <span 
                                key={index}
                                style={{ 
                                    color: getSectionTextColor('textColor'),
                                    borderColor: getSectionTextColor('textColor2'),
                                    background: getSectionBackground('projects')
                                }}
                                className="px-2 py-1 text-xs backdrop-blur-sm rounded-full 
                                         border transition-colors duration-300
                                         hover:bg-white/10"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {link && (
                        <div className="pt-4">
                            <Link 
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg 
                                         transition-all duration-300 hover:-translate-y-1"
                                style={{
                                    color: getSectionTextColor('textColor'),
                                    borderColor: getSectionTextColor('textColor2'),
                                    background: getSectionBackground('projects')
                                }}
                            >
                                View Project
                                <svg 
                                    className="w-4 h-4" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default Card