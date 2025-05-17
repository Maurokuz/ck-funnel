import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header
      className='border-b border-[#2d2d2d] py-4'
    >
      <div className='container mx-auto flex items-center justify-center'>
        <Image
          src='/logo.png'
          alt='Logo'
          width={35}
          height={50}
        />
      </div>
    </header>
  )
}

export default Header