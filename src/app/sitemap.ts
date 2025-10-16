import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-posts.tsx';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.viandmo.com';

  // Statické stránky
  const staticRoutes = [
    '/',
    '/about',
    '/contact',
    '/blog',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '/' ? 1.0 : 0.8,
  }));

  // Dynamické stránky z blogu
  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
