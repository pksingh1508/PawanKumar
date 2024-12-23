import React from 'react'
import { InfiniteMovingName } from './InfiniteMovingName';
import Image from 'next/image';
import MyPhoto from '../../public/pawan.jpg';
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';

function About() {
  return (
    <BackgroundBeamsWithCollision>
    <div className='w-full h-full flex flex-col justify-between'>
        <div className='flex flex-col md:flex-row-reverse gap-5 py-4 px-4 items-center justify-evenly my-auto'>
          <div className='[mask-image:linear-gradient(to_bottom,transparent,white_15%,white_85%,transparent)]'>
            <Image 
              src={MyPhoto}
              alt='Pawan Kumar'
              width={300}
              height={300}
              className='rounded-[3rem] [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] grayscale'
            />
          </div>
          <div className='text-gray-200 w-[80%] sm:w-[60%] md:w-[40%] flex flex-col gap-4 bg-[#adb5bd] bg-opacity-20 px-5 py-5 rounded-lg '>
            <p>Hi, I'm Pawan, a 20-year-old Computer Science graduate passionate about creating impactful digital experiences. With over a year of experience as a Full Stack Web and Mobile Developer, I specialize in building dynamic, user-centric applications.</p>
            <p>Beyond coding, I enjoy sharing my knowledge through speaking engagements and insightful write-ups, inspiring others to grow and innovate. My work bridges creativity and technology, delivering solutions that make a difference.</p>
          </div>
        </div>
        <div className=''>
          <InfiniteMovingName />
        </div>
    </div>
    </BackgroundBeamsWithCollision>
  )
}

export default About;