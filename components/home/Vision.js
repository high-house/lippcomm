"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import useLippStore from "@/store/LippStore";

function Vision() {
  const { language } = useLippStore();
  const visionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCardClicked, setIsCardClicked] = useState(false);
  const [clickedSlide, setClickedSlide] = useState(null);

  const slides = [
    {
      titleEN: "Bold Marketing That Works",
      titleDE: "Mutiges Marketing, das funktioniert",
      src: "/home/abc2.jpg",
      descriptionEN:
        "We believe in bold marketing that delivers real, measurable results without unnecessary complexity...",
      descriptionDE:
        "Wir glauben an mutiges Marketing, das echte, messbare Ergebnisse liefert, ohne unnötige Komplexität...",
    },
    {
      titleEN: "Creative Solutions",
      titleDE: "Kreative Lösungen",
      src: "/home/abc3.jpg",
      descriptionEN:
        "Our vision is to craft innovative and practical marketing solutions that go beyond aesthetics...",
      descriptionDE:
        "Unsere Vision ist es, innovative und praktische Marketinglösungen zu entwickeln...",
    },
    {
      titleEN: "Simplicity & Efficiency",
      titleDE: "Einfachheit & Effizienz",
      src: "/home/img3.jpg",
      descriptionEN:
        "We believe that marketing should be as simple and efficient as possible, without sacrificing effectiveness...",
      descriptionDE:
        "Wir sind der Meinung, dass Marketing so einfach und effizient wie möglich sein sollte...",
    },
    {
      titleEN: "Your Focus, Our Support",
      titleDE: "Ihr Fokus, unsere Unterstützung",
      src: "/home/help.jpg",
      descriptionEN:
        "Running a business requires your full attention, and we’re here to support you every step of the way...",
      descriptionDE:
        "Ein Unternehmen zu führen erfordert Ihre volle Aufmerksamkeit, und wir sind hier, um Sie zu unterstützen...",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(visionRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (visionRef.current) {
      observer.observe(visionRef.current);
    }

    return () => {
      if (visionRef.current) {
        observer.unobserve(visionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleCardClick = (index) => {
    setClickedSlide(slides[index]);
    setIsCardClicked(true);
  };

  const handleClosePopup = () => {
    setIsCardClicked(false);
    setClickedSlide(null);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      {/* Background Image with Title */}
      <motion.div
        key={slides[currentSlide].src}
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="lg:w-[60%] lg:h-1/2 w-full h-64 sm:h-72 md:h-96 absolute lg:top-32 top-16 px-5 lg:px-0"
      >
        <div className="text-white w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-center">
          {language === "EN" ? "Our Vision" : "Unsere Vision"}
        </div>
        <Image
          src={slides[currentSlide].src}
          className="w-full h-full object-cover rounded-2xl"
          width={1000}
          height={1000}
          alt="home"
        />
      </motion.div>

      {/* Vision Card */}
      <div
        ref={visionRef}
        className={`${
          isVisible ? "lg:w-1/2 w-[90.5%]" : "w-1"
        } lg:h-[40%] h-auto bg-[#9fdcff] rounded-2xl transition-all duration-700 flex flex-col justify-center items-center p-6 sm:p-10 absolute top-1/2 left-1/2 -translate-x-1/2 `}
        onClick={() => handleCardClick(currentSlide)}
        style={{ cursor: "pointer" }}
      >
        <h2
          className={`${
            isVisible ? "opacity-100" : "opacity-0"
          } font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#292828] mb-4 lg:mb-6 text-center`}
        >
          {language === "EN"
            ? slides[currentSlide].titleEN
            : slides[currentSlide].titleDE}
        </h2>
        <p
          className={`${
            isVisible ? "opacity-100" : "opacity-0"
          } text-md sm:text-lg lg:text-xl text-[#292828] text-center mb-6`}
        >
          {language === "EN"
            ? slides[currentSlide].descriptionEN.substring(0, 100) + "..."
            : slides[currentSlide].descriptionDE.substring(0, 100) + "..."}
        </p>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {isCardClicked && clickedSlide && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-[#9fdcff] rounded-lg shadow-lg w-full lg:w-2/3 h-[90vh] lg:h-[80vh] overflow-y-auto p-2 relative">
              {/* Close Button */}
              <button
                onClick={handleClosePopup}
                className="absolute top-5 right-5 bg-[#9fdcff] text-white w-8 h-8 rounded-full flex justify-center items-center"
              >
                ✕
              </button>

              {/* Image */}
              <Image
                src={clickedSlide.src}
                className="w-full h-48 sm:h-64 md:h-72 lg:h-[25rem] object-cover rounded-lg mb-4"
                width={500}
                height={250}
                alt={clickedSlide.titleEN}
              />

              {/* Title and Description */}
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-2 text-[#292828] text-center">
                {language === "EN"
                  ? clickedSlide.titleEN
                  : clickedSlide.titleDE}
              </h3>
              <p className="text-md sm:text-lg lg:text-xl text-[#292828] text-center">
                {language === "EN"
                  ? clickedSlide.descriptionEN
                  : clickedSlide.descriptionDE}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Vision;
