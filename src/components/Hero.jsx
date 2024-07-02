import React from 'react'
import { RiCheckboxBlankCircleFill, RiCheckboxBlankFill, RiPlayFill, RiStarFill } from 'react-icons/ri'
import heroImage from '../assets/images/hero.png'
import figmaLogo from '../assets/images/figma.svg'
import illustratorLogo from '../assets/images/adobe-illustrator.svg'
import xdLogo from '../assets/images/adobe-xd.svg'

const Hero = () => {
    return (
        <section className='m-h-[90vh] grid grid-cols-1 xl:grid-cols-8'>
            {/* Information */}
            <div className='md:col-span-5 flex items-center justify-center p-8 xl:p-16'>
                <div className='flex flex-col gap-8'>
                    <h1 className='text-7xl font-bold leading-[7.5rem]'>
                        Web Design Impactful Digital
                        <span className='text-primary py-2 px-6 border-8 border-primary relative inline-block lg:inline'>
                            Products
                            <RiCheckboxBlankCircleFill className='text-base absolute -left-5 -top-5 text-white p-2 bg-primary rounded-full box-content' />
                            <RiCheckboxBlankCircleFill className='text-base absolute -left-5 -bottom-5 text-white p-2 bg-primary rounded-full box-content' />
                            <RiCheckboxBlankCircleFill className='text-base absolute -right-5 -top-5 text-white p-2 bg-primary rounded-full box-content' />
                            <RiCheckboxBlankCircleFill className='text-base absolute -right-5 -bottom-5 text-white p-2 bg-primary rounded-full box-content' />
                        </span>
                    </h1>
                    {/* Hero text */}
                    <p className='text-gray-500 text-2xl leading-[2.5rem]'>Help find solutions with intitutive and in accordance with client business goals. We provide a high-quality services.</p>
                    {/* Buttons */}
                    <div className='flex items-center gap-4 flex-col md:flex-row'>
                        <button className='w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl font-bold text-xl'>Contact us</button>
                        <button className='w-full xl:w-auto py-2 px-8 rounded-xl text-xl flex items-center gap-4 text-left text-gray-500'>
                            <RiPlayFill className='bg-secondary text-primary rounded-full p-4 box-content' />Watch our <br /> introduction video
                        </button>
                    </div>
                </div>
            </div>
            {/* Image */}
            <div className='relative md:col-span-3 flex items-center justify-center p-8'>
                {/* Content image */}
                <div>
                    <img src={heroImage} alt="Hero" className='w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover xl:-mt-28' />
                    <div className='bg-white flex flex-col justify-center max-w-[250px] mx-auto shadow-lg rounded-lg p-4 gap-2 relative -mt-12'>
                        <div className='flex items-center'>
                            <img src="https://img.freepik.com/foto-gratis/mujer-oriental_1303-5251.jpg" className='h-10 w-10 rounded-full object-cover ring-2 ring-gray-300' alt="Employee picture" />
                            <img src="https://img.freepik.com/foto-gratis/joven-rubia-camiseta-blanca_273609-7146.jpg" className='h-10 w-10 rounded-full object-cover ring-2 ring-gray-300 -ml-4' alt="Employee picture" />
                            <img src="https://img.freepik.com/foto-gratis/mujer-joven-morena-ropa-casual_273609-22632.jpg" className='h-10 w-10 rounded-full object-cover ring-2 ring-gray-300 -ml-4' alt="Employee picture" />
                            <img src="https://img.freepik.com/foto-gratis/apuesto-joven-brazos-cruzados-sobre-fondo-blanco_23-2148222620.jpg" className='h-10 w-10 rounded-full object-cover ring-2 ring-gray-300 -ml-4' alt="Employee picture" />
                        </div>
                        <h2 className='font-bold text-xl tracking-wide'>120+ Employees</h2>
                        <div className='flex items-center gap-2 text-lg text-gray-500'>
                            <RiStarFill className='text-primary' /> 5.0 (3.1k Reviews)
                        </div>

                        <div className='absolute -right-12 -bottom-12 -z-10'>
                            <div className='relative '>
                                <RiCheckboxBlankCircleFill className='text-primary text-8xl mt-' />
                                <div className='text-8xl absolute left-0 top-0 bg-white h-14 w-14'></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Circle */}
                <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] border-[10px] border-primary rounded-full -z-10' >
                    {/* Logos */}
                </div>
                <img src={figmaLogo} alt="figma logo" className='w-10 h-10 md:w-20 md:h-20 object-fill rounded-full bg-black border-l-8 border-gray-600 absolute top-[12%] right-[20%] xl:right-[10%]' />
                <img src={illustratorLogo} alt="illustrator logo" className='w-10 h-10 md:w-20 md:h-20 object-fill rounded-full bg-black border-l-8 border-gray-600 absolute top-[10%] xl:top-[2%] left-[20%] xl:left-[10%]' />
                <img src={xdLogo} alt="Xd logo" className='w-10 h-10 md:w-20 md:h-20 object-fill rounded-full bg-black border-l-8 border-gray-600 absolute bottom-[5%] left-[15%] xl:left-[3%] -rotate-12' />
            </div>
        </section>
    )
}

export default Hero