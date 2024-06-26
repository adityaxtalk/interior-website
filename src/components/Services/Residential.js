import React from 'react'
const Residential = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-white/[0.06] mx-auto my-20 mb-40 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-8'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2' data-aos="fade-up-right" data-aos-duration="3000">
            <h3 className='text-3xl md:text-4xl font-bold'>Residential</h3>
            <p className='leading-relaxed text-2xl py-6'>
                Our expertise, from Residential Remodel to Residential Furninshing, delivers
                inspirational, meticulously well-considered, comfortable, and high-quality
                design that bridges the past and embraces the present. Let elegance meet innovation.
            </p>

        </div>
        <div className='grid grid-cols-2 col-span-2 gap-2' data-aos="fade-up-left" data-aos-duration="3000">
            <img  className='object-contain w-full h-full' alt="residential1" src={"https://raw.githubusercontent.com/adityaxtalk/interior-website-images/main/residential/residential1.png"}/>
            <img  className='object-contain w-full h-full' alt="residential2" src={"https://raw.githubusercontent.com/adityaxtalk/interior-website-images/main/residential/residential2.png"}/>
            <img  className='object-contain w-full h-full' alt="residential3" src={"https://raw.githubusercontent.com/adityaxtalk/interior-website-images/main/residential/residential3.png"}/>
            <img  className='object-contain w-full h-full' alt="residential4" src={"https://raw.githubusercontent.com/adityaxtalk/interior-website-images/main/residential/residential4.png"}/>
        </div>
    </div>
  )
}

export default Residential