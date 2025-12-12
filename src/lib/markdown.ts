export interface Heading {
  level: number;
  text: string;
  id: string;
}

export function extractHeadingsFromBlocks(blocks: any[]): Heading[] {
  const headings: Heading[] = [];
  
  blocks.forEach(block => {
    if (block.type === 'heading_1' && block.heading_1?.rich_text) {
      const text = block.heading_1.rich_text.map((t: any) => t.plain_text).join('');
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
      headings.push({ level: 1, text, id });
    } else if (block.type === 'heading_2' && block.heading_2?.rich_text) {
      const text = block.heading_2.rich_text.map((t: any) => t.plain_text).join('');
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
      headings.push({ level: 2, text, id });
    } else if (block.type === 'heading_3' && block.heading_3?.rich_text) {
      const text = block.heading_3.rich_text.map((t: any) => t.plain_text).join('');
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
      headings.push({ level: 3, text, id });
    }
  });
  
  return headings;
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