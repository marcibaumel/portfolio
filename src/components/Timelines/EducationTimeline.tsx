'use client'

import React from 'react';
import HorizontalItem from './EducationTimelineElements/HorizontalItem';
import VerticalItem from './EducationTimelineElements/Verticaltem';
import { useTranslation } from '@/contexts/LanguageContext';

const EducationTimeline = () => {
    const t = useTranslation();

    return (
        <div>
            <div className='hidden 2xl:flex items-center justify-center text-center'>
                <ul className='timeline items-center justify-center text-center'>
                    <HorizontalItem
                        title={t('englishLanguageB2')}
                        year='2017'
                        filledEnd
                    />
                    <HorizontalItem
                        title={t('bocskai')}
                        year='2019'
                        filledEnd
                        filledStart
                    />
                    <HorizontalItem
                        title={t('drivingLicense')}
                        year='2020'
                        filledEnd
                        filledStart
                    />
                    <HorizontalItem
                        title={t('university')}
                        year='2024'
                        filledEnd
                        filledStart
                    />
                    <HorizontalItem
                        title={t('master')}
                        year=''
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
        </div>
    );
};

export default EducationTimeline;
