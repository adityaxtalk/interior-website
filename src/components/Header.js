import React, {  useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Header = () => {
    const links=["Home", "About", "Services", "Projects", "Contact"];
    const [nav, setNav] = useState(false);
    const handleNav = ()=> {
        const isOpenNav=nav;
        setNav(prev=> !prev);
        if (!isOpenNav) {
          document.body.style.overflow = 'hidden';
      } else {
          document.body.style.overflow="scroll";
      }  
    }

  return (
    <div className='absolute z-50 w-full flex justify-between px-10 py-8 items-center'>
        <h1 className='font-serif font-bold text-2xl z-20'>
            <Link to="/"><img  src='whitelogo.png' className="w-7 h-7 inline" alt="logo"/> Utkarsh Jain Architects</Link>
        </h1>
        <AiOutlineMenu onClick={handleNav} className='z-20 cursor-pointer' size={35}/>

        <div className={nav ? 'ease-in-out duration-300 fixed left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-50' : 'absolute top-0 h-screen left-[-100%] ease-in-out duration-300 z-50'}>
          <ul className="flex flex-col fixed w-full h-screen items-center justify-center">
            <li className={nav ? "font-bold text-3xl p-8 uppercase cursor-pointer hover:tracking-widest absolute top-0 right-0" : "font-bold text-3xl p-8 uppercase cursor-pointer hover:tracking-widest"} onClick={handleNav}>X</li>
             {links.map(link=> <li key={link} onClick={handleNav}className="font-bold text-3xl p-8 uppercase hover:border-b border-[#af8c53] hover:tracking-widest">
              <Link to={`/${link==="Home" ? "": link.toLowerCase()}`}>{link}</Link>
             </li>)}
          </ul>
        </div>   
    </div>
  )
}

export default Header