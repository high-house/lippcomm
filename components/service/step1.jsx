import React from 'react';

const ServiceCard = ({ title, price, description, hasDiscount }) => {
  return (
    <div className="relative bg-[#BB9457] p-6 rounded-lg shadow-md text-[#432818]">
      {hasDiscount && (
        <div className="absolute top-0 right-0 bg-[#432818] text-[#FFE6A7] text-xs font-semibold px-3 py-1 rounded-bl-lg">
          5% bundle discount*
        </div>
      )}
      <h3 className="font-bold text-lg">{title}</h3>
      <div className="mt-1 w-full border-b border-[#432818]"></div>
      <p className="mt-3 text-lg font-semibold">{price}</p>
      {description && (
        <button className="mt-4 px-4 py-2 border rounded-lg text-[#432818] border-[#6F1D1B] hover:bg-[#99582A] hover:text-white transition">
          Learn more
        </button>
      )}
    </div>
  );
};

const PricingSection = () => {
  return (
    <div className="bg-[#432818] flex items-center py-10 px-[12%]">
      <div className="bg-[#FFE6A7] p-8 rounded-lg shadow-lg w-5xl" style={{ fontFamily: 'Playfair Display, serif' }}>
        <p className="text-[#432818] text-sm font-semibold">Step 1</p>
        <h1 className="text-[#432818] text-3xl font-bold">Onboarding</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <ServiceCard title="Marketing audit" price="CHF 950" />
          <ServiceCard title="Marketing strategy" price="CHF 6500" />
          <ServiceCard title="Performance ad setup" price="CHF 2600" />
          <ServiceCard title="Creative asset setup" price="CHF 950" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <ServiceCard title="Branding" price="From CHF 3300" description="Learn more" hasDiscount />
          <ServiceCard title="Website" price="From CHF 5500" description="Learn more" hasDiscount />
        </div>

        <p className="mt-4 text-xs text-[#FFE6A7]">
          * Bundle branding & website together and receive a 5% discount on both services.
        </p>
      </div>
    </div>
  );
};

export default PricingSection;
