"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#F1E7E7] to-[#E69DB8]'>Hello, I'm {''}</span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Natasha',
                1000,
                'Software Developer',
                1000,
                'Mobile App Developer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className='text-[FFFBF5] text-base sm:text-lg mb-6 lg:text-xl'>
            Welcome to my portfolio
          </p>

          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>
              Hire Me
            </button>
            
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-900 text-white border border-white mt-3'>
              Download CV
            </button>
          </div>
        </div>

        <div className='col-span-5 place-self-center mt-4 lg:mt-0'> 
        <div className="rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image src='/images/hero-image.png' 
          alt='hero image'
          className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
          width={300} 
          height={300}/>
        </div>
      </div>  
      </div>
    </section>
  )
}

export default HeroSection