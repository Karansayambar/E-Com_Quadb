import React from 'react'

const Brands = () => {
  return (
    <div>
      <p className="text-xl font-semibold uppercase px-10 py-4 bg-gray-200 my-4">Brands</p>
    <div className='flex flex-wrap items-center justify-evenly'>
      <div className='text-center'>
        <p>Music</p>
        <div className='w-[300px] flex items-center flex-wrap justify-center '>
            <span className='border border-2 p-4'><img src="jbl.svg" alt="" className='h-[80px] w-[80px]'/></span>
            <span className='border border-2 p-4'><img src="sonos.svg" alt="" className='h-[80px] w-[80px]'/></span>
            <span className='border border-2 p-4'><img src="sony.svg" alt="" className='h-[80px] w-[80px]'/></span>
            <span className='border border-2 p-4'><img src="bose.svg" alt="" className='h-[80px] w-[80px]'/></span>
        </div>
      </div>
      <div className='text-center'>
        <p>TV's</p>
        <div className='w-[300px] flex items-center flex-wrap justify-center '>
            <span className='border border-2 p-4'><img src="LG.png" alt="" className='h-[80px] w-[80px]'/></span>
            <span className='border border-2 p-4'><img src="sony.svg" alt="" className='h-[80px] w-[80px]'/></span>
            <span className='border border-2 p-4'><img src="samsung.svg" alt="" className='h-[80px] w-[80px]'/></span>
            <span className='border border-2 p-4'><img src="apple.svg" alt="" className='h-[80px] w-[80px]'/></span>
        </div>
      </div>
      <div className='text-center'>
        <p>Laptops's</p>
        <div className='w-[300px] flex items-center flex-wrap justify-center '>
            <span className='border border-2 p-4'><img src="hp.svg" alt="" className='h-[80px] w-[80px]'/></span>
            <span className='border border-2 p-4'><img src="dell.svg" alt="" className='h-[80px] w-[80px]'/></span>
            <span className='border border-2 p-4'><img src="apple.svg" alt="" className='h-[80px] w-[80px]'/></span>
            <span className='border border-2 p-4'><img src="microsoft.svg" alt="" className='h-[80px] w-[80px]'/></span>
        </div>
      </div>
      <div className='text-center text-lg'>
        <p>Mobiles's</p>
        <div className='w-[300px] flex items-center flex-wrap justify-center '>
            <span className='border border-2 p-4'><img src="microsoft.svg" alt="" className='h-[80px] w-[80px]'/></span>
            <span className='border border-2 p-4'><img src="apple.svg" alt="" className='h-[80px] w-[80px]'/></span>
            <span className='border border-2 p-4'><img src="oneplus.svg" alt="" className='h-[80px] w-[80px]'/></span>
            <span className='border border-2 p-4'><img src="google.svg" alt="" className='h-[80px] w-[80px]'/></span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Brands
