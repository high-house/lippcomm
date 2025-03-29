"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Image from "next/image";

export function LampDemo() {
    return (
        <LampContainer>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                className="text-center text-white mt-10"
            >
                <h2 className="text-3xl md:text-5xl font-semibold mb-4">
                    Get in Touch
                </h2>
                <p className="text-lg md:text-xl text-gray-400">
                    Reach out for collaborations or just to say hello!
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                className="mt-6 flex flex-col items-center"
            >
                <a href="mailto:info@opticallabs.com" className="text-lg md:text-xl text-[#52CBBE] font-semibold hover:text-white transition"> info@opticallabs.com </a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
                className="mt-6 flex gap-6 group"
            >
                {socialIcons.map(({ id, icon, href }) => (
                    <a
                        key={id}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#52CBBE] p-3 rounded-full bg-opacity-10 border border-[#52CBBE] hover:bg-[#52CBBE] hover:text-white transition duration-300"
                    >
                        {icon}
                    </a>
                ))}
            </motion.div>
        </LampContainer>
    );
}

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="fill-primary group-hover:fill-white transition-[fill]"  viewBox="0 0 24 24" width="24px" height="24px">
        <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"/>
    </svg>
);

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="fill-primary group-hover:fill-white transition-[fill]"  viewBox="0 0 24 24" width="24px" height="24px">
    <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"/>
    </svg>
)

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="fill-primary group-hover:fill-white transition-[fill]"  viewBox="0 0 24 24" width="24px" height="24px">
        <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"/>
    </svg>
);

const socialIcons = [
    { id: 1, icon: <LinkedinIcon />,  href: "https://linkedin.com/" },
    { id: 2, icon: <FacebookIcon />,  href: "https://facebook.com/" },
    { id: 3, icon: <InstagramIcon />, href: "https://instagram.com/" },
];
