import { Client } from '@notionhq/client';
import { withCache } from './cache';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  status: string;
  description: string;
  tags: string[];
  publishDate: string;
  cover?: string;
  blocks?: any[];
}

// Get environment variables with fallback for build time
const NOTION_TOKEN = import.meta.env.NOTION_TOKEN || process.env.NOTION_TOKEN;
const NOTION_DATABASE_ID = import.meta.env.NOTION_DATABASE_ID || process.env.NOTION_DATABASE_ID;

// Validate required environment variables
if (!NOTION_TOKEN) {
  console.error('ERROR: NOTION_TOKEN is not set. Please set this environment variable.');
  throw new Error('NOTION_TOKEN is not set. Please set this environment variable.');
}

if (!NOTION_DATABASE_ID) {
  console.error('ERROR: NOTION_DATABASE_ID is not set. Please set this environment variable.');
  throw new Error('NOTION_DATABASE_ID is not set. Please set this environment variable.');
}

// Debug environment variables (remove in production)
console.log('Environment check:', {
  hasToken: !!NOTION_TOKEN,
  tokenPrefix: NOTION_TOKEN ? NOTION_TOKEN.substring(0, 10) + '...' : 'null',
  hasDatabaseId: !!NOTION_DATABASE_ID,
  databaseIdPrefix: NOTION_DATABASE_ID ? NOTION_DATABASE_ID.substring(0, 8) + '...' : 'null'
});

const notion = new Client({
  auth: NOTION_TOKEN,
});

export async function getPosts(): Promise<BlogPost[]> {
  if (!NOTION_DATABASE_ID) {
    throw new Error('NOTION_DATABASE_ID is not set');
  }

  return withCache('posts', async () => {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: 'status',
        select: {
          equals: 'published',
        },
      },
      sorts: [
        {
          property: 'publish_date',
          direction: 'descending',
        },
      ],
    });

    return response.results.map((page: any) => {
      const properties = page.properties;
      
      return {
        id: page.id,
        title: properties.title?.title?.[0]?.plain_text || '',
        slug: properties.slug?.rich_text?.[0]?.plain_text || '',
        status: properties.status?.select?.name || 'draft',
        description: properties.description?.rich_text?.[0]?.plain_text || '',
        tags: properties.tags?.multi_select?.map((tag: any) => tag.name) || [],
        publishDate: properties.publish_date?.date?.start || '',
        cover: page.cover?.file?.url || page.cover?.external?.url || properties.cover?.files?.[0]?.file?.url || properties.cover?.files?.[0]?.external?.url || '',
      };
    });
  }, 10); // Cache for 10 minutes
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!NOTION_DATABASE_ID) {
    throw new Error('NOTION_DATABASE_ID is not set');
  }

  const response = await notion.databases.query({
    database_id: NOTION_DATABASE_ID,
    filter: {
      and: [
        {
          property: 'slug',
          rich_text: {
            equals: slug,
          },
        },
        {
          property: 'status',
          select: {
            equals: 'published',
          },
        },
      ],
    },
  });

  if (response.results.length === 0) {
    return null;
  }

  const page = response.results[0] as any;
  const properties = page.properties;

  // Get page blocks (raw Notion content)
  const blocks = await notion.blocks.children.list({
    block_id: page.id,
  });

  return {
    id: page.id,
    title: properties.title?.title?.[0]?.plain_text || '',
    slug: properties.slug?.rich_text?.[0]?.plain_text || '',
    status: properties.status?.select?.name || 'draft',
    description: properties.description?.rich_text?.[0]?.plain_text || '',
    tags: properties.tags?.multi_select?.map((tag: any) => tag.name) || [],
    publishDate: properties.publish_date?.date?.start || '',
    cover: page.cover?.file?.url || page.cover?.external?.url || properties.cover?.files?.[0]?.file?.url || properties.cover?.files?.[0]?.external?.url || '',
    blocks: blocks.results,
  };
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function calculateReadingTime(blocks: any[]): number {
  const wordsPerMinute = 200;
  let wordCount = 0;
  
  blocks.forEach(block => {
    if (block.type === 'paragraph' && block.paragraph?.rich_text) {
      block.paragraph.rich_text.forEach((text: any) => {
        wordCount += text.plain_text.split(/\s+/).length;
      });
    } else if (block.type === 'heading_1' && block.heading_1?.rich_text) {
      block.heading_1.rich_text.forEach((text: any) => {
        wordCount += text.plain_text.split(/\s+/).length;
      });
    } else if (block.type === 'heading_2' && block.heading_2?.rich_text) {
      block.heading_2.rich_text.forEach((text: any) => {
        wordCount += text.plain_text.split(/\s+/).length;
      });
    } else if (block.type === 'heading_3' && block.heading_3?.rich_text) {
      block.heading_3.rich_text.forEach((text: any) => {
        wordCount += text.plain_text.split(/\s+/).length;
      });
    }
  });
  
  return Math.ceil(wordCount / wordsPerMinute);
}