import React from 'react'
import { BackgroundBeamsWithCollision } from '../ui/background-beams-with-collision';
import { projectData } from '@/constants/projectData';
import Link from 'next/link';
import { IconBrandGithub, IconPointFilled } from '@tabler/icons-react';

function ProjectLg() {
  return (
    <BackgroundBeamsWithCollision>
      <div>
        {projectData.map((project) => (
          <div key={project.id} className='w-[300px] sm:w-[400px] md:w-[550px] lg:w-[650px] bg-[#adb5bd] bg-opacity-20 px-5 py-5 rounded-lg my-5 text-gray-300 border border-[#68e3a9] flex flex-col gap-6 hover:scale-105 transition-all duration-300 '>
            <div className='flex justify-between'>
              <div>pksingh1508</div>
              <div>
                <Link href={project.github}>
                  <IconBrandGithub className='text-[#febe6e]'/>
                </Link>
              </div>
            </div>
            <div>
              <p className='text-[#febe6e] text-[1.5rem]'>{project.title}</p>
              <p className='text-[#c7a7f5] font-semibold'>{project.description}</p>
              <p className='text-[#c7a7f5] font-semibold'>{project.description1}</p>
              <p className='text-[#c7a7f5] font-semibold'>{project.description2}</p>
              <p className='flex flex-row items-center'>
                <IconPointFilled className='text-[#68e3a9]'/>
                {project.technologies.map((tech, index) => (
                  <span key={index} className=' text-[#68e3a9] py-1 rounded-lg mx-1 font-bold'>{tech}</span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </BackgroundBeamsWithCollision>
  )
}

export default ProjectLg;