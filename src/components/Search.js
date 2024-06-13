import React, { useContext } from 'react'
import PropertyDropdown from './PropertyDropdown'
import PriceRangeDropdown from './PriceRangeDropdown'
import CountryDropdown from './CountryDropdown'
import {RiSearch2Line} from 'react-icons/ri'
import { HouseContext } from './HouseContext'

const Search = () => {
  const {handleClick} = useContext(HouseContext)
  return (
    <div className='flex items-center lg:flex-row flex-col max-w-[1170px] mx-auto bg-white lg:backdrop-blur lg:bg-transparent rounded-lg gap-y-4 justify-between shadow-1 px-[30px] py-6 relative lg:-top-4'>
      <CountryDropdown/>
      <PropertyDropdown/>
      <PriceRangeDropdown/>
      <button onClick={()=>handleClick()} className='bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex text-lg justify-center items-center'>
        <RiSearch2Line/>
      </button>
    </div>
  )
}

export default Search
