'use client';
import Navbar from '@/components/home/Navbar'
import React from 'react'
import { useState, useEffect } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import { LampDemo } from '@/components/ui/lamp';
import useLippStore from '@/store/LippStore';


function page() {

  return (
    <div className='w-screen flex  flex-col justify-center overflow-hidden items-center h-auto bg-[#292828] text-[#9fdcff]'>
        <Navbar/>
        <Landing/>
        <CaseStudies/>
       <LampDemo/>
    </div>
  )
}

export default page







const CaseStudies = () => {
    const { language } = useLippStore();
    const [isMobile,setMobile]=useState(false)
    useEffect(()=>{
        if(window.innerWidth > 700){
            setMobile(false)
        }else{
            setMobile(true)
        }
    })
  
    const cases = [
      {
        title: "Modern Architects",
        company: "Skyline Designs",
        tags: ["Architecture", "3D Visualization", "Urban Planning"],
        image: "/solvedcase/architect.jpg",
        details:
          "Modern Architects specializes in designing innovative and sustainable buildings. With expertise in 3D visualization and urban planning, they bring creative concepts to life.",
      },
      {
        title: "Elite Dental Care",
        company: "Smile Bright Dental",
        tags: ["Dentist", "Oral Health", "Cosmetic Dentistry"],
        image: "/solvedcase/dentist.jpg",
        details:
          "Elite Dental Care provides top-notch dental services, ensuring bright smiles through advanced cosmetic dentistry and oral health treatments.",
      },
      {
        title: "City Medical Clinic",
        company: "Healthy Life Group",
        tags: ["Doctor", "Healthcare", "Patient Care"],
        image: "/solvedcase/click.jpg",
        details:
          "City Medical Clinic is a leading healthcare provider, offering expert medical care, advanced diagnostics, and patient-centered treatment plans.",
      },
      {
        title: "FitZone Gym",
        company: "Fitness Hub",
        tags: ["Fitness", "Personal Training", "Nutrition"],
        image: "/solvedcase/gym.jpg",
        details:
          "FitZone Gym is a fitness hub offering state-of-the-art equipment, personalized training programs, and expert nutritional guidance.",
      },
      {
        title: "Gourmet Bistro",
        company: "Luxury Dining",
        tags: ["Restaurant", "Fine Dining", "Chef's Special"],
        image: "/solvedcase/restrunt.jpg",
        details:
          "Gourmet Bistro offers a fine dining experience with world-class chefs preparing exquisite meals using fresh and organic ingredients.",
      },
    ];
  
    const [selectedCase, setSelectedCase] = useState(null);
  
    return (
      <div className="w-full h-auto py-16 lg:px-6  text-white flex justify-center overflow-x-hidden">
        <div className="lg:w-4/5 w-full rounded-2xl flex flex-col lg:p-10 px-5">
          {/* Section Heading */}
          <div className="text-center w-full flex flex-col items-center ">
            <p className="text-lg text-white font-semibold">Learn more about our projects</p>
            <h2 className="text-5xl font-bold text-[#9fdcff] mt-2">Successful Cases</h2>
          </div>
  
          <div className="lg:grid flex flex-col grid-cols-3 gap-6 mt-20">
            {cases.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer w-full h-[450px]"
                onClick={() => setSelectedCase(item)}
              >
                <div className="relative w-full h-[300px]">
                  <Image src={item.image} alt={"solved-case"} layout="fill" objectFit="cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#9fdcff] text-lg">{item.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-sm bg-[#292828] text-white px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Popup Modal */}
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 flex items-center justify-center z-[100] bg-[#292828] bg-opacity-50 p-4"
            onClick={() => setSelectedCase(null)}
          >
            <div className="bg-[#9fdcff] rounded-2xl flex flex-col lg:flex-row w-full max-w-4xl h-auto lg:h-2/3 relative overflow-hidden">
              {/* Image Section for Small Screens */}
              {isMobile && <div className="w-full lg:w-[60%] h-60 lg:h-full relative">
                <Image src={selectedCase.image} layout="fill" alt='solved-case' objectFit="cover" className="rounded-t-2xl lg:rounded-none lg:rounded-l-2xl" />
                <button
                  className="absolute top-2 right-2 bg-[#292828] cursor-pointer text-white w-10 h-10 rounded-full text-base flex justify-center items-center"
                  onClick={() => setSelectedCase(null)}
                >
                  ✕
                </button>
              </div>}
              
              {/* Details Section */}
              <div className="flex flex-col p-6 lg:p-10 w-full lg:w-[40%] gap-2">
                <h2 className="text-3xl lg:text-5xl font-bold text-[#292828]">{selectedCase.title}</h2>
                <p className="text-lg lg:text-3xl text-[#292828] font-normal">{selectedCase.company}</p>
                <p className="text-sm lg:text-lg font-light text-[#292828] mt-2">{selectedCase.details}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedCase.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-white text-gray-800 px-3 py-2 rounded-full flex justify-center items-center">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {!isMobile && <motion.div
                className="w-[60%] h-full p-1 relative"
                onClick={(e) => e.stopPropagation()} // Prevent closing on click inside modal
              >
                <button
                  className="absolute top-2 right-2 bg-[#292828] cursor-pointer text-white w-10 h-10 rounded-full text-base flex justify-center items-center"
                  onClick={() => setSelectedCase(null)}
                >
                  ✕
                </button>
                <Image
                  src={selectedCase.image}
                  width={1000}
                  height={1000}
                  alt={"solved-case"}
                  className="rounded-r-2xl w-full h-full object-cover"
                />
              </motion.div>}
            </div>
          </motion.div>
        )}
      </div>
    );
  };
  










const textOptions = [
  'Into Our Work',
  'Into Success Stories',
  'Into Our Impact',
  'Our Projects'
];

const Landing = () => {
    const { language } = useLippStore();
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % textOptions.length);
      }, 2000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className='w-full h-screen relative flex items-center justify-center lg:px-0 px-5'>
        <div className='absolute text-center flex flex-col gap-5'>
          <span className='text-white text-5xl md:text-7xl lg:text-8xl font-bold'>Peek</span>
          <AnimatePresence mode='wait'>
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className='text-2xl md:text-4xl lg:text-7xl font-bold'
            >
              {textOptions[index]}
            </motion.span>
          </AnimatePresence>
          <div className='text-sm p-5 md:text-lg font-light w-full md:w-3/4 lg:w-1/2 mx-auto text-gray-300'>
            At Lippcomm Digital Marketing, we are dedicated to delivering results-driven solutions tailored to our clients' needs. From strategic planning to seamless execution, we focus on creating real value. Explore our success stories and see what our clients have to say about working with us.
          </div>
        </div>
      </div>
    );
  };
  
