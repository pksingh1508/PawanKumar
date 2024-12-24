import React from 'react'
import AboutLg from './About/AboutLg';
import AboutSm from './About/AboutSm';

function About() {
  return (
    <>
    <div className='hidden md:block'>
      <AboutLg />
    </div>
    <div className='md:hidden block'>
      <AboutSm />
    </div>
    </>
  )
}

export default About;