import Landing from '@/components/home/Landing'
import Navbar from '@/components/home/Navbar'
import WorkTogather from '@/components/home/WorkTogather'
import React from 'react'

function page() {
  return (
    <div className='w-auto h-auto overflow-hidden flex flex-col bg-[#432818]'>
        <Navbar/>
        <Landing/>
        <WorkTogather/>
    </div>
  )
}

export default page