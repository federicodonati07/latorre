import React from 'react'
import Card from '@/components/who/card'
import Btns from '@/components/rootly/btns'
import Link from 'next/link'
import EmblaCarousel from '@/components/who/carousel'
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const Where = () => {
  const handleClick = ()=>{
    console.log("clicked")
  }

  return (
    <>
      <div className='h-full w-full min-h-full select-none'>
        <Link href="/" className='mx-10 z-50 sm:mx-0 absolute top-0 left-0'><Btns title="Home" index="0"></Btns></Link>
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <div className='absolute top-0 mt-20 z-50 '>
                <h1 className='text-center text-6xl text-slate-50 font-extrabold tracking-widest'>CHI SIAMO</h1>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <div className='carousel text-slate-50 absolute top-0 sm:border-b border-slate-50 rounded-full p-2'>
              <EmblaCarousel></EmblaCarousel>
            </div>
            <a href="#card-link" className='absolute bottom-1/4'>
              <HiOutlineChevronDoubleDown className='text-4xl text-slate-50'/>
              </a>
        </div>
        <div className='sm:absolute bottom-0 inset-x-0 flex items-center justify-center mb-10'>
          <div id="card-link" className="cards grid grid-flow-row sm:grid-flow-col gap-4 text-center">
            
            <Card title="Email" desc="piccolienzo48@gmail.com"/>
            <Card title="Numero" desc="+39 3384329261"/>
            <Card title="Fisso" desc="+39 06 9822749" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Where
