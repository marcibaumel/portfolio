'use client';

import { useTranslation } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
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
        <Link href={link}>
            <motion.div
                className='card bg-base-100 shadow-xl cursor-pointer hover:opacity-80'
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.9 }}>
                <Link
                    href={link}
                    rel='noopener noreferrer'
                    target='_blank'>
                    <figure>
                        {imgName && (
                            <img
                                src={`./resource/${imgName}`}
                                alt={imgName}
                            />
                        )}
                    </figure>
                    <div className='card-body hover:opacity-50'>
                        <h2 className='card-title'>{t(title)}</h2>
                        <p>{t(description)}</p>
                    </div>
                </Link>
            </motion.div>
        </Link>
    );
};

export default ProjectCard;
