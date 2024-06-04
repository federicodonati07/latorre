import React from 'react'
import RootLY from '@/components/rootly/rootly'
import Btns from '@/components/rootly/btns'
import Link from 'next/link'
import { FiExternalLink } from "react-icons/fi";
import { ImSpinner9 } from "react-icons/im";

const Where = () => {
  return (
    <>
      <div className='h-full w-full min-h-full select-none'>

        <Link href="/" className='mx-10'><Btns title="Home" index="0"></Btns></Link>
        <div className='flex flex-col items-center justify-center'>

          <a href="https://www.google.it/maps/place/41%C2%B029'21.1%22N+12%C2%B035'20.1%22E/@41.4919166,12.5706089,6942m/data=!3m1!1e3!4m4!3m3!8m2!3d41.489199!4d12.588927?entry=ttu" target="_blank"
          className='absolute top-1/3'>
            <div className='text-center mb-52 transition-all duration-500 ease-in-out group border border-slate-50 rounded-full p-3 flex flex-col items-center justify-center cursor-pointer hover:outline outline-1 outline-slate-50 outline-offset-4 hover:bg-slate-50 hover:shadow-slate-50 shadow-lg'>
              <h1 className='transition-all duration-500 ease-in-out text-slate-50 font-bold tracking-widest group-hover:text-stone-900'>Visualizza su GoogleMaps</h1>
              <FiExternalLink className='transition-all duration-500 ease-in-out text-2xl text-slate-50 group-hover:text-stone-900'/>
            </div>
          </a>
          <RootLY title="DOVE" desc="Passeggiata delle Sirene Lavinio, 00042 Anzio (RM)" url="/where"/>
          
          <div className='p-10'>
            <ImSpinner9 className='animate-spin text-slate-50 text-4xl absolute bottom-0 left-0'/>
            <iframe className='absolute bottom-0 left-0 w-full h-1/3 sm:h-2/5' src="https://maphub.net/embed_h/huPJwLhhdV3t9SN0?preview=1&panel=1&panel_closed=1&geolocation=1&directions=1&autoplay=1" title="Mappa"></iframe>
          </div>

          
        </div>
      </div>
    </>
  )
}

export default Where
