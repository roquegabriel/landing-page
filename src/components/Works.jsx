import firstWork from '../assets/images/work1.png'
import secondWork from '../assets/images/work2.png'
import thirdWork from '../assets/images/work3.png'
import fourthWork from '../assets/images/work4.png'
import fifthWork from '../assets/images/work5.png'

import React from 'react'

const Works = () => {
    return (
        <div className=' p-8 xl:p-20'>
            <div className='mb-8'>
                <h1 className='text-[40px] font-black'>We create world-class digital products</h1>
                <p className='text-xl text-gray-500'>By information about design the world to the best instructors</p>
            </div>
            {/* Works */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='flex flex-col gap-2'>
                    <img src={firstWork} alt="Work one" className='w-full h-[600px] object-cover rounded-3xl mb-4' />
                    <p className='text-gray-500'>App design - June 20, 2023</p>
                    <h3 className='text-2xl font-bold'>App Redesign</h3>
                    <p className="text-gray-500">
                        By information about design the world to the best instructors
                    </p>
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
                    <div>
                        <img src={secondWork} alt="Second work" className='w-full rounded-3xl h-56 object-cover' />
                        <p className='text-gray-500'>App design - June 20, 2023</p>
                        <h3 className='text-2xl font-bold'>Redesign channel website landing page</h3>
                    </div>
                    <div>
                        <img src={thirdWork} alt="Third work" className='w-full rounded-3xl h-56 object-cover' />
                        <p className='text-gray-500'>App design - June 20, 2023</p>
                        <h3 className='text-2xl font-bold'>New locator app for a new company</h3>
                    </div>
                    <div>
                        <img src={fourthWork} alt="Fourth work" className='w-full rounded-3xl h-56 object-cover' />
                        <p className='text-gray-500'>App design - June 20, 2023</p>
                        <h3 className='text-2xl font-bold'>Rental rooms web app platform</h3>
                    </div>
                    <div>
                        <img src={fifthWork} alt="Fifth work" className='w-full rounded-3xl h-56 object-cover' />
                        <p className='text-gray-500'>App design - June 20, 2023</p>
                        <h3 className='text-2xl font-bold'>Calendar app for big SASS Company</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Works