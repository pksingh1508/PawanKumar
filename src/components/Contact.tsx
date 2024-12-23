import React from 'react'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconMail } from '@tabler/icons-react';
import Link from 'next/link';

function Contact() {
  return (
    <BackgroundBeamsWithCollision>
      <div>
        <div>
          <div className='flex md:flex-row flex-col gap-9 text-gray-400'>  
            <Link href='mailto:pawankumarlearner@gmail.com' className='flex flex-col items-center gap-2 hover:text-gray-200 transition-all duration-200 hover:bg-[#adb5bd] hover:bg-opacity-20 px-5 py-5 rounded-lg hover:scale-105'>
              <IconMail className='w-5 h-5'/>
              <span>Mail Me</span>
            </Link>
            <Link href='https://github.com/pksingh1508' className='flex flex-col items-center gap-2 hover:text-gray-200 transition-all duration-200 hover:bg-[#adb5bd] hover:bg-opacity-20 px-5 py-5 rounded-lg hover:scale-105' target='_blank'>
              <IconBrandGithub className='w-5 h-5'/>
              <span>GitHub</span>
            </Link>
            <Link href='https://x.com/pawankumar3101' className='flex flex-col items-center gap-2 hover:text-gray-200 transition-all duration-200 hover:bg-[#adb5bd] hover:bg-opacity-20 px-5 py-5 rounded-lg hover:scale-105' target='_blank'>
              <IconBrandTwitter className='w-5 h-5'/>
              <span>Twitter</span>
            </Link>
            <Link href='https://www.linkedin.com/in/pawan-kumar-731ab3239/' className='flex flex-col items-center gap-2 hover:text-gray-200 transition-all duration-200 hover:bg-[#adb5bd] hover:bg-opacity-20 px-5 py-5 rounded-lg hover:scale-105' target='_blank'>
              <IconBrandLinkedin className='w-5 h-5'/>
              <span>LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  )
}

export default Contact;