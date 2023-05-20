"use client"
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  
  return (
    <div className='flex h-screen flex-col justify-center items-center'>

      <img src='/erroring.svg' alt='error'/>
      <h1 className="text-[#1E293B] font-medium mt-10 mb-3 text-3xl">Page Not Found</h1>
      <p className="text-[#64748B]  text-base">We are sorry, the page you requested could not be found.</p>
      <p className="text-[#64748B] mb-4 text-base">Please go back to the homepage</p>
      <Link href="/" >
          <button className="text-white bg-[#F7931E] py-2 px-4 rounded-lg" >Home Page</button>
          </Link>
    </div>
  )
}

export default NotFound