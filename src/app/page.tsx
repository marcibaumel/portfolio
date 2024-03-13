'use client';

import { useTranslation } from '@/contexts/LanguageContext';

export default function Home() {
    const t = useTranslation();

    return (
        <>
            <div className='p-10'>
                <div className='text-[150px] font-semibold'>{t('greeting')}</div>
                <div className='text-[60px] leading-tight'>
                    My name is <span>Marci</span> and I love make cool looking things!
                </div>

                <div className='pt-5'>
                    <div className='text-[20px] leading-tight font-light'>I really like these technologies:</div>
                    <div className='pt-5 m-3'>
                        <button className='btn btn-neutral m-3'>React</button>
                        <button className='btn btn-neutral m-3'>Next.js</button>
                        <button className='btn btn-neutral m-3'>Typescript</button>
                        <button className='btn btn-neutral m-3'>Javascript</button>
                        <button className='btn btn-neutral m-3'>Node.js</button>
                        <button className='btn btn-neutral m-3'>Express</button>
                        <button className='btn btn-neutral m-3'>HTML</button>
                        <button className='btn btn-neutral m-3'>CSS</button>
                        <button className='btn btn-neutral m-3'>Tailwind</button>
                        <button className='btn btn-neutral m-3'>daisyUI</button>
                        <button className='btn btn-neutral m-3'>C#</button>
                        <button className='btn btn-neutral m-3'>ASP.Net</button>
                        <button className='btn btn-neutral m-3'>Unity</button>
                        <button className='btn btn-neutral m-3'>Unreal Engine</button>
                        <button className='btn btn-neutral m-3'>Java</button>
                        <button className='btn btn-neutral m-3'>Spring Boot</button>
                        <button className='btn btn-neutral m-3'>Git</button>
                        <button className='btn btn-neutral m-3'>SQL</button>
                    </div>
                </div>
            </div>
        </>
    );
}
