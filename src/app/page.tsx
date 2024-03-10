'use client';

import { useTranslation } from '@/contexts/LanguageContext';

export default function Home() {
    const t = useTranslation();

    return (
        <>
            <div className='h-screen'>
                <h1>{t('greeting')}</h1>
                <div>I like make cool looking things</div>
                <div>CV content</div>
            </div>
        </>
    );
}