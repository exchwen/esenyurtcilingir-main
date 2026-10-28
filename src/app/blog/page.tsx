import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';

export const metadata: Metadata = { title: 'Çilingir Rehberi', description: 'Kilit, anahtar, kapı ve oto çilingir konularında pratik bilgiler.' };

export default function BlogPage() { return <main className="legal-page"><div className="container legal-inner"><Link className="legal-back" href="/">← Ana sayfaya dön</Link><span className="eyebrow">Çilingir rehberi</span><h1>Faydalı bilgiler</h1><p>Kilit ve anahtar sorunlarında doğru adımı atmanıza yardımcı olacak kısa rehberler.</p><div className="blog-list">{blogPosts.map((post) => <article className="blog-card" key={post.slug}><span>{new Date(post.date).toLocaleDateString('tr-TR')}</span><h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.description}</p><Link className="legal-back" href={`/blog/${post.slug}`}>Yazıyı oku →</Link></article>)}</div></div></main>; }
