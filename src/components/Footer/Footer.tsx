'use client';

import { FaGithub, FaItchIo, FaSquareXTwitter, FaTwitch, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bottom-0 relative w-full pt-[180px]'>
            <footer className='footer p-10 bg-neutral text-neutral-content'>
                <aside>
                    <div className='w-50px h-50px'></div>
                    <p>
                        Ha szeretnél kapcsoaltba lépni velem:
                        <br />
                        <span className='font-semibold'>marcibaumel@gmail.com</span>
                    </p>
                </aside>
                <nav>
                    <h6 className='footer-title'>Social</h6>
                    <div className='grid grid-flow-col gap-4'>
                        <a href='https://twitter.com/bau_tweets'>
                            <FaSquareXTwitter size={24} />
                        </a>
                        <a href='https://github.com/marcibaumel'>
                            <FaGithub size={24} />
                        </a>
                        <a href='https://www.youtube.com/@bau_videos'>
                            <FaYoutube size={24} />
                        </a>
                        <a href='https://www.twitch.tv/bau_live'>
                            <FaTwitch size={24} />
                        </a>
                        <a href='https://bau-games.itch.io/'>
                            <FaItchIo size={24} />
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
