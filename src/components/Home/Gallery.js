import React, { useState } from 'react'
import { slides }from '../../slides'
import {BsChevronCompactLeft, BsChevronCompactRight}from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
const Gallery = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const prevSlide =()=>{
        const isFirstSlide = currentSlide === 0;
        const newSlide = isFirstSlide ? slides.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide); 
    }

    const nextSlide = () => {
        const isLastSlide = currentSlide === slides.length - 1;
        const newSlide = isLastSlide ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    }

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    }
    return (
        <div className='mt-8 mx-auto'>
            <div className='max-w-[1256px] h-[600px] w-full  py-16 px-4 relative group'>
        <div className='w-full h-full rounded-2xl bg-center bg-contain bg-no-repeat duration-500' style={{backgroundImage: `url(${slides[currentSlide].url})`}}/>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 group-hover:bg-[#252926]/60 cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 group-hover:bg-[#252926]/60 cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>
        <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, index)=> (
                <div className='text-2xl cursor-pointer' key={index} onClick={()=> goToSlide(index)}>
                    <RxDotFilled/>
                </div>
            ))}
        </div>
    </div>
        </div>
    
  )
}

export default Gallery;