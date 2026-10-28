import type { Metadata } from 'next';
import { metadataBase } from '@/lib/seo';
import { siteUrl } from '@/data/business';
import './globals.css';

export const metadata: Metadata = {
  metadataBase,
  title: { default: 'Esenyurt 7/24 Acil Çilingir | Güvenliğiniz Bizim İşimiz', template: '%s | Esenyurt Acil Çilingir' },
  description: 'Esenyurt’ta 7/24 acil çilingir, konut, oto, işyeri, kilit ve anahtar hizmetleri. Hızlı bilgi ve iletişim için Esenyurt Acil Çilingir’i arayın.',
  keywords: ['Esenyurt çilingir', 'acil çilingir Esenyurt', '7/24 çilingir', 'oto çilingir', 'kilit değişimi', 'anahtar çoğaltma'],
  authors: [{ name: 'Esenyurt Acil Çilingir' }],
  creator: 'Esenyurt Acil Çilingir',
  publisher: 'Esenyurt Acil Çilingir',
  alternates: { canonical: siteUrlOrRoot() },
  openGraph: { title: 'Esenyurt 7/24 Acil Çilingir', description: 'Esenyurt ve çevresinde 7/24 acil çilingir hizmeti.', locale: 'tr_TR', type: 'website', siteName: 'Esenyurt Acil Çilingir', images: siteUrl ? [{ url: '/images/hero-door-lock.png', width: 960, height: 640, alt: 'Kapı kilidinde anahtar' }] : undefined },
  twitter: { card: 'summary_large_image', title: 'Esenyurt 7/24 Acil Çilingir', description: 'Esenyurt ve çevresinde 7/24 acil çilingir hizmeti.', images: siteUrl ? ['/images/hero-door-lock.png'] : undefined },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};

function siteUrlOrRoot() { return process.env.NEXT_PUBLIC_SITE_URL ? '/' : undefined; }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="tr"><body>{children}</body></html>; }
