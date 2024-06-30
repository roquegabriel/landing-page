import React from 'react'
import { RiCheckboxBlankCircleFill } from 'react-icons/ri'

const Header = () => {
    return (
        <header className='flex w-full items-center p-4 h-[10vh] bg-red-300'>
            <div className='w-1/6 text-center'>
                <a href='#' className='text-2xl font-bold relative bg-white px-1'> Power <span className='text-primary text-5xl'>.</span>
                    <RiCheckboxBlankCircleFill className='absolute -left-3 -bottom-3 text-primary -z-10' /></a>
            </div>
            <nav className='flex-1 flex items-center justify-center gap-10'>
                <a href="#">Home</a>
                <a href="#">About us</a>
                <a href="#">Services</a>
                <a href="#">Products</a>
            </nav>
        </header>
    )
}

export default Header