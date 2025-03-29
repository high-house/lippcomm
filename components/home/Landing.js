"use client"
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import useLanguageStore from '@/store/LippStore';
import Link from 'next/link';

export default function Landing() {
    return (
        <div className='w-screen h-screen'>
            <TextBlock />
        </div>
    )
}




const TextBlock = () => {
    const { language } = useLanguageStore()
    const TextList = [
        "a CMO", "Social Media Management", "Content Creation", "Marketing Strategy", "Brand Kit", "Website", "Performance Ads Campaign"
    ];

    const TextListDu = [
        "einen CMO ", "Social Media Management", " Content Creatio", "Marketing Strategie", "Brand Kit ", "Webseite", " Performance Ads Kampagne"
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % TextList.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='w-screen h-screen flex items-end'>

            <div className='flex gap-4  text-[#9fdcff] text-7xl font-semibold _bg-[red] absolute top-[40%] left-[20%]'>
                <span className='min-w-[13rem] text-white _text-[#9fdcff]'>
                    {language === "EN" ? "I need" : "Ich brauche"}
                </span>
                <motion.span
                    className='max-w-[30rem]  h-[20rem] _bg-[red] _text-white text-[#9fdcff]'
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                    {language === "EN" ? TextList[index] : TextListDu[index]}
                </motion.span>

            </div>
            <div className='w-[40%] p-3 bg-[#9fdcff] text-[#292828] rounded-xl z-30 bottom-10 left-32 absolute text-xl flex justify-evenly items-center'>
                <span>{language === "EN" ? "Let’s work together and make your digital presence count! →":"goes to Services with the Title “Hiring a CMO can be expensive →"}</span>
                <Link href={"/services"} className='px-4 cursor-pointer py-3 bg-white text-[#292828] rounded-xl'>{language === "EN" ? "learn more":" mehr erfahren"}</Link> 
            </div>
        </div>
    );
};
