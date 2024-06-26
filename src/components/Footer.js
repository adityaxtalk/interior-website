import React from 'react'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mt-auto w-full pt-[26rem] px-2 py-2 lg:pt-0 text-xl'>
        <div className='flex flex-col max-w-[1140px] px-2 py-4 mx-auto justify-between sm:flex-row text-center'>
            <p className='py-4 text-[#af8c53]'>
                &copy; Copyright {new Date().getFullYear()} by{' '}
                <span className='font-serif'>Utkarsh Jain Architects</span> All rights reserved.
            </p>
            <div className='text-[#af8c53] flex justify-end sm:w-[300px] pt-4 text-2xl'>
            <a target='_blank' rel="noreferrer" className="mx-2" href='https://www.linkedin.com/company/utkarsh-jain-architects/'><FaLinkedinIn/></a>
                <a target='_blank' rel="noreferrer" href='https://www.instagram.com/_utkarshjainarchitects_?igsh=b244azYzc2t4ZW1s&utm_source=qr'><FaInstagram/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer