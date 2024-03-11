import React from 'react';
import HorizontalItem from './EducationTimelineComponents/HorizontalItem';
import VerticalItem from './EducationTimelineComponents/Verticaltem';

const EducationTimeline = () => {
    return (
        <div>
            <div className='hidden xl:flex items-center justify-center text-center'>
                <ul className='timeline items-center justify-center text-center'>
                    <HorizontalItem
                        title='English Language Exam Certificate B2'
                        year='2017'
                        filledEnd
                    />
                    <HorizontalItem
                        title='Bocskai István Catholic High School and Vocational School'
                        year='2019'
                        filledEnd
                        filledStart
                    />
                    <HorizontalItem
                        title='Driving License Category B'
                        year='2020'
                        filledEnd
                        filledStart
                    />
                    <HorizontalItem
                        title='University of Miskolc Computer Science Engineering'
                        year='2024'
                        filledEnd
                        filledStart
                    />
                    <HorizontalItem
                        title='Master Degree'
                        year='2024'
                        filledStart
                    />
                </ul>
            </div>

            <div className='xl:hidden'>
                <ul className='timeline timeline-vertical'>
                    <VerticalItem
                        year='2018'
                        title='English Language Exam Certificate B2 Combined'
                    />
                    <VerticalItem
                        year='2019'
                        title='Bocskai István Catholic High School and Vocational School'
                    />
                    <VerticalItem
                        year='2020'
                        title='Driving License Category B'
                    />
                    <VerticalItem
                        year='2024'
                        title=' University of Miskolc Computer Science Engineering'
                    />
                </ul>
            </div>
        </div>
    );
};

export default EducationTimeline;
