'use client'

import React, { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext<string>('en');

export const useTranslation = () => {
  const currentLanguage = useContext(LanguageContext);
  const [translations, setTranslations] = useState<Record<string, string>>({});

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/translations/${currentLanguage}.json`);
        if (response.ok) {
          const data = await response.json();
          setTranslations(data);
        } else {
          console.error(`Failed to load translations for language ${currentLanguage}`);
        }
      } catch (error) {
        console.error(`Error loading translations: ${error}`);
      }
    };

    loadTranslations();
  }, [currentLanguage]);

  const t = (key: string) => translations[key] || key;

  return t;
};

export const LanguageProvider: React.FC<{ children: any, language: string }> = ({ children, language }) => {
  return (
    <LanguageContext.Provider value={language}>
      {children}
    </LanguageContext.Provider>
  );
};