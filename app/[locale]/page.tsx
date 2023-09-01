'use client';

import { useTranslations } from 'next-intl';

export default function Index() {
    const t = useTranslations('Index');
    return (
        <>
            <h1>{
                t('title')}
            </h1>
            <h2>{t('subtitle')}</h2>
            <h3>{t('subsubtitle')}</h3>
        </>
    );
}