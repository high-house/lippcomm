import React from 'react';
import Head from 'next/head';
import PricingSection from '@/components/service/step1';
import CMOservies from '@/components/service/step2';
import ExecutionSection from '@/components/service/step3';
import Chatbot from '@/components/service/chatbox';



const Page = () => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
            </Head>


            <div className="h-screen w-full bg-[#292828] ">
                <div className="flex flex-col lg:py-[16%] py-[52%] lg:px-[16%] px-[8%] gap-y-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <h1 className='lg:text-6xl text-5xl text-[#FFFFFF] font-bold lg:w-3xl'>Hiring a CMO / implementing a marketing strategy</h1>
                    <p className='text-[#41AFE9] lg:text-xl lg:w-xl'>
                        With LippComm, you benefit from senior-level marketing expertise tailored to your needs – without the cost or complexity of a full-time hire - helping you to reach your goals.
                    </p>
                </div>
                <PricingSection />
                <CMOservies />
                <ExecutionSection />
            </div>
            <div className="min-h-screen">
                <Chatbot />
            </div>
        </>
    );
};

export default Page;
