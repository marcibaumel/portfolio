import React from 'react';
import ExperienceTimelineElement from './ExperienceTimelineElements/ExperienceTimelineElement';

const ExperienceTimeline = () => {
    return (
        <>
            <div className='mx-3'>
                <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-5 pt-10'>
                    <ExperienceTimelineElement
                        positionLeft
                        description=' My primary responsibility involved constructing a stable and maintainable codebase using
                            React, Typescript, and C#/ASP .NET . I oversaw version control using GIT and managed
                            databases using SQL and MSSQL. Additionally , I actively contributed to Scrum-based project
                            development.'
                        title='Evosoft Junior Software Developer'
                        year='2022-2024'
                    />
                    <ExperienceTimelineElement
                        description='During my university studies, I participated in the evoCampus scholarship program initiated by Evosoft for five semesters. My main responsibility was to create a project each semester
                            in collaboration with my team and mentors. A t the end of each semester, we presented the
                            projects to the employees of the company, who provided valuable feedback.'
                        title='Evosoft evoCampus Scholarship'
                        year='2021-2024'
                    />
                    <ExperienceTimelineElement
                        positionLeft
                        description='With my team, our task was to simulate a regular startup company with an end-to-end product. My role was to design and develop the website and manage the tasks with Trello.'
                        title='Hungarian Startup University Program'
                        year='2021'
                    />
                    <ExperienceTimelineElement
                        description='I participated in this program and had the
                        chance to travel to Turkey with my classmates to enhance my language skills and establish
                        international connections. My responsibility was to deliver a presentation about Hungary and
                        edit our promotional video.'
                        title='Erasmus+'
                        year='2018'
                    />
                </ul>
            </div>
        </>
    );
};

export default ExperienceTimeline;
