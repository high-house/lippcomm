"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
// import { Dancing_Script } from 'next/font/google';
// import { LampDemo } from './LampDemo';
// const scriptFont = Dancing_Script({ subsets: ['latin'], weight: ['400', '700'] });


export function LampDemo() {
    return (
        <LampContainer>
            <motion.div
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-8 relative text-[#9fdcff] text-center text-4xl font-medium tracking-tight md:text-7xl space-y-3"
            >
                <div className="text-5xl font-bold">Lippcomm</div>
                <div className="text-xl font-light">Based in: Switzerland, UK, Germany, Netherlands</div>
                <div className="flex flex-col text-lg">
                    <span>Moosbrünneli 15A</span>
                    <span>5643 Sins</span>
                    <span>Switzerland</span>
                </div>
                {/* Social Media Icons */}
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="https://www.instagram.com/lippcomm/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-[#9fdcff] text-3xl hover:text-[#b0e0ff] transition duration-300" />
                    </a>
                    <a href="https://www.linkedin.com/in/anja-lippuner-lippcomm/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-[#9fdcff] text-3xl hover:text-[#b0e0ff] transition duration-300" />
                    </a>
                </div>

                
            </motion.div>
        </LampContainer>
    );
}


export const LampContainer = ({
    children,
    className,
}) => {
    return (
        <div
            className={cn(
                "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#292828] w-full rounded-md z-0",
                className
            )}
        >
            <div className=" absolute bottom-0 w-screen flex h-[10rem] text-[#9fdcff] justify-center items-center">
                <div className="text-xl w-1/2 p-20">
                    2025 © by Lippcomm, all rights reserved
                </div>
                <div className="w-1/2 flex gap-10 justify-end p-20">
                    <Link href={'/imprint'} className=" cursor-pointer">Imprint</Link>
                    <div className=" cursor-pointer">Data protection declaration</div>
                </div>
            </div>
            {/* <h2 className={`mt-10 text-5xl text-[#CBC6C6] text-center z-10 absolute top-10 left-1/2 -translate-x-1/2 ${scriptFont.className}`}>Contact Us</h2> */}
            <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    //   style={{
                    //     backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    //   }}
                    className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-[#9fdcff] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
                >
                    <div className="absolute w-[100%] left-0 bg-[#292828] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    <div className="absolute w-40 h-[100%] left-0 bg-[#292828] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-[#9FDCFF] text-white [--conic-position:from_290deg_at_center_top]"
                >
                    <div className="absolute w-40 h-[100%] right-0 bg-[#292828] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                    <div className="absolute w-[100%] right-0 bg-[#292828] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                </motion.div>
                <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[#292828] blur-2xl"></div>
                <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
                <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-[#9FDCFF] opacity-50 blur-3xl"></div>
                <motion.div
                    initial={{ width: "8rem" }}
                    whileInView={{ width: "16rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-[#9FDCFF] blur-2xl"
                ></motion.div>
                <motion.div
                    initial={{ width: "15rem" }}
                    whileInView={{ width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-[#9FDCFF]"
                ></motion.div>
                <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-[#292828] "></div>
            </div>
            <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
                {children}
            </div>
        </div>
    );
};