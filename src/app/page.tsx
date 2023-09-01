'use client';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
export default function Home() {

    // You can also render some content here if needed
    return redirect('/en');
}