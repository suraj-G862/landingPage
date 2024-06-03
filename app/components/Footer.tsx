import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import '../style/home.css'
import '../../public/Fonts/WEB/css/clash-display.css'

function Footer() {
  return (
    <div className='w-full px-[10%] mt-20 '>
       <div className='w-[100%]  flex '>
           {/* <div className='min-w-[150px]'>hello</div> */}
           <div className='w-[25%]'>
             <div className=' pt-1 w-14 md:w-28'> <Image src={"/ulfry.png "} alt='logo' width={100} height={100}/></div>
             <ul className='text-[6px] md:text-[16px] md:pt-5 pt-1'>
              <li className='pb-2  clash-display-regular'>surajutt@iitbhilai.ac.in</li>
              <li className='pb-2 clash-display-regular'>+91 9834168879</li>
             </ul>
           </div>
           <div className='w-[17%]'>
                <div className='font-bold md:mb-5 mb-1 mt-1 md:text-2xl text-xs clash-display-medium'>Links</div>
                <ul className='text-[6px] md:text-[16px]'>
                 <li className='md:pb-2 pb-0 clash-display-regular'>Home</li>
                 <li className='md:pb-2 pb-0 clash-display-regular'>About Us</li>
                 <li className='md:pb-2 pb-0 clash-display-regular'>Bookings</li>              
                 <li className='md:pb-2 pb-0 clash-display-regular'>Blogs</li>              
                </ul>
           </div>
           <div className='w-[17%]'>
                <div className='font-bold md:mb-5 mb-1 mt-1 md:text-2xl text-xs clash-display-medium'>Legal</div>
                <ul className='text-[6px] md:text-[16px]'>
                 <li className='md:pb-2 pb-0 clash-display-regular'>Terms of use</li>
                 <li className='md:pb-2 pb-0 clash-display-regular'>Privacy Policy</li>
                 <li className='md:pb-2 pb-0 clash-display-regular'>Cookie Policy</li>              
                </ul>
           </div>
           <div className='w-[20%]'>
                <div className='font-bold md:mb-5 mb-1 mt-1 md:text-2xl text-xs clash-display-medium'>Products</div>
                <ul className='text-[6px] md:text-[16px]'>
                 <li className='md:pb-2 pb-0 clash-display-regular'>Take Tour</li>
                 <li className='md:pb-2 pb-0 clash-display-regular'>Live Chat</li>
                 <li className='md:pb-2 pb-0 clash-display-regular'>Reviews</li>              
                </ul>
           </div>
           <div className='w-[25%] ml-[4%]'>
                <div className='font-bold md:mb-5 mb-1 md:text-2xl mt-1 text-xs clash-display-medium'>Newsletter</div>
                <ul className='text-[6px] md:text-[16px]'>
                 <li className='md:pb-2 pb-0 clash-display-regular'>Stay Up to Date</li>
                </ul>
                <div className='flex flex-col md:flex-row'>
                    <input type="text" placeholder='Your Email' className='mt-1 border-2 rounded-md border-red-500  text-sm md:text-base md:w-32 w-20 h-6 md:h-10'/>
                    <div className='mt-1 bg-black clash-display-regular flex justify-center items-center rounded-md text-sm md:text-base md:w-32 w-20 h-6 md:h-10 text-white transition-all duration-300 sm:hover:text-lg hover:text-sm'>
                         <Link href="/downloads">Subscribe</Link>
                    </div>
                </div>
           </div>
       </div>
       <div className="custom-line w-full mx-auto mt-[8%] mb-[4%]"></div>
       <div className=' mb-[7%] text-center text-xs md:text-base clash-display-regular'>Copyright 2022 uifry.com all rights reserved</div>
    </div>
  )
}

export default Footer