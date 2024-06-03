import React from 'react'
import Image from 'next/image';
import { FaRegCirclePlay } from "react-icons/fa6";
import '../../public/Fonts/WEB/css/clash-display.css'
import { promises as fs } from 'fs';

async function HeroSection() {
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
  const data = JSON.parse(file);
  const hero= data.hero;
  return (
    <div className='h-full w-full flex'>
    <div className='ml-[10%] h-full w-[50%]'>
        <div className=' sm:mt-20 mt-5'>
           {/* <div className='absolute -mt-[8%] ml-[2%] -z-20'><Image src={"/redyellowcircle.png "} alt='logo' width={500} height={100}/></div> */}
           <div className='absolute -mt-[5%] -ml-[5%] '><Image src={"/Star1.png "} alt='logo' width={30} height={20}/></div>
           <h1 className=' text-xl  md:text-6xl font-bold title clash-display-medium'>{hero.headline}</h1>
           <p className='md:text-[15px] text-[10px] w-[100%] mt-2 clash-display-regular '>{hero.subheadline}</p>
           <div className='flex mt-4'>
             <button className='bg-black flex justify-center clash-display-regular items-center rounded-md sm:w-32 w-20 h-6 sm:h-10 text-white whitespace-nowrap text-xs sm:text-base transition-all duration-300 sm:hover:text-lg hover:text-sm  ' >Get Started</button>
             <button className='ml-5 flex justify-center clash-display-regular items-center rounded-md sm:w-32  h-6 sm:h-10 whitespace-nowrap text-xs sm:text-base  transition-all duration-300 sm:hover:text-lg hover:text-sm '><FaRegCirclePlay />Watch Video</button>
           </div>
        </div>
        <div>
           <div className='absolute mt-[5%] ml-[10%] '><Image src={"/StarL.png "} alt='logo' width={30} height={20}/></div>
           <Image src={"/Hero1.png "} alt='logo' width={500} height={100}/>
        </div>
    </div>
    <div className='h-full w-[40%] py-auto'>
     <div className='relative py-auto'>
       <div className='absolute mt-[5%] ml-[80%]'><Image src={"/Star1.png "} alt='logo' width={40} height={20}/></div>
       <div className='absolute mt-[100%]'><Image src={"/StarL.png "} alt='logo' width={30} height={20}/></div>
       <div className='absolute mt-[25%]'><Image src={"/ellipse.png "} alt='logo' width={500} height={100}/></div>
       <div className='absolute mt-6 ml-3 ' ><Image src={"/Hero5.png "} alt='logo' width={500} height={100}/></div>
       <div className='absolute mt-6 ml-14 ' ><Image src={"/Hero4.png "} alt='logo' width={400} height={100}/></div>
       <div className='absolute '><Image src={"/Hero2.png "} alt='logo' width={500} height={100}/></div>
       {/* <div className="oval "></div> */}
     </div>
    </div>
 </div>
  )
}

export default HeroSection