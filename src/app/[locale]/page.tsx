'use client';

import Navigation from 'componets/Navigation';
import PageLayout from 'componets/PageLayout';
import { useTranslations } from 'next-intl';
import HeaderComp from '../../componets/Header';

export default function Index() {
    const t = useTranslations('Index');
    return (
        <>
            <HeaderComp />
        </>
    );
}