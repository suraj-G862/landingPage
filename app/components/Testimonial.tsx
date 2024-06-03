import React from 'react'
import Image from 'next/image';
import '../../public/Fonts/WEB/css/clash-display.css'
import {promises as fs} from 'fs';

type Testimonial = {
  title: string;
  description: string;
  name: string;
};

const Testimonial = async () => {
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
  const data = JSON.parse(file);
  const testimonials= data.testimonials;
  return (
    <div>
         <div className='flex flex-col justify-center items-center mt-10'>
              <div className='text-red-500 clash-display-regular'>Testimonial </div>
              <div className='font-extrabold md:text-4xl text-xl clash-display-bold'> What Our User Say About Us ?</div>
          </div>
          <div className='flex h-full w-full'>
              <div className='ml-[5%] w-[50%] mt-0 relative my-auto'>
                  <div className='absolute '><Image src={"/Hero7.png "} alt='logo' width={500} height={100}/></div>
                  <div className='absolute  mt-[95%] -ml-[5%] '><Image src={"/Star1.png "} alt='logo' width={20} height={20}/></div> 
              </div>
              <div className='w-[40%] ml-2 '>
                  <div className='md:my-8 my-2'>
                    {testimonials.map((testimonial : Testimonial) => (
                      <div key={testimonial.title}>
                          <div className='md:mb-3  font-bold flex text-sm md:text-xl  clash-display-regular'>{testimonial.title}</div>
                          <p className=' md:w-[80%] font-bold opacity-60 md:text-[15px] text-[10px] lg:text-[20px] clash-display-regular'>{testimonial.description}</p>
                          <div className='mt-5'><Image src={"/people.png "} alt='logo' width={130} height={100}/></div>
                          <div className=' mt-5 font-bold flex text-xs md:text-md whitespace-nowrap clash-display-regular'>{testimonial.name}</div>
                      </div>
                    )
                    )}
                  </div>
              </div>
          </div>

    </div>
  )
}

export default Testimonial