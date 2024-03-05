'use client';

import Spinner from '@/components/Spinner/Spinner';
import { LanguageProvider } from '@/utils/useTrasnaltion';
import React, { ReactNode, createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext<{ theme: string; changeTheme: (theme: string) => void }>({
    theme: 'dracula',
    changeTheme: () => {},
});

interface ILayout {
    children: ReactNode;
}

const ThemeProvider: React.FC<ILayout> = ({ children }) => {
    const [theme, setTheme] = useState('dracula');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const storedTheme = localStorage.getItem('theme') || 'dracula';
        setTheme(storedTheme);
    }, [theme]);

    if (!isMounted) {
        return <Spinner />;
    }

    const changeTheme = (theme: string) => {
        setTheme(theme);
        localStorage.setItem('theme', theme);
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <LanguageProvider language='hu'>
                <div>{children}</div>
            </LanguageProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
