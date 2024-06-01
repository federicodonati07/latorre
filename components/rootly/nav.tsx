import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoPricetagsOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import { PiList } from "react-icons/pi";
import Link from 'next/link';

const Nav = () => {
  return (
    <div className='text-center text-slate-200 tracking-widest'>
        <div className='group transition-all duration-500 ease-in-out group border border-slate-50 rounded-full p-3 cursor-pointer flex flex-col items-center justify-center bg-slate-50 sm:bg-transparent sm:hover:outline sm:hover:outline-1 sm:outline-slate-50 sm:outline-offset-4 sm:hover:bg-slate-50 sm:hover:shadow-slate-50 shadow-lg sm:hover:m-10 sm:group-hover/title:scale-125'>
            <PiList className='hidden sm:block text-center transition-all duration-500 ease-in-out text-2xl text-stone-900 sm:text-slate-50 sm:group-hover:text-stone-900'/>
            <PiList className='smalldev block sm:hidden text-center transition-all duration-500 ease-in-out text-2xl text-stone-900 sm:text-slate-50 sm:group-hover:text-stone-900'/>
            <div className='block sm:hidden text-stone-900 sm:group-hover:block  sm:group-hover:flex-col'>
                <Link href="/where">
                    <div className='transition-all text-cenetr items-cetner justify-center flex flex-row duration-100 ease-in-out m-5 hover:border-b-2 border-stone-900 hover:shadow-stone-900 shadow-2xl'>
                        <CiLocationOn className='text-2xl mx-2'/>
                        <h1>DOVE</h1>
                    </div>
                </Link>
                <Link href="/who">
                    <div className='transition-all text-cenetr items-cetner justify-center flex flex-row duration-100 ease-in-out m-5 hover:border-b-2 border-stone-900'>
                        <FaRegAddressCard className='text-2xl mx-2'/>
                        <h1>CHI SIAMO</h1>
                    </div>
                </Link>
                <Link href="/book">
                    <div className='transition-all text-cenetr items-cetner justify-center flex flex-row duration-100 ease-in-out m-5 hover:border-b-2 border-stone-900'>
                        <IoPricetagsOutline className='text-2xl mx-2'/>
                        <h1>PRENOTA/PREZZI</h1>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Nav