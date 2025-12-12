import rss from '@astrojs/rss';
import { g as getPosts } from '../chunks/notion_CsJiZn4u.mjs';
import { a as getCurrentLanguage } from '../chunks/i18n_DwAUkLwR.mjs';
export { renderers } from '../renderers.mjs';

const GET = async (context) => {
  const currentLang = getCurrentLanguage();
  let posts = [];
  try {
    posts = await getPosts();
  } catch (error) {
    console.error("Failed to fetch posts for RSS:", error);
    posts = [];
  }
  const siteTitle = "Byte Blog";
  const siteDescription = "A minimalist blog built with Astro and Notion";
  const siteUrl = context.site?.toString() || "https://your-domain.com";
  return rss({
    title: siteTitle,
    description: siteDescription,
    site: siteUrl,
    items: posts.map((post) => ({
      title: post.title,
      pubDate: new Date(post.publishDate),
      description: post.description,
      link: `/posts/${post.slug}/`,
      categories: post.tags
    })),
    customData: `<language>${currentLang}</language>`,
    stylesheet: "/rss-styles.xsl"
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
