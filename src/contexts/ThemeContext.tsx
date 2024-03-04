'use client';

import React, { ReactNode, createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext<{ theme: string; changeTheme: (theme: string) => void }>({
    theme: '',
    changeTheme: () => {},
});

interface ILayout {
    children: ReactNode;
}

const ThemeProvider: React.FC<ILayout> = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme);
    }, []);

    if (!isMounted) {
        return <>Loading..</>;
    }

    const changeTheme = (theme: string) => {
        setTheme(theme);
        localStorage.setItem('theme', theme);
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <div>{children}</div>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
