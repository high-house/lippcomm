"use client"
import useLippStore from "@/store/LippStore";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const stats = [
    { 
        label: "Expertise in different industries", 
        value: 30, 
        src: "/home/map.svg",
        description: "We have extensive experience across various industries, allowing us to adapt to different business needs and challenges." 
    },
    { 
        label: "Quality made in Switzerland", 
        src: "/home/team.svg",
        value: 330, 
        description: "Our services are built on Swiss precision, ensuring high quality, reliability, and long-lasting impact." 
    },
    { 
        label: "High Customer Satisfaction", 
        src: "/home/team.svg",
        value: 95, 
        description: "We take pride in delivering solutions that exceed customer expectations, resulting in a satisfaction rate of over 95%." 
    },
    { 
        label: "Young and innovative Team", 
        value: 20, 
        src: "/home/stars.svg",
        description: "Our dynamic team is full of fresh ideas, energy, and cutting-edge expertise to drive innovation and success." 
    }
];

const stats1 = [
    { 
        label: "Expertise in verschiedenen Branchen", 
        value: 30, 
        src: "/home/map.svg",
        description: "Wir verfügen über umfangreiche Erfahrung in verschiedenen Branchen, sodass wir uns an unterschiedliche Geschäftsanforderungen und Herausforderungen anpassen können." 
    },
    { 
        label: "Qualität made in der Schweiz", 
        value: 330, 
        src: "/home/hands.svg",
        description: "Unsere Dienstleistungen basieren auf Schweizer Präzision und gewährleisten höchste Qualität, Zuverlässigkeit und eine langfristige Wirkung." 
    },
    { 
        label: "Hohe Kundenzufriedenheit", 
        value: 95, 
        src: "/home/team.svg",
        description: "Wir sind stolz darauf, Lösungen zu liefern, die die Erwartungen unserer Kunden übertreffen und eine Zufriedenheitsrate von über 95 % erreichen." 
    },
    { 
        label: "Junges und innovatives Team", 
        value: 20,
        src: "/home/stars.svg",
        description: "Unser dynamisches Team bringt frische Ideen, Energie und modernstes Fachwissen mit, um Innovation und Erfolg voranzutreiben." 
    }
];

const CounterSection = () => {
    const [counts, setCounts] = useState(stats.map(() => 0));
    const sectionRef = useRef(null);
    const [startCount, setStartCount] = useState(false);
    const [data, setData] = useState(stats); 
    const { language } = useLippStore();

    useEffect(() => {
        setData(language === "EN" ? stats : stats1);
    }, [language]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCount(true);
                    observer.disconnect(); // Stop observing once triggered
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div 
            ref={sectionRef} 
            className="w-screen h-screen flex flex-col items-center justify-center _text-[#432818] px-10"
        >
            <h2 className="text-5xl font-semibold text-[#73A7DB] mb-10">
                {language === "EN" ? "Why work with us?" : "Warum mit uns arbeiten?"}
            </h2>
            
            <div className="w-full max-w-5xl space-y-8">
                {data.map((stat, index) => (
                    <div key={index} className="flex items-center gap-32 justify-center">
                        <Image src={stat.src} width={400} height={400} className="w-24 h-24 object-cover" alt={stat.label} />
                        <div className="flex-1">
                            <h3 className="text-3xl font-semibold">{stat.label}</h3>
                            <p className="text-[#73A7DB] text-xl mt-2">{stat.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CounterSection;
