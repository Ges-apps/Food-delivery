import React from 'react'
import HeroVid from '../Assets/Herovid.mp4';
const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 '>
      <div className='max-h-[500px] relative '>
          {/** Overlay **/}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white'>Foo<span className='font-bold text-orange-500'>DIA</span></h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500'>The Best <span className='font-bold text-white'>Food</span></h1>
        </div>
          <video className='w-full max-h-[500px] object-cover' src={HeroVid} loop autoPlay muted/>
      </div>
    </div>
  )
}

export default Hero