"use client";

import { useState } from "react";
import useLippStore from "@/store/LippStore";

const translations = {
  EN: {
    step: "Step 1",
    onboarding: "Onboarding",
    moreInfo: "More Info",
    seoTitle: "SEO / Website",
    seoDescription: "Optimize or redesign your websites, as well as regular SEO services for optimal search results on Google.",
    socialTitle: "Social Media Management",
    socialDescription: "We manage your social media profiles and ensure the posting of relevant content for your target audience.",
    adsTitle: "Paid Ads",
    adsDescription: "We manage your paid ads for you and achieve top results regardless of the platform used.",
    priceNote: "* All prices are in CHF per month and exclude VAT of 8.1%.",
  },
  DE: {
    step: "Schritt 1",
    onboarding: "Einführung",
    moreInfo: "Mehr Infos",
    seoTitle: "SEO / Website",
    seoDescription: "Optimieren oder gestalten Sie Ihre Websites neu sowie regelmäßige SEO-Dienste für optimale Suchergebnisse bei Google.",
    socialTitle: "Social Media Management",
    socialDescription: "Wir verwalten Ihre Social-Media-Profile und sorgen für die Veröffentlichung relevanter Inhalte für Ihre Zielgruppe.",
    adsTitle: "Paid Ads",
    adsDescription: "Wir verwalten Ihre bezahlten Anzeigen für Sie und erzielen Top-Ergebnisse unabhängig von der genutzten Plattform.",
    priceNote: "* Alle Preise sind in CHF pro Monat und verstehen sich ohne 8,1 % MwSt.",
  },
};

const ServiceCard = ({ id, title, price, infoTitle, infoDescription, activeId, setActiveId, moreInfo }) => {
  const isActive = activeId === id;

  return (
    <div className="relative bg-white p-8 rounded-xl shadow-lg text-[#1F222F] w-full  lg:h-64 flex flex-col justify-between">
      <h3 className="font-bold lg:text-3xl text-2xl">{title}</h3>
      <div className="mt-2 w-full border-b border-[#1F222F]"></div>
      <p className="mt-4 text-xl font-semibold">{price}</p>

      <div className="relative flex justify-between items-center lg:mt-4 mt-6 p-3 bg-[#9FDCFF] rounded-lg shadow-md">
        <span className="text-lg font-semibold">{moreInfo}</span>
        <button
          onClick={() => setActiveId(isActive ? null : id)}
          className="lg:w-6 w-5 lg:h-6 h-5 bg-white border rounded-full flex items-center justify-center text-gray-700 font-bold cursor-pointer hover:bg-gray-200"
        >
          i
        </button>
      </div>
      
      {isActive && (
        <div className="absolute lg:top-full top-56 right-0 mt-2 bg-white text-xl text-[#292828] p-2 rounded-lg shadow-lg w-full z-10">
          <h4 className="font-bold text-lg mb-2">{infoTitle}</h4>
          <p>{infoDescription}</p>
        </div>
      )}
    </div>
  );
};

const PricingSection = () => {
  const [activeId, setActiveId] = useState(null);
  const { language } = useLippStore();
  const t = translations[language];

  return (
    <div className="bg-[#292828] flex py-10 lg:px-[12%] p-5">
      <div className="bg-[#9FDCFF]  lg:p-10 p-2 rounded-xl shadow-xl w-full max-w-5xl" >
        <p className="text-[#23222C] text-md font-semibold">{t.step}</p>
        <h1 className="text-[#23222C] text-4xl font-bold">{t.onboarding}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 ">
          <ServiceCard 
            id="1"
            title={t.seoTitle}
            price="CHF 1000"
            infoTitle={t.seoTitle}
            infoDescription={t.seoDescription}
            moreInfo={t.moreInfo}
            activeId={activeId}
            setActiveId={setActiveId}
          />
          <ServiceCard 
            id="2"
            title={t.socialTitle}
            price="CHF 1000"
            infoTitle={t.socialTitle}
            infoDescription={t.socialDescription}
            moreInfo={t.moreInfo}
            activeId={activeId}
            setActiveId={setActiveId}
          />
          <ServiceCard 
            id="3"
            title={t.adsTitle}
            price="CHF 1000"
            infoTitle={t.adsTitle}
            infoDescription={t.adsDescription}
            moreInfo={t.moreInfo}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        </div>

        <p className="text-[#1F222F] text-base mt-6">
          {t.priceNote}
        </p>
      </div>
    </div>
  );
};

export default PricingSection;
