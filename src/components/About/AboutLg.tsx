import React from 'react'
import { InfiniteMovingName } from '../InfiniteMovingName';
import Image from 'next/image';
import MyPhoto from '../../../public/pawan.jpg';
import { BackgroundBeamsWithCollision } from '../ui/background-beams-with-collision';

function AboutLg() {
  return (
    <BackgroundBeamsWithCollision className='overflow-y-visible md:overflow-hidden'>
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
            <p>Hi&apos; I&apos;m Pawan&apos; a 20-year-old Computer Science graduate passionate about creating impactful digital experiences. With over a year of experience as a Full Stack Web and Mobile Developer&apos; I specialize in building dynamic&apos; user-centric applications.</p>
            <p className='hidden lg:block'>Beyond coding&apos; I enjoy sharing my knowledge through speaking engagements and insightful write-ups&apos; inspiring others to grow and innovate. My work bridges creativity and technology&apos; delivering solutions that make a difference.</p>
          </div>
        </div>
        <div>
          <InfiniteMovingName className='md:max-w-lg lg:max-w-4xl xl:max-w-7xl'/>
        </div>
    </div>
    </BackgroundBeamsWithCollision>
  )
}

export default AboutLg;