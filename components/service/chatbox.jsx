"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useLippStore from "@/store/LippStore";
import Image from "next/image";

const Chatbot = () => {
    const [scrollIndex, setScrollIndex] = useState(0);
    const { language } = useLippStore();
    const isEnglish = language === "EN";

    const steps = [
        {
            title: isEnglish ? "Let’s walk you through how we work" : "Lass uns dir zeigen, wie wir arbeiten",
            text: isEnglish
                ? "We begin by getting to know your business, challenges, and goals. From there, we craft a strategy tailored to your needs and guide you every step of the way. But first, we set a strong foundation – that’s what onboarding is all about. In this crucial first step, we take time to understand your position in the market. We evaluate or enhance your current marketing setup and create a plan that becomes the solid foundation for your future success."
                : " Wir lernen Ihr Unternehmen, Ihre Herausforderungen und Ziele genau kennen. Daraus entwickeln wir eine individuelle Strategie und begleiten Sie Schritt für Schritt. Die Basis dafür bildet ein strukturiertes Onboarding. Im ersten Schritt geht es darum, uns wirklich mit Ihnen und Ihrer aktuellen Position im Markt auseinanderzusetzen. Wir analysieren oder optimieren Ihr aktuelles Marketing-Setup und entwickeln einen Plan, der als stabiles Fundament für Ihren Erfolg dient."
        },
        {
            num: 1,
            text: isEnglish
                ? "Should you need a rebrand or are starting from scratch and require a custom brand identity, we can deliver a full brand kit – including logo, color palette, typography and more – to make you stand out. And if you’re looking for a responsive website that matches your brand and message, we make the process straightforward. From simple one-page sites to multi-page platforms with 3D animations, we handle every detail. Throughout the process, rapid iterations ensure the final result perfectly aligns with your vision"
                : "Sollten Sie ein Rebranding benötigen oder von Grund auf eine neue Marke entwickeln wollen, unterstützen wir Sie mit einem vollständigen Brand Kit, damit Ihre Marke unverwechselbar wird – inklusive Logo, Farbpalette, Typografie und mehr. Dazu möchten Sie eine responsive Webseite, die perfekt zu Ihrer Marke und Botschaft passt? Wir begleiten Sie unkompliziert durch den gesamten Prozess. Ob ein einfacher Onepager oder eine umfangreiche Multi-Page Website mit 3D-Animationen – wir kümmern uns um alle Details. Durch schnelle Iterationen stellen wir sicher, dass das Ergebnis exakt Ihrer Vision entspricht."
        },
        {
            num: 2,
            text: isEnglish
                ? "Your dedicated CMO becomes your strategic partner and works closely with your own team or our in-house team, aligning marketing efforts with business goals. Whether it's refining your brand, optimizing funnels, or leading performance campaigns – we help drive sustainable growth together."
                : "Ihr persönlicher CMO wird Ihr strategischer Partner und arbeitet eng mit Ihrem Team oder unserem In-House Talent Team zusammen, um Marketing und Geschäftsziele in Einklang zu bringen. Ob Markenentwicklung, Funnel-Optimierung oder Performance-Kampagnen – gemeinsam schaffen wir nachhaltiges Wachstum."
        },
        {
            num: 3,
            text: isEnglish
                ? "Add the specific services you need to execute your strategy with our dedicated marketing team. This allows you to choose and individualize your offer being able to swap or scale your marketing activities at any time and to fit your expectations – from content generation to lead generation and performance ads on platforms like Google and Meta. Execution, made seamless by bringing your strategy to life."
                : "Fügen Sie genau die Services hinzu, die Sie für die Umsetzung Ihrer Strategie benötigen. So können Sie Ihr Angebot individuell gestalten, Marketingmassnahmen jederzeit anpassen oder ausweiten – ganz nach Ihren Erwartungen. Ob Content-Erstellung, Leadgenerierung oder Performance-Ads auf Plattformen wie Google und Meta: Wir sorgen dafür, dass Ihre Strategie mühelos umgesetzt wird."
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const screenWidth = window.innerWidth;

            if (screenWidth >= 1024) { 
                if (scrollY < 450) setScrollIndex(0);
                else if (scrollY < 900) setScrollIndex(1);
                else if (scrollY < 1600) setScrollIndex(2);
                else setScrollIndex(3);
            } else { 
                if (scrollY < 300) setScrollIndex(0);
                else if (scrollY < 1300) setScrollIndex(1);
                else if (scrollY < 2200) setScrollIndex(2);
                else setScrollIndex(3);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="fixed bottom-10 lg:right-10 flex flex-col items-center">
            <motion.div
                key={scrollIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
            >
                <div className="bg-[#F4F4F5] text-[#1D1E1F] lg:text-lg  p-4 rounded-lg shadow-lg lg:w-md ">
                    <h4 className="font-bold">{steps[scrollIndex].title}</h4>
                    <p className="lg:text-base text-sm">{steps[scrollIndex].text}</p>
                </div>

                <Image
                    width={400}
                    height={400}
                    src="/service/robot.svg"
                    alt="Chatbot"
                    className="lg:w-40 w-10 lg:h-40 lg:mt-6 mt-2 blinking"
                />
            </motion.div>

            <div className="flex items-center mt-4 relative ">
                {steps.slice(1).map((step, index) => (
                    <div key={step.num} className="flex items-center">
                        <div
                            className={`lg:w-12  w-8  lg:h-12 flex items-center justify-center text-2xl rounded-full border-2  transition-all duration-300 ${scrollIndex >= index + 1 ? "bg-[#9FDCFF] text-[#292828] border-white " : "bg-[#292828] text-[#9FDCFF]  border-[#9FDCFF]"
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