import React from 'react'
import Image from 'next/image';
import '../../public/Fonts/WEB/css/clash-display.css'
import { promises as fs } from 'fs';

type Feature = {
  title: string;
  description: string;
};

const  FeaturesSection = async () => {
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
  const data = JSON.parse(file);
  const features= data.features;
  return (
    <div className='flex h-full w-full'>
              <div className='ml-[5%] w-[40%] relative my-auto'>
              <div className='absolute  mt-[5%] -ml-[5%] '><Image src={"/Star1.png "} alt='logo' width={30} height={20}/></div>
                 <div className='absolute mt-[10%] -ml-[10%]'><Image src={"/redyellowcircle.png "} alt='logo' width={500} height={100}/></div>
                  <div className='absolute left-[20%]'><Image src={"/Hero6.png "} alt='logo' width={500} height={100}/></div>
                  <div className='w-full'><Image src={"/Hero5.png "} alt='logo' width={600} height={100}/></div>
              </div>
              <div className='w-[50%] ml-2 '>
                 <div className='text-xs mt-14 md:text-sm clash-display-medium text-red-500'>FEATURES</div>
                 <div className='text-xl md:text-6xl clash-display-medium font-bold'>Uifry Premium</div>
                 {features.map((feature : Feature) => (
                   <div className="md:my-8 my-2" key={feature.title}>
                     <div className="md:mb-3 -mb-1 clash-display-medium font-bold flex text-xs md:text-base">
                       <Image
                         className="w-3 md:w-6 h-3 md:h-6 mr-1"
                         src="/logo1.png"
                         alt="logo"
                         width={25}
                         height={100}
                       />
                       {feature.title}
                     </div>
                     <p className="md:w-[80%] font-bold clash-display-light opacity-60  md:text-[15px] text-[10px]">
                       {feature.description}
                     </p>
                   </div>
                 ))}
              </div>
          </div>
  )
}

export default FeaturesSection