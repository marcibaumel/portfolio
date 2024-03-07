import { ILanguageDropdown } from '@/@types/ILanguageDropdown';
import { useTranslation } from '@/contexts/LanguageContext';
import React from 'react';

const LanguageDropdown = ({ changeLanguage, isLarge }: ILanguageDropdown) => {
    const t = useTranslation();

    return (
        <>
            {isLarge ? (
                <div className='dropdown dropdown-hover dropdown-bottom'>
                    <div tabIndex={0}>{t('languages')}</div>
                    <ul
                        tabIndex={0}
                        className='dropdown-content z-[1] menu p-2 shadow bg-base-100 '>
                        <li>
                            <a
                                onClick={() => {
                                    changeLanguage('en');
                                }}>
                                {t('english')}
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => {
                                    changeLanguage('hu');
                                }}>
                                {t('hungarian')}
                            </a>
                        </li>
                    </ul>
                </div>
            ) : (
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
            )}
        </>
    );
};

export default LanguageDropdown;
