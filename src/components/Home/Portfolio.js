import React from 'react'
import { Link } from 'react-router-dom';


const Portfolio = () => {
  return (
    <div>
        <div className='max-w-full bg-white m-auto py-16 grid lg:grid-cols-2 gap-4'>
            <div className="md:mx-12 grid grid-cols-2 grid-rows-6 h-[80vh]">
                <img  className='row-span-3 object-cover w-full h-full p-2' src={"https://raw.githubusercontent.com/adityaxtalk/interior-website-assets/main/5%20IMAGES/01.jpg"} alt="Duplex Scheme at Rohit Nagar"/>
                <img  className='row-span-2 object-cover w-full h-full p-2' src={"https://raw.githubusercontent.com/adityaxtalk/interior-website-assets/main/5%20IMAGES/02.jpg"} alt="Mr. Singhs Residence"/>
                <img  className='row-span-2 object-cover w-full h-full p-2' src={"https://raw.githubusercontent.com/adityaxtalk/interior-website-assets/main/5%20IMAGES/03.png"} alt="Godha Residence"/>
                <img  className='row-span-3 object-cover w-full h-full p-2' src={"https://raw.githubusercontent.com/adityaxtalk/interior-website-assets/main/5%20IMAGES/04.png"} alt="Living area for Singh Residence"/>
                <img  className='row-span-2 object-cover w-full h-full p-2' src={"https://raw.githubusercontent.com/adityaxtalk/interior-website-assets/main/5%20IMAGES/05.png"} alt="Mr. Lalchani Residence"/>
            </div>
            <div className='flex flex-col h-full justify-center px-4'>
                <p className='uppercase text-[#252926] mb-4 text-2xl'>Built to Last</p>
                <h3 className='text-3xl md:text-4xl font-bold'>A place named HOME</h3>
                <p className='w-4/5 leading-relaxed text-[#252926] text-2xl py-6'>
                    We turn dreams into exquisitely designed living realistics. Our passion lies in curating spaces that go beyond
                    aesthetics, crafting homes that are not just harmonious but also irresistibly inviting.
                </p>
                <Link to="/projects" className='bg-transparent text-xl my-8 w-48 px-auto font-bold hover:bg-[#af8c53]  hover:text-[#253926] py-2 px-4 border border-[#af8c53] hover:border-transparent rounded-full mr-8'>
                    View Our Work
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Portfolio;