'use client';

import { useTranslation } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { FaGithub, FaItchIo, FaLinkedin, FaSquareXTwitter, FaTwitch, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
    const t = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                delay: 1,
            }}>
            <div className='bottom-0 relative w-full pt-[250px]'>
                <footer className='footer p-10 bg-neutral text-neutral-content'>
                    <aside>
                        <div className='w-50px h-50px'></div>
                        <p>
                            {t('contactMe')}
                            <br />
                            <span className='font-semibold'>marcibaumel@gmail.com</span>
                        </p>
                    </aside>
                    <nav>
                        <h6 className='footer-title'>{t('social')}</h6>
                        <div className='grid grid-flow-col gap-4'>
                            <a href='https://www.linkedin.com/in/marton-baumel/'>
                                <FaLinkedin size={24} />
                            </a>
                            <a href='https://github.com/marcibaumel'>
                                <FaGithub size={24} />
                            </a>
                        </div>
                    </nav>
                </footer>
            </div>
        </motion.div>
    );
};

export default Footer;
