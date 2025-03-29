"use client";

import { useState } from "react";

const ServiceCard = ({ id, title, price, infoTitle, infoDescription, activeId, setActiveId }) => {
  const isActive = activeId === id;

  return (
    <div className="relative bg-[#1A9BE0]/70 p-8 rounded-xl shadow-lg text-[#1F222F] w-full h-64 flex flex-col justify-between">
      <h3 className="font-bold text-3xl">{title}</h3>
      <div className="mt-2 w-full border-b border-[#1F222F]"></div>
      <p className="mt-4 text-xl font-semibold">{price}</p>

      <div className="relative flex justify-between items-center mt-4 p-3 bg-[#9FDCFF] rounded-lg shadow-md">
        <span className="text-lg font-semibold">More Info</span>
        <button
          onClick={() => setActiveId(isActive ? null : id)}
          className="w-8 h-8 bg-[#41AFE9] border rounded-full flex items-center justify-center text-gray-700 font-bold cursor-pointer hover:bg-gray-200"
        >
          i
        </button>
      </div>
      
      {isActive && (
        <div className="absolute top-full right-0 mt-2 bg-gray-100 text-md text-gray-700 p-3 rounded-lg shadow-lg w-72 z-50 border">
          <h4 className="font-bold text-lg mb-2">{infoTitle}</h4>
          <p>{infoDescription}</p>
        </div>
      )}
    </div>
  );
};

const PricingSection = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="bg-[#292828] flex items-center py-12 px-[12%]">
      <div className="bg-[#9FDCFF] p-10 rounded-xl shadow-xl -w-full w-5xl" style={{ fontFamily: "Playfair Display, serif" }}>
        <p className="text-[#23222C] text-md font-semibold">Step 1</p>
        <h1 className="text-[#23222C] text-4xl font-bold">Onboarding</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          <ServiceCard 
            id="1"
            title="SEO / Website" 
            price="CHF 1000"
            infoTitle="SEO / Website"
            infoDescription="Optimize or redesign your websites, as well as regular SEO services for optimal search results on Google."
            activeId={activeId}
            setActiveId={setActiveId}
          />
          <ServiceCard 
            id="2"
            title="Social Media Management" 
            price="CHF 1000"
            infoTitle="Social Media Management"
            infoDescription="We manage your social media profiles and ensure the posting of relevant content for your target audience."
            activeId={activeId}
            setActiveId={setActiveId}
          />
          <ServiceCard 
            id="3"
            title="Paid Ads" 
            price="CHF 1000"
            infoTitle="Paid Ads"
            infoDescription="We manage your paid ads for you and achieve top results regardless of the platform used."
            activeId={activeId}
            setActiveId={setActiveId}
          />
        </div>

        <p className="text-[#1F222F] text-base mt-6">
          * All prices are in CHF per month and exclude VAT of 8.1%.
        </p>
      </div>
    </div>
  );
};

export default PricingSection;
