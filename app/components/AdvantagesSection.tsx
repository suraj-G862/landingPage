import React from 'react'
import Image from 'next/image';
import '../../public/Fonts/WEB/css/clash-display.css'

const AdvantagesSection = () => {
  return (
    <div className='flex h-full w-full mt-[6%]'>
              <div className='w-[50%] ml-[5%] '>
                 <div className='text-xs mt-[10%] md:text-sm clash-display-medium text-red-500'>ADVANTAGES</div>
                 <div className='text-xl md:text-6xl clash-display-medium font-bold'>Why choose Uifry?</div>
                 <div className='md:my-8 my-2'>
                     <div className='absolute -mt-[10%] ml-[80%]'><Image src={"/StarL.png "} alt='logo' width={20} height={20}/></div>
                     <div className='md:mb-3 clash-display-medium font-bold flex text-sm md:text-xl whitespace-nowrap'> <Image className='w-5 md:w-8 h-5 md:h-8 -mt-1 ' src={"/logo4.png"} alt='logo' width={25} height={100}/> Clever Notifications</div>
                     <p className=' md:w-[80%] font-bold clash-display-regular opacity-60 text-xs md:text-base'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                 </div>
              </div>
              <div className=' w-[40%] relative my-auto'>
                  <div className='absolute mt-[25%] -ml-[10%]'><Image src={"/redyellowcircle.png "} alt='logo' width={500} height={100}/></div>
                  <div className='absolute left-[20%]'><Image src={"/Hero6.png "} alt='logo' width={500} height={100}/></div>
                  <div className='w-full'><Image src={"/Hero5.png "} alt='logo' width={600} height={100}/></div>
              </div>
          </div>
  )
}

export default AdvantagesSection