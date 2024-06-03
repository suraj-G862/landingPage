'use client'

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../../public/Fonts/WEB/css/clash-display.css'

function Navbar() {
  const currentRoute = usePathname();
  return (
    <div className='md:h-[5rem] h-[3rem] mx-auto flex py-6 sm:px-10 items-center sticky -top-0.5 bg-white z-20'>
        <div className='sm:mx-20 flex  w-full '>
            <div className=' min-w-16 h-10  flex justify-center items-center'>
              <Image src={"/ulfry.png "} alt='logo' width={100} height={100}/>
            </div>
            <div className='ml-4 w-[90%] flex items-center justify-between  relative text-xs sm:text-base'>
                <div className='flex'>
                   <Link href="/" className={`sm:mx-3 mx-1 clash-display-medium  hover:text-red-600 relative ${currentRoute === '/' ? 'text-red-600 font-bold' : ''}  `}>Home</Link>
                   <Link href="/aboutus" className={`sm:mx-3 mx-1 clash-display-medium hover:text-red-600 relative whitespace-nowrap ${currentRoute=== '/aboutus' ? 'text-red-600 font-bold' : ''}`}>About Us</Link>
                   <Link href="/pricing" className={`sm:mx-3 mx-1 clash-display-medium hover:text-red-600 relative ${currentRoute=== '/pricing' ? 'text-red-600 font-bold' : ''}`}>Pricing</Link>
                   <Link href="/features" className={`sm:mx-3 mx-1 clash-display-medium hover:text-red-600 relative ${currentRoute=== '/features' ? 'text-red-600 font-bold' : ''}`}>Features</Link>
                </div>
                <div className='bg-black flex justify-center items-center hover:text-sm sm:hover:text-lg clash-display-medium rounded-md sm:w-32 w-20 h-6 sm:h-10 text-white transition-all duration-300'>
                   <Link href="/downloads">Download</Link>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Navbar

