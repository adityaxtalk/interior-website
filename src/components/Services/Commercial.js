import React from 'react'

const Commercial = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-white/[0.06] mx-auto my-20 mb-40 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-8'>
    <div className='lg:top-20 relative lg:col-span-1 col-span-2' data-aos="fade-up-right" data-aos-duration="3000">
        <h3 className='text-3xl md:text-4xl font-bold'>Commercial</h3>
        <p className='leading-relaxed text-2xl py-6'>
            Our specialization extends to Commercial Renovations & Remodels, Commercial Furninshing, and Commercial Tenant Improvements, 
            completely transforming the appearance of your commercial space, which never grows old. Let your character and attitude 
            permeate your commercial environment.
        </p>

    </div>
    <div className='grid grid-cols-2 col-span-2 gap-2' data-aos="fade-up-left" data-aos-duration="3000">
    <img  className='object-contain w-full h-full p-2' src="https://raw.githubusercontent.com/adityaxtalk/interior-website-images/main/commercial/commercial-kasturi-resort.png" alt="commercial"/>
        <img  className='object-contain w-full h-full p-2' src="https://raw.githubusercontent.com/adityaxtalk/interior-website-images/main/commercial/commercial-jewellery-store.png" alt="commercial"/>
        <img  className='object-contain w-full h-full p-2' src="https://raw.githubusercontent.com/adityaxtalk/interior-website-images/main/commercial/commercial1.png" alt="commercial"/>
        <img  className='object-contain w-full h-full p-2' src="https://raw.githubusercontent.com/adityaxtalk/interior-website-images/main/commercial/commercial2.png" alt="commercial"/>
    </div>
</div>
  )
}

export default Commercial