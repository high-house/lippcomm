"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import useLippStore from "@/store/LippStore" 
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");
  const [langDropdown, setLangDropdown] = useState(false);
  const {language,setLanguage}=useLippStore()


    useEffect(()=>{
        setLanguage(selectedLang)
    },[selectedLang])

  const languages = ["EN","DE"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#292828] text-[#9fdcff] px-8 py-6 flex justify-between items-center z-50">
      {/* Logo */}
      <Link href="/" className="">
       
      </Link>
      
      <Link href="/" className="absolute top-[-3.5rem] left-3">
      <Image
            className="w-[20rem] h-[12rem] cursor-pointer"
            width={400}
            height={400}
            src={"/logo.png"}
        
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-lg">
        {["Services", "Business Cases", "Blog", "Contact"].map((route) => (
          <Link key={route} href={`/${route.toLowerCase().replace(" ", "-")}`}>
            <motion.span
              whileHover={{ scale: 1.1, color: "#D79922" }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer text-xl hover:text-[#D79922] transition-colors"
            >
              {route}
            </motion.span>
          </Link>
        ))}
      </div>

      {/* Language Selector */}
      <div className="relative hidden md:block">
        <button
          onClick={() => setLangDropdown(!langDropdown)}
          className="flex items-center gap-2 px-4 py-2 bg-[#FFE6A7] text-[#432818] rounded-md"
        >
          {selectedLang} ▼
        </button>
        {langDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-12 right-0 w-24 bg-[#FFE6A7] text-[#432818] rounded-md shadow-lg"
          >
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setSelectedLang(lang);
                  setLangDropdown(false);
                }}
                className="block px-4 py-2 w-full text-left hover:bg-[#99582A]"
              >
                {lang}
              </button>
            ))}
          </motion.div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none text-[#FFE6A7] text-3xl"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-16 left-0 w-full bg-[#432818] text-center py-4 flex flex-col space-y-4 md:hidden"
        >
          {["Services", "Business Cases", "Blog", "Contact"].map((route) => (
            <Link key={route} href={`/${route.toLowerCase().replace(" ", "-")}`}>
              <span
                onClick={() => setIsOpen(false)}
                className="block py-2 cursor-pointer hover:text-[#D79922] transition-colors"
              >
                {route}
              </span>
            </Link>
          ))}

          {/* Mobile Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangDropdown(!langDropdown)}
              className="mt-4 px-4 py-2 bg-[#D79922] text-[#432818] rounded-md w-full"
            >
              {selectedLang} ▼
            </button>
            {langDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-12 left-1/2 transform -translate-x-1/2 w-24 bg-[#D79922] text-[#432818] rounded-md shadow-lg"
              >
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setSelectedLang(lang);
                      setLangDropdown(false);
                    }}
                    className="block px-4 py-2 w-full text-left hover:bg-[#99582A]"
                  >
                    {lang}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
