import { g as getPosts } from '../chunks/notion_Bb8Pucwf.mjs';
export { renderers } from '../renderers.mjs';

const GET = async (context) => {
  const siteUrl = context.site?.toString() || "https://your-domain.com";
  let posts = [];
  try {
    posts = await getPosts();
  } catch (error) {
    console.error("Failed to fetch posts for sitemap:", error);
    posts = [];
  }
  const staticPages = [
    { url: "", priority: "1.0", changefreq: "weekly" },
    { url: "/tags", priority: "0.8", changefreq: "weekly" }
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map((page) => `
  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${(/* @__PURE__ */ new Date()).toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join("")}
  ${posts.map((post) => `
  <url>
    <loc>${siteUrl}/posts/${post.slug}</loc>
    <lastmod>${new Date(post.publishDate).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`).join("")}
</urlset>`;
  return new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600"
      // Cache for 1 hour
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
