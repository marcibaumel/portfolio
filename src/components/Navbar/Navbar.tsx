'use client';

import { GiHamburgerMenu } from 'react-icons/gi';
import { store } from '@/store/store';
import { ThemeContext } from '@/contexts/ThemeContext';
import { TiAdjustBrightness } from 'react-icons/ti';
import { useTranslation } from '@/contexts/LanguageContext';
import { WiMoonWaningCrescent2 } from 'react-icons/wi';
import React, { useContext, useEffect, useState } from 'react';

const Navbar = () => {
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const [theme, setTheme] = useState('');
    const t = useTranslation();

    useEffect(() => {
        setIsDark(store.getState().themeSettings.isDark);
        const storedTheme = localStorage.getItem('theme') || 'dracula';
        setTheme(storedTheme);
    }, []);

    const handleOpenHamburgerMenu = () => {
        setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
    };

    const handleCloseHamburgerMenu = () => {
        setIsHamburgerMenuOpen(false);
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

    const handleOpenLanguageTab = () => {
        setIsLanguageDropdownOpen(true);
    };

    const handleCloseLanguageTab = () => {
        setIsLanguageDropdownOpen(true);
    };

    const { changeTheme } = useContext(ThemeContext);
    const { changeLanguage } = useContext(ThemeContext);

    return (
        <div className='mb-4'>
            <div className={`navbar hidden md:flex`}>
                <div className='flex-1'>
                    <a className='btn btn-ghost text-xl'>Baumel Márton</a>
                </div>
                <div className='flex-none'>
                    <ul className='menu menu-horizontal px-1'>
                        <li>
                            <a>{t('projects')}</a>
                        </li>

                        <li>
                            <details
                                tabIndex={0}
                                open={isLanguageDropdownOpen}
                                onBlur={handleCloseLanguageTab}
                                onClick={handleOpenLanguageTab}>
                                <summary>{t('languages')}</summary>
                                <ul className='p-2 bg-base-100 rounded-t-none'>
                                    <li>
                                        <a onClick={() => changeLanguage('en')}>{t('english')}</a>
                                    </li>
                                    <li>
                                        <a onClick={() => changeLanguage('hu')}>{t('hungarian')}</a>
                                    </li>
                                </ul>
                            </details>
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
                        onClick={handleOpenHamburgerMenu}
                    />
                </div>

                {isHamburgerMenuOpen && (
                    <ul className='menu bg-base-200 rounded-box'>
                        <li>
                            <a>{t('projects')}</a>
                        </li>

                        <li>
                            <details>
                                <summary tabIndex={0}>{t('languages')}</summary>
                                <ul className='p-2 bg-base-100 rounded-t-none'>
                                    <li>
                                        <a onClick={() => changeLanguage('en')}>{t('english')}</a>
                                    </li>
                                    <li>
                                        <a onClick={() => changeLanguage('hu')}>{t('hungarian')}</a>
                                    </li>
                                </ul>
                            </details>
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
                )}
            </div>
        </div>
    );
};

export default Navbar;
