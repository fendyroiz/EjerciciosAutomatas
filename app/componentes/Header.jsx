
import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className='p-8 bg-violet-400'>
        <div className='bg-violet-200 p-2  font-bold font-serif text-violet-800'>
            <h1 className='py-5 text-center text-white'>Automatas Finitos Deterministas</h1>
        </div>

        <nav className='p-2'>
            <ul className='flex space-x-8 text-center  justify-center p-1'>
              <li className='bg-violet-200 p-1 w-[11%] rounded-2xl hover:bg-purple-300  hover:text-white text-violet-800'> 
              <Link href={'/ejercicio01'}>Ejercicio 1</Link>
              </li>
              <li className='bg-violet-200 p-1 w-[11%] rounded-2xl hover:bg-purple-300  hover:text-white text-violet-800'> 
              <Link href={'/ejercicio02'}>Ejercicio 2</Link>
              </li>
              <li className='bg-violet-200 p-1 w-[11%] rounded-2xl hover:bg-purple-300  hover:text-white text-violet-800'> 
              <Link href={'/ejercicio03'}>Ejercicio 3</Link>
              </li>
              <li className='bg-violet-200 p-1 w-[11%] rounded-2xl hover:bg-purple-300  hover:text-white text-violet-800'> 
              <Link href={'/ejercicio04'}>Ejercicio 4</Link>
              </li>
             
            </ul>
        </nav>
    </header>
  )
}