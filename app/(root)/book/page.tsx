import React from 'react'
import Link from 'next/link'
import Btns from '@/components/rootly/btns'
import Discl from '@/components/book/disclosure'

const Book = () => {
  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center select-none bg-gray-900 text-white'>
        <Link href="/" className='mx-10'>
          <Btns title="Home" index="0" />
        </Link>

        <div className='absolute top-0 mt-20 z-50'>
          <h1 className='text-center text-6xl text-slate-50 font-extrabold tracking-widest'>PREZZI</h1>
        </div>

        <div className='flex flex-col items-center justify-center w-full space-y-4'>
          <Discl 
            title="GIORNALIERO" 
            howmuch="$" 
            desc1="Ombrellone con 2 Sdraio" price1="18.00 €"
            desc2="Ombrellone con 1 Sdraio e 1 Lettino" price2="20.00 €"
            desc3="Ombrellone con 2 lettini" price3="22.00 €"
            desc4="Lettino" price4="7.00 €"
            desc5="Sdraio" price5="5.00 €"
          />
          <Discl 
            title="GIUGNO - SETTEMBRE (mensile)" 
            howmuch="$$" 
            desc1="Ombrellone con 2 Sdraio" price1="230.00 €"
            desc2="Ombrellone con 1 Sdraio e 1 Lettino" price2="260.00 €"
            desc3="Ombrellone con 2 lettini" price3="330.00 €"
            desc4="" price4=""
            desc5="" price5=""
          />
          <Discl 
            title="LUGLIO - AGOSTO (mensile)" 
            howmuch="$$$" 
            desc1="Ombrellone con 2 Sdraio" price1="300.00 €"
            desc2="Ombrellone con 1 Sdraio e 1 Lettino" price2="350.00 €"
            desc3="Ombrellone con 2 lettini" price3="400.00 €"
            desc4="" price4=""
            desc5="" price5=""
          />
          <Discl 
            title="STAGIONALE" 
            howmuch="$$$$$" 
            desc1="Ombrellone con 2 Sdraio" price1="800.00 €"
            desc2="Ombrellone con 1 Sdraio e 1 Lettino" price2="900.00 €"
            desc3="Ombrellone con 2 lettini" price3="1100.00 €"
            desc4="" price4=""
            desc5="" price5=""
          />
        </div>
      </div>
    </>
  )
}

export default Book
