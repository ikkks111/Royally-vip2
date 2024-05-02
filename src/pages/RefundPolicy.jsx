import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../Components/Navbar'

const RefundPolicy = () => {
  return (
    <>
    <div className='screenseven flex flex-col justify-center items-center'>
    <div className="w-full bg-[#040055] flex-row justify-center items-center py-2">
        <Navbar />
      </div>
        <div className='container py-4 mt-6 px-3 lg:px-0'>
       <div className=' bg-[#040055] text-white py-5 rounded-lg w-full flex items-center justify-center'>
       <h1 className='text-[20px] lg:text-[24px] font-bold pl-5 lg:pl-0'>Cancellation and Refund Policy</h1>
       </div>
        </div>
        </div>
        <Footer/>
        </>
  )
}

export default RefundPolicy