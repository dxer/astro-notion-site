import { Client } from '@notionhq/client';

class SimpleCache {
  cache = /* @__PURE__ */ new Map();
  set(key, data, ttlMinutes = 5) {
    const ttl = ttlMinutes * 60 * 1e3;
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    });
  }
  get(key) {
    const item = this.cache.get(key);
    if (!item) {
      return null;
    }
    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null;
    }
    return item.data;
  }
  delete(key) {
    this.cache.delete(key);
  }
  clear() {
    this.cache.clear();
  }
  // Clean up expired items
  cleanup() {
    const now = Date.now();
    for (const [key, item] of this.cache.entries()) {
      if (now - item.timestamp > item.ttl) {
        this.cache.delete(key);
      }
    }
  }
}
const cache = new SimpleCache();
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    cache.cleanup();
  }, 10 * 60 * 1e3);
}
async function withCache(key, fn, ttlMinutes = 5) {
  const cached = cache.get(key);
  if (cached !== null) {
    return cached;
  }
  const result = await fn();
  cache.set(key, result, ttlMinutes);
  return result;
}

const NOTION_TOKEN = "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";
const NOTION_DATABASE_ID = "2c5dd8a04eb480da9c78f016b329f284";
const notion = new Client({
  auth: NOTION_TOKEN
});
async function getPosts() {
  return withCache("posts", async () => {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: "status",
        select: {
          equals: "published"
        }
      },
      sorts: [
        {
          property: "publish_date",
          direction: "descending"
        }
      ]
    });
    return response.results.map((page) => {
      const properties = page.properties;
      return {
        id: page.id,
        title: properties.title?.title?.[0]?.plain_text || "",
        slug: properties.slug?.rich_text?.[0]?.plain_text || "",
        status: properties.status?.select?.name || "draft",
        description: properties.description?.rich_text?.[0]?.plain_text || "",
        tags: properties.tags?.multi_select?.map((tag) => tag.name) || [],
        publishDate: properties.publish_date?.date?.start || "",
        cover: page.cover?.file?.url || page.cover?.external?.url || properties.cover?.files?.[0]?.file?.url || properties.cover?.files?.[0]?.external?.url || ""
      };
    });
  }, 10);
}
async function getPostBySlug(slug) {
  const response = await notion.databases.query({
    database_id: NOTION_DATABASE_ID,
    filter: {
      and: [
        {
          property: "slug",
          rich_text: {
            equals: slug
          }
        },
        {
          property: "status",
          select: {
            equals: "published"
          }
        }
      ]
    }
  });
  if (response.results.length === 0) {
    return null;
  }
  const page = response.results[0];
  const properties = page.properties;
  const blocks = await notion.blocks.children.list({
    block_id: page.id
  });
  return {
    id: page.id,
    title: properties.title?.title?.[0]?.plain_text || "",
    slug: properties.slug?.rich_text?.[0]?.plain_text || "",
    status: properties.status?.select?.name || "draft",
    description: properties.description?.rich_text?.[0]?.plain_text || "",
    tags: properties.tags?.multi_select?.map((tag) => tag.name) || [],
    publishDate: properties.publish_date?.date?.start || "",
    cover: page.cover?.file?.url || page.cover?.external?.url || properties.cover?.files?.[0]?.file?.url || properties.cover?.files?.[0]?.external?.url || "",
    blocks: blocks.results
  };
}
function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

export { getPostBySlug as a, formatDate as f, getPosts as g };
