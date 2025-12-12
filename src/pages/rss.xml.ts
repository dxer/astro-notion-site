import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getPosts } from '../lib/notion';
import { getCurrentLanguage, getTranslations } from '../lib/i18n';

export const GET: APIRoute = async (context) => {
  const currentLang = getCurrentLanguage();
  const t = getTranslations(currentLang);
  
  let posts: any[] = [];
  try {
    posts = await getPosts();
  } catch (error) {
    console.error('Failed to fetch posts for RSS:', error);
    // Return empty RSS in case of error
    posts = [];
  }

  const siteTitle = import.meta.env.SITE_TITLE || t.defaultTitle;
  const siteDescription = import.meta.env.SITE_DESCRIPTION || t.defaultDescription;
  const siteUrl = context.site?.toString() || 'https://your-domain.com';

  return rss({
    title: siteTitle,
    description: siteDescription,
    site: siteUrl,
    items: posts.map((post) => ({
      title: post.title,
      pubDate: new Date(post.publishDate),
      description: post.description,
      link: `/posts/${post.slug}/`,
      categories: post.tags,
    })),
    customData: `<language>${currentLang}</language>`,
    stylesheet: '/rss-styles.xsl',
  });
};