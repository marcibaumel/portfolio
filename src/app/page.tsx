'use client';

import { useTranslation } from '@/utils/useTrasnaltion';

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
