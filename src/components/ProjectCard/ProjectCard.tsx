'use client';

import { useTranslation } from '@/contexts/LanguageContext';
import Link from 'next/link';
import React from 'react';

interface IProjectCard {
    title: string;
    description: string;
    link: string;
    imgName?: string;
}

const ProjectCard = ({ title, description, imgName, link }: IProjectCard) => {
    const t = useTranslation();
    return (
        <div className='card bg-base-100 shadow-xl hover:opacity-50 cursor-pointer p-5'>
            <Link
                href={link}
                rel='noopener noreferrer'
                target='_blank'>
                <figure>
                    {imgName && (
                        <img
                            src={`./resource/${imgName}`}
                            alt={imgName}
                            className='opacity-60'
                        />
                    )}
                </figure>
                <div className='card-body'>
                    <h2 className='card-title'>{t(title)}</h2>
                    <p>{t(description)}</p>
                </div>
            </Link>
        </div>
    );
};

export default ProjectCard;
