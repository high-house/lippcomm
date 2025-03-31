"use client";  // Add this line

import React from 'react';
import useLippStore from '@/store/LippStore'; // Import the language store

const FeatureCard = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
      <img src={imageSrc} alt={title} className="w-12 h-12 object-contain" />
      <div>
        <h3 className="font-bold text-lg text-[#1F222F]">{title}</h3>
        <p className="text-[#1F222F] mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
};

const CMOservices = () => {
  const { language } = useLippStore();
  const isEnglish = language === "EN";

  return (
    <div className="bg-[#292828] flex py-10 lg:px-[12%] px-5">
      <div className="bg-[#9FDCFF] lg:p-8 p-2 rounded-lg shadow-lg w-5xl">
        <p className="text-[#23222C] text-sm font-semibold">{isEnglish ? "Step 2" : "Schritt 2"}</p>
        <h1 className="text-[#23222C] text-3xl font-bold">
          {isEnglish ? "Strategic guiding at its core" : "Strategische Führung im Kern"}
        </h1>
        <p className="text-[#23222C] font-bold mt-4">
          {isEnglish ? "What's included:" : "Was ist enthalten:"}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <FeatureCard 
            imageSrc="/service/CMO.svg" 
            title={isEnglish ? "CMO Strategy Development" : "CMO-Strategieentwicklung"} 
            description=""
          />
          <FeatureCard 
            imageSrc="/service/weekly.svg" 
            title={isEnglish ? "Weekly Strategy Meetup" : "Wöchentliches Strategie-Meeting"} 
            description=""
          />
          <FeatureCard 
            imageSrc="/service/weekly.svg" 
            title={isEnglish ? "Monthly Personal Meetup" : "Monatliches persönliches Treffen"} 
            description=""
          />
          <FeatureCard 
            imageSrc="/service/Active.svg" 
            title={isEnglish ? "Active Support" : "Aktive Unterstützung"} 
            description=""
          />
        </div>
        
        <p className="text-[#1F222F] text-base mt-6">
          {isEnglish 
            ? "The CMO defines the strategic direction and supervises your marketing activities or acts as a project manager. However, daily execution of the activities is not included unless specifically booked as part of our services (see phase 3)." 
            : "Der CMO legt die strategische Richtung fest und überwacht deine Marketingaktivitäten oder fungiert als Projektmanager. Die tägliche Durchführung der Aktivitäten ist jedoch nicht enthalten, es sei denn, sie wurde als Teil unserer Dienstleistungen speziell gebucht (siehe Phase 3)."}
        </p>
      </div>
    </div>
  );
};

export default CMOservices;
