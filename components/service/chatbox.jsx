"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Chatbot = () => {
    const [scrollIndex, setScrollIndex] = useState(0);

    const steps = [
        {
            title: "Let’s walk you through how we work",
            text: "We begin by getting to know your business, challenges, and goals. From there, we craft a strategy tailored to your needs and guide you every step of the way. But first, we set a strong foundation – that’s what onboarding is all about. In this crucial first step, we take time to understand your position in the market. We evaluate or enhance your current marketing setup and create a plan that becomes the solid foundation for your future success."
        },
        {
            num: 1,
            text: " Should you need a rebrand or are starting from scratch and require a custom brand identity, we can deliver a full brand kit – including logo, color palette, typography and more – to make you stand out. And if you’re looking for a responsive website that matches your brand and message, we make the process straightforward. From simple one-page sites to multi-page platforms with 3D animations, we handle every detail. Throughout the process, rapid iterations ensure the final result perfectly aligns with your vision."
        },
        {
            num: 2,
            text: "Your dedicated CMO becomes your strategic partner and works closely with your own team or our in-house team, aligning marketing efforts with business goals. Whether it's refining your brand, optimizing funnels, or leading performance campaigns – we help drive sustainable growth together."
        },
        {
            num: 3,
            text: "Add the specific services you need to execute your strategy with our dedicated marketing team. This allows you to choose and individualize your offer being able to swap or scale your marketing activities at any time and to fit your expectations – from content generation to lead generation and performance ads on platforms like Google and Meta. Execution, made seamless by bringing your strategy to life."
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY < 100) setScrollIndex(0);
            else if (scrollY < 700) setScrollIndex(1);
            else if (scrollY < 1200) setScrollIndex(2);
            else setScrollIndex(3);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed bottom-10 right-10 flex flex-col items-center">
            <motion.div
                key={scrollIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
            >
                <div className="bg-[#F4F4F5] text-[#1D1E1F] text-lg p-4 rounded-lg shadow-lg w-md " style={{ fontFamily: 'Playfair Display, serif' }}>
                    <h4 className="font-bold">{steps[scrollIndex].title}</h4>
                    <p className="text-base">{steps[scrollIndex].text}</p>
                </div>

                <img
                    src="/service/robot.svg"
                    alt="Chatbot"
                    className="w-40 h-40 mt-6 blinking"
                />
            </motion.div>

            <div className="flex items-center mt-4 relative ">
                {steps.slice(1).map((step, index) => (
                    <div key={step.num} className="flex items-center">

                        <div
                            className={`w-12 h-12 flex items-center justify-center text-2xl rounded-full border-2  transition-all duration-300 ${scrollIndex >= index + 1 ? "bg-[#9FDCFF] text-[#292828] border-white " : "bg-[#292828] text-[#9FDCFF]  border-[#9FDCFF]"
                                }`}
                        >
                            {step.num}
                        </div>

                        {index < steps.length - 2 && (
                            <motion.div
                                className="h-2 rounded-full mx-2"
                                initial={{ width: "0px" }}
                                animate={{ width: scrollIndex >= index + 1 ? "80px" : "0px" }}
                                transition={{ duration: 0.7, ease: "easeInOut" }}
                                style={{
                                    background: scrollIndex >= index + 1
                                        ? "linear-gradient(to right, #9FDCFF, #60a5fa)"
                                        : "#d1d5db",
                                    boxShadow: scrollIndex >= index + 1
                                        ? "0 0 5px #3b82f6"
                                        : "none",
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chatbot;
