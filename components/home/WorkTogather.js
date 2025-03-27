"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import useLippStore from '@/store/LippStore'

function WorkTogather() {
  return (
    <div className='w-screen h-auto bg-[#FFE6A7] relative flex flex-col items-center justify-center'>
        <ServicesWidget/>
        <Services/>
    </div>
  )
}

export default WorkTogather

const ServicesWidget=()=>{
    const {language}=useLippStore();
    return(
        <div className='w-screen h-screen flex'>
            <div className='w-1/3 text-9xl text-[#432818] pt-[5.5rem] pl-4'>
                CMO as a Service
            </div>
            <div className='flex w-2/3 h-[80%] bg-[#432818] rounded-l-2xl text-[#FFE6A7] gap-3 pt-[0.5rem] font-semibold mt-[5.5rem]'>
                <div className='min-w-[40%] h-full'>
                    <Image src={"/service.svg"} alt='image' width={1000} height={1000} className='w-full z-10 object-cover h-[80%]' />
                </div>
                <div className='p-10 text-3xl'>
                    {language === "EN" ?  "Strategic marketing leadership – minus the overhead where you gain access to top-level marketing expertise tailored to your unique business goals. Without the commitment or cost of hiring in-house. Whether you're looking to scale, reposition, or refine your approach, providing hands-on support to drive real results":
                    "Strategische Marketingführung – ganz ohne Overhead. Sie erhalten Zugang zu hochwertiger Marketing-Expertise, massgeschneidert auf Ihre individuellen Geschäftsziele – ohne die Kosten und Verpflichtungen einer internen Festanstellung. Ob Sie skalieren, sich neu positionieren oder Ihre Strategie verfeinern möchten, unterstützen wir Sie mit praktischer und umsetzungsstarker Beratung für messbare Ergebnisse."
}
                </div>
            </div>
        </div>
    )
}

const Services = () => {
    const {language}=useLippStore();
    const [data, setData] = useState(ServicesData); 
    useEffect(() => {
        setData(language === "EN" ? ServicesData : ServicesData1);
    }, [language]);

    return (
        <div className='w-screen h-[220vh] bg-[#432818] grid grid-cols-2 px-10 py-40'>
            {data.map((items, index) => (
                <ServiceTestimonial 
                    key={index} 
                    Name={items.name} 
                    dis={items.dis} 
                    yes={items.yes} 
                />
            ))}
            <div className='w-[40%] p-3 bg-[#FFE6A7] text-[#432818] rounded-xl z-30 bottom-10 left-1/2 -translate-x-1/2 text-center absolute text-xl flex justify-evenly items-center'>
                {language === "EN" ? "No matter whether you're in the ideation phase, launching a startup, running an established company, or scaling up, we are ready to support you every step of the way":
                "Ganz egal, wo Sie sich gerade befinden. Ob in der Ideenphase, in einem Startup, in einem etablierten Unternehmen oder im Scale Up – wir begleiten und unterstützen Sie auf jedem Schritt und in jeder Phase"}
            </div>
        </div>
    );
};



const ServiceTestimonial=({Name,yes,dis})=>{
    return(
        <div className='w-full h-full flex flex-col gap-5 relative'>
            <div className={`text-[#99582A] text-3xl ${yes ? "pl-5":"pl-0"}`}>{Name}</div>
            <div className='w-full h-[0.5px] bg-[#FFE6A7]'></div>
            <div className={`w-full text-[#FFE6A7] text-5xl ${yes ? "pl-5":"pl-0"} `}>
                {dis}
            </div>
        </div>
    )
}


const ServicesData=[
    {
        name:"Marketing Strategy",
        yes:false,
        dis:"Start with strategy – grow with intention. Marketing without a plan is just noise. I help you develop a clear, data-backed strategy that aligns with your goals, audience, and brand positioning. Together, we’ll create a roadmap that drives growth, visibility, and long-term success"
    },
    {
        name:"Brand Kit",
        yes:true,
        dis:"Your brand defined and designed to shine. Consistency is key. I help you build a strong brand foundation with a complete brand kit that includes your logo, color palette, tone of voice, visual direction, and more – ensuring your business always shows up with clarity and confidence."
    },
    {
        name:"Website",
        yes:false,
        dis:"A website that works for your brand. Your website is often your first impression – let’s make it a strong one. I design and build strategic websites that look good, function well, and convert visitors into loyal clients. Helping to make your digital presence count – whether it’s a one-pager or a full site."
    },
    {
        name:"Content Strategy & Content Creation",
        yes:true,
        dis:"Content that speaks your brand's truth and gets results. Creating scroll-stopping content tailored to your goals – whether it’s engaging videos for social media or commercials, visuals, or copy. From ideation to production, every piece is built with strategy in mind to help you connect with your audience and build brand trust."
    },
    {
        name:"Social Media Management",
        yes:false,
        dis:"Grow your presence with a clear strategy and consistent execution. From daily content planning to community engagement, handling your social media with purpose and personality. By helping you show up where your audience is – consistently, creatively, and strategically – so you stay top-of-mind and ahead of the curve."
    },
    {
        name:"Performance Marketing",
        yes:true,
        dis:" Ads that perform – not just exist. From Meta to Google, creating and managing high-performing ad campaigns that are driven by data and focused on ROI. I handle the strategy, creatives, and reporting so you can see real growth without the guesswork."
    },
]


const ServicesData1 = [
    {
        name: "Marketing Strategy",
        yes: false,
        dis: "Beginnen Sie mit einer Strategie – wachsen Sie mit Absicht. Marketing ohne Plan ist nur Lärm. Ich helfe Ihnen, eine klare, datenbasierte Strategie zu entwickeln, die mit Ihren Zielen, Ihrer Zielgruppe und Ihrer Markenpositionierung übereinstimmt. Gemeinsam erstellen wir eine Roadmap, die Wachstum, Sichtbarkeit und langfristigen Erfolg fördert."
    },
    {
        name: "Brand Kit",
        yes: true,
        dis: "Ihre Marke definiert und gestaltet, um zu glänzen. Konsistenz ist der Schlüssel. Ich helfe Ihnen, eine starke Markenbasis aufzubauen, mit einem vollständigen Markenkit, das Ihr Logo, Ihre Farbpalette, Ihren Tonfall, Ihre visuelle Richtung und mehr umfasst – damit Ihr Unternehmen stets mit Klarheit und Selbstbewusstsein auftritt."
    },
    {
        name: "Website",
        yes: false,
        dis: "Eine Website, die für Ihre Marke funktioniert. Ihre Website ist oft der erste Eindruck – lassen Sie ihn stark wirken. Ich entwerfe und entwickle strategische Websites, die gut aussehen, gut funktionieren und Besucher in treue Kunden verwandeln. Ich helfe Ihnen, Ihre digitale Präsenz effektiv zu gestalten – sei es eine One-Pager-Seite oder eine vollständige Website."
    },
    {
        name: "Content Strategy & Content Creation",
        yes: true,
        dis: "Inhalte, die die Wahrheit Ihrer Marke sprechen und Ergebnisse liefern. Erstellung von aufmerksamkeitsstarken Inhalten, die auf Ihre Ziele zugeschnitten sind – sei es ansprechende Videos für soziale Medien oder Werbespots, visuelle Inhalte oder Texte. Von der Ideenfindung bis zur Produktion wird jedes Element strategisch entwickelt, um Ihre Zielgruppe zu erreichen und Vertrauen in Ihre Marke aufzubauen."
    },
    {
        name: "Social Media Management",
        yes: false,
        dis: "Steigern Sie Ihre Präsenz mit einer klaren Strategie und konsequenter Umsetzung. Von der täglichen Content-Planung bis zur Community-Interaktion – ich kümmere mich um Ihr Social Media mit Ziel und Persönlichkeit. Ich helfe Ihnen, genau dort präsent zu sein, wo sich Ihr Publikum aufhält – beständig, kreativ und strategisch, sodass Sie im Gedächtnis bleiben und der Konkurrenz einen Schritt voraus sind."
    },
    {
        name: "Performance Marketing",
        yes: true,
        dis: "Anzeigen, die performen – nicht nur existieren. Von Meta bis Google – ich erstelle und verwalte leistungsstarke Werbekampagnen, die datengetrieben und auf ROI fokussiert sind. Ich übernehme die Strategie, die Kreativen und das Reporting, sodass Sie echtes Wachstum ohne Rätselraten erleben."
    },
];
