import React from 'react'

const Banner = () => {
  return (
    <main>
      <div className='imageholder my-2 relative'>
        <img className='object-cover' src='https://images.unsplash.com/photo-1455894127589-22f75500213a?q=80&w=1387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='banner' />
        <div className='absolute h-full top-0 left-0 w-full text-center items-center bg-green-500 opacity-50'>
          <h1 className='opacity-1'>Creating future talent today</h1>
          <p className='opacity-1'>Nurturing young refugees with high quality digital skills</p>
        </div>
      </div>
    </main>
  )
}

export default Banner