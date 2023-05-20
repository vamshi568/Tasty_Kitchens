import React from 'react'
import { FaPinterestSquare,FaFacebookSquare,FaRegCopyright } from "react-icons/fa";
import { AiFillInstagram,AiFillTwitterSquare } from "react-icons/ai";

const Foater = () => {
  return (
    

    <div className='text-white text-center  flex flex-col items-center bg-[#0F172A]'>
        <div className='flex justify-center gap-5 mt-24 mb-6 items-center'>

<img src='/Vector.svg' alt='logo' className=''/>
<h1 className='italic text-3xl font-bold'>Tasty Kitchens</h1>
        </div>
<p className="mb-1 font-['DM Sans'] text-lg sm:text-2xl font-normal ">The only thing we are serious about is food</p>
<p className="mb-1 font-['DM Sans'] text-lg sm:text-2xl font-normal">Contact us on</p>
<div className='flex mt-12 gap-10 mb-24 text-4xl'>

<FaPinterestSquare/>
<AiFillInstagram/>
<AiFillTwitterSquare/>
<FaFacebookSquare/>
</div>
<a className='w-full text-[#ffffff6f] text-right bg-[#0b101e]' href='https://github.com/vamshi568' target='_blank'>

<p className='font-semibold pr-1'>Copyright <span><FaRegCopyright className='inline'/></span> 2023 Vamshi </p>
</a>



    </div>
    
  )
}

export default Foater