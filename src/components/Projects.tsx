import React from 'react'
import ProjectLg from './Project/ProjectLg';
import ProjectSm from './Project/ProjectSm';

function Projects() {
  return (
    <>
      <div className='hidden md:block w-full h-full bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 pb-6'>
        <ProjectLg />
      </div>
      <div className='block md:hidden w-full items-center'>
        <ProjectSm />
      </div>
    </>
  )
}

export default Projects;