'use client';

import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { useTranslation } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import React from 'react';

export default function Projects() {
    const t = useTranslation();
    return (
        <div className='m-5 pb-10'>
            <motion.div
                className='mx-3'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    delay: 0.3,
                }}>
                <div className='text-2xl font-semibold text-center'>{t('ongoingProjects')}</div>
                <div className='h-40'></div>
            </motion.div>
            <motion.div className='mx-3'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    delay: 1,
                }}>
                <div className='text-2xl font-semibold text-center'>{t('finishedProjects')}</div>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 justify-items-center text-center pt-10'>
                    <ProjectCard
                        description='evoSmartHomeDescription'
                        link='https://github.com/marcibaumel/evoSmartHome_copy'
                        title='evoSmartHome'
                    />
                    <ProjectCard
                        description='sweetchDescription'
                        imgName='hsup_logo.png'
                        link='https://marcibaumel.github.io/HSUP_WEB/'
                        title='sweetch'
                    />
                    <ProjectCard
                        description='evoNaploDescription'
                        link='https://github.com/BalintSedlak/EvoNaplo'
                        title='evoNaplo'
                    />
                    <ProjectCard
                        description='speedCardsDescription'
                        link='https://github.com/marcibaumel/SpeedCards'
                        title='speedCards'
                    />
                    <ProjectCard
                        description='evoRpgDescription'
                        link='https://github.com/marcibaumel/EvoRPG_2020'
                        title='evoRpg'
                    />
                </div>
            </motion.div>
        </div>
    );
}
