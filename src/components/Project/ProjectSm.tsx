import React from 'react'
import { projectData } from '@/constants/projectData';
import Link from 'next/link';
import { IconBrandGithub, IconPointFilled } from '@tabler/icons-react';

function ProjectSm() {
  return (
    <div className='w-full h-screen flex flex-col mx-auto items-center'>
        {projectData.map((project) => (
          <div key={project.id} className='w-[280px] sm:w-[350px] bg-[#adb5bd] bg-opacity-20 px-5 py-5 rounded-lg my-5 text-gray-300 border border-[#68e3a9] flex flex-col gap-6 hover:scale-105 transition-all duration-300 mx-auto mb-5'>
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
              <p className='flex flex-row items-center flex-wrap'>
                <IconPointFilled className='text-[#68e3a9]'/>
                {project.technologies.map((tech, index) => (
                  <div key={index} className='text-[#68e3a9] py-1 rounded-lg mx-1 font-bold flex-wrap'>{tech}</div>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
  )
}

export default ProjectSm;