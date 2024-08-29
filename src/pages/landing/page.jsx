import React from 'react'
import Navbar from '../../components/navbar/page'

export default function Landing() {
  return (
    <div className='w-screen h-screen bg-bg-image bg-cover overflow-x-hidden'>
    <Navbar/>
    <div className={`h-full flex items-center justify-center`}>
        <h1 className='backdrop-blur-lg bg-white/10 p-2 text-white text-3xl rounded-2xl'>Shark trading - Study to get your prey as a Shark </h1>
    </div>
    </div>
  )
}
