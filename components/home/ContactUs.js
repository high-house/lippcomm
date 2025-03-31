"use client"
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import useLippStore from '@/store/LippStore';
import { TransitionLink } from '../Transition/TransitionLink';

export default function ContactUs() {
    return (
        <>
            {/* Big Screen Layout */}
            <div className="hidden md:flex">
                <BigScreenContact />
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden">
                <MobileContact />
            </div>
        </>
    );
}

function BigScreenContact() {
    const { language } = useLippStore();
    const isEnglish = language === "EN";

    return (
        <div className="flex w-screen h-[55vh]">
            {/* Left Section */}
            <div className="flex flex-col w-1/2 h-full p-20 gap-3">
                <div className="font-light text-4xl">
                    {isEnglish ? "Curious?" : "Neugierig?"}
                </div>
                <div className='text-6xl text-white font-bold'>
                    Lets Contact Find the Way 
                </div>
                <div className="font-light text-lg">
                    {isEnglish 
                        ? "Let’s find out how we can elevate your marketing together. Reach out now or book a free meeting with us." 
                        : "Lass uns herausfinden, wie wir dein Marketing gemeinsam verbessern können. Kontaktiere uns jetzt oder buche ein kostenloses Gespräch mit uns."}
                </div>
                <Link 
                    href={"#"} 
                    className="cursor-pointer bg-white w-[10rem] rounded-2xl flex justify-center items-center h-[3rem] text-[#292828] text-2xl"
                >
                    {isEnglish ? "Contact Us" : "Kontaktiere uns"}
                </Link>
            </div>

            {/* Right Section */}
            <div className="w-1/2 h-full p-12 flex justify-center items-center">
                <Image 
                    src={"/home/footer.svg"} 
                    alt={isEnglish ? "Contact" : "Kontakt"} 
                    width={600} 
                    height={600} 
                    className="object-cover"
                />
            </div>
        </div>
    );
}

function MobileContact() {
    const { language } = useLippStore();
    const isEnglish = language === "EN";

    return (
        <div className="flex flex-col w-screen h-auto p-6 gap-6 items-center text-center">
            {/* Image Section */}
            <div className="w-full flex justify-center">
                <Image 
                    src={"/home/footer.svg"} 
                    alt={isEnglish ? "Contact" : "Kontakt"} 
                    width={300} 
                    height={300} 
                    className="object-cover"
                />
            </div>

            {/* Text Section */}
            <div className="flex flex-col gap-3">
                <div className="font-light text-3xl">
                    {isEnglish ? "Curious?" : "Neugierig?"}
                </div>
                <div className='text-4xl text-white font-bold'>
                    Lets Contact Find the Way 
                </div>
                <div className="font-light text-base">
                    {isEnglish 
                        ? "Let’s find out how we can elevate your marketing together. Reach out now or book a free meeting with us." 
                        : "Lass uns herausfinden, wie wir dein Marketing gemeinsam verbessern können. Kontaktiere uns jetzt oder buche ein kostenloses Gespräch mit uns."}
                </div>
                <TransitionLink
                    href={"/contact"} 
                    className="cursor-pointer bg-white w-[8rem] rounded-2xl flex justify-center items-center h-[2.5rem] text-[#292828] text-lg mx-auto"
                >
                    {isEnglish ? "Contact Us" : "Kontaktiere uns"}
                </TransitionLink>
            </div>
        </div>
    );
}
