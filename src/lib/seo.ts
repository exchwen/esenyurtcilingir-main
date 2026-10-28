import { business, siteUrl } from '@/data/business';
export const metadataBase = siteUrl ? new URL(siteUrl) : undefined;
export const localBusinessJsonLd = { '@context': 'https://schema.org', '@type': 'Locksmith', name: business.name, telephone: business.phoneDisplay, email: business.email, address: { '@type': 'PostalAddress', streetAddress: 'Su Yolu Caddesi No: 40', addressLocality: 'Esenyurt', addressRegion: 'İstanbul', addressCountry: 'TR' }, url: siteUrl, sameAs: [business.mapsUrl] };
