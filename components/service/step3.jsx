"use client";

import { useState } from "react";
import useLippStore from "@/store/LippStore";

const translations = {
  EN: {
    step: "Step 3",
    heading: "Adding activities for full execution",
    creativeFocus: "Creative Focus",
    performanceFocus: "Performance & Conversion Focus",

    contentStrategy: "Content Strategy",
    contentStrategyDesc:
      "Every great campaign begins with a roadmap. We develop comprehensive content strategies that align your brand story with business objectives and audience needs. Through market research and data analysis, we identify the most effective formats, channels, and messaging frameworks to maximize your impact. Our strategic approach ensures every piece of content works harder for your business.",
    contentCreation: "Content Creation",
    contentCreationDesc:
      "From attention-grabbing social clips to documentary-style brand stories, we produce video content that captivates and converts. Our team handles everything from concept development to final edits, creating platform-optimized videos with professional production quality. Whether you need product demos, customer testimonials, or animated explainers, we transform complex ideas into compelling visual narratives.",
    interviewContent: "Interview Form Content",
    interviewContentDesc:
      "Nothing builds trust like authentic human connection. We specialize in interview formats that showcase your expertise while keeping audiences engaged. Our production process includes professional lighting and multi-camera setups, with skilled editors who transform raw footage into polished content. These pieces become versatile assets for your website, social channels, and email campaigns.",
    images: "Images",
    imagesDesc:
      "Powerful imagery forms the foundation of your visual identity. We deliver high-quality photos that tell your brand story - from product shots that highlight details to corporate photography that captures your team's personality. Our photographers combine technical skill with marketing insight to create images that work across digital and print platforms.",
    creativeAssetSetup: "Creative Asset Setup",
    creativeAssetSetupDesc:
      "Consistency builds recognition. We design complete brand collateral systems that maintain visual harmony across all touchpoints. This includes presentation decks that impress investors, social media or newsletter templates that save you team time, and print materials that leave lasting impressions. Every asset is created with your brand guidelines and practical business needs in mind.",
    seo: "SEO",
    seoDesc:
      "Increase your organic visibility on Google and attract quality traffic. We optimize your website, ensuring it's easily discoverable by your target audience. Through keyword analysis, technical optimization, and content recommendations, we lay the groundwork for long-term growth.",
    performanceAds: "Setup for Performance Ads",
    performanceAdsDesc:
      "Launch effective, conversion-focused ad campaigns. We create and manage optimal setups for your Google Ads or Meta Ads account, including comprehensive keyword research, Google Analytics (GA4) integration, tracking setup, and strategic campaign structuring. Our goal is maximum ROI from your advertising budget.",
    sea: "SEA",
    seaDesc:
      "Accelerate your visibility and attract high-intent visitors with strategically placed ads on search engines like Google. We plan, implement, and continuously optimize your SEA campaigns, ensuring precise targeting and efficient spending, delivering measurable leads and sales.",
    socialAds: "Social Media Ads",
    socialAdsDesc:
      "Leverage social media platforms such as Meta (Facebook & Instagram), LinkedIn, or TikTok to target and engage your ideal customers. Our expert team designs engaging ad creatives, strategic audience targeting, and manages ongoing campaign optimization to maximize conversions and grow your brand awareness.",
    leadGeneration: "Lead Generation",
    leadGenerationDesc:
      "Generate qualified leads to fuel your business growth. Through our trusted partners, we create tailored lead generation strategies designed to capture and nurture potential customers effectively. From lead magnets and landing pages to follow-up campaigns, we ensure a steady flow of interested prospects.",
    newsletter: "Newsletter Campaigns",
    newsletterDesc:
      "Strengthen relationships and drive conversions with strategic email marketing. Our newsletter services include campaign planning, template design, compelling copywriting, segmentation, and ongoing analysis. We ensure your messages reach the right audience at the right time, consistently delivering valuable content and measurable outcomes.",
    awareness: "Awareness & Brand Building",
    infrastructure: "Infrastructure & Creative Support",
    socialMediaPosting: "Social Media Posting",
    socialMediaPostingDesc:
      "Consistency is key to staying top-of-mind with your audience. We craft and schedule high-quality, engaging posts tailored to your brand voice and goals. Whether it’s educational content, promotions, or storytelling, we ensure your social media channels remain active and aligned with your strategy. Frequency can be adjusted based on your needs—whether daily, weekly, or campaign-based.",
    communityManagement: "Social Media Community Management",
    communityManagementDesc:
      "Building a loyal community goes beyond just posting. We actively engage with your followers, respond to comments and messages, and foster meaningful interactions. Our approach helps strengthen brand loyalty, improve customer satisfaction, and turn followers into advocates.",
    partnershipDevelopment: "Partnership Development",
    partnershipDevelopmentDesc:
      "Strategic collaborations can amplify your reach and credibility. We identify and establish partnerships with complementary brands, industry leaders, and organizations to create co-marketing opportunities, sponsorships, or affiliate programs that drive mutual growth.",
    prManagement: "PR Management",
    prManagementDesc:
      "Positive media coverage builds trust and authority. Through our partner Brilliance PR, we secure placements in relevant publications, manage press releases, and handle media relations to enhance your reputation and ensure your brand gets noticed by the right audiences.",
    influencerMarketing: "Influencer Marketing",
    influencerMarketingDesc:
      "Leverage the power of trusted voices in your industry. In collaboration with Headz Agency, we connect you with influencers who authentically align with your brand. From nano-influencers to macro-level campaigns, we design strategies that drive engagement, brand awareness, and conversions.",
    websiteImprovements: "Website Improvements",
    websiteImprovementsDesc:
      "Your website is your hardest-working salesperson, and we make sure it's always at peak performance. Our holistic approach goes beyond superficial tweaks to fundamentally enhance your site's speed, user experience, and conversion potential. We analyze how real users interact with your site, identify friction points that cost you leads, and implement technical improvements that deliver measurable business results.",
    landingPageCreation: "Landing Page Creation",
    landingPageCreationDesc:
      "Generic web pages dilute your marketing impact. We craft laser-focused landing experiences designed to guide visitors toward one clear action. Using proven conversion principles and real user behavior data, we build pages that feel personalized to each campaign's audience while maintaining brand consistency. Every element - from headline hierarchy to form placement - is strategically optimized to remove distractions and boost your key metrics, whether that's lead submissions, demo requests, or direct sales.",
    automationSolutions: "Automation Solutions",
    automationSolutionsDesc:
      "Stop wasting time on repetitive tasks and start scaling your growth. Transform your customer communication into a powerful growth engine. We build intelligent workflows that deliver the right message at the perfect moment - from abandoned cart sequences to personalized product recommendations. Creating automated flows that nurture leads, onboard new customers, and drive repeat purchases while providing actionable insights. The result? More revenue from your existing traffic with less manual effort, plus the data to continually optimize your messaging.",
  },

  DE: {
    step: "Schritt 3",
    heading: "Aktivitäten für die vollständige Umsetzung hinzufügen",
    creativeFocus: "Kreativer Fokus",
    performanceFocus: "Leistungs- & Konversionsfokus",
    contentStrategy: "Content-Strategie",
    contentStrategyDesc:
      "Jede erfolgreiche Kampagne beginnt mit einem Plan. Wir entwickeln umfassende Content-Strategien, die Ihre Markengeschichte mit Geschäftszielen und Zielgruppenbedürfnissen verbinden. Durch Marktanalysen und Datenauswertung identifizieren wir die wirksamsten Formate, Kanäle und Botschaften für maximale Wirkung. Unser strategischer Ansatz stellt sicher, dass jeder Inhalt optimal für Ihr Business arbeitet.",
    
      contentCreation: "Kurz- und Langform",
    contentCreationDesc:
      "Von fesselnden Social-Media-Clips bis hin zu dokumentarischen Markengeschichten produzieren wir Videos, die begeistern und überzeugen. Unser Team übernimmt alles von der Konzeption bis zum Schnitt und erstellt Plattform optimierte Videos in höchster Qualität. Ob Produktvorstellungen, Kundenfeedbacks oder Mitarbeitervideos – wir verwandeln komplexe Ideen in packende visuelle Erzählungen.",
    
      interviewContent: "Interview-Formate",
    interviewContentDesc:
      "Authentische menschliche Verbindungen schaffen Vertrauen. Wir spezialisieren uns auf Interviewformate, die Ihr Fachwissen zeigen und Ihr Publikum einbinden. Unser Produktionsprozess umfasst professionelle Beleuchtung und Mehrkamera-Aufnahmen, um hochwertige Inhalte zu erstellen. Diese werden zu vielseitig einsetzbaren Assets für Website, Social Media und E-Mail-Kampagnen.",
    
      images: "Professionelle Fotografie",
    imagesDesc:
      "Qualitativ hochwertige Aufnahmen bilden das Fundament Ihrer visuellen Identität. Wir liefern hochwertige Fotos, die Ihre Markengeschichte erzählen – von detaillierten Produktaufnahmen bis hin zu authentischen Teamporträts. Unsere Fotografen kombinieren technisches Know-how mit Marketing Expertise für Bilder, die digital und in Print Format überzeugen.",
    
      creativeAssetSetup: "Entwicklung von Creative Assets",
    creativeAssetSetupDesc:
      "Konsistenz schafft Wiedererkennung. Wir gestalten Ihren kompletten Auftritt, damit eine visuelle Harmonie über alle Touchpoints hinweg gewährleistet ist. Dazu gehören Präsentationen, die Investoren beeindrucken, zeitsparende Social Media- und Newsletter-Templates sowie Printmaterialien mit bleibendem Eindruck. Jedes Asset entsteht unter Berücksichtigung Ihrer Brand Guidelines und praktischen Geschäftsanforderungen.",
    
      seo: "SEO",
    seoDesc:
      "Steigern Sie Ihre organische Sichtbarkeit bei Google und gewinnen Sie hochwertigen Traffic. Wir optimieren Ihre Website, damit Ihre Zielgruppe Sie leicht findet. Durch Keyword-Analysen, technische Optimierungen und Content-Empfehlungen legen wir den Grundstein für nachhaltiges Wachstum.",
    
      performanceAds: "Performance Ads Setup",
    performanceAdsDesc:
      "Starten Sie effektive, conversion orientierte Werbekampagnen. Wir erstellen und verwalten optimale Setups für Ihr Google Ads- oder Meta Ads-Konto – inklusive umfassender Keyword-Recherche, Google Analytics (GA4)-Integration, Tracking-Einrichtung und strategischer Kampagnenstrukturierung. Unser Ziel: Maximale ROI für Ihr Werbebudget.",
    
      sea: "SEA (Suchmaschinenwerbung)",
    seaDesc:
      "Erhöhen Sie Ihre Sichtbarkeit schnell und gewinnen Sie Besucher mit Kaufabsicht durch gezielte Anzeigen auf Suchmaschinen wie Google. Wir planen, setzen um und optimieren kontinuierlich Ihre SEA-Kampagnen für präzises Targeting und effiziente Budgetnutzung – für messbare Leads und Verkäufe.",
    
      socialAds: "Social Media Ads",
    socialAdsDesc:
      " Nutzen Sie Social-Media-Plattformen wie Meta (Facebook & Instagram), LinkedIn oder TikTok, um Ihre idealen Kunden anzusprechen und zu engagieren. Unser Expertenteam entwickelt ansprechende Werbemittel, strategisches Audience-Targeting und optimiert laufend Ihre Kampagnen, um Conversions zu maximieren und Markenbekanntheit zu steigern.",
    
      leadGeneration: "Lead-Generierung",
    leadGenerationDesc:
      " Generieren Sie qualifizierte Leads für nachhaltiges Geschäftswachstum. Über unsere vertrauenswürdigen Partner entwickeln wir massgeschneiderte Leadgenerierungs-Strategien, die potenzielle Kunden effektiv gewinnen und weiterentwickeln. Von Lead-Magnets und Landingpages bis hin zu Follow-up-Kampagnen sichern wir Ihnen einen stetigen Strom interessierter Kontakte.",
    
      newsletter: "Newsletter-Kampagnen",
    newsletterDesc:
      "Stärken Sie Kundenbeziehungen und steigern Sie Conversions mit strategischem E-Mail-Marketing. Unsere Newsletter-Dienstleistungen umfassen Kampagnenplanung, Template-Design, überzeugende Texte, Segmentierung und kontinuierliche Analyse. Wir sorgen dafür, dass Ihre Botschaft zur richtigen Zeit die richtige Zielgruppe erreicht – mit wertvollen Inhalten und messbaren Ergebnissen.",
    
      SocialMediaPosting: "Social Media Posting",
    SocialMediaPostingDStresc:
      "Konsistenz ist entscheidend, um im Gedächtnis Ihrer Zielgruppe zu bleiben. Wir erstellen und planen hochwertige, ansprechende Posts, die perfekt auf Ihre Markenstimme und Ziele abgestimmt sind. Ob Bildungsinhalte, Promotionen oder Storytelling – wir sorgen dafür, dass Ihre Social-Media-Kanäle aktiv bleiben und strategisch ausgerichtet sind. Die Häufigkeit kann an Ihre Bedürfnisse angepasst werden – ob täglich, wöchentlich oder kampagnenbasiert.",
    
      awareness: "Bewusstsein & Markenbildung",
    infrastructure: "Infrastruktur & Kreative Unterstützung",
    
    socialMediaPosting: "Social Media Posting",
    socialMediaPostingDesc:
      "Konsistenz ist entscheidend, um im Gedächtnis Ihrer Zielgruppe zu bleiben. Wir erstellen und planen hochwertige, ansprechende Posts, die perfekt auf Ihre Markenstimme und Ziele abgestimmt sind. Ob Bildungsinhalte, Promotionen oder Storytelling – wir sorgen dafür, dass Ihre Social-Media-Kanäle aktiv bleiben und strategisch ausgerichtet sind. Die Häufigkeit kann an Ihre Bedürfnisse angepasst werden – ob täglich, wöchentlich oder kampagnenbasiert.",
    
      communityManagement: "Social Media Community Management",
    communityManagementDesc:
      "Eine treue Community aufzubauen, geht über simples Posting hinaus. Wir interagieren aktiv mit Ihren Followern, beantworten Kommentare und Nachrichten und fördern relevante Dialoge. Unser Ansatz stärkt die Markenloyalität, verbessert die Kundenzufriedenheit und verwandelt Follower in Markenbotschafter.",
    
      partnershipDevelopment: "Partnerschaftsentwicklung",
    partnershipDevelopmentDesc:
      "Strategische Kooperationen können Ihre Reichweite und Glaubwürdigkeit steigern. Wir identifizieren und etablieren Partnerschaften mit komplementären Marken, Branchenführern und Organisationen, um Co-Marketing-Möglichkeiten, Sponsoring oder Affiliate-Programme zu schaffen, die gegenseitiges Wachstum fördern.",
    
      prManagement: "PR-Management (Brilliance PR)",
    prManagementDesc:
      "Positive Medienberichterstattung stärkt Vertrauen und Autorität. Durch unsere Partnerschaft mit Brilliance PR sichern wir Platzierungen in relevanten Publikationen, verwalten Pressemitteilungen und kümmern uns um Medienbeziehungen, um Ihren Ruf zu verbessern und sicherzustellen, dass Ihre Marke von der richtigen Zielgruppe wahrgenommen wird.",
    
      influencerMarketing: "Influencer Marketing (Headz Agency)",
    influencerMarketingDesc:
      " Nutzen Sie die Macht vertrauenswürdiger Stimmen Ihrer Branche. In Zusammenarbeit mit Headz Agency verbinden wir Sie mit Influencern, die authentisch zu Ihrer Marke passen. Von Nano-Influencern bis zu grossen Kampagnen entwickeln wir Strategien, die Engagement, Markenbewusstsein und Conversions steigern.",
    
      websiteImprovements: "Webseitenoptimierung",
    websiteImprovementsDesc:
      "Ihre Website ist Ihr unermüdlicher Vertriebsmitarbeiter – wir sorgen dafür, dass sie stets Höchstleistungen erbringt. Unser ganzheitlicher Ansatz geht weit über kleine Änderungen hinaus. Wir analysieren fundiert, wie echte Nutzer mit Ihrer Seite interagieren, identifizieren Schwachstellen, die Ihnen wertvolle Leads kosten und setzen technische Verbesserungen um, die messbare Geschäftsergebnisse liefern. Dabei optimieren wir nicht nur Ladezeiten und mobile Darstellung, sondern gestalten die gesamte Nutzererfahrung so, dass Sie nahtlos zu besseren Resultaten führt.",
    
      landingPageCreation: "Erstellung von Landingpages",
    landingPageCreationDesc:
      "Generische Webseiten verwässern Ihre Marketingwirkung. Wir entwickeln zielgerichtete Landingpages, die Besucher präzise zur gewünschten Aktion führen. Dabei setzen wir bewährte Conversion Prinzipien und echte Nutzerverhaltensdaten ein, um Seiten zu gestalten, die sich für jede Kampagne und Zielgruppe persönlich anfühlen, dabei aber stets konsistent mit Ihrer Marke bleiben. Jedes Element ist strategisch optimiert, um Ablenkungen zu minimieren und Ihre Schlüsselkennzahlen zu verbessern, egal ob es um Lead-Generierung, Demo-Anfragen oder Direktverkäufe geht.",
    
      automationSolutions: "Marketing-Automation",
    automationSolutionsDesc:
      "Schluss mit zeitfressenden Routineaufgaben und skalieren Sie Ihr Wachstum mit leistungsstarker Kundenkommunikation. Unsere intelligenten Workflows übermitteln die richtige Botschaft zum perfekten Zeitpunkt – von Erinnerungen an verlassene Warenkörbe bis hin zu personalisierten Produktempfehlungen. So betreuen Sie automatisiert Leads, begleiten Neukunden und fördern Wiederholungskäufe, während sie gleichzeitig wertvolle Erkenntnisse liefern. Das Ergebnis? Mehr Umsatz aus Ihrem bestehenden Traffic bei geringerem manuellem Aufwand, plus die Datenbasis für kontinuierliche Optimierungen",
  },
};

const ActivityCategory = ({ title, items }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-[#1F222F]">
    <h3 className="font-bold text-2xl border-b border-[#1F222F] pb-2 mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <ActivityItem key={index} {...item} />
      ))}
    </ul>
  </div>
);

const ActivityItem = ({ text, infoTitle, infoDescription, activeItem, setActiveItem }) => {
  const isActive = activeItem === text;

  return (
    <div className="relative p-2 bg-[#9FDCFF] rounded-md shadow-sm flex justify-between items-center">
      <span>{text}</span>
      <button
        onClick={() => setActiveItem(isActive ? null : text)}
        className="lg:w-6 w-5 lg:h-6 h-5 bg-white border rounded-full flex items-center justify-center text-[#292828] font-bold cursor-pointer hover:bg-gray-200"
      >
        i
      </button>
      {isActive && (
        <div className="absolute lg:top-full top-18 right-0 bg-white lg:h-auto h-[8rem] overflow-y-scroll text-xl text-[#292828] p-2 rounded-lg shadow-lg w-full z-10">
          <div className="lg:h-auto h-[20rem]">
          <h4 className="font-bold lg:text-lg mb-1">{infoTitle}</h4>
          <p>{infoDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const ExecutionSection = () => {
  const [activeItem, setActiveItem] = useState(null);
  const language = useLippStore((state) => state.language);
  const t = translations[language] || translations["EN"];

  return (
    <div className="bg-[#292828] flex py-10 lg:px-[12%] px-5">
      <div className="bg-[#9FDCFF] lg:p-8 p-2 rounded-lg shadow-lg lg:w-5xl" style={{ fontFamily: "Playfair Display, serif" }}>
        <p className="text-[#23222C] text-sm font-semibold">{t.step}</p>
        <h1 className="text-[#23222C] text-3xl font-bold">{t.heading}</h1>

        <div className="text-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-6 relative lg:w-auto w-full">
          <ActivityCategory
            title={t.creativeFocus}
            items={[
              { text: t.contentStrategy, infoTitle: t.contentStrategy, infoDescription: t.contentStrategyDesc },
              { text: t.contentCreation, infoTitle: t.contentCreation, infoDescription: t.contentCreationDesc },
              { text: t.interviewContent, infoTitle: t.interviewContent, infoDescription: t.interviewContentDesc },
              { text: t.images, infoTitle: t.images, infoDescription: t.imagesDesc },
              { text: t.creativeAssetSetup, infoTitle: t.creativeAssetSetup, infoDescription: t.creativeAssetSetupDesc }

            ].map(item => ({ ...item, activeItem, setActiveItem }))}
          />

          <ActivityCategory
            title={t.performanceFocus}
            items={[
              { text: t.seo, infoTitle: t.seo, infoDescription: t.seoDesc },
              { text: t.performanceAds, infoTitle: t.performanceAds, infoDescription: t.performanceAdsDesc },
              { text: t.sea, infoTitle: t.sea, infoDescription: t.seaDesc },
              { text: t.socialAds, infoTitle: t.socialAds, infoDescription: t.socialAdsDesc },
              { text: t.leadGeneration, infoTitle: t.leadGeneration, infoDescription: t.leadGenerationDesc },
              { text: t.newsletter, infoTitle: t.newsletter, infoDescription: t.newsletterDesc }
            ].map(item => ({ ...item, activeItem, setActiveItem }))}
          />

          <ActivityCategory
            title={t.awareness}
            items={[
              { text: t.socialMediaPosting, infoTitle: t.socialMediaPosting, infoDescription: t.socialMediaPostingDesc },
              { text: t.communityManagement, infoTitle: t.communityManagement, infoDescription: t.communityManagementDesc },
              { text: t.partnershipDevelopment, infoTitle: t.partnershipDevelopment, infoDescription: t.partnershipDevelopmentDesc },
              { text: t.prManagement, infoTitle: t.prManagement, infoDescription: t.prManagementDesc },
              { text: t.influencerMarketing, infoTitle: t.influencerMarketing, infoDescription: t.influencerMarketingDesc }
            ].map(item => ({ ...item, activeItem, setActiveItem }))}
          />

          <ActivityCategory
            title={t.infrastructure}
            items={[
              { text: t.websiteImprovements, infoTitle: t.websiteImprovements, infoDescription: t.websiteImprovementsDesc },
              { text: t.landingPageCreation, infoTitle: t.landingPageCreation, infoDescription: t.landingPageCreationDesc },
              { text: t.automationSolutions, infoTitle: t.automationSolutions, infoDescription: t.automationSolutionsDesc }
            ].map(item => ({ ...item, activeItem, setActiveItem }))}
          />
        </div>
        <p className="mt-4 lg:text-lg font-semibold">Monthly Investment per Activity varies - contact us for more information</p>
      </div>
    </div>
  );
};

export default ExecutionSection;