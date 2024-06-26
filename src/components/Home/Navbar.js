import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const links=["Home", "About", "Services", "Portfolio", "Contact"];
    const [nav, setNav] = useState(false);
    const handleNav = ()=> {
        setNav(!nav);
        if (nav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow="scroll";
        }
    }
  return (
    <div className='absolute z-50 w-full flex justify-between px-10 py-8 items-center'>
        <h1 className='font-serif font-bold text-2xl z-20'>
            <NavLink to="/" style={{ fontFamily: 'Bahnschrift, sans-serif' }}>Utkarsh Jain Architects</NavLink>
        </h1>
        <AiOutlineMenu onClick={handleNav} className='z-20 cursor-pointer' size={35}/>

        <div className={nav ? 'ease-in-out duration-300 fixed left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-50' : 'absolute top-0 h-screen left-[-100%] ease-in-out duration-300 z-50'}>
          <ul className="flex flex-col fixed w-full h-full items-center justify-center">
             {links.map(link=> <li key={link} className="font-bold text-3xl p-8 uppercase hover:border-b border-[#af8c53] hover:tracking-widest">
              <NavLink to={`/${link.toLowerCase()}`}>{link}</NavLink>
             </li>)}
          </ul>
        </div>   
    </div>
  )
  
}

export default Navbar