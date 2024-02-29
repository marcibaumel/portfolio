'use client';

import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TiAdjustBrightness } from 'react-icons/ti';
import { WiMoonWaningCrescent2 } from 'react-icons/wi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);

    const handleOpenHamburgerMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleStyleChange = () => {
        setIsDark(!isDark);
    }

    const closeDropdown = () => {

    }

    return (
        <div>
            <div className='navbar dark:bg-base-100 hidden md:flex'>
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
                        <a>{isDark ? <WiMoonWaningCrescent2 size={20} /> : <TiAdjustBrightness size={20} />}</a>
                        </li>
                    </ul>
                </div>
            </div>

          
            <div className='md:hidden p-10 btn btn-ghost text-xl'>
                <GiHamburgerMenu size={20} />
            </div>
        </div>
    );
};

export default Navbar;
