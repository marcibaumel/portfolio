'use client';

import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';

export default function ClientThemeWrapper({children}:any){
    const {theme} = useContext(ThemeContext);

    return <div data-theme={theme}>{children}</div>
}