"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import useLippStore from '@/store/LippStore';

function BigScreenAbout() {
  const { language } = useLippStore();

  const content = {
    EN: {
      name: "Anja Lippuner",
      title: "CEO & Founder",
      description1: "With an international background and a strong foundation in business and innovation, Anja Lippuner leads with a global mindset and a passion for excellence. She brings together talent from Switzerland and beyond, building teams and solutions that cross borders.",
      description2: "Her professional journey includes a solid background in banking, where she refined her commitment to outstanding customer service. As former Head of Fair Concept, she gained deep expertise in planning, organization, and execution of high-level events. In her role as CMO, she delivered measurable marketing success across various industries.",
      description3: "Anja holds a BSc in International Management and an MSc in Innovation and Entrepreneurship – combining strategic thinking with creative execution to drive real impact.",
    },
    DE: {
      name: "Anja Lippuner",
      title: "CEO & Gründerin",
      description1: "Mit einem internationalen Hintergrund und einem ausgeprägten Verständnis für Innovation und Unternehmertum führt Anja Lippuner ihr Unternehmen mit Weitblick und einem hohen Qualitätsanspruch. Sie nutzt ihr globales Netzwerk, um Talente nicht nur in der Schweiz, sondern weltweit gezielt einzusetzen.",
      description2: "Ihre berufliche Laufbahn begann im Bankwesen, wo sie ihre Leidenschaft für exzellenten Kundenservice entwickelte. Als Head of Fair Concept sammelte sie umfassende Erfahrung in der Planung, Organisation und Umsetzung anspruchsvoller Events. In ihrer späteren Rolle als CMO verantwortete sie erfolgreiche Marketingstrategien und messbare Ergebnisse in unterschiedlichen Branchen.",
      description3: "Anja Lippuner hält einen BSc in International Management sowie einen MSc in Innovation and Entrepreneurship – und verbindet damit strategisches Denken mit kreativer Umsetzung für nachhaltigen Erfolg.",
    }
  };

  const currentContent = language === "EN" ? content.EN : content.DE;

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex w-4/5 h-[80%] bg-[#9fdcff] rounded-2xl">
        <div className="w-1/2 h-full relative p-2">
        <div className="absolute top-1/2 left-1/2 -translate-1/2 font-bold text-8xl text-center text-white">
            Headshot Of Myself
          </div>
          <Image
            src="/home/profile.jpg"
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-l-2xl"
            alt="Anja Lippuner"
          />
        </div>
        <div className="flex flex-col text-[#292828] h-full p-10 w-1/2 gap-3">
          <div className="text-6xl font-bold">{currentContent.name}</div>
          <div className="text-3xl font-normal">{currentContent.title}</div>
          <div className="text-2xl font-light">{currentContent.description1}</div>
          <div className="text-2xl font-light">{currentContent.description2}</div>
          <div className="text-2xl font-light">{currentContent.description3}</div>
        </div>
      </div>
    </div>
  );
}

function SmallScreenAbout() {
  const { language } = useLippStore();
  const [showMore, setShowMore] = useState(false);

  const content = {
    EN: {
      name: "Anja Lippuner",
      title: "CEO & Founder",
      description1: "With an international background and a strong foundation in business and innovation, Anja Lippuner leads with a global mindset and a passion for excellence.",
      description2: "Her professional journey includes a solid background in banking, where she refined her commitment to outstanding customer service.",
      description3: "Anja holds a BSc in International Management and an MSc in Innovation and Entrepreneurship – combining strategic thinking with creative execution to drive real impact.",
    },
    DE: {
      name: "Anja Lippuner",
      title: "CEO & Gründerin",
      description1: "Mit einem internationalen Hintergrund und einem ausgeprägten Verständnis für Innovation und Unternehmertum führt Anja Lippuner ihr Unternehmen mit Weitblick und einem hohen Qualitätsanspruch.",
      description2: "Ihre berufliche Laufbahn begann im Bankwesen, wo sie ihre Leidenschaft für exzellenten Kundenservice entwickelte.",
      description3: "Anja Lippuner hält einen BSc in International Management sowie einen MSc in Innovation and Entrepreneurship – und verbindet damit strategisches Denken mit kreativer Umsetzung für nachhaltigen Erfolg.",
    }
  };

  const currentContent = language === "EN" ? content.EN : content.DE;

  return (
    <div className="w-screen h-auto flex flex-col justify-center items-center p-5">
      <div className="w-full h-[60vh] relative p-2 bg-[#9fdcff] rounded-t-2xl">
      <div className="absolute top-1/2 left-1/2 -translate-1/2 font-bold text-4xl text-center text-white">
            Headshot Of Myself
          </div>
        <Image
          src="/home/profile.jpg"
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-t-2xl"
          alt="Anja Lippuner"
        />
      </div>
      <div className="flex flex-col text-[#292828] h-auto p-6 w-full bg-[#9fdcff] rounded-b-2xl">
        <div className="text-4xl font-bold">{currentContent.name}</div>
        <div className="text-2xl font-normal">{currentContent.title}</div>
        <div className="text-lg font-light">{currentContent.description1}</div>
        {showMore && (
          <>
            <div className="text-lg font-light">{currentContent.description2}</div>
            <div className="text-lg font-light">{currentContent.description3}</div>
          </>
        )}
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-4 text-white font-semibold hover:underline"
        >
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

function About() {
  return (
    <>
      <div className="hidden lg:block">
        <BigScreenAbout />
      </div>
      <div className="block lg:hidden ">
        <SmallScreenAbout />
      </div>
    </>
  );
}

export default About;