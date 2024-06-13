import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.svg'

const Header = () => {
  return (
    <div className='container mx-auto py-4 mb-12 border-b'>
      <div className='flex justify-between items-center'>
        <div>
          <Link to='/' ><img src={logo} alt="logo" /></Link>
        </div>
        <div className='flex gap-5 lg:gap-6  items-center'>
          <Link className='btn hover:text-violet-900 transition' to=''>
            Login
          </Link>
          <Link className='btn bg-violet-700 text-white rounded-md hover:bg-violet-800 transition-all' to=''>
            SingUp
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
