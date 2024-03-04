'use client';

import { ThemeContext } from '@/contexts/ThemeContext';
import { store } from '@/store/store';
import React, { useContext, useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TiAdjustBrightness } from 'react-icons/ti';
import { WiMoonWaningCrescent2 } from 'react-icons/wi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        setIsDark(store.getState().themeSettings.isDark);
    }, []);

    const handleOpenHamburgerMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleStyleChange = () => {
        setIsDark(!isDark);
    };

    const {changeTheme} = useContext(ThemeContext);

    return (
        <div className='mb-4'>
            <div className={`navbar hidden md:flex`}>
                <div className='flex-1'>
                    <a className='btn btn-ghost text-xl'>Baumel Márton</a>
                </div>
                <div className='flex-none'>
                    <ul className='menu menu-horizontal px-1'>
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
                                {isDark ? <WiMoonWaningCrescent2 size={20} onClick={() => changeTheme('dracula')}/> : <TiAdjustBrightness size={20} onClick={() => changeTheme('light')}/>}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='md:hidden  m-6'>
                <div className='text-center'>
                    <div >
                        <a className='btn btn-ghost text-xl'>Baumel Márton</a>
                    </div>
                  
                    <GiHamburgerMenu
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
                                {isDark ? <WiMoonWaningCrescent2 size={20} onClick={() => changeTheme('dracula')} /> : <TiAdjustBrightness size={20} onClick={() => changeTheme('light')}/>}
                            </a>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Navbar;
