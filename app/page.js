import CounterSection from '@/components/home/CounterSection'
import Landing from '@/components/home/Landing'
import Navbar from '@/components/home/Navbar'
import { TeamMap } from '@/components/home/SolvedCases'
import WorkTogather from '@/components/home/WorkTogather'
import React from 'react'
import SolvedCases from '@/components/home/SolvedCases'

function page() {
  return (
    <div className='w-auto h-auto overflow-hidden flex flex-col bg-[#292828] text-[#9fdcff]'>
        <Navbar/>
        <Landing/>
        <WorkTogather/>
        <CounterSection/>
        <SolvedCases/>
        {/* <TeamMap/> */}
    </div>
  )
}

export default page