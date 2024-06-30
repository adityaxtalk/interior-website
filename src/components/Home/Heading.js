import React from 'react'
import { ReactTyped } from 'react-typed'
import { Link } from 'react-router-dom'
const Heading = () => {
  return (
    <>
      <div className='w-full h-screen'>
        <img  className='top-0 left-0 w-full h-screen object-cover' src="https://raw.githubusercontent.com/adityaxtalk/interior-website-assets/main/home.png" alt="interior-design"/>
        <div className='bg-black/[.75] absolute top-0 left-0 w-full h-screen'/>
          <div className='absolute top-10 w-full h-full flex flex-col justify-center'>
          <div className='left-[10%] md:left-[15%] max-w-[1256px] m-auto absolute p-4'>
             <div className='md:text-7xl sm:text-6xl text-5xl font-bold my-10'>
               <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold text-[#9f8155] my-6'>
                 Experience the unparalled essence of 
               </h1>
               <ReactTyped strings={['Elegance', 'Serenity', 'Eternity']} typeSpeed={120} backSpeed={140} loop/>
             </div>
             <p className='max-w-[550px] py-2 md:text-2xl sm:text-xl text-base mb-6 text-[#A17A43]'>
                Crafting the design that stand the best of the time, bridging the past and future seamlessly
             </p>
             <div className='flex justify-start'>
                <Link to="/contact" className='bg-transparent px-4 hover:text-white text-xl my-8 w-40 md:w-48 font-bold hover:bg-[#af8c53] text-[#af8c53] hover:border-transparent rounded-full mr-8'>
                    Get In Touch
                </Link>
            </div>            
           </div>
          </div>
           
      </div>
    </>
  )
}

export default Heading