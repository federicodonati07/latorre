import React from 'react'
import RootLY from '@/components/rootly/rootly'
import Btns from '@/components/rootly/btns'
import Link from 'next/link'
import { FiExternalLink } from "react-icons/fi";

const Where = () => {
  return (
    <>
      <div className='h-full w-full min-h-full select-none'>

        <Link href="/" className='mx-10'><Btns title="Home" index="0"></Btns></Link>
        <div className='flex flex-col items-center justify-center'>

          <div className='carousel'></div>
          
          <RootLY title="CHI SIAMO" desc="" url="/who"/>
        </div>
      </div>
    </>
  )
}

export default Where
