import React, { createContext, useContext } from 'react';

const translations: Record<string, Record<string, string>> = {
    en: {
        projects: 'Projects',
        greeting: 'Hello',
        goodbye: 'Goodbye',
    },
    hu: {
        projects: 'Projektek',
        greeting: 'Üdv',
        goodbye: 'Viszlát',
    },
};

const LanguageContext = createContext<string>('en');

export const useTranslation = () => {
    const currentLanguage = useContext(LanguageContext);
    const t = (key: string) => translations[currentLanguage][key] || key;
    return t;
};

export const LanguageProvider: React.FC<{ children: any; language: string }> = ({ children, language }) => {
    return <LanguageContext.Provider value={language}>{children}</LanguageContext.Provider>;
};
