import React from 'react'
import { Services1, Services2, Services3 } from '../assets/index'

const MyServices = () => {
  return (
    <div id='service' className='px-3 pt-28 flex flex-col gap-8'>
      <h1 className='font-semibold text-blue text-center text-5xl'>My Services</h1>
      <ul className='flex flex-col sm:flex-row gap-5'>
        <li className='flex relative'>
          <img src={Services1} alt="S1" />
          <h1 className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl xl:text-4xl sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center leading-snug'>UI/UX Design</h1>
        </li>
        <li className='flex relative'>
          <img src={Services2} alt="S2" />
          <h1 className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl xl:text-4xl sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center leading-snug'>Web Page Design</h1>
        </li>
        <li className='flex relative'>
          <img src={Services3} alt="S3" />
          <h1 className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl xl:text-4xl sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center leading-snug'>Android App Development</h1>
        </li>
      </ul>
    </div>
  )
}

export default MyServices