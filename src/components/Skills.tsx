import React from 'react'
import { button1, button2, button3, button4, button5 } from '@/constants/skillData';
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';
import { ButtonsCard } from './ui/tailwindcss-buttons';

function Skills() {
  return (
        <BackgroundBeamsWithCollision>
            <div className='w-full h-full flex flex-col items-center justify-center gap-5'>
                <div className="px-4 w-full flex flex-row gap-4 md:gap-6 justify-center flex-wrap">
                    {button5.map((button, idx) => (
                        <ButtonsCard key={idx}>
                        {button.component}
                        </ButtonsCard>
                    ))}
                </div>
                <div className="px-4 w-full flex flex-row gap-4 justify-center flex-wrap">
                    {button4.map((button, idx) => (
                        <ButtonsCard key={idx}>
                        {button.component}
                        </ButtonsCard>
                    ))}
                </div>
                <div className="px-4 w-full flex flex-row gap-4 justify-center flex-wrap">
                    {button3.map((button, idx) => (
                        <ButtonsCard key={idx}>
                        {button.component}
                        </ButtonsCard>
                    ))}
                </div>
                <div className="px-4 w-full flex flex-row gap-4 justify-center flex-wrap">
                    {button2.map((button, idx) => (
                        <ButtonsCard key={idx}>
                        {button.component}
                        </ButtonsCard>
                    ))}
                </div>
                <div className="px-4 w-full flex flex-row gap-4 justify-center flex-wrap">
                    {button1.map((button, idx) => (
                        <ButtonsCard key={idx}>
                        {button.component}
                        </ButtonsCard>
                    ))}
                </div>
                
            </div>
        </BackgroundBeamsWithCollision>
  )
}

export default Skills;