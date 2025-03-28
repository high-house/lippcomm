import React from 'react';
import Head from 'next/head';
import PricingSection from '@/components/service/step1';
import CMOservies from '@/components/service/step2';
import ExecutionSection from '@/components/service/step3';

const Page = () => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
            </Head>
            

            <div className="h-screen w-full bg-[#432818] ">
                <div className="flex flex-col lg:py-[16%] py-[52%] lg:px-[16%] px-[8%] gap-y-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                <h1 className='lg:text-8xl text-5xl text-[#FFFFFF] font-bold lg:w-3xl'>Hiring a CMO can be costly.</h1>
                <p className='text-[#FFE6A7] lg:text-base lg:w-lg'>
                    No matter the company or industry, we'll determine which marketing measures will yield the most returns for your business and provide you with comprehensive, industry-specific advice on this topic.
                </p>
                </div>
                <PricingSection/>
                <CMOservies/>
                <ExecutionSection/>
            </div>
        </>
    );
};

export default Page;
