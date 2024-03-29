'use client';

import React from 'react';
import ExperienceTimelineElement from './ExperienceTimelineElements/ExperienceTimelineElement';
import { useTranslation } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const ExperienceTimeline = () => {
    const t = useTranslation();

    return (
        <>
            <motion.div
                className='mx-3'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    delay: 0.3,
                }}>
                <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-5 pt-10'>
                    <ExperienceTimelineElement
                        positionLeft
                        description={t('evoJuniorSDAbout')}
                        title={t('evoJuniorSD')}
                        year='2022-2024'
                    />
                    <ExperienceTimelineElement
                        description={t('evoScholarshipAbout')}
                        title={t('evoScholarship')}
                        year='2021-2024'
                    />
                    <ExperienceTimelineElement
                        positionLeft
                        description={t('hsupAbout')}
                        title={t('hsup')}
                        year='2021'
                    />
                    <ExperienceTimelineElement
                        description={t('erasmusAbout')}
                        title={t('erasmus')}
                        year='2018'
                    />
                </ul>
            </motion.div>
        </>
    );
};

export default ExperienceTimeline;
