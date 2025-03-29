"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import useLippStore from "@/store/LippStore";

function Vision() {
  const { language } = useLippStore();
  const visionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCardClicked, setIsCardClicked] = useState(false);
  const [clickedSlide, setClickedSlide] = useState(null);

  const slides = [
    {
      titleEN: "Bold Marketing That Works",
      titleDE: "Mutiges Marketing, das funktioniert",
      src: "/home/abc2.jpg",
      descriptionEN:
        "We believe in bold marketing that delivers real, measurable results without unnecessary complexity. Our approach focuses on clear, strategic solutions that cut through the noise and directly engage your audience. By simplifying the marketing process, we ensure that every campaign is not only effective but also easy to understand and implement. Whether it's branding, advertising, or digital outreach, our strategies are designed to maximize impact with minimal confusion, allowing you to focus on growing your business with confidence.",
      descriptionDE:
        "Wir glauben an mutiges Marketing, das echte, messbare Ergebnisse liefert, ohne unnötige Komplexität. Unser Ansatz konzentriert sich auf klare, strategische Lösungen, die sich von der Masse abheben und Ihr Publikum direkt ansprechen. Indem wir den Marketingprozess vereinfachen, stellen wir sicher, dass jede Kampagne nicht nur effektiv, sondern auch leicht verständlich und umsetzbar ist. Ob Branding, Werbung oder digitale Reichweite – unsere Strategien sind darauf ausgelegt, maximale Wirkung mit minimaler Verwirrung zu erzielen, damit Sie sich mit Zuversicht auf das Wachstum Ihres Unternehmens konzentrieren können.",
    },
    {
      titleEN: "Creative Solutions",
      titleDE: "Kreative Lösungen",
      src: "/home/abc3.jpg",
      descriptionEN:
        "Our vision is to craft innovative and practical marketing solutions that go beyond aesthetics to truly support your business goals. We combine creativity with functionality, ensuring that our designs and campaigns not only attract attention but also enhance your workflow. From engaging content creation to cutting-edge digital tools, we develop strategies that streamline your marketing efforts and drive efficiency. By integrating smart automation and user-friendly interfaces, we take the complexity out of marketing, giving you more time to focus on what matters most—growing your brand and engaging with customers.",
      descriptionDE:
        "Unsere Vision ist es, innovative und praktische Marketinglösungen zu entwickeln, die über Ästhetik hinausgehen und Ihre Geschäftsziele wirklich unterstützen. Wir kombinieren Kreativität mit Funktionalität, um sicherzustellen, dass unsere Designs und Kampagnen nicht nur Aufmerksamkeit erregen, sondern auch Ihre Arbeitsabläufe verbessern. Von ansprechender Content-Erstellung bis hin zu modernsten digitalen Tools entwickeln wir Strategien, die Ihre Marketingmaßnahmen optimieren und die Effizienz steigern. Durch die Integration intelligenter Automatisierung und benutzerfreundlicher Schnittstellen nehmen wir die Komplexität aus dem Marketing heraus, damit Sie sich auf das konzentrieren können, was wirklich zählt – Ihr Unternehmen zu vergrößern und mit Kunden in Kontakt zu treten.",
    },
    {
      titleEN: "Simplicity & Efficiency",
      titleDE: "Einfachheit & Effizienz",
      src: "/home/img3.jpg",
      descriptionEN:
        "We believe that marketing should be as simple and efficient as possible, without sacrificing effectiveness. Our streamlined processes ensure that you get fast, precise, and high-quality service without unnecessary complications. We prioritize clarity and responsiveness, making sure that every step—from strategy planning to execution—is smooth and hassle-free. By leveraging the latest technology and automation tools, we optimize your marketing efforts to save you time and resources. Our commitment to efficiency means you can expect quick turnarounds, personalized support, and seamless integration of marketing solutions tailored to your needs.",
      descriptionDE:
        "Wir sind der Meinung, dass Marketing so einfach und effizient wie möglich sein sollte, ohne dabei an Effektivität einzubüßen. Unsere optimierten Prozesse stellen sicher, dass Sie schnelle, präzise und hochwertige Dienstleistungen erhalten, ohne unnötige Komplikationen. Wir legen Wert auf Klarheit und Reaktionsfähigkeit, damit jeder Schritt – von der Strategieplanung bis zur Umsetzung – reibungslos und stressfrei verläuft. Durch den Einsatz modernster Technologien und Automatisierungstools optimieren wir Ihre Marketingmaßnahmen, um Ihnen Zeit und Ressourcen zu sparen. Unser Engagement für Effizienz bedeutet, dass Sie schnelle Ergebnisse, persönliche Unterstützung und nahtlose Integration maßgeschneiderter Marketinglösungen erwarten können.",
    },
    {
      titleEN: "Your Focus, Our Support",
      titleDE: "Ihr Fokus, unsere Unterstützung",
      src: "/home/help.jpg",
      descriptionEN:
        "Running a business requires your full attention, and we’re here to support you every step of the way. Our goal is to take the burden of marketing off your shoulders, so you can concentrate on what you do best—leading and growing your business. We provide comprehensive marketing services, from strategic planning and brand development to content creation and campaign execution. With our expertise, you can delegate your marketing needs to us, knowing that we will handle them with precision and care. Our dedicated team ensures that your brand stays strong, your message reaches the right audience, and your marketing efforts consistently drive success.",
      descriptionDE:
        "Ein Unternehmen zu führen erfordert Ihre volle Aufmerksamkeit, und wir sind hier, um Sie auf jedem Schritt zu unterstützen. Unser Ziel ist es, Ihnen die Last des Marketings abzunehmen, damit Sie sich auf das konzentrieren können, was Sie am besten können – Ihr Unternehmen zu führen und auszubauen. Wir bieten umfassende Marketingdienstleistungen, von strategischer Planung und Markenentwicklung bis hin zur Content-Erstellung und Kampagnenumsetzung. Mit unserer Expertise können Sie sich darauf verlassen, dass wir Ihre Marketinganforderungen mit Präzision und Sorgfalt übernehmen. Unser engagiertes Team sorgt dafür, dass Ihre Marke stark bleibt, Ihre Botschaft die richtige Zielgruppe erreicht und Ihre Marketingmaßnahmen kontinuierlich zum Erfolg führen.",
    },
  ];
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(visionRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (visionRef.current) {
      observer.observe(visionRef.current);
    }

    return () => {
      if (visionRef.current) {
        observer.unobserve(visionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleCardClick = (index) => {
    setClickedSlide(slides[index]);
    setIsCardClicked(true);
  };

  const handleClosePopup = () => {
    setIsCardClicked(false);
    setClickedSlide(null);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      <motion.div
        key={slides[currentSlide].src}
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-[60%] h-1/2 absolute top-32"
      >
        <div className="text-white absolute top-1/2 left-1/2 -translate-1/2 font-bold text-8xl">
          {language === "EN" ? "Our Vision" : "Unsere Vision"}
        </div>
        <Image
          src={slides[currentSlide].src}
          className="w-full h-full object-cover rounded-2xl"
          width={1000}
          height={1000}
          alt="home"
        />
      </motion.div>
      <div
        ref={visionRef}
        className={`${
          isVisible ? "w-1/2" : "w-1"
        } h-[40%] bg-[#9fdcff] rounded-2xl transition-all duration-700 flex flex-col justify-center items-center p-10 absolute top-1/2 left-1/2 -translate-x-1/2`}
        onClick={() => handleCardClick(currentSlide)}
        style={{ cursor: "pointer" }}
      >
        <h2
          className={`${
            isVisible ? "opacity-100" : "opacity-0"
          } font-bold text-5xl text-[#292828] mb-6`}
        >
          {language === "EN"
            ? slides[currentSlide].titleEN
            : slides[currentSlide].titleDE}
        </h2>
        <p
          className={`${
            isVisible ? "opacity-100" : "opacity-0"
          } text-lg text-[#292828] text-center mb-6`}
        >
          {language === "EN"
            ? slides[currentSlide].descriptionEN.substring(0, 100) + "..."
            : slides[currentSlide].descriptionDE.substring(0, 100) + "..."}
        </p>
        {/* Progress Indicator */}
        <div className="absolute bottom-6 flex items-center">
          {slides.map((_, index) => (
            <div key={index} className="flex items-center justify-center">
              <div
                className={`w-6 h-6 rounded-full border-2 border-[#292828] transition-all duration-1000 ${
                  index <= currentSlide ? "bg-[#292828]" : "bg-transparent"
                }`}
              ></div>
              {index < slides.length - 1 && (
                <div
                  className={`w-8 h-1 transition-all duration-1000 ${
                    index < currentSlide ? "bg-[#292828]" : "bg-white"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {isCardClicked && clickedSlide && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#9fdcff] p-4 rounded-lg shadow-lg z-50 w-2/3 h-[80vh] overflow-y-auto"
          >
            <Image
              src={clickedSlide.src}
              className="w-full h-[25rem] object-cover rounded-2xl mb-4"
              width={500}
              height={250}
              alt={clickedSlide.titleEN}
            />
            <h3 className="text-5xl font-semibold mb-2 text-[#292828]">
              {language === "EN"
                ? clickedSlide.titleEN
                : clickedSlide.titleDE}
            </h3>
            <p className="text-xl text-[#292828]">
              {language === "EN"
                ? clickedSlide.descriptionEN
                : clickedSlide.descriptionDE}
            </p>
            <button
              onClick={handleClosePopup}
              className="mt-6 bg-[#292828] px-4 py-2 rounded-md text-white"
            >
              {language === "EN" ? "Close" : "Schließen"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Vision;
