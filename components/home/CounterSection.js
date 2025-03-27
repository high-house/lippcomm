"use client"
import useLippStore from "@/store/LippStore";
import { useEffect, useState, useRef } from "react";

const stats = [
    { 
        label: "Expertise in different industries", 
        value: 30, 
        description: "We have extensive experience across various industries, allowing us to adapt to different business needs and challenges." 
    },
    { 
        label: "Quality made in Switzerland", 
        value: 330, 
        description: "Our services are built on Swiss precision, ensuring high quality, reliability, and long-lasting impact." 
    },
    { 
        label: "High Customer Satisfaction", 
        value: 95, 
        description: "We take pride in delivering solutions that exceed customer expectations, resulting in a satisfaction rate of over 95%." 
    },
    { 
        label: "Young and innovative Team", 
        value: 20, 
        description: "Our dynamic team is full of fresh ideas, energy, and cutting-edge expertise to drive innovation and success." 
    }
];

const stats1 = [
    { 
        label: "Expertise in verschiedenen Branchen", 
        value: 30, 
        description: "Wir verfügen über umfangreiche Erfahrung in verschiedenen Branchen, sodass wir uns an unterschiedliche Geschäftsanforderungen und Herausforderungen anpassen können." 
    },
    { 
        label: "Qualität made in der Schweiz", 
        value: 330, 
        description: "Unsere Dienstleistungen basieren auf Schweizer Präzision und gewährleisten höchste Qualität, Zuverlässigkeit und eine langfristige Wirkung." 
    },
    { 
        label: "Hohe Kundenzufriedenheit", 
        value: 95, 
        description: "Wir sind stolz darauf, Lösungen zu liefern, die die Erwartungen unserer Kunden übertreffen und eine Zufriedenheitsrate von über 95 % erreichen." 
    },
    { 
        label: "Junges und innovatives Team", 
        value: 20, 
        description: "Unser dynamisches Team bringt frische Ideen, Energie und modernstes Fachwissen mit, um Innovation und Erfolg voranzutreiben." 
    }
];

const CounterSection = () => {
    const [counts, setCounts] = useState(stats.map(() => 0));
    const sectionRef = useRef(null);
    const [startCount, setStartCount] = useState(false);
    const [data, setData] = useState(stats); 
    const {language}=useLippStore();
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

    useEffect(() => {
        if (startCount) {
            const intervals = stats.map((stat, index) => {
                const increment = Math.ceil(stat.value / 50); // Adjust speed
                return setInterval(() => {
                    setCounts((prevCounts) => {
                        const newCounts = [...prevCounts];
                        if (newCounts[index] < stat.value) {
                            newCounts[index] += increment;
                        } else {
                            newCounts[index] = stat.value; // Stop at max value
                            clearInterval(intervals[index]);
                        }
                        return newCounts;
                    });
                }, 30); // Adjust speed
            });

            return () => intervals.forEach(clearInterval);
        }
    }, [startCount]);

    return (
        <div 
            ref={sectionRef} 
            className="w-screen h-screen flex flex-col items-center justify-center bg-[#FFE6A7] text-[#432818] px-10"
        >
            <h2 className="text-5xl font-semibold text-[#432818] mb-10">{language === "EN"? "Why work with us?":"Warum mit uns arbeiten?"}</h2>
            
            <div className="w-full max-w-5xl space-y-8">
                {data.map((stat, index) => (
                    <div key={index} className="flex items-center gap-32 justify-center">
                        {/* Number on the left */}
                        <span className="text-8xl font-bold text-[#6F1D1B] w-24  flex justify-center items-center text-center">
                            {counts[index]}{stat.value > 100 ? "+" : ""}
                        </span>

                        {/* Text on the right */}
                        <div className="flex-1">
                            <h3 className="text-3xl font-semibold">{stat.label}</h3>
                            <p className="text-[#432818] text-2xl mt-2">{stat.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CounterSection;
