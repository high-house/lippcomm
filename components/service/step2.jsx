import React from 'react';

const FeatureCard = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-[#1A9BE0]/70 p-6 rounded-lg shadow-md flex items-start space-x-4">
      <img src={imageSrc} alt={title} className="w-12 h-12 object-contain" />
      <div>
        <h3 className="font-bold text-lg text-[#1F222F]">{title}</h3>
        <p className="text-[#1F222F] mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
};


const CMOservies = () => {
  return (
    <div className="bg-[#292828] flex py-10 px-[12%]">
      <div className="bg-[#9FDCFF] p-8 rounded-lg shadow-lg w-5xl" style={{ fontFamily: 'Playfair Display, serif' }}>
        <p className="text-[#23222C] text-sm font-semibold">Step 2</p>
        <h1 className="text-[#23222C] text-3xl font-bold">Strategic guiding at its core</h1>
        <p className="text-[#23222C] font-bold mt-4">What's included:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <FeatureCard imageSrc="/service/CMO.svg" title="CMO Strategy Development" description="" />
          <FeatureCard imageSrc="/service/weekly.svg" title="Weekly Strategy Meetup" description="" />
          <FeatureCard imageSrc="/service/weekly.svg" title="Monthly Personal Meetup" description="" />
          <FeatureCard imageSrc="/service/Active.svg" title="Active Support" description="" />
        </div>
        
        <p className="text-[#1F222F] text-base mt-6">
          The CMO defines the strategic direction and supervises your marketing activities or acts as a project manager. However, daily execution of the activities is not included unless specifically booked as part of our services (see phase 3).
        </p>
      </div>
    </div>
  );
};

export default CMOservies;

