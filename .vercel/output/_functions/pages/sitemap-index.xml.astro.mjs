export { renderers } from '../renderers.mjs';

const GET = async (context) => {
  const siteUrl = context.site?.toString() || "https://your-domain.com";
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteUrl}/sitemap.xml</loc>
    <lastmod>${(/* @__PURE__ */ new Date()).toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;
  return new Response(sitemapIndex, {
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
