import React from 'react'
import '../../public/Fonts/WEB/css/clash-display.css'
import {promises as fs} from 'fs';

type FAQ = {
  "question": string;
  "answer": string;
};

const FAQ = async () => {
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
  const data = JSON.parse(file);
  const faqs= data.faqs;
  return (
    <div className='w-full px-[10%] mt-[18%]'>
    <div className='text-xs md:text-sm text-red-500 clash-display-regular' >FAQ</div>
    <div className='font-extrabold  md:text-4xl text-xl mb-9 clash-display-bold' >Frequently Asked Questiion</div>
    <div className='flex   my-auto '>
      <div className='w-[50%] min-w-[300]'>
           { 
           faqs.map((faq : FAQ, index : number) =>
            {const toggle = index % 2 === 0;
            return (
              <div key={faq.question} >
                 <div className={` ${toggle ? 'bg-red-500 text-white' : ''} rounded-md mb-3 p-3`}>
                   <div className='md:mb-3  font-bold flex text-sm md:text-xl clash-display-regular '>{faq.question}</div>
                   <p className=' md:w-[80%]  text-xs md:text-base clash-display-regular '>{faq.answer}</p>
                 </div>
              </div>
            )}
          )}
      </div>
      <div className='w-[50%] min-w-[300]'>
      { 
           faqs.map((faq : FAQ, index : number) =>
            {const toggle = index % 2 === 1;
            return (
              <div key={faq.question} >
                 <div className={` ${toggle ? 'bg-red-500 text-white' : ''} rounded-md mb-3 p-3`}>
                   <div className='md:mb-3  font-bold flex text-sm md:text-xl clash-display-regular '>{faq.question}</div>
                   <p className=' md:w-[80%]  text-xs md:text-base clash-display-regular '>{faq.answer}</p>
                 </div>
              </div>
            )}
          )}
      </div>
      
    </div>
  </div>
  )
}

export default FAQ