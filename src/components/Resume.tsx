import React from 'react'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';
import { IconFileCv } from '@tabler/icons-react';

function Resume() {
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = 'https://res.cloudinary.com/dbym760el/image/upload/v1735497617/Resume/pawankumar.pdf';
        link.download = 'pawankumar.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
  return (
    <BackgroundBeamsWithCollision className='h-[99%] md:h-screen'>
        <div onClick={downloadResume} className='flex items-center justify-center cursor-pointer bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 p-4 rounded-lg shadow-lg gap-2 hover:scale-x-105 transform transition-transform duration-300 ease-in-out group'>
            <IconFileCv className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:rotate-45"/>
            <p>Download It!</p>
        </div>
    </BackgroundBeamsWithCollision>
  )
}

export default Resume;