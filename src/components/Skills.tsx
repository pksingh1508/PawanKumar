import React from 'react'
import { Button } from "./ui/moving-border";
import { skillData1, skillData2, skillData3, skillData4, skillData5, skillData6 } from '@/constants/skillData';
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';

function Skills() {
  return (
    <BackgroundBeamsWithCollision>
    <div className='w-full h-full flex flex-col items-center justify-center gap-5'>
        <div className='flex flex-wrap gap-5'>
            {skillData1.map((skill, index) => (
                <Button key={index} className="mr-2 mb-2 hover:translate-y-1 hover:scale-125 transition-all duration-700"> 
                    {skill.icon}
                    <span className="text-[1.2rem] ml-4">{skill.name}</span>
                </Button>
            ))}
        </div>
        <div className='flex flex-wrap gap-5'>
            {skillData2.map((skill, index) => (
                <Button key={index} className="mr-2 mb-2 hover:translate-y-1 hover:scale-125 transition-all duration-700" containerClassName='w-48'> 
                    {skill.icon}
                    <span className="text-[1.2rem] ml-4">{skill.name}</span>
            </Button>
            ))}
        </div>
        <div className='flex flex-wrap gap-6'>
            {skillData3.map((skill, index) => (
                <Button key={index} className="mr-2 mb-2 hover:translate-y-1 hover:scale-125 transition-all duration-700"> 
                    {skill.icon}
                    <span className="text-[1.2rem] ml-4">{skill.name}</span>
            </Button>
            ))}
        </div>
        <div className='flex flex-wrap gap-6'>
            {skillData4.map((skill, index) => (
                <Button key={index} className="mr-2 mb-2 hover:translate-y-1 hover:scale-125 transition-all duration-700" containerClassName='w-44'> 
                    {skill.icon}
                    <span className="text-[1.2rem] ml-4">{skill.name}</span>
            </Button>
            ))}
        </div>
        <div className='flex flex-wrap gap-4'>
            {skillData5.map((skill, index) => (
                <Button key={index} className="mr-2 mb-2 hover:translate-y-1 hover:scale-125 transition-all duration-700"> 
                    {skill.icon}
                    <span className="text-[1.2rem] ml-4">{skill.name}</span>
            </Button>
            ))}
        </div>
        <div className='flex flex-wrap gap-4'>
            {skillData6.map((skill, index) => (
                <Button key={index} className="mr-2 mb-2 hover:translate-y-1 hover:scale-125 transition-all duration-700"> 
                    {skill.icon}
                    <span className="text-[1.2rem] ml-4">{skill.name}</span>
            </Button>
            ))}
        </div>
    </div>
    </BackgroundBeamsWithCollision>
  )
}

export default Skills;