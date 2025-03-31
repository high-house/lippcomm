"use client"
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import useLippStore from "@/store/LippStore";
import { motion, AnimatePresence } from "framer-motion";
import { useAspect } from "@react-three/drei";

function WorkTogather() {
  return (
    <div className="w-screen h-auto bg-[#FFE6A7] flex flex-col items-center justify-center">
      <ServicesWidget />
      <Services />
    </div>
  );
}

export default WorkTogather;

const ServicesWidget = () => {
  const { language } = useLippStore();
  return (
    <div className="w-full lg:w-screen lg:h-screen h-auto flex flex-col lg:flex-row bg-[#292828] lg:px-0 px-5 ">
      <div className="lg:w-1/3 w-full text-5xl lg:text-9xl text-white pt-10 lg:pt-[5.5rem] pl-4">
        CMO as a Service
      </div>
      {/* Right Section */}
      <div className="lg:w-2/3 lg:h-[80%] w-full flex flex-col lg:flex-row bg-[#73a7db] rounded-t-2xl lg:rounded-l-2xl text-[#292828] gap-3 pt-5 lg:pt-[0.5rem] font-semibold">
        {/* Image Container */}
        <div className="w-full lg:min-w-[40%] h-[250px] lg:h-[80%] p-5 lg:p-10">
          <Image
            src={"/service.svg"}
            alt="image"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Text Container */}
        <div className="p-5 lg:p-10 text-lg lg:text-3xl font-light">
          {language === "EN"
            ? "Strategic marketing leadership – minus the overhead where you gain access to top-level marketing expertise tailored to your unique business goals. Without the commitment or cost of hiring in-house. Whether you're looking to scale, reposition, or refine your approach, providing hands-on support to drive real results"
            : "Strategische Marketingführung – ganz ohne Overhead. Sie erhalten Zugang zu hochwertiger Marketing-Expertise, maßgeschneidert auf Ihre individuellen Geschäftsziele – ohne die Kosten und Verpflichtungen einer internen Festanstellung. Ob Sie skalieren, sich neu positionieren oder Ihre Strategie verfeinern möchten, unterstützen wir Sie mit praktischer und umsetzungsstarker Beratung für messbare Ergebnisse."}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const { language } = useLippStore();
  const [data, setData] = useState(ServicesData);
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const isHovered = useRef(false);
  const [isSmall,setSmall]=useState(false)
  useEffect(() => {
    setData(language === "EN" ? ServicesData : ServicesData1);
  }, [language]);

  useEffect(()=>{
    if(window.innerWidth > 700){
        setSmall(false)
    }else{
        setSmall(true)
    }
  })

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isHovered.current) {
        setIndex((prevIndex) => (prevIndex + 1) % data.length);
      }
    }, 2000);
    return () => clearInterval(intervalRef.current);
  }, [data]);

  return (
    <div className="w-full h-auto flex flex-col lg:flex-row justify-center items-center bg-[#292828] relative py-10 lg:px-0 px-5">
      
      {isSmall &&
      <div
        className="text-4xl lg:text-8xl font-semibold text-white w-full lg:w-1/3 h-auto py-5 lg:h-[80%] flex justify-center items-center rounded-b-2xl lg:rounded-none"
        onMouseEnter={() => (isHovered.current = true)}
        onMouseLeave={() => (isHovered.current = false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            className="w-full text-center cursor-pointer"
            key={data[index].name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {data[index].name}
          </motion.div>
        </AnimatePresence>
      </div>
      }
      {/* Left Content Box */}
      <div className="lg:w-2/3 w-full h-auto flex flex-col lg:flex-row bg-[#73a7db] rounded-t-2xl lg:rounded-r-2xl relative p-5 lg:p-0">
        {/* Left Text */}
        <div
          className="w-full lg:w-1/2 text-lg lg:text-3xl font-light cursor-pointer flex justify-center items-center p-5 lg:p-10"
          onMouseEnter={() => (isHovered.current = true)}
          onMouseLeave={() => (isHovered.current = false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              className="text-[#292828]"
              key={data[index].dis}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {data[index].dis}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Image */}
        <div className="w-full lg:w-[60%] h-[300px] lg:h-full relative flex justify-center">
          <Image
            src={"/home/career.svg"}
            width={1000}
            height={1000}
            alt="image"
            className="w-[90%] lg:w-[45rem] object-cover"
          />
        </div>
      </div>
      {/* Right Name Box */}
      {!isSmall &&
      <div
        className="text-4xl lg:text-8xl font-semibold text-white w-full lg:w-1/3 py-5 h-[45rem] flex justify-center items-start rounded-b-2xl lg:rounded-none"
        onMouseEnter={() => (isHovered.current = true)}
        onMouseLeave={() => (isHovered.current = false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            className="w-full text-center cursor-pointer"
            key={data[index].name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {data[index].name}
          </motion.div>
        </AnimatePresence>
      </div>
      }
    </div>
  );
};

const ServicesData = [
  {
    name: "Marketing Strategy",
    dis: "Start with strategy – grow with intention. Marketing without a plan is just noise.",
  },
  {
    name: "Brand Kit",
    dis: "Your brand defined and designed to shine. Consistency is key.",
  },
  {
    name: "Website",
    dis: "A website that works for your brand. Your website is often your first impression – let’s make it a strong one.",
  },
  {
    name: "Content Strategy & Creation",
    dis: "Content that speaks your brand's truth and gets results.",
  },
  {
    name: "Social Media Management",
    dis: "Grow your presence with a clear strategy and consistent execution.",
  },
  {
    name: "Performance Marketing",
    dis: "Ads that perform – not just exist. From Meta to Google, creating and managing high-performing ad campaigns.",
  },
];

const ServicesData1 = [
  {
    name: "Marketing Strategy",
    dis: "Beginnen Sie mit einer Strategie – wachsen Sie mit Absicht.",
  },
  {
    name: "Brand Kit",
    dis: "Ihre Marke definiert und gestaltet, um zu glänzen.",
  },
  {
    name: "Website",
    dis: "Eine Website, die für Ihre Marke funktioniert.",
  },
  {
    name: "Content Strategy & Creation",
    dis: "Inhalte, die die Wahrheit Ihrer Marke sprechen und Ergebnisse liefern.",
  },
  {
    name: "Social Media Management",
    dis: "Steigern Sie Ihre Präsenz mit einer klaren Strategie.",
  },
  {
    name: "Performance Marketing",
    dis: "Anzeigen, die performen – nicht nur existieren.",
  },
];
