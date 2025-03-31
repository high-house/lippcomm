"use client"
import useLippStore from '@/store/LippStore';
import { useEffect, useState } from 'react';
import {motion,AnimatePresence} from "framer-motion"

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

  export default Landing