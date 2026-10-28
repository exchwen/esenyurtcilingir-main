import type { MetadataRoute } from 'next';
import { siteUrl } from '@/data/business';
import { blogPosts } from '@/data/blog';
export default function sitemap(): MetadataRoute.Sitemap { if (!siteUrl) return []; const lastModified = new Date(); return [{ url: siteUrl, lastModified, priority: 1 }, { url: `${siteUrl}/blog`, lastModified, priority: .8 }, { url: `${siteUrl}/gizlilik`, lastModified, priority: .2 }, { url: `${siteUrl}/kvkk`, lastModified, priority: .2 }, ...blogPosts.map((post) => ({ url: `${siteUrl}/blog/${post.slug}`, lastModified: new Date(post.date), priority: .7 }))]; }
