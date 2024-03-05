'use client';

import { ILayout } from '../@types/ILayout';
import { LanguageProvider } from '@/contexts/LanguageContext';
import React, { createContext, useEffect, useState } from 'react';
import Spinner from '@/components/Spinner/Spinner';

export const ThemeContext = createContext<{
    language: string;
    theme: string;
    changeTheme: (theme: string) => void;
    changeLanguage: (language: string) => void;
}>({
    language: 'en',
    theme: 'dracula',
    changeTheme: () => {},
    changeLanguage: () => {},
});

const ThemeProvider: React.FC<ILayout> = ({ children }) => {
    const [theme, setTheme] = useState('dracula');
    const [language, setLanguage] = useState('en');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const storedTheme = localStorage.getItem('theme') || 'dracula';
        const storedLanguage = localStorage.getItem('language') || 'en';
        setTheme(storedTheme);
        setLanguage(storedLanguage);
    }, []);

    if (!isMounted) {
        return <Spinner />;
    }

    const changeTheme = (theme: string) => {
        setTheme(theme);
        localStorage.setItem('theme', theme);
    };

    const changeLanguage = (language: string) => {
        setLanguage(language);
        localStorage.setItem('language', language);
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme, language, changeLanguage }}>
            <LanguageProvider language={language}>
                <div>{children}</div>
            </LanguageProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;