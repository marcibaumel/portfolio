import ProjectCard from '@/components/ProjectCard/ProjectCard';
import React from 'react';

const page = () => {
    return (
        <div className='m-5'>
            <div className='text-lg font-semibold'>Finished projects:</div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 justify-items-center text-center pt-10'>
                <ProjectCard
                    description='INSERT TEXT LATER'
                    link='https://github.com/marcibaumel/evoSmartHome_copy'
                    title='evoSmartHome - 2024'
                />

                <ProjectCard
                    description='With my team, our task was to simulate a regular startup company with an end-to-end product. My role was to design and develop the website and manage the tasks with Trello'
                    imgName='hsup_logo.png'
                    link='https://marcibaumel.github.io/HSUP_WEB/'
                    title='Sweetch - 2022'
                />

                <ProjectCard
                    description='INSERT TEXT LATER'
                    link='https://github.com/BalintSedlak/EvoNaplo'
                    title='evoNaplo - 2021'
                />

                <ProjectCard
                    description='Szoftvertechnológia c. tárgy (GEIAL314B kurzus)-hoz tartozó beadandó feladat '
                    link='https://github.com/marcibaumel/SpeedCards'
                    title='SpeedCards - 2020'
                />

                <ProjectCard
                    description='This project was made in 2020 first half, it was a student project with classmates part of the EvoCampus program. Our task was to make a game with WPF. It was my first time when I had to use WPF and the first time I had to code in C# (before that I had experience programming in C and JAVA (and a little bit of Python and Pascal)).'
                    link='https://github.com/marcibaumel/EvoRPG_2020'
                    title='evoRPG - 2020'
                />
            </div>
        </div>
    );
};

export default page;
