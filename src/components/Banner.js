import React from 'react'
import banner from '../assets/img/house-banner.png'
import Search from '../components/Search'

const Banner = () => {
  return (
    <div className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex lg:flex-row flex-col items-center'>
        <div className=' flex flex-col flex-1 justify-center items-center lg:ml-8 xl:ml-[135px] text-center lg:text-left lg:items-start gap-6 px-4 lg:px-0'>
          <h1 className='text-4xl leading-none lg:text-[58px] font-semibold'><span className='text-violet-700'>Rent</span> Your Dream House With Us.</h1>
          <p className='text-lg max-w-[480px] '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident dolores ipsam neque adipisci nihil, tempore assumenda quae quisquam doloribus </p>
        </div>
        <div>
          <img className='hidden flex-1 lg:flex justify-end items-end' src={banner} alt="" />
        </div>
      </div>
      <Search/>
    </div>
  )
}

export default Banner
