import React from 'react'
import { HiDesktopComputer } from 'react-icons/hi'
import { MdOutlineAppSettingsAlt, MdOutlineArchitecture } from 'react-icons/md'
import { RiLayout3Fill, RiMailFill } from 'react-icons/ri'

const Services = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-8 xl:p-20 gap-8 md:gap-20'>
        <div className='flex flex-col gap-4'>
            <h1 className='text-[40px] font-bold '>How can we help you</h1>
            <p className='text-[20px] text-gray-500'>Follow our newsletter. We will regularly update latest project and availability.</p>
        <form action="#" className='w-full'>
            <div className='relative' >
                <RiMailFill  className='absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl'/>
                <input type="text"  className='bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none w-full' placeholder='Enter your email address'/>
                <button type="submit" className='absolute font-semibold py-2 px-6 text-white rounded-xl bg-primary top-1/2 -translate-y-1/2 right-3'>Subscribe</button>
            </div>
        </form>
        </div>
        {/* Services */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col gap-2' >
            <RiLayout3Fill className='text-4xl text-primary bg-secondary p-2 box-content rounded-xl' />
            <h3 className='text-[20px] font-bold'>UI/UX Design</h3>
            <p className='text-gray-500 '>Sometimes features require a short description</p>
        </div>
        <div className='flex flex-col gap-2' >
            <MdOutlineArchitecture className='text-4xl text-primary bg-secondary p-2 box-content rounded-xl' />
            <h3 className='text-[20px] font-bold'>Logo Branding</h3>
            <p className='text-gray-500 '>Sometimes features require a short description</p>
        </div>
        <div className='flex flex-col gap-2' >
            <MdOutlineAppSettingsAlt className='text-4xl text-primary bg-secondary p-2 box-content rounded-xl' />
            <h3 className='text-[20px] font-bold'>App Design</h3>
            <p className='text-gray-500 '>Sometimes features require a short description</p>
        </div>
        <div className='flex flex-col gap-2' >
            <HiDesktopComputer className='text-4xl text-primary bg-secondary p-2 box-content rounded-xl' />
            <h3 className='text-[20px] font-bold'>Website Design</h3>
            <p className='text-gray-500 '>Sometimes features require a short description</p>
        </div>
        </div>
    </div>
  )
}

export default Services