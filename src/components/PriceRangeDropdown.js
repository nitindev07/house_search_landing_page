import React, { useContext, useState } from 'react'
import { RiHome5Line , RiArrowDownSLine, RiArrowUpSLine, RiWallet3Line } from 'react-icons/ri'

import { Menu } from '@headlessui/react'
import { HouseContext } from './HouseContext'

const PropertyDropdown = () => {
  const {price, setPrice}=useContext(HouseContext)
  const [isOpen, setIsOpen]= useState(false)

  const prices = [
      {
        value:'Price Range (any)'
      },
      {
        value:'100000 - 130000'
      },
      {
        value:'130000 - 160000'
      },
      {
        value:'160000 - 190000'
      },
      {
        value:'190000 - 220000'
      },
      {
        value:'10000 - 30000'
      },
      {
        value:'30000 - 40000'
      },
      
  ]

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={()=>setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
        <RiWallet3Line className='dropdown-icon-primary'/>
        <div>
          <div className='text-sm font-medium leading-tight'>{price}</div>
          <div className='text-sm '>Select Your Place</div>
        </div>
          {
            isOpen ? (
              <RiArrowUpSLine className='dropdown-icon-secondary'/>
            ) : (
              <RiArrowDownSLine className='dropdown-icon-secondary'/>
            )
          }
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {prices.map((price,index)=>{
          return(
            <Menu.Item onClick={() => setPrice(price.value)} as='li' className='cursor-pointer hover:text-violet-700 transition' key={index}>{price.value}</Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}

export default PropertyDropdown