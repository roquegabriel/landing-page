import React, { useState } from 'react'
import { RiCheckboxBlankCircleFill, RiCloseLine, RiMenu3Fill } from 'react-icons/ri'

const Header = () => {

    const [showMenu, setShowMenu] = useState(false)


    return (
        <header className='flex w-full items-center py-4 px-8 h-[10vh] z-20 justify-between xl:justify-start'>
            <div className='xl:w-1/6 text-center -mt-4'>
                <a href='#' className='text-2xl font-bold relative bg-white px-1'> Power<span className='text-primary text-5xl'>.</span>
                    <RiCheckboxBlankCircleFill className='absolute -left-3 -bottom-3 text-primary -z-10' /></a>
            </div>
            <nav className={`flex-1 flex items-center justify-center gap-10 fixed xl:static bg-white w-[80%] xl:w-full h-full ${showMenu ? 'left-0' : '-left-full'} top-0 flex-col xl:flex-row transition-all duration-500 md:w-[50%] z-50`}>
                <a href="#">Home</a>
                <a href="#">About us</a>
                <a href="#">Services</a>
                <a href="#">Products</a>
            </nav>
            <button onClick={() => setShowMenu(!showMenu)} className='text-2xl p-2 xl:hidden'>
                {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
            </button>
        </header>
    )
}

export default Header