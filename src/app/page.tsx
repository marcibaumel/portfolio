'use client';

import Technologies from '@/components/LandingPageContent/Technologies';
import { useTranslation } from '@/contexts/LanguageContext';

export default function Home() {
    const t = useTranslation();

    return (
        <>
            <div className='p-10'>
                <div className='text-[150px] font-semibold'>{t('greeting')}</div>
                <div className='text-[60px] leading-tight'>
                    My name is <span className='font-bold'>Marci</span> and I love make cool looking things!
                </div>
                <Technologies />
            </div>
        </>
    );
}
