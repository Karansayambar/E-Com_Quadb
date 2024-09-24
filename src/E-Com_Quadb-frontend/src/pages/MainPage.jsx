import React from 'react'
import Navbar from '../components/Navbar'
import Television from '../components/Television'
import Cameras from '../components/Cameras'
import Laptop from '../components/Laptop'
import Mobile from '../components/Mobile'
import Brands from '../components/Brands'

const MainPage = () => {
  return (
    <div>
      <Navbar/>
      <div className='w-full flex items-center justify-center p-4'>
        <img src='banner4.jpg' className='w-full md:h-[400px]'/>
      </div>
      <div className='my-8'>
        <Television/>
      </div>

      <div className='my-8'>
        <Cameras/>
      </div>
      <div className='my-8'>
        <Brands/>
      </div>
      <div className='my-8'>
        <Laptop/>
      </div>
      <div className='my-8'>
        <Mobile/>
      </div>
    </div>
  )
}

export default MainPage;
