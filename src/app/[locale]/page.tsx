'use client';

import { useTranslations } from 'next-intl';
import HeaderComp from '../../components/Header';

export default function Index() {
    const t = useTranslations('Index');
    return (
        <>
            <HeaderComp />
        </>
    );
}