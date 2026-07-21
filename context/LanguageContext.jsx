"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { en } from "../locales/en";
import { tr } from "../locales/tr";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  // On mount, check if there's a saved language in localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio_lang");
    if (savedLang && (savedLang === "en" || savedLang === "tr")) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "tr" : "en";
    setLanguage(newLang);
    localStorage.setItem("portfolio_lang", newLang);
  };

  const t = language === "en" ? en : tr;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
