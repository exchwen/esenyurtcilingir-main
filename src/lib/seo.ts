import { business, siteUrl } from '@/data/business';

export const metadataBase = siteUrl ? new URL(siteUrl) : undefined;

const services = ['Konut çilingiri', 'Oto çilingir', 'İşyeri çilingiri', 'Kilit sistemleri', 'Anahtar çoğaltma'];

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Locksmith',
  '@id': siteUrl ? `${siteUrl}/#business` : undefined,
  name: business.name,
  description: 'Esenyurt ve çevresinde 7/24 acil çilingir, konut, oto, işyeri ve kilit hizmetleri.',
  telephone: business.phoneDisplay,
  email: business.email,
  url: siteUrl,
  image: siteUrl ? `${siteUrl}/images/hero-door-lock.png` : undefined,
  priceRange: '$$',
  areaServed: [{ '@type': 'City', name: 'Esenyurt' }, { '@type': 'City', name: 'İstanbul' }],
  address: { '@type': 'PostalAddress', streetAddress: 'Su Yolu Caddesi No: 40', addressLocality: 'Esenyurt', addressRegion: 'İstanbul', addressCountry: 'TR' },
  sameAs: [business.mapsUrl],
  hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Çilingir hizmetleri', itemListElement: services.map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })) },
};

export const websiteJsonLd = { '@context': 'https://schema.org', '@type': 'WebSite', name: business.name, url: siteUrl, inLanguage: 'tr-TR', publisher: { '@id': siteUrl ? `${siteUrl}/#business` : undefined } };

export const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    ['Gece hizmet veriyor musunuz?', 'Acil çilingir ihtiyacınız için 7/24 telefon ve WhatsApp üzerinden iletişime geçebilirsiniz.'],
    ['Esenyurt’un hangi bölgelerine hizmet veriyorsunuz?', 'Esenyurt ve çevresindeki konut, işyeri ve araç kilidi ihtiyaçları için bilgi alabilirsiniz.'],
    ['Fiyatı nasıl öğrenebilirim?', 'Konumunuzu ve ihtiyacınızı paylaşarak hizmet kapsamı ve fiyat bilgisi için iletişime geçebilirsiniz.'],
  ].map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
};
