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
                    {t('myNameIs')} <span className='font-bold'>{t('nickname')}</span> {t('makeThings')}
                </div>
                <Technologies />
            </div>
        </>
    );
}
