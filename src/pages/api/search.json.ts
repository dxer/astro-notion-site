import type { APIRoute } from 'astro';
import { getPosts } from '../../lib/notion';

export const GET: APIRoute = async () => {
  try {
    const posts = await getPosts();
    
    // Transform posts for search
    const searchData = posts.map(post => ({
      title: post.title,
      slug: post.slug,
      description: post.description,
      tags: post.tags,
      publishDate: post.publishDate
    }));
    
    return new Response(JSON.stringify(searchData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300' // Cache for 5 minutes
      }
    });
  } catch (error) {
    console.error('Search API error:', error);
    
    // Return mock data in development
    if (import.meta.env.DEV) {
      const mockData = [
        {
          title: 'React 18 新特性深度解析',
          slug: 'react-18-features',
          description: '探讨 React 18 中的并发特性、自动批处理和 Suspense 的最新进展...',
          tags: ['React'],
          publishDate: '2024-12-01'
        },
        {
          title: 'Next.js 15 App Router 最佳实践',
          slug: 'nextjs-app-router-best-practices',
          description: '分享在生产环境中使用 App Router 的经验和优化技巧...',
          tags: ['Next.js'],
          publishDate: '2024-11-28'
        },
        {
          title: 'Web 性能优化指南',
          slug: 'web-performance-optimization',
          description: '从核心 Web 指标到实际优化方案，全面提升网站性能...',
          tags: ['Performance'],
          publishDate: '2024-11-15'
        }
      ];
      
      return new Response(JSON.stringify(mockData), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    return new Response(JSON.stringify([]), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};