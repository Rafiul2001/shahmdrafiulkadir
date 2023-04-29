import React from 'react'
import { Rafiul } from '../assets/index'

const Intro = () => {
  return (
    <div id='home' className='px-3 w-full flex flex-col-reverse sm:flex-row sm:items-center gap-8 pt-28'>
      <div className='flex-1'>
        <h1 className='w-full text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:leading-normal font-semibold'>HI, <br />
          I am <span className='text-pink-700'>S</span>hah <span className='text-pink-700'>M</span>d. <span className='text-pink-700'>R</span>afiul <span className='text-pink-700'>K</span>adir <br />
          A <span className='text-blue'>Frontend Developer</span>
        </h1>
      </div>
      <div className='flex-1 md:max-w-md'>
        <img className='w-full' src={Rafiul} alt="Rafiul" />
      </div>
    </div>
  )
}

export default Intro