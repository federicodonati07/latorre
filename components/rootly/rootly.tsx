import React from 'react'
import Link from 'next/link'
import Nav from './nav'

const RootLY = ({title, desc, url}) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <div className='z-50 group cursor-pointer'>
        <Link href={url}>
            <h1 className='group/title text-center transition-all duration-300 ease-in-out text-6xl text-slate-50 font-extrabold tracking-widest'>
                {title}
            </h1>
        </Link>
            <h1 className='text-center transition-all duration-500 ease-in-out text-slate-50 font-extrabold tracking-widest cursor-default'>
                {desc}
            </h1>
        </div>
    </div>
    )
}

export default RootLY