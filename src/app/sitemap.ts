import type { MetadataRoute } from 'next';
import { siteUrl } from '@/data/business';
export default function sitemap(): MetadataRoute.Sitemap { return siteUrl ? [{ url: siteUrl, lastModified: new Date() }] : []; }
