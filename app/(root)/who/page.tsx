import React from 'react'
import RootLY from '@/components/rootly/rootly'
import Btns from '@/components/rootly/btns'
import Link from 'next/link'
import EmblaCarousel from '@/components/who/carousel'

const Where = () => {
  return (
    <>
      <div className='h-full w-full min-h-full select-none'>
        <Link href="/" className='mx-10 z-50 absolute top-0 left-0'><Btns title="Home" index="0"></Btns></Link>
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <div className='absolute top-0 mt-20 z-50 '>
                <h1 className='text-center text-6xl text-slate-50 font-extrabold tracking-widest'>CHI SIAMO</h1>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <div className='carousel text-slate-50 absolute top-0 sm:border-b border-slate-50 rounded-full p-2'>
                <EmblaCarousel></EmblaCarousel>
            </div>
        </div>
      </div>
    </>
  )
}

export default Where
