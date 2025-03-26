"use client"
import React from 'react'
import Image from 'next/image'

function WorkTogather() {
  return (
    <div className='w-screen h-auto bg-[#FFE6A7] relative flex flex-col items-center justify-center'>
        <ServicesWidget/>
        <Services/>
    </div>
  )
}

export default WorkTogather

const ServicesWidget=()=>{
    return(
        <div className='w-screen h-screen flex'>
            <div className='w-1/3 text-9xl text-[#432818] pt-[5.5rem] pl-4'>
                CMO as a Service
            </div>
            <div className='flex w-2/3 h-[80%] bg-[#432818] text-[#FFE6A7] gap-3 pt-[5.5rem] mt-[5.5rem]'>
                <div className='min-w-[40%] h-full'>
                    <Image src={"/service.svg"} width={1000} height={1000} className='w-full z-10 object-cover h-[80%]' />
                </div>
                <div className='p-10 text-3xl'>
                    Strategic marketing leadership – minus the overhead where you gain access to top-level marketing expertise tailored to your unique business goals. Without the commitment or cost of hiring in-house. Whether you're looking to scale, reposition, or refine your approach, providing hands-on support to drive real results
                </div>
            </div>
        </div>
    )
}

const Services=()=>{
    return(
        <div className='w-screen h-screen bg-[#432818]'>

        </div>
    )
}
