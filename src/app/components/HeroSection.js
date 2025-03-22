import React from 'react'

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7'>
          <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>Hello, I'm Natasha!</h1>
        </div>
        <p className='text-[FFFBF5] text-lg lg:text-xl font-semibold'>Welcome to my portfolio</p>
      </div>
    </section>
  )
}

export default HeroSection