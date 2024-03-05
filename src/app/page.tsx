'use client';

import { useTranslation } from '@/contexts/useTranslation';

export default function Home() {
    const t = useTranslation();

    return (
        <>
            <div className='h-screen'>
                <h1>{t('greeting')}</h1>
            </div>
        </>
    );
}
