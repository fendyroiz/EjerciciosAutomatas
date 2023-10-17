'use client'
import React from 'react'
import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { Transition } from '@headlessui/react';
import { PopoverButtonProps } from '@headlessui/react';

import {AiFillHome, AiOutlineMenu} from 'react-icons/ai'
import { BiCalendarEdit } from "react-icons/bi";
import {LuBadgeInfo} from 'react-icons/lu'
import CancelIcon from '@mui/icons-material/Cancel';

export const Header = () => {
  return (
    <nav>
      <header>
   
      {/* Responsive Navbar  */}  
      <Popover className='hidden sm:flex justify-evenly p-4 bg-blue-300 items-center h-8'>

          {/* Primer div (enlaces) */}
          
          <div className='hidden  space-x-10 items-center sm:flex md:space-x-20 lg:space-x-28 '>
            
            <div className=' p-1   font-serif text-white text-lg'>
                <Link href={'/ejercicio01'}>Ejercicio01</Link>
            </div>
            <div className=' p-1   font-serif text-white text-lg'>
                <Link href={'/ejercicio02'}>Ejercicio02</Link>
            </div>
            <div className=' p-1   font-serif text-white text-lg'>
                <Link href={'/ejercicio03'}>Ejercicio03</Link>
            </div>
            <div className=' p-1   font-serif text-white text-lg'>
                <Link href={'/ejercicio04'}>Ejercicio04</Link>
            </div>
          
            
           
          </div>

          
          
      </Popover>
      


      <Popover className='sm:hidden font-bold bg-blue-400 h-20 flex justify-between  '>

        <Popover.Button className='text-3xl  p-6 '>
          <AiOutlineMenu />
        </Popover.Button>

        <Popover.Overlay className="fixed inset-0 " />

        <Popover.Panel className=" absolute top-16 w-60 left-7  bg-blue-300 p-5 rounded-md shadow-2xl  ">
           <Popover.Button className='text-3xl  p-6 '>
          <CancelIcon/>
          </Popover.Button>
          <div className='flex flex-col gap-5 text-white'>
            <div className='flex items-center'>
              <AiFillHome className='text-2xl mr-2' />
              <Link href='/ejercicio01'>Ejercicio01</Link>
            </div>
            <div className='flex items-center'>
              <BiCalendarEdit className='text-2xl mr-2' />
              <Link href='/ejercicio02'>Ejercicio02</Link>
            </div>
            <div className='flex items-center'>
              <LuBadgeInfo className='text-2xl mr-2' />
              <Link href='/ejercicio03'>Ejercicio03</Link>
            </div>
            <div className='flex items-center'>
              <LuBadgeInfo className='text-2xl mr-2' />
              <Link href='/ejercicio04'>Ejercicio04</Link>
            </div>
            </div>
         
        </Popover.Panel>

        
      </Popover>


     
   </header>
    </nav>
  )
}