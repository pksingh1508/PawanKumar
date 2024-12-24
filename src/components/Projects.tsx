import React from 'react'
import ProjectLg from './Project/ProjectLg';
import ProjectSm from './Project/ProjectSm';

function Projects() {
  return (
    <>
      <div className='hidden md:block w-full h-screen'>
        <ProjectLg />
      </div>
      <div className='block md:hidden w-full items-center'>
        <ProjectSm />
      </div>
    </>
  )
}

export default Projects;