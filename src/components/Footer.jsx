import React from 'react'
import { RiCheckboxBlankCircleFill, RiFacebookLine, RiGithubLine, RiInstagramLine, RiTwitterLine } from 'react-icons/ri'

const Footer = () => {
    return (
        <footer className='bg-footer p-8 xl:p-20 relative -z-10'>
            <div className='flex flex-col md:flex-row items-center gap-4 justify-between border-b p-8 border-gray-500'>
                {/* Logo */}
                <div className='w-1/6'>
                    <a href='#' className='text-2xl font-bold relative bg-footer px-1 text-white'> Power<span className='text-primary text-5xl'>.</span>
                        <RiCheckboxBlankCircleFill className='absolute -left-3 -bottom-3 text-primary -z-10' /></a>
                </div>
                {/* Social media */}
                <ul className='flex items-center gap-8'>
                    <li><a href="#" className='text-white block p-4 bg-primary rounded-full'><RiInstagramLine /></a></li>
                    <li><a href="#" className='text-white block p-4 bg-primary rounded-full'><RiFacebookLine /></a></li>
                    <li><a href="#" className='text-white block p-4 bg-primary rounded-full'><RiTwitterLine /></a></li>
                    <li><a href="#" className='text-white block p-4 bg-primary rounded-full'><RiGithubLine /></a></li>

                </ul>
            </div>
            <div className='mt-8'>
                <h3 className=' text-center md:text-left text-lg font-bold text-white'>Company</h3>
                <nav className='mt-4 flex flex-col md:flex-row gap-4 items-center justify-between'>
                    <a href="#" className='text-gray-300 mt-4 hover:text-white transition-colors'>About us</a>
                    <a href="#" className='text-gray-300 mt-4 hover:text-white transition-colors'>Press</a>
                    <a href="#" className='text-gray-300 mt-4 hover:text-white transition-colors'>Investor</a>
                    <a href="#" className='text-gray-300 mt-4 hover:text-white transition-colors'>Events</a>
                    <a href="#" className='text-gray-300 mt-4 hover:text-white transition-colors'>Terms of use</a>
                    <a href="#" className='text-gray-300 mt-4 hover:text-white transition-colors'>Privacy policy</a>
                    <button type="submit" className='font-semibold py-2 px-6 text-white rounded-xl bg-primary'>Contact us</button>
                </nav>
            </div>
            <div className='mt-20'>
                <p className='text-gray-300 text-center'>&copy; RQ 2024 - All rights reserved</p>
            </div>

        </footer>
    )
}

export default Footer