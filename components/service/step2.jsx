import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-[#BB9457] p-6 rounded-lg shadow-md flex items-start space-x-4">
      <div className="text-[#432818] text-2xl">{icon}</div>
      <div>
        <h3 className="font-bold text-lg text-[#432818]">{title}</h3>
        <p className="text-[#432818] mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
};

const CMOservies = () => {
  return (
    <div className="bg-[#432818] flex py-10 px-[12%]">
      <div className="bg-[#FFE6A7] p-8 rounded-lg shadow-lg w-5xl" style={{ fontFamily: 'Playfair Display, serif' }}>
        <p className="text-[#432818] text-sm font-semibold">Step 2</p>
        <h1 className="text-[#432818] text-3xl font-bold">Strategic guiding at its core</h1>
        <p className="text-[#432818] font-bold mt-4">What's included:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <FeatureCard icon="💼" title="CMO strategy development" description="Expert marketing leadership tailored to your business stage, delivering 1-2 focused initiatives each month." />
          <FeatureCard icon="📅" title="Weekly strategy sessions" description="30-minute calls to optimize and adjust your marketing efforts." />
          <FeatureCard icon="🎧" title="Active support" description="Fast, responsive communication via a dedicated Slack channel." />
          <FeatureCard icon="📊" title="Zealy hub insights" description="Always check our marketing initiatives in the Zealy hub with real-time updates." />
        </div>
        
        <p className="text-[#432818] text-sm mt-6">
          If you have an internal team, your CMO will guide them to ensure everything stays aligned with the strategic vision.
        </p>
        
        <div className="mt-6 flex justify-between items-center">
          <p className="font-bold text-[#432818]">CMO as a service</p>
          <p className="font-bold text-lg text-[#432818]">CHF 1500 /month</p>
        </div>
      </div>
    </div>
  );
};

export default CMOservies;
