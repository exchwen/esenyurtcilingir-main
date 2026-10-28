import type { Metadata } from 'next';
import { metadataBase } from '@/lib/seo';
import './globals.css';
export const metadata: Metadata = { metadataBase, title: { default: 'Esenyurt 7/24 Acil Çilingir | Güvenliğiniz Bizim İşimiz', template: '%s | Esenyurt Acil Çilingir' }, description: 'Esenyurt’ta acil çilingir, konut, oto, işyeri ve kilit hizmetleri için Esenyurt Acil Çilingir ile iletişime geçin.', openGraph: { title: 'Esenyurt 7/24 Acil Çilingir', description: 'Güvenliğiniz Bizim İşimiz. 7/24 iletişim için bizi arayın.', locale: 'tr_TR', type: 'website' }, robots: { index: true, follow: true } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="tr"><body>{children}</body></html>; }
