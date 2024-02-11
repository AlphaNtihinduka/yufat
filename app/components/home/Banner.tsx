import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <main>
      <div className='imageholder my-2 relative'>
      <Image
      src="https://s3.amazonaws.com/my-bucket/profile.png"
      alt="banner"
      width={500}
      height={500}
    />
        <div className='absolute h-full top-0 left-0 w-full text-center items-center bg-green-500 opacity-50'>
          <h1 className='opacity-1'>Creating future talent today</h1>
          <p className='opacity-1'>Nurturing young refugees with high quality digital skills</p>
        </div>
      </div>
    </main>
  )
}

export default Banner