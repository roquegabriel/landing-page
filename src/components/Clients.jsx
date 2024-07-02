import React from 'react'
import googleLogo from '../assets/images/google-logo.png'
import amazonLogo from '../assets/images/amazon-logo.png'
import airbnbLogo from '../assets/images/airbnb-logo.png'
import shopifyLogo from '../assets/images/shopify-logo.png'
import ibmLogo from '../assets/images/ibm-logo.png'


const Clients = () => {
  return (
    <div className='bg-gray-100 p-8 flex flex-col items-center justify-center gap-8 mt-8 xl:mt-0'>
        <h1 className='text-2xl font-medium text-gray-800 text-center'>Trusted by greatest companies</h1>
        <div className='flex flex-col md:flex-row items-center gap-20 flex-wrap justify-center'>
            <img src={googleLogo} alt="Google logo"  className='w-40 bg-gray-100' />
            <img src={amazonLogo} alt="Google logo"  className='w-40 bg-gray-100' />
            <img src={airbnbLogo} alt="Google logo"  className='w-40 bg-gray-100' />
            <img src={shopifyLogo} alt="Google logo"  className='w-40 bg-gray-100' /> 
            <img src={ibmLogo} alt="Google logo"  className='w-40 bg-gray-100' />
        </div>
    </div>
  )
}

export default Clients