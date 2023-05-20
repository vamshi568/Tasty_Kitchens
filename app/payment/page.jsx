"use client"
import Foater from '@components/Foater';
import Nav from '@components/Nav';
import Link from 'next/link'
import React from 'react'
import { TiTick } from "react-icons/ti";
import { activehome } from '@app/globalredux/slices/slice';
import { useDispatch } from 'react-redux';

const Payment = () => {
  const dispatch=useDispatch()
  return (
    <>
    <Nav/>
    <div className='flex flex-col justify-center items-center h-[90vh]'>
        <TiTick className='text-[#22C55E] text-6xl'/>
        <h1 className='text-[#1E293B] mt-10 mb-6 font-medium text-2xl'>Payment Successful</h1>
        <p className='text-[#64748B] text-base'>Thank you for ordering </p>
        <p className='text-[#64748B] text-base mb-8'>Your payment is successfully completed</p>
        <Link href={'/home'}>
          <button className="text-white bg-[#F7931E] py-2 px-4 rounded-lg" onClick={()=>dispatch(activehome())}>Go To Home Page</button>
          </Link>
    </div>
    <Foater/>
    </>
  )
}

export default Payment