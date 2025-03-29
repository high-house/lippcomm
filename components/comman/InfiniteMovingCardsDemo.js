"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import useLippStore from "@/store/LippStore";

export function InfiniteMovingCardsDemo() {
  const { language } = useLippStore();
  
  const testimonials = language === "EN" ? [
    { 
      name: "Headz Agency", 
      src: "/home/partner/Headz.svg", 
      description: "A leading digital marketing agency specializing in brand strategy, social media marketing, and creative design."
    },
    { 
      name: "Brilliance PR", 
      src: "/home/partner/Brilliance.png", 
      description: "A top-tier public relations firm that helps brands enhance their media presence and reputation through strategic communication."
    },
    { 
      name: "Lead Gen Company", 
      src: "/home/partner/leadGen.png", 
      description: "A data-driven lead generation company focused on helping businesses acquire high-quality leads through innovative marketing strategies."
    },
    { 
      name: "BeeBase", 
      src: "/home/partner/beebase.svg", 
      description: "A tech-driven business solutions provider offering CRM tools, automation, and analytics to improve operational efficiency."
    }
  ] : [
    { 
      name: "Headz Agency", 
      src: "/home/partner/Headz.svg", 
      description: "Eine führende Digitalmarketing-Agentur, die sich auf Markenstrategie, Social-Media-Marketing und kreatives Design spezialisiert hat."
    },
    { 
      name: "Brilliance PR", 
      src: "/home/partner/Brilliance.png", 
      description: "Eine erstklassige PR-Agentur, die Unternehmen dabei hilft, ihre Medienpräsenz und Reputation durch strategische Kommunikation zu verbessern."
    },
    { 
      name: "Lead Gen Company", 
      src: "/home/partner/leadGen.png", 
      description: "Ein datengetriebenes Lead-Generierungsunternehmen, das Unternehmen hilft, hochwertige Leads durch innovative Marketingstrategien zu gewinnen."
    },
    { 
      name: "BeeBase", 
      src: "/home/partner/beebase.svg", 
      description: "Ein technologiegetriebenes Unternehmen, das CRM-Tools, Automatisierung und Analysen zur Verbesserung der Betriebseffizienz anbietet."
    }
  ];

  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className="text-5xl text-white font-bold text-center mb-20">
        {language === "EN" ? "Our Partner Network" : "Unser Partner Netzwerk"}
      </h2>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}
