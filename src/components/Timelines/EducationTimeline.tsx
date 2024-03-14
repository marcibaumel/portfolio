'use client';

import React from 'react';
import HorizontalItem from './EducationTimelineElements/HorizontalItem';
import VerticalItem from './EducationTimelineElements/Verticaltem';
import { useTranslation } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const EducationTimeline = () => {
    const t = useTranslation();

    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                delay: 0.3,
            }}>
            <div className='hidden 2xl:flex items-center justify-center text-center'>
                <ul className='timeline items-center justify-center text-center'>
                    <HorizontalItem
                        title={t('englishLanguageB2')}
                        year='2017'
                        filledEnd
                        finishLine
                    />
                    <HorizontalItem
                        title={t('bocskai')}
                        year='2019'
                        filledEnd
                        filledStart
                        startLine
                        finishLine
                    />
                    <HorizontalItem
                        title={t('drivingLicense')}
                        year='2020'
                        filledEnd
                        filledStart
                        startLine
                        finishLine
                    />
                    <HorizontalItem
                        title={t('university')}
                        year='2024'
                        filledEnd
                        filledStart
                        startLine
                    />
                </ul>
            </div>

            <div className='2xl:hidden'>
                <ul className='timeline timeline-vertical'>
                    <VerticalItem
                        year='2018'
                        title={t('englishLanguageB2')}
                    />
                    <VerticalItem
                        year='2019'
                        title={t('bocskai')}
                    />
                    <VerticalItem
                        year='2020'
                        title={t('drivingLicense')}
                    />
                    <VerticalItem
                        year='2024'
                        title={t('university')}
                    />
                </ul>
            </div>
        </motion.div>
    );
};

export default EducationTimeline;
