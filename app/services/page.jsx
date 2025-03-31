"use client"

import React from 'react';
import Head from 'next/head';
import PricingSection from '@/components/service/step1';
import CMOservies from '@/components/service/step2';
import ExecutionSection from '@/components/service/step3';
import Chatbot from '@/components/service/chatbox';
import Navbar from '@/components/home/Navbar';
import useLippStore from '@/store/LippStore';

const Page = () => {
    const { language } = useLippStore();
    const isEnglish = language === "EN";

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
            </Head>

            <div className="h-screen w-full bg-[#292828] ">
                <div className="flex flex-col lg:py-[17%] py-[52%] lg:px-[12%] px-[8%] gap-y-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <h1 className='lg:text-6xl text-3xl text-[#FFFFFF] font-bold lg:w-5xl'>
                        {isEnglish ? "Hiring a CMO / implementing a marketing strategy" : "Einen CMO einstellen / eine Marketingstrategie umsetzen"}
                    </h1>
                    <p className='text-[#41AFE9] lg:text-2xl lg:w-2xl'>
                        {isEnglish
                            ? "With LippComm, you benefit from senior-level marketing expertise tailored to your needs – without the cost or complexity of a full-time hire - helping you to reach your goals."
                            : "Mit LippComm profitieren Sie von maßgeschneiderter Marketingexpertise auf Führungsebene – ohne die Kosten oder Komplexität einer Vollzeitanstellung – um Ihre Ziele zu erreichen."}
                    </p>
                </div>
                <PricingSection />
                <CMOservies />
                <ExecutionSection />
            </div>
            <div className="h-screen lg:block hidden">
                <Chatbot />
            </div>
        </>
    );
};

export default Page;
