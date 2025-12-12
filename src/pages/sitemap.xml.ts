import type { APIRoute } from 'astro';
import { getPosts } from '../lib/notion';

export const GET: APIRoute = async (context) => {
  const siteUrl = context.site?.toString() || 'https://your-domain.com';
  
  let posts: any[] = [];
  try {
    posts = await getPosts();
  } catch (error) {
    console.error('Failed to fetch posts for sitemap:', error);
    posts = [];
  }

  // Static pages
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/tags', priority: '0.8', changefreq: 'weekly' },
  ];

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
  ${posts.map(post => `
  <url>
    <loc>${siteUrl}/posts/${post.slug}</loc>
    <lastmod>${new Date(post.publishDate).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
    }
  });
};