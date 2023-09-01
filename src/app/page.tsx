'use client';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

export default function Home() {
    const [language, setLanguage] = useState('es');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.navigator.language.startsWith('es')) {
                setLanguage('es');
            } else {
                setLanguage('en');
            }
        }
    }, []);

    useEffect(() => {
        if (language) {
            redirect(`/${language}`);
        }
    }, [language]);

    return redirect(`/${language}`);
}