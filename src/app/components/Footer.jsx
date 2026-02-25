import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
      <div className="container p-6 flex justify-between">
      <span>
        <Image 
              src='/images/logo.png' 
              alt="Logo" 
              width={100} 
              height={40}
              className="rounded"
          />
      </span>
      <p>All rights reserved.</p>
      </div>
      </footer>
  )
}

export default Footer