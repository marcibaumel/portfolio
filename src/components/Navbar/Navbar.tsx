'use client';

import { ThemeContext } from '@/contexts/ThemeContext';
import { useTranslation } from '@/contexts/useTranslation';
import { store } from '@/store/store';
import React, { useContext, useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TiAdjustBrightness } from 'react-icons/ti';
import { WiMoonWaningCrescent2 } from 'react-icons/wi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const [theme, setTheme] = useState('');
    const t = useTranslation();

    useEffect(() => {
        setIsDark(store.getState().themeSettings.isDark);
        const storedTheme = localStorage.getItem('theme') || 'dracula';
        setTheme(storedTheme);
    }, []);

    const handleOpenHamburgerMenu = () => {
        setIsOpen(!isOpen);
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
                            <details>
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

                {isOpen && (
                    <ul className='menu bg-base-200 rounded-box'>
                        <li>
                            <a>Projects</a>
                        </li>

                        <li>
                            <details>
                                <summary>Language</summary>
                                <ul className='p-2 bg-base-100 rounded-t-none'>
                                    <li>
                                        <a>English</a>
                                    </li>
                                    <li>
                                        <a>Hungarian</a>
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
