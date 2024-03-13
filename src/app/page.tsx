'use client';

import Greeting from '@/components/Greeting/Greeting';
import Technologies from '@/components/LandingPageContent/Technologies';
import { useTranslation } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
    const t = useTranslation();
    const [textArray, setTextArray] = useState(['Hi!', 'Szia!', 'Hello!']);

    return (
        <>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    stiffness: 100,
                    delay: 0.7,
                }}>
                <div className='p-10'>
                    <div className='text-[100px] font-black h-40 flex'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                stiffness: 100,
                                delay: 2.5,
                            }}>
                            <Greeting
                                texts={textArray}
                                speed={300}
                            />
                        </motion.div>
                    </div>
                    <div className='text-[60px] leading-tight'>
                        {t('myNameIs')}{' '}
                        <span className='font-semibold relative inline-block stroke-current'>
                            {t('nickname')}
                            <svg
                                className='absolute -bottom-0.5 w-full max-h-1.5'
                                viewBox='0 0 55 5'
                                xmlns='http://www.w3.org/2000/svg'
                                preserveAspectRatio='none'>
                                <path
                                    d='M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002'
                                    stroke-width='2'></path>
                            </svg>
                        </span>{' '}
                        {t('makeThings')}
                    </div>
                    <Technologies />
                </div>
            </motion.div>
        </>
    );
}
