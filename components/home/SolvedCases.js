"use client"
import React from 'react'
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

function SolvedCases() {
  return (
    <div className='w-screen h-auto bg-[#432818]'>
        <TeamMap/>
    </div>
  )
}

export default SolvedCases







export const TeamMap = () => {
    return (
        <div id="team" className="font-geist relative isolate h-[150vh] w-full _p-10">
            <TeamCard src={"/home/img1.jpg"} x={250} y={200} left={true} company={" Provis Spitex"} user={"Simona Predeanu"}/>
            <TeamCard src={"/home/img5.jpg"} x={500} y={480} left={false} user={"Sandro De Giorgi"} company={"DGP"}/>
            <TeamCard src={"/home/img3.jpg"} x={300} y={760} left={true} user={"Dimitri Rossi"} company={" Giorgi Rossi"} />
            <TeamCard src={"/home/img4.jpg"} x={500} y={1040} left={false} user={"Michael Mätzener"} company={"Sens7"}/>
            <SquigglyLine
                path={
                    "M5.24077 1C67.8037 220.73 894.305 -49.5177 958.489 123.952C1047.68 377.012 13.7969 160.061 5.24077 403.838C-3.31537 647.615 958.489 301.275 958.489 541"
                }
                viewBox={"0 0 1100 814"}
            />
            <div className='absolute bottom-10 left-1/2 text-xl -translate-x-1/2 w-[9rem] rounded-xl flex justify-center items-center cursor-pointer py-3 bg-[#FFE6A7]'>Read More</div>
        </div>
    )
}

const TeamCard = ({ x, y, src ,left,user,company}) => {
    const [visible, setVisible] = useState(false);
    const handleScroll = () => {
        const scroll = window.scrollY - (window.innerHeight * 0.1);
        if (scroll >= y) {
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
        <div className="absolute" style={{ top: y, left: x }}>
            {left &&  <div className="flex gap-10">
                <Image
                    src={src}
                    width={200}
                    height={200}
                    alt="image-1"
                    className={`z-50 rounded-2xl w-[30rem] h-60 transition-[scale,opacity] object-cover duration-500 ${visible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
                />
                <div className={`flex items-center bg-gradient-to-l bg-black/40  _to-black w-[50rem] duration-500 h-auto rounded-xl gap-4 shadow-lg p-4 ${visible ? "scale-100 opacity-100" : "scale-0 opacity-0"} `}>
                    <div className={`relative flex flex-col text-[#CBC6C6] items-center w-1/3`}>
                        <div className="text-xl font-bold">{user}</div>
                        <div className="text-lg font-normal ">{company}</div>
                        {/* <div className="text-lg font-light ">Chief Executive Officer</div> */}
                    </div>
                    <div className="w-0.5 h-[80%] bg-[#4FB5C9]"></div>
                    <div className="w-2/3 p-4 text-[#CBC6C6]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vel totam similique quia, omnis obcaecati nihil quidem quaerat iste quae.
                    </div>
                </div>

            </div>}




            {!left &&<div className="flex gap-10">
                
                <div className={`flex items-center bg-gradient-to-l bg-black/40  _to-black w-[50rem] h-auto rounded-xl gap-4 shadow-lg p-4 duration-500 ${visible ? "scale-100 opacity-100" : "scale-0 opacity-0"} `}>
                    <div className="relative flex flex-col text-[#CBC6C6] items-center w-1/3">
                        <div className="text-xl font-bold">{user}</div>
                        <div className="text-lg font-normal ">{company}</div>
                        {/* <div className="text-lg font-light ">Chief Executive Officer</div> */}
                    </div>
                    <div className="w-0.5 h-[80%] bg-[#4FB5C9]"></div>
                    <div className="w-2/3 p-4 text-[#CBC6C6]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vel totam similique quia, omnis obcaecati nihil quidem quaerat iste quae.
                    </div>
                </div>

                <Image
                    src={src}
                    width={200}
                    height={200}
                    alt="image-1"
                    className={` z-50  object-cover w-[30rem] rounded-2xl h-60 duration-500 transition-[scale,opacity] ${visible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
                />
            </div>}
        </div>
    )
}


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
                    stroke="white"
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


