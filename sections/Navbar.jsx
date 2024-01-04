import React, { useState } from 'react'
import Image from 'next/image';
import mrlogo from '../public/assets/mrlogo.png'
import Button from '../components/Button'
import { IoCloseSharp } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";
import { menuList } from '../constants';
import Link from 'next/link';
const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleChange = () => {
    setNav(!nav)
  }

  return (
    <div className='w-full h-20 z-[999] bg-background sticky top-0'>
      <div className='container mx-auto w-full h-full'>
      <div className='flex items-center justify-between w-full h-full px-6 lg:px-0'>
        <div>
          <Image src={mrlogo} width={200} height={200} />
        </div>

          <div className='hidden lg:flex items-center gap-5'>
            {menuList.map((list, index) => (
              <ul key={index} className='text-lg font-normal hover:text-secondary duration-200'>
                <Link href={list.path}> <li>{list.label}</li></Link>
              </ul>
            ))}
          </div>
          
        <div className='block lg:hidden' onClick={handleChange}>
              {nav ? <IoCloseSharp size={30} /> : <RiMenuFill size={30} />}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar