'use client';

import { useTranslation } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import React from 'react';

const Technologies = () => {
    const t = useTranslation();
    return (
        <motion.div className='pt-5'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
            delay: 1.2,
        }}>
            <div className='text-[20px] leading-tight font-light'>{t('technologyWhatILike')}</div>
            <div className='pt-5 m-3'>
                <button className='btn btn-neutral m-3'>React</button>
                <button className='btn btn-neutral m-3'>Next.js</button>
                <button className='btn btn-neutral m-3'>Typescript</button>
                <button className='btn btn-neutral m-3'>Javascript</button>
                <button className='btn btn-neutral m-3'>Node.js</button>
                <button className='btn btn-neutral m-3'>Express</button>
                <button className='btn btn-neutral m-3'>HTML</button>
                <button className='btn btn-neutral m-3'>CSS</button>
                <button className='btn btn-neutral m-3'>Tailwind</button>
                <button className='btn btn-neutral m-3'>daisyUI</button>
                <button className='btn btn-neutral m-3'>C#</button>
                <button className='btn btn-neutral m-3'>ASP.Net</button>
                <button className='btn btn-neutral m-3'>Unity</button>
                <button className='btn btn-neutral m-3'>Unreal Engine</button>
                <button className='btn btn-neutral m-3'>Java</button>
                <button className='btn btn-neutral m-3'>Spring Boot</button>
                <button className='btn btn-neutral m-3'>Git</button>
                <button className='btn btn-neutral m-3'>SQL</button>
            </div>
        </motion.div>
    );
};

export default Technologies;
