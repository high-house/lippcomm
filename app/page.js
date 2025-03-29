import React from "react";
import CounterSection from "@/components/home/CounterSection";
import Landing from "@/components/home/Landing";
import Navbar from "@/components/home/Navbar";
import { TeamMap } from "@/components/home/SolvedCases";
import WorkTogather from "@/components/home/WorkTogather";
import SolvedCases from "@/components/home/SolvedCases";
import Image from "next/image";
import Vision from "@/components/home/Vision";
import About from "@/components/comman/About";
import { InfiniteMovingCardsDemo } from "@/components/comman/InfiniteMovingCardsDemo";
import ContactUs from "@/components/home/ContactUs";
import { LampDemo } from "@/components/ui/lamp";

function Page() {
  return (
    <div className="w-auto h-auto overflow-hidden flex flex-col bg-[#292828] text-[#9fdcff]">
        <div className="w-screen h-screen absolute top-0 left-0">
                <Image src={"/bg.png"} width={2000} height={2000} className="w-screen h-screen object-cover"/>
        </div>
      <Navbar />
      <Landing />
      <WorkTogather />
      <CounterSection />
      <SolvedCases />
      <Vision/>
      <About/>
      <InfiniteMovingCardsDemo/>
      <ContactUs/>
      <LampDemo/>
      {/* <TeamMap /> */}
      
    </div>
  );
}

export default Page;
