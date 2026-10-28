import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPost } from '@/data/blog';
import { siteUrl } from '@/data/business';

export function generateStaticParams() { return blogPosts.map(({ slug }) => ({ slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const post = getBlogPost(params.slug); return post ? { title: post.title, description: post.description, alternates: { canonical: siteUrl ? `/blog/${post.slug}` : undefined }, openGraph: { type: 'article', title: post.title, description: post.description, publishedTime: post.date } } : {}; }

export default function BlogPostPage({ params }: { params: { slug: string } }) { const post = getBlogPost(params.slug); if (!post) notFound(); const url = siteUrl ? `${siteUrl}/blog/${post.slug}` : undefined; const jsonLd = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title, description: post.description, datePublished: post.date, dateModified: post.date, mainEntityOfPage: url, author: { '@type': 'Organization', name: 'Esenyurt Acil Çilingir' }, publisher: { '@type': 'Organization', name: 'Esenyurt Acil Çilingir' } }; return <main className="legal-page"><div className="container legal-inner"><Link className="legal-back" href="/blog">← Çilingir rehberine dön</Link><span className="eyebrow">Çilingir rehberi</span><h1>{post.title}</h1><p>{post.description}</p>{post.content.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}<p><a href="tel:+905455337334">Sorunuz varsa bizi arayın: +90 545 533 73 34</a></p><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></div></main>; }
