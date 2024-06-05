import React from 'react'
import Link from 'next/link'
import { CiLocationOn } from "react-icons/ci";
import { IoPricetagsOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import { CiSaveDown1 } from "react-icons/ci";
import { PiList } from "react-icons/pi";

const Home = () => {
  return (
    <>
      <div className='h-full w-full select-none'>
        <div className='flex flex-col items-center justify-center min-h-screen'>
          <div className='z-50 group cursor-pointer'>
            <Link href="/">
              <h1 className='group/title text-center transition-all duration-300 ease-in-out text-6xl text-slate-50 font-extrabold tracking-widest'>
                BAGNI LA TORRE
              </h1>
            </Link>
            
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
            <h1 className='text-center transition-all duration-500 ease-in-out text-slate-50 font-extrabold tracking-widest cursor-default'>
              STABILIMENTO BALNEARE
            </h1>
          </div>
          <div className='animate-bounce transition-all duration-500 ease-in-out group border border-slate-50 rounded-full p-3 cursor-pointer flex flex-col items-center justify-center absolute bottom-0 m-10 sm:m-20 hover:outline outline-1 outline-slate-50 outline-offset-4 hover:bg-slate-50 hover:shadow-slate-50 shadow-lg'>
                <h1 className='transition-all duration-500 ease-in-out text-slate-50 font-bold tracking-widest group-hover:text-stone-900'>Scopri di più</h1>
                <CiSaveDown1 className='transition-all duration-500 ease-in-out text-2xl text-slate-50 group-hover:text-stone-900'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
