import React from 'react'
import { projectData } from '@/constants/projectData';
import Link from 'next/link';
import { IconBrandGithub, IconLink, IconPointFilled } from '@tabler/icons-react';

function ProjectSm() {
  return (
    <div className='w-full h-screen flex flex-col mx-auto items-center overflow-y-scroll bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 no-scrollbar'>
        {projectData.map((project) => (
          <div key={project.id} className='w-[280px] sm:w-[350px] bg-[#adb5bd] bg-opacity-20 px-5 py-5 rounded-lg my-5 text-gray-300 border border-[#68e3a9] flex flex-col gap-6 hover:scale-105 transition-all duration-300 mx-auto mb-5'>
            <div className='flex justify-between'>
              <div>pksingh1508</div>
              <div className='flex flex-row gap-2'>
                <Link href={project.github} target='_blank'>
                  <IconBrandGithub className='text-[#febe6e]'/>
                </Link>
                {project.url && (
                  <Link href={project.url} target='_blank'> 
                      <IconLink className='text-[#febe6e]'/>
                  </Link>
                )}
              </div>
            </div>
            <div>
              <p className='text-[#febe6e] text-[1.5rem] font-bold'>{project.title}</p>
              <p className='text-[#c7a7f5] font-semibold'>{project.description}</p>
              <p className='text-[#c7a7f5] font-semibold'>{project.description1}</p>
              <p className='text-[#c7a7f5] font-semibold'>{project.description2}</p>
              <p className='flex flex-row items-center flex-wrap'>
                <IconPointFilled className='text-[#68e3a9]'/>
                {project.technologies.map((tech, index) => (
                  <span key={index} className='text-[#68e3a9] py-1 rounded-lg mx-1 font-bold flex-wrap'>{tech}</span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
  )
}

export default ProjectSm;