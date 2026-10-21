"use client";

import React, { createContext, useContext, useSyncExternalStore, useEffect } from "react";
import { en } from "../locales/en";
import { tr } from "../locales/tr";

const LanguageContext = createContext();

let sessionLanguage = "en";

function getLanguage() {
  try {
    const saved = localStorage.getItem("portfolio_lang");
    return saved === "en" || saved === "tr" ? saved : sessionLanguage;
  } catch {
    return sessionLanguage;
  }
}

function subscribe(onChange) {
  window.addEventListener("storage", onChange);
  window.addEventListener("portfolio-language-change", onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("portfolio-language-change", onChange);
  };
}

function getServerLanguage() {
  return "en";
}

export const LanguageProvider = ({ children, content = { en, tr } }) => {
  const language = useSyncExternalStore(subscribe, getLanguage, getServerLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "tr" : "en";
    sessionLanguage = newLang;
    try {
      localStorage.setItem("portfolio_lang", newLang);
    } catch {
      // Keep the selected language for this session when storage is unavailable.
    }
    window.dispatchEvent(new Event("portfolio-language-change"));
  };

  const t = language === "en" ? content.en : content.tr;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
