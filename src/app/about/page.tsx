import EducationTimeline from '@/components/Timelines/EducationTimeline';
import React from 'react';

const page = () => {
    return (
        <>
            <EducationTimeline/>

            <div className='mx-3'>
                <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-5 pt-10'>
                    <li>
                        <div className='timeline-middle'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                className='h-5 w-5'>
                                <path
                                    fillRule='evenodd'
                                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </div>
                        <div className='timeline-start md:text-end mb-10'>
                            <time className='font-mono italic'>2022-2024</time>
                            <div className='text-lg font-black'>Evosoft Junior Software Developer</div>
                            My primary responsibility involved constructing a stable and maintainable codebase using
                            React, Typescript, and C#/ASP .NET . I oversaw version control using GIT and managed
                            databases using SQL and MSSQL. Additionally , I actively contributed to Scrum-based project
                            development.
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className='timeline-middle'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                className='h-5 w-5'>
                                <path
                                    fillRule='evenodd'
                                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </div>
                        <div className='timeline-end mb-10'>
                            <time className='font-mono italic'>2021-2024</time>
                            <div className='text-lg font-black'>Evosoft evoCampus Scholarship</div>
                            During my university studies, I participated in the evoCampus scholarship program initiated
                            by Evosoft for five semesters. My main responsibility was to create a project each semester
                            in collaboration with my team and mentors. A t the end of each semester, we presented the
                            projects to the employees of the company, who provided valuable feedback.
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className='timeline-middle'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                className='h-5 w-5'>
                                <path
                                    fillRule='evenodd'
                                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </div>
                        <div className='timeline-start md:text-end mb-10'>
                            <time className='font-mono italic'>2021</time>
                            <div className='text-lg font-black'>Hungarian Startup University Program</div>
                            With my team, our task was to simulate a regular startup company with an end-to-end product.
                            My role was to design and develop the website and manage the tasks with Trello.
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className='timeline-middle'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                className='h-5 w-5'>
                                <path
                                    fillRule='evenodd'
                                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </div>
                        <div className='timeline-end mb-10'>
                            <time className='font-mono italic'>2018</time>
                            <div className='text-lg font-black'>Erasmus+</div>I participated in this program and had the
                            chance to travel to Turkey with my classmates to enhance my language skills and establish
                            international connections. My responsibility was to deliver a presentation about Hungary and
                            edit our promotional video.
                        </div>
                        <hr />
                    </li>
                </ul>
            </div>
        </>
    );
};

export default page;
