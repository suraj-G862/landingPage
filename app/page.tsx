import React from 'react';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AdvantagesSection from './components/AdvantagesSection';
import CostomizableSection from './components/CostomizableSection';
import FAQ from './components/FAQ';

import Image from 'next/image';
import './style/dots.css'
import Testimonial from './components/Testimonial';

export default function Home() {
  return (
    <div className="h-full w-full ">
        <Navbar/>
        <section className='h-auto w-full  right-0 left-0 '>
            <HeroSection/>
            <FeaturesSection/>
            <AdvantagesSection/>
            <CostomizableSection/>
            <Testimonial/>
            <FAQ/>
            <div className='w-full px-[10%] mt-[5%]'>
               <Image src={"/getstarted.png "} alt='logo' width={1200} height={100}/>
            </div>
            <Footer/>
        </section>
    </div>
  );    
}
