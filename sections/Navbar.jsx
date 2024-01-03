import React, { useState } from 'react'
import Button from '../components/Button'
import { IoCloseSharp } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";
const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleChange = () => {
    setNav(!nav)
  }

  return (
    <div className='w-full h-20 z-[999] sticky top-0'>
      <div className='container mx-auto w-full h-full'>
        <div className='flex items-center justify-between w-full h-full px-6 lg:px-0'>
          <div>
            <h3>Logo</h3>
          </div>

          <div className='flex items-center gap-10'>
            <div onClick={handleChange}>
              {nav ? <IoCloseSharp size={30} /> : <RiMenuFill size={30} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar