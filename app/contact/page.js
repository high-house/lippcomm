"use client";
import { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import useLippStore from "@/store/LippStore";

function Page() {
  return (
    <div className="w-screen flex flex-col bg-[#292828] text-[#9fdcff] relative">
      <ContactPage />
    </div>
  );
}

export default Page;

function ContactPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileContactPage /> : <DesktopContactPage />;
}

// 🖥️ Desktop Version
function DesktopContactPage() {
  const { language } = useLippStore();
  const [isSwapped, setIsSwapped] = useState(false);
  const isGerman = language !== "EN";

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-[#9fdcff] rounded-2xl w-3/4 h-3/4 shadow-lg flex text-[#292828] overflow-hidden relative">
        <motion.div
          className={`flex flex-col gap-5 p-10 w-1/2 absolute transition-all duration-700 ${
            isSwapped ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <SwapButton isSwapped={isSwapped} onClick={() => setIsSwapped(!isSwapped)} />
          {!isSwapped ? <ContactDetails isGerman={isGerman} /> : <ContactForm isGerman={isGerman} />}
        </motion.div>

        <motion.div
          className={`w-1/2 absolute top-0 h-full transition-all duration-700 ${
            isSwapped ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Image
            alt="contact-page"
            src={isSwapped ? "/contact/contact1.jpg" : "/contact/contact.jpg"}
            width={1000}
            height={1000}
            className={`w-full h-full object-cover transition-all duration-500 ${isSwapped ? "rounded-l-2xl":"rounded-r-2xl"}`}
          />
        </motion.div>
      </div>
    </div>
  );
}

// 📱 Mobile Version (Contact Details Now Appear!)
function MobileContactPage() {
  const { language } = useLippStore();
  const [isSwapped, setIsSwapped] = useState(false);
  const isGerman = language !== "EN";

  return (
    <div className="flex flex-col items-center p-5 text-[#292828]">
      <div className="w-full h-60 relative">
        <Image
          src={isSwapped ? "/contact/contact1.jpg" : "/contact/contact.jpg"}
          alt="contact-page"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>

      <SwapButton isSwapped={isSwapped} onClick={() => setIsSwapped(!isSwapped)} className="mt-4" />

      <motion.div className="w-full mt-5 transition-all duration-700">
        {!isSwapped ? <ContactDetails isGerman={isGerman} /> : <ContactForm isGerman={isGerman} />}
      </motion.div>
    </div>
  );
}

// 📩 **Contact Details (Now in Mobile & Desktop)**
function ContactDetails({ isGerman }) {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <div className={`text-lg font-light space-y-2 ${isMobile ? "text-[#9fdcff]":"text-[#292828]"}`}>
      <p className="text-xl font-semibold">{isGerman ? "Kontaktieren Sie uns" : "Contact us"}</p>
      <h1 className="text-3xl font-bold">{isGerman ? "In Kontakt treten" : "Get in touch"}</h1>
      <p>LippComm - Lippuner Communications</p>
      <p>Moosbrünneli 15A</p>
      <p>5643 Sins, Schweiz</p>
      <p>www.lippcomm.com</p>
      <p>kontakt@lippcomm.ch</p>
      <p>+41782084351</p>
      <p className="text-xl font-semibold">{isGerman ? "Verbinden Sie sich mit uns:" : "Connect with us:"}</p>
      <div className="flex gap-4">
        <a href="https://www.instagram.com/lippcomm/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-3xl" />
        </a>
        <a href="https://www.linkedin.com/in/anja-lippuner-lippcomm/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl" />
        </a>
      </div>
    </div>
  );
}

// ✍️ **Contact Form (Fixed Checkboxes)**
function ContactForm({ isGerman }) {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleInterestChange = (value) => {
    setSelectedInterests((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-3">{isGerman ? "Schreiben Sie uns" : "Write us"}</h2>
      <form className="space-y-3">
        <input type="text" placeholder={isGerman ? "Vorname" : "First name"} className="rounded-xl p-2 w-full text-lg bg-white" />
        <input type="text" placeholder={isGerman ? "Nachname" : "Last name"} className="rounded-xl p-2 w-full text-lg bg-white" />
        <input type="email" placeholder="E-Mail Address" className="rounded-xl p-2 w-full bg-white text-base" />
        <input type="text" placeholder={isGerman ? "Firmenname" : "Company Name"} className="rounded-xl p-2 w-full bg-white text-base" />
        <textarea placeholder={isGerman ? "Ziel" : "Goal"} className="rounded-xl p-3 w-full h-20 bg-white text-base"></textarea>

        <div className="text-lg font-semibold">{isGerman ? "Interessiert an" : "Interested in"}</div>
        <fieldset className="border border-gray-300 rounded-2xl p-3 bg-white">
          {[
            { en: "Onboarding", de: "Einarbeitung" },
            { en: "CMO as a Service", de: "CMO als Dienstleistung" },
            { en: "Creative Services", de: "Kreative Dienstleistungen" },
          ].map(({ en, de }) => (
            <label key={en} className="flex items-center space-x-2">
              <input type="checkbox" value={en} checked={selectedInterests.includes(en)} onChange={() => handleInterestChange(en)} />
              <span>{isGerman ? de : en}</span>
            </label>
          ))}
        </fieldset>

        <button type="submit" className="w-full bg-[#292828] text-white font-semibold py-2 rounded-md hover:bg-[#151542] transition text-base">
          {isGerman ? "Nachricht senden" : "Submit message"}
        </button>
      </form>
    </div>
  );
}

// 🔄 **Swap Button**
function SwapButton({ isSwapped, onClick, className = "" }) {
  return (
    <div className={`cursor-pointer w-12 h-12 rounded-full bg-[#292828] flex justify-center items-center ${className}`} onClick={onClick}>
      {isSwapped ? <FaArrowLeft className="w-6 h-6 text-white" /> : <FaArrowRight className="w-6 h-6 text-white" />}
    </div>
  );
}
