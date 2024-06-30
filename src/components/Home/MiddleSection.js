import React from 'react'

const MiddleSection = () => {
  return (
    <div className='max-w-[1400px] h-[500px] mx-auto my-4 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative mb-4 lg:col-span-1 col-span-2'>
            <h3 className='text-3xl md:text-4xl font-bold'>
                Unleash Your Space's Bold Soul
            </h3>
            <p className='text-2xl pt-6 md:w-[400px]'>
            With our curated blend of architectural elements, bespoke textiles, artisanal furniture, captivating artwork, and timeless antiques, each piece crafted to reflect your distinct story.
            </p>
        </div>
        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img  className='object-cover w-full h-full' src={"_https://raw.githubusercontent.com/adityaxtalk/interior-website-assets/main/unleash1.png"} alt="living-room"/>
            <img  className='object-cover row-span-2 w-full h-full' src={"https://raw.githubusercontent.com/adityaxtalk/interior-website-assets/main/unleash2.png"} alt="living-room"/>
            <img  className='object-cover w-full h-full' src={"https://raw.githubusercontent.com/adityaxtalk/interior-website-assets/main/unleash3.png"} alt="living-room"/>
        </div>
    </div>
  )
}

export default MiddleSection;