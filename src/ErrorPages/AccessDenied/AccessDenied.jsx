import React from 'react'
import AccessDeniedSvg from '../../Assets/svgs/AccessDenied.svg'
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const AccessDenied = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='h-screen flex flex-col justify-center items-center bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600'>
        <div className='md:h-[50vh] h-[40vh]'>
        <img src={AccessDeniedSvg} className='h-full' alt="" />
        </div>
        <p className=' font-semibold text-2xl text-zinc-700'>Access Denied</p>
        <p className='mt-3 text-xl text-zinc-700 text-center'>You don't have permission to access this page </p>
        <div className='flex w-[90%] mx-auto justify-end items-center px-16 mt-8'>
          <div className='text-black rounded-xl bg-amber-100 px-4 py-3 text-xl font-semibold cursor-pointer flex items-center  gap-3' onClick={() => navigate("/") }><IoArrowBackOutline size={26} />Go Back To<span className='text-orange-700 '>Home Page</span> </div>
        </div>
      </div>
    </>
  )
}

export default AccessDenied
