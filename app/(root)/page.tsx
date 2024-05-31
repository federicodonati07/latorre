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
      <div className='h-full w-full'>
        

        <div className='flex flex-col items-center justify-center min-h-screen'>
          <div className='z-50 group cursor-pointer'>
            <Link href="/">
              <h1 className='group/title transition-all duration-300 ease-in-out text-6xl text-slate-50 font-extrabold tracking-widest'>
                BAGNI LA TORRE
              </h1>
            </Link>
            <div className='text-center text-slate-200 tracking-widest'>
                <div className='group transition-all duration-500 ease-in-out group border border-slate-50 rounded-full p-3 cursor-pointer flex flex-col items-center justify-center hover:outline outline-1 outline-slate-50 outline-offset-4 hover:bg-slate-50 hover:shadow-slate-50 shadow-lg hover:m-10 group-hover/title:scale-125'>
                    <PiList className='text-center transition-all duration-500 ease-in-out text-2xl text-slate-50 group-hover:text-stone-900'/>
                    <div className='hidden text-stone-900 group-hover:block  group-hover:flex-row'>
                        <div className='transition-all duration-100 ease-in-out m-5 hover:border-b-2 border-stone-900'>
                            <CiLocationOn className='text-2xl'/>
                            <h1>DOVE</h1>
                        </div>
                        <div className='transition-all duration-100 ease-in-out m-5 hover:border-b-2 border-stone-900'>
                            <FaRegAddressCard className='text-2xl'/>
                            <h1>CHI SIAMO</h1>
                        </div>
                        <div className='transition-all duration-100 ease-in-out m-5 hover:border-b-2 border-stone-900'>
                            <IoPricetagsOutline className='text-2xl'/>
                            <h1>PRENOTA/PREZZI</h1>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='text-center transition-all duration-500 ease-in-out text-slate-50 font-extrabold tracking-widest cursor-default'>
              STABILIMENTO BALNEARE
            </h1>
          </div>
          <div className='animate-bounce transition-all duration-500 ease-in-out group border border-slate-50 rounded-full p-3 cursor-pointer flex flex-col items-center justify-center absolute bottom-0 m-20 hover:outline outline-1 outline-slate-50 outline-offset-4 hover:bg-slate-50 hover:shadow-slate-50 shadow-lg'>
                <h1 className='transition-all duration-500 ease-in-out text-slate-50 font-bold tracking-widest group-hover:text-stone-900'>Scopri di più</h1>
                <CiSaveDown1 className='transition-all duration-500 ease-in-out text-2xl text-slate-50 group-hover:text-stone-900'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
