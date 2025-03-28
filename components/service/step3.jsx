import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-[#BB9457] p-6 rounded-lg shadow-md text-[#432818] flex flex-col gap-2">
      <div className="text-lg font-bold flex items-center gap-2">
        {icon}
        {title}
      </div>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const ActivityCategory = ({ title, items }) => {
  return (
    <div className="bg-[#BB9457] p-6 rounded-lg shadow-md text-[#432818]">
      <h3 className="font-bold text-lg border-b border-[#432818] pb-2 mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="p-2 bg-[#FFE6A7] rounded-md shadow-sm">{item}</li>
        ))}
      </ul>
    </div>
  );
};

const ExecutionSection = () => {
  return (
    <div className="bg-[#432818] flex py-10 px-[12%]">
      <div className="bg-[#FFE6A7] p-8 rounded-lg shadow-lg w-5xl" style={{ fontFamily: 'Playfair Display, serif' }}>
        <p className="text-[#432818] text-sm font-semibold">Step 3</p>
        <h1 className="text-[#432818] text-3xl font-bold">Adding activities for full execution</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-6">
          <FeatureCard title="Customize your package" description="Add the specific services your business needs to execute your strategy." />
          <FeatureCard title="Swap or scale activities" description="Easily adjust your package as your needs evolve over the six-month period." />
          <FeatureCard title="Tap into expert execution" description="While your CMO guides the strategy, our marketing team can execute the necessary actions as needed." />
          <FeatureCard title="Strategic oversight" description="You have flexibility in execution. For specialized tasks, our marketing team can step in with competitive rates." />
        </div>

        <h2 className="text-[#432818] text-xl font-bold mt-8">Activities</h2>
        <p className="text-sm">Only include the necessary measures; Activities can be swapped monthly within the same category at no extra cost.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <ActivityCategory title="Performance & conversion focus" items={["SEA", "Social ads", "Lead generation service", "SEO", "Digital advertising", "Newsletter campaigns"]} />
          <ActivityCategory title="Awareness & brand building" items={["Influencer marketing", "PR management", "Partnership development", "Offline advertising campaigns", "Social media posting"]} />
          <ActivityCategory title="Infrastructure & creative support" items={["Website improvements", "Automation solutions", "Asset design creation", "Presentation services", "Landing page creation"]} />
        </div>

        <p className="mt-4 text-lg font-semibold">CHF 950 / month / activity</p>
        <p className="text-xs text-[#432818]">* For 3-5 monthly activities, the cost is CHF 900 per activity.</p>
      </div>
    </div>
  );
};

export default ExecutionSection;
