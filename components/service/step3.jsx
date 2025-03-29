"use client"

import { useState } from "react";

const ActivityCategory = ({ title, items }) => {
  return (
    <div className="bg-[#1A9BE0]/70 p-6 rounded-lg shadow-md text-[#1F222F]">
      <h3 className="font-bold text-2xl border-b border-[#1F222F] pb-2 mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <ActivityItem key={index} {...item} />
        ))}
      </ul>
    </div>
  );
};

const ActivityItem = ({ text, infoTitle, infoDescription, activeItem, setActiveItem }) => {
  const isActive = activeItem === text;

  return (
    <div className="relative p-2 bg-[#9FDCFF] rounded-md shadow-sm flex justify-between items-center">
      <span>{text}</span>
      <button
        onClick={() => setActiveItem(isActive ? null : text)}
        className="w-6 h-6 bg-[#41AFE9] border rounded-full flex items-center justify-center text-gray-700 font-bold cursor-pointer hover:bg-gray-200"
      >
        i
      </button>
      {isActive && (
        <div className="absolute top-full right-0 mt-2 bg-gray-100 text-sm text-gray-700 p-2 rounded-lg shadow-lg w-full z-10">
          <h4 className="font-bold text-lg mb-1">{infoTitle}</h4>
          <p>{infoDescription}</p>
        </div>
      )}
    </div>
  );
};

const ExecutionSection = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="bg-[#292828] flex py-10 px-[12%]">
      <div className="bg-[#9FDCFF] p-8 rounded-lg shadow-lg w-5xl" style={{ fontFamily: "Playfair Display, serif" }}>
        <p className="text-[#23222C] text-sm font-semibold">Step 3</p>
        <h1 className="text-[#23222C] text-3xl font-bold">Adding activities for full execution</h1>

        <div className="text-lg  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-6 relative">
          <ActivityCategory
            title="Creative Focus"
            items={[
              {
                text: "Content Strategy",
                infoTitle: "Content Strategy",
                infoDescription: "Every great campaign begins with a roadmap. We develop comprehensive content strategies that align your brand story with business objectives and audience needs. Through market research and data analysis, we identify the most effective formats, channels, and messaging frameworks to maximize your impact. Our strategic approach ensures every piece of content works harder for your business."
              },
              {
                text: "Content Creation",
                infoTitle: "Video Content Creation",
                infoDescription: "From attention-grabbing social clips to documentary-style brand stories, we produce video content that captivates and converts. Our team handles everything from concept development to final edits, creating platform-optimized videos with professional production quality. Whether you need product demos, customer testimonials, or animated explainers, we transform complex ideas into compelling visual narratives."
              },
              {
                text: "Interview Form Content",
                infoTitle: "Interview-Style Content",
                infoDescription: "Nothing builds trust like authentic human connection. We specialize in interview formats that showcase your expertise while keeping audiences engaged. Our production process includes professional lighting and multi-camera setups, with skilled editors who transform raw footage into polished content. These pieces become versatile assets for your website, social channels, and email campaigns."
              },
              {
                text: "Images",
                infoTitle: "Professional Photography",
                infoDescription: "Powerful imagery forms the foundation of your visual identity. We deliver high-quality photos that tell your brand story - from product shots that highlight details to corporate photography that captures your team's personality. Our photographers combine technical skill with marketing insight to create images that work across digital and print platforms."
              },
              {
                text: "Creative Asset Setup",
                infoTitle: "Creative Asset Development",
                infoDescription: "Consistency builds recognition. We design complete brand collateral systems that maintain visual harmony across all touchpoints. This includes presentation decks that impress investors, social media or newsletter templates that save you team time, and print materials that leave lasting impressions. Every asset is created with your brand guidelines and practical business needs in mind"
              }
            ].map(item => ({ ...item, activeItem, setActiveItem }))}
          />

          <ActivityCategory
            title="Performance & Conversion Focus"
            items={[
              {
                text: "SEO",
                infoTitle: "SEO",
                infoDescription: " Increase your organic visibility on Google and attract quality traffic. We optimize your website, ensuring it's easily discoverable by your target audience. Through keyword analysis, technical optimization, and content recommendations, we lay the groundwork for long-term growth."
              },
              {
                text: "Setup for Performance Ads",
                infoTitle: "Setup for Performance Ads",
                infoDescription: " Launch effective, conversion-focused ad campaigns. We create and manage optimal setups for your Google Ads or Meta Ads account, including comprehensive keyword research, Google Analytics (GA4) integration, tracking setup, and strategic campaign structuring. Our goal is maximum ROI from your advertising budget."
              },
              {
                text: "SEA",
                infoTitle: "SEA",
                infoDescription: " Accelerate your visibility and attract high-intent visitors with strategically placed ads on search engines like Google. We plan, implement, and continuously optimize your SEA campaigns, ensuring precise targeting and efficient spending, delivering measurable leads and sales."
              },
              {
                text: "Social Media Ads",
                infoTitle: "Social Media Ads",
                infoDescription: "Leverage social media platforms such as Meta (Facebook & Instagram), LinkedIn, or TikTok to target and engage your ideal customers. Our expert team designs engaging ad creatives, strategic audience targeting, and manages ongoing campaign optimization to maximize conversions and grow your brand awareness."
              },
              {
                text: "Lead Generation",
                infoTitle: "Lead Generation",
                infoDescription: "Generate qualified leads to fuel your business growth. Through our trusted partners, we create tailored lead generation strategies designed to capture and nurture potential customers effectively. From lead magnets and landing pages to follow-up campaigns, we ensure a steady flow of interested prospects."
              },
              {
                text: "Newsletter Campaigns",
                infoTitle: "Newsletter Campaigns",
                infoDescription: " Strengthen relationships and drive conversions with strategic email marketing. Our newsletter services include campaign planning, template design, compelling copywriting, segmentation, and ongoing analysis. We ensure your messages reach the right audience at the right time, consistently delivering valuable content and measurable outcomes."
              }
            ].map(item => ({ ...item, activeItem, setActiveItem }))}
          />

          <ActivityCategory
            title="Awareness & Brand Building"
            items={[
              {
                text: "Social Media Posting",
                infoTitle: "Social Media Posting",
                infoDescription: "Consistency is key to staying top-of-mind with your audience. We craft and schedule high-quality, engaging posts tailored to your brand voice and goals. Whether it’s educational content, promotions, or storytelling, we ensure your social media channels remain active and aligned with your strategy. Frequency can be adjusted based on your needs—whether daily, weekly, or campaign-based."
              },
              {
                text: "Social Media Community Management",
                infoTitle: "Social Media Community Management",
                infoDescription: "Building a loyal community goes beyond just posting. We actively engage with your followers, respond to comments and messages, and foster meaningful interactions. Our approach helps strengthen brand loyalty, improve customer satisfaction, and turn followers into advocates."
              },
              {
                text: "Partnership Development",
                infoTitle: "Partnership Development",
                infoDescription: "Strategic collaborations can amplify your reach and credibility. We identify and establish partnerships with complementary brands, industry leaders, and organizations to create co-marketing opportunities, sponsorships, or affiliate programs that drive mutual growth."
              },
              {
                text: "PR Management",
                infoTitle: "PR Management (Brilliance PR)",
                infoDescription: "Positive media coverage builds trust and authority. Through our partner Brilliance PR, we secure placements in relevant publications, manage press releases, and handle media relations to enhance your reputation and ensure your brand gets noticed by the right audiences."
              },
              {
                text: "Influencer Marketing",
                infoTitle: "Influencer Marketing (Headz Agency)",
                infoDescription: " Leverage the power of trusted voices in your industry. In collaboration with Headz Agency, we connect you with influencers who authentically align with your brand. From nano-influencers to macro-level campaigns, we design strategies that drive engagement, brand awareness, and conversions."
              }
            ].map(item => ({ ...item, activeItem, setActiveItem }))}
          />

          <ActivityCategory
            title="Infrastructure & Creative Support"
            items={[
              {
                text: "Website Improvements",
                infoTitle: "Website Optimization",
                infoDescription: "Your website is your hardest-working salesperson, and we make sure it's always at peak performance. Our holistic approach goes beyond superficial tweaks to fundamentally enhance your site's speed, user experience, and conversion potential. We analyze how real users interact with your site, identify friction points that cost you leads, and implement technical improvements that deliver measurable business results."
              },
              {
                text: "Landing Page Creation",
                infoTitle: "High-Converting Landing Pages",
                infoDescription: "Generic web pages dilute your marketing impact. We craft laser-focused landing experiences designed to guide visitors toward one clear action. Using proven conversion principles and real user behavior data, we build pages that feel personalized to each campaign's audience while maintaining brand consistency. Every element - from headline hierarchy to form placement - is strategically optimized to remove distractions and boost your key metrics, whether that's lead submissions, demo requests, or direct sales."
              },
              {
                text: "Automation Solutions",
                infoTitle: "Marketing Automation",
                infoDescription: "Stop wasting time on repetitive tasks and start scaling your growth. Transform your customer communication into a powerful growth engine. We build intelligent workflows that deliver the right message at the perfect moment - from abandoned cart sequences to personalized product recommendations. Creating automated flows that nurture leads, onboard new customers, and drive repeat purchases while providing actionable insights. The result? More revenue from your existing traffic with less manual effort, plus the data to continually optimize your messaging."
              }
            ].map(item => ({ ...item, activeItem, setActiveItem }))}
          />
        </div>

        <p className="mt-4 text-lg font-semibold">CHF 950 / month / activity</p>
        <p className="text-xs text-[#1F222F]">* For 3-5 monthly activities, the cost is CHF 900 per activity.</p>
      </div>
    </div>
  );
};

export default ExecutionSection;
