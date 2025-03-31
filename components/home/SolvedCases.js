"use client"
import React, { use } from 'react'
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import InfiniteScroll from '../comman/HorizontalMovement';

function SolvedCases() {
  return (
    <div className='w-screen h-auto relative'>
        <TeamMap/>
    </div>
  )
}

export default SolvedCases








export const TeamMap = () => {
    const [isMobile, setMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setMobile(window.innerWidth <= 700);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const teamMembers = [
      {
        src1: "/home/img1.jpg",
        src2: "/home/img1-alt.jpg",
        x: 250,
        y: 200,
        left: true,
        company: "Provis Spitex",
        user: "Simona Predeanu",
      },
      {
        src1: "/home/img5.jpg",
        src2: "/home/img5-alt.jpg",
        x: 500,
        y: 480,
        left: false,
        company: "DGP",
        user: "Sandro De Giorgi",
      },
      {
        src1: "/home/img3.jpg",
        src2: "/home/img3-alt.jpg",
        x: 300,
        y: 760,
        left: true,
        company: "Giorgi Rossi",
        user: "Dimitri Rossi",
      },
      {
        src1: "/home/img4.jpg",
        src2: "/home/img4-alt.jpg",
        x: 500,
        y: 1040,
        left: false,
        company: "Sens7",
        user: "Michael Mätzener",
      },
    ];
  
    return (
      <div id="team" className="font-geist relative isolate lg:h-[150vh] h-[200vh] w-full _p-10 lg:px-0 px-5">
        {!isMobile ? (
          teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              src1={member.src1}
              src2={member.src2}
              x={member.x}
              y={member.y}
              left={member.left}
              company={member.company}
              user={member.user}
            />
          ))
        ) : (
          teamMembers.map((member, index) => (
            <MobileTeamCard
              key={index}
              src1={member.src1}
              company={member.company}
              user={member.user}
            />
          ))
        )}
  
        {!isMobile && (
          <SquigglyLine
            path="M5.24077 1C67.8037 220.73 894.305 -49.5177 958.489 123.952C1047.68 377.012 13.7969 160.061 5.24077 403.838C-3.31537 647.615 958.489 301.275 958.489 541"
            viewBox="0 0 1100 814"
          />
        )}
      </div>
    );
  };
  
  const MobileTeamCard = ({ src1, user, company }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Card */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-md mx-auto bg-black/40 rounded-xl overflow-hidden shadow-lg p-4 mt-4 cursor-pointer"
                onClick={() => setIsOpen(true)} // Open modal on click
            >
                <Image
                    src={src1}
                    width={400}
                    height={250}
                    alt="team member"
                    className="w-full h-52 object-cover rounded-lg"
                />
                <div className="text-white text-center mt-4">
                    <h2 className="text-xl font-bold">{user}</h2>
                    <p className="text-lg">{company}</p>
                </div>
            </motion.div>

            {/* Popup Modal for Mobile */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-[99] p-4"
                >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col w-full max-w-md">
                        {/* Close Button */}
                        <button
                            className="absolute top-32 right-7 bg-[#9fdcff] text-white w-8 h-8 rounded-full flex justify-center items-center"
                            onClick={() => setIsOpen(false)}
                        >
                            ✕
                        </button>

                        {/* Image on top */}
                        <Image
                            src={src1}
                            width={400}
                            height={400}
                            alt="profile-image"
                            className="w-full h-64 object-cover"
                        />

                        {/* Details */}
                        <div className="p-5 text-center">
                            <h2 className="text-2xl font-bold text-gray-800">{user}</h2>
                            <p className="text-lg text-gray-600">{company}</p>
                            <p className="text-sm text-gray-500 mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget elit vel dolor tincidunt laoreet.
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
};


const TeamCard = ({ x, y, src1, user, company, left }) => {
    const [isOpen, setIsOpen] = useState(false);

    const [visible, setVisible] = useState(false);
    const handleScroll = () => {

        const scroll = window.scrollY - (4*window.innerHeight * 0.1);
        if (scroll >= 2850) {
            setVisible(true);

        } else {
            setVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })

    return (
        <>
            <div className="absolute" style={{ top: y, left: x }}>
                {left ? (
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex gap-10 cursor-pointer"
                        onClick={() => setIsOpen(true)}
                    >
                        <Image
                            src={src1}
                            width={400}
                            height={400}
                            alt="image-1"
                            className="z-50 rounded-2xl w-[30rem] h-60 object-cover"
                        />
                        <div className="flex items-center bg-black/40  w-[50rem] h-auto rounded-xl gap-4 shadow-lg p-4">
                            <div className="relative flex flex-col items-center w-1/3 text-white _text-[#4FB5C9]">
                                <div className="text-xl font-bold">{user}</div>
                                <div className="text-lg font-normal">{company}</div>
                            </div>
                            <div className="w-0.5 h-[80%] bg-[#4FB5C9]"></div>
                            <div className="w-2/3 p-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vel totam similique quia, omnis obcaecati nihil quidem quaerat iste quae.
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex gap-10 cursor-pointer"
                        onClick={() => setIsOpen(true)} // Open modal on click
                    >
                        <div className="flex items-center bg-black/40 w-[50rem] h-auto rounded-xl gap-4 shadow-lg p-4">
                            <div className="relative flex flex-col items-center w-1/3 text-white _text-[#4FB5C9]">
                                <div className="text-xl font-bold">{user}</div>
                                <div className="text-lg font-normal">{company}</div>
                            </div>
                            <div className="w-0.5 h-[80%] bg-[#4FB5C9]"></div>
                            <div className="w-2/3 p-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vel totam similique quia, omnis obcaecati nihil quidem quaerat iste quae.
                            </div>
                        </div>
                        <Image
                            src={src1}
                            width={400}
                            height={400}
                            alt="image-1"
                            className="z-50 object-cover w-[30rem] rounded-2xl h-60"
                        />
                    </motion.div>
                )}
            </div>

            {/* Popup Modal */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed inset-0 flex w-2/3 h-2/3 items-center justify-center bg-[#9fdcff] _backdrop-blur-sm top-1/2 left-1/2 -translate-1/2 z-[99] rounded-2xl"
                    onClick={() => setIsOpen(false)} // Close on background click
                >
                     <div className='flex flex-col p-10 h-full w-[40%] gap-2'>
                    <h2 className="text-5xl font-bold mt-4 text-[#292828]">{user}</h2>
                        <p className="text-3xl text-[#292828] font-normal">{company}</p>
                        <p className="text-left text-lg font-light text-[#292828] mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget elit vel dolor tincidunt laoreet. Nulla facilisi. Sed ac justo quis velit vehicula condimentum. Fusce vel nisi ut sapien laoreet feugiat. Curabitur nec felis nec urna vehicula tempor.
                        </p>
                    </div>
                    <motion.div
                        className=" w-[60%] h-full p-1"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                    >
                        <button
                            className="absolute top-2 right-2 bg-[#9fdcff] cursor-pointer text-white w-10 h-10 rounded-full text-base flex justify-center items-center"
                            onClick={() => setIsOpen(false)}
                        >
                            ✕
                        </button>
                        <Image
                            src={src1}
                            width={1000}
                            height={1000}
                            alt="profile-image"
                            className="rounded-r-2xl w-full h-full object-cover"
                        />
                    </motion.div>
                   
                </motion.div>
            )}
        </>
    );
};



const SquigglyLine = ({ path, viewBox }) => {
    const [length, setLength] = useState(0);
    const [totalLength, setTotalLength] = useState(1000); 
    const ref = useRef(null);
    const pathRef = useRef(null);

    useEffect(() => {
        if (pathRef.current) {
            const length = pathRef.current.getTotalLength();
            setTotalLength(length);
        }
    }, []);

    const handleScroll = () => {
        if (!pathRef.current || !ref.current) return;

        const pathLength = pathRef.current.getTotalLength();
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const elementTop = ref.current.getBoundingClientRect().top + scrollTop;
        const elementHeight = ref.current.clientHeight;

        let progress = (scrollTop + windowHeight - elementTop) / elementHeight;
        progress = Math.min(Math.max(progress, 0), 1); 

        setLength(progress * pathLength);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={ref} className="absolute inset-0 left-1/2 -translate-x-[45%] top-40 -z-10 h-full w-full scale-75">
            <svg
                preserveAspectRatio="xMidYMid meet"
                viewBox={viewBox}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                strokeLinecap="round"
            >
                <path
                    ref={pathRef}
                    d={path}
                    stroke="#9fdcff"
                    strokeWidth="2"
                    fill="none"
                    style={{
                        strokeDasharray: `${length}, ${totalLength}`,
                        strokeDashoffset: totalLength-300 ,
                        transition: "stroke-dashoffset 0.3s ease-out",
                    }}
                />
            </svg>
        </div>
    );
};


