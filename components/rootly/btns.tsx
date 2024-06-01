import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoPricetagsOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";

const Btns = ({title, index}) => {

  if(index == 0){
    return (
    <div className='transition-all duration-500 ease-in-out group border border-slate-50 rounded-full p-3 cursor-pointer flex flex-row items-center justify-center absolute top-0 m-5 sm:m-20 hover:outline outline-1 outline-slate-50 outline-offset-4 hover:bg-slate-50 hover:shadow-slate-50 shadow-lg'>
        <IoHomeOutline className='transition-all duration-500 ease-in-out text-slate-50 text-2xl group-hover:text-stone-900'/>
        <h1 className="transition-all duration-500 ease-in-out text-slate-50 font-bold tracking-widest group-hover:text-stone-900">{title}</h1>
    </div>
    )
  }else if(index == 1){
    return(
      <div className='transition-all duration-500 ease-in-out group border border-slate-50 rounded-full p-3 cursor-pointer flex flex-row items-center justify-center absolute top-0 m-5 sm:m-20 hover:outline outline-1 outline-slate-50 outline-offset-4 hover:bg-slate-50 hover:shadow-slate-50 shadow-lg'>
          <FaRegAddressCard className='transition-all duration-500 ease-in-out text-slate-50 text-2xl group-hover:text-stone-900'/>
          <h1 className="transition-all duration-500 ease-in-out text-slate-50 font-bold tracking-widest group-hover:text-stone-900">{title}</h1>
      </div>
    )
  }else if(index == 2){
    return(
      <div className='transition-all duration-500 ease-in-out group border border-slate-50 rounded-full p-3 cursor-pointer flex flex-row items-center justify-center absolute top-0 m-5 sm:m-20 hover:outline outline-1 outline-slate-50 outline-offset-4 hover:bg-slate-50 hover:shadow-slate-50 shadow-lg'>
          <IoPricetagsOutline className='transition-all duration-500 ease-in-out text-slate-50 text-2xl group-hover:text-stone-900'/>
          <h1 className="transition-all duration-500 ease-in-out text-slate-50 font-bold tracking-widest group-hover:text-stone-900">{title}</h1>
      </div>
    )
  }else if(index == 3){
    return(
      <div className='transition-all duration-500 ease-in-out group border border-slate-50 rounded-full p-3 cursor-pointer flex flex-row items-center justify-center absolute top-0 m-5 sm:m-20 hover:outline outline-1 outline-slate-50 outline-offset-4 hover:bg-slate-50 hover:shadow-slate-50 shadow-lg'>
          <CiLocationOn className='transition-all duration-500 ease-in-out text-slate-50 text-2xl group-hover:text-stone-900'/>
          <h1 className="transition-all duration-500 ease-in-out text-slate-50 font-bold tracking-widest group-hover:text-stone-900">{title}</h1>
      </div>
    )
  }else{
    <div className='transition-all duration-500 ease-in-out group border border-slate-50 rounded-full p-3 cursor-pointer flex flex-row items-center justify-center absolute bottom-0 m-5 sm:m-20 hover:outline outline-1 outline-slate-50 outline-offset-4 hover:bg-slate-50 hover:shadow-slate-50 shadow-lg'>
        <h1 className="transition-all duration-500 ease-in-out text-slate-50 font-bold tracking-widest group-hover:text-stone-900">{title}</h1>
    </div>
  }
  
}

export default Btns
