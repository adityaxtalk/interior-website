import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Heading = () => {
  return (
    <div className='max-w-[1256px] mx-auto w-full'>
        <div className='relative p-4'>
            <p className="w-full md:absolute z-10 top-[30%] md:right-[15%] lg:right-[40%] max-w-[650px] leading-8 bg-[#252926]/[.66] text-2xl mb-4 mt-32" data-aos="fade-up-right" data-aos-duration="3000">
                <span className='text-3xl font-bold'>Our Story</span> Founded in 2022 by the visionary architect Utkarsh Jain, Utkarsh Jain Architects is dedicated to redefining the way we perceive and inhabit spaces. Our firm stands at the forefront of innovation, creativity, and excellence in both architecture and interior design. We are committed to transforming projects into immersive, functional, and aesthetically pleasing experiences.
                  
            </p>
            <img  className='w-full h-full object-contain ml-auto relative md:max-w-[65%] max-h-[550px] mt-48' src={"https://raw.githubusercontent.com/adityaxtalk/interior-website-assets/main/FOUNDER'S%20IMAGES/FOUNDER.png"} alt="Founders" data-aos="fade-left" data-aos-duration="3000"/>
        </div>
    </div>
  )
}

export default Heading