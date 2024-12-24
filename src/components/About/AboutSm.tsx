import React from 'react'
import { InfiniteMovingName } from '../InfiniteMovingName';
import Image from 'next/image';
import MyPhoto from '../../../public/pawan.jpg';

function AboutSm() {
  return (
    <div className='w-2xl h-full flex flex-col bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800'>
        <div className='flex flex-col items-center my-5 gap-4'>
          <div className='[mask-image:linear-gradient(to_bottom,transparent,white_15%,white_85%,transparent)]'>
            <Image 
              src={MyPhoto}
              alt='Pawan Kumar'
              width={300}
              height={300}
              className='rounded-[3rem] [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] grayscale'
            />
          </div>
          <div className='text-gray-200  flex flex-col gap-4 bg-[#adb5bd] bg-opacity-20 px-5 py-5 rounded-lg mx-3 my-3'>
            <p>Hi&apos; I&apos;m Pawan&apos; a 20-year-old Computer Science graduate passionate about creating impactful digital experiences. With over a year of experience as a Full Stack Web and Mobile Developer&apos; I specialize in building dynamic&apos; user-centric applications.</p>
            <p>Beyond coding&apos; I enjoy sharing my knowledge through speaking engagements and insightful write-ups&apos; inspiring others to grow and innovate. My work bridges creativity and technology&apos; delivering solutions that make a difference.</p>
          </div>
        </div>
        <div>
          <InfiniteMovingName className='max-w-[18rem] sm:max-w-sm'/>
        </div>
    </div>
  )
}

export default AboutSm;