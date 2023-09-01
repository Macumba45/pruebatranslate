import React from 'react'
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'FishGram',
  description: 'App hecha para y por pescadores',
  image: '/images/logo.png',
  og: {
    title: 'FishGram',
    description: 'App hecha para y por pescadores',
    image: '/images/logo.png',
    type: 'website',
    url: 'https://fishgramapp.vercel.app',
  },

  keywords:
    'pesca, pescadores, pesca deportiva, pesca submarina, tienda de pesca, articulos de pesca',
}

export default function RootLayout({ children, params }: any) {
  const locale = useLocale();

  // Validate that the incoming `locale` parameter is a valid locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}