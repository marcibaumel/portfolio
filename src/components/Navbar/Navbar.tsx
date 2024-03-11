'use client';

import { GiHamburgerMenu } from 'react-icons/gi';
import { store } from '@/store/store';
import { ThemeContext } from '@/contexts/ThemeContext';
import { TiAdjustBrightness } from 'react-icons/ti';
import { useTranslation } from '@/contexts/LanguageContext';
import { WiMoonWaningCrescent2 } from 'react-icons/wi';
import React, { useContext, useEffect, useRef, useState } from 'react';
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const [theme, setTheme] = useState('');
    const dropdownRef = useRef(null);
    const t = useTranslation();

    useEffect(() => {
        setIsDark(store.getState().themeSettings.isDark);
        const storedTheme = localStorage.getItem('theme') || 'dracula';
        setTheme(storedTheme);
    }, []);

    const toggleOpenHamburgerMenu = () => {
        setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
    };

    const handleStyleChange = () => {
        if (theme === 'light') {
            changeTheme('dracula');
            setTheme('dark');
        } else {
            changeTheme('light');
            setTheme('light');
        }
        setIsDark(!isDark);
    };

    const { changeTheme } = useContext(ThemeContext);
    const { changeLanguage } = useContext(ThemeContext);
    const router = useRouter()

    return (
        <div
            className='mb-4'
            ref={dropdownRef}>
            <div className={`navbar hidden md:flex`}>
                <div className='flex-1' onClick={() => router.push('/')}>
                    <a className='btn btn-ghost text-xl'>Baumel Márton</a>
                </div>
                <div className='flex-none'>
                    <ul className='menu menu-horizontal px-1'>
                    <li>
                            <a onClick={() => router.push('/about')}>{t('about')}</a>
                        </li>
                        <li>
                            <a onClick={() => router.push('/projects')}>{t('projects')}</a>
                        </li>

                        <li>
                            <LanguageDropdown
                                isLarge
                                changeLanguage={changeLanguage}
                            />
                        </li>
                        <li>
                            <a onClick={handleStyleChange}>
                                {theme === 'light' ? (
                                    <WiMoonWaningCrescent2 size={20} />
                                ) : (
                                    <TiAdjustBrightness size={20} />
                                )}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='md:hidden'>
                <div className='text-center'>
                    <div>
                        <a className='btn btn-ghost text-xl'>Baumel Márton</a>
                    </div>

                    <GiHamburgerMenu
                        className='m-4'
                        size={30}
                        onClick={toggleOpenHamburgerMenu}
                    />
                </div>

                {isHamburgerMenuOpen && (
                    <div>
                        <ul className='menu bg-base-200 rounded-box'>
                            <li>
                                <a>{t('projects')}</a>
                            </li>

                            <LanguageDropdown changeLanguage={changeLanguage} />
                            <li>
                                <a onClick={handleStyleChange}>
                                    {theme === 'light' ? (
                                        <WiMoonWaningCrescent2 size={20} />
                                    ) : (
                                        <TiAdjustBrightness size={20} />
                                    )}
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
