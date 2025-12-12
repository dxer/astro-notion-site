import { g as getPosts } from '../../chunks/notion_CsJiZn4u.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async () => {
  try {
    const posts = await getPosts();
    const searchData = posts.map((post) => ({
      title: post.title,
      slug: post.slug,
      description: post.description,
      tags: post.tags,
      publishDate: post.publishDate
    }));
    return new Response(JSON.stringify(searchData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=300"
        // Cache for 5 minutes
      }
    });
  } catch (error) {
    console.error("Search API error:", error);
    return new Response(JSON.stringify([]), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
