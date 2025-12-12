export interface Translations {
  // Navigation
  home: string;
  about: string;
  posts: string;
  tags: string;
  
  // Hero Section
  welcomeBadge: string;
  heroTitle: string;
  heroDescription: string;
  startReading: string;
  learnMore: string;
  
  // Posts Section
  latestPosts: string;
  latestPostsDescription: string;
  readMore: string;
  loadMore: string;
  
  // Search
  searchPlaceholder: string;
  searchEmpty: string;
  searching: string;
  searchHint: string;
  toClose: string;
  
  // Tags
  allTags: string;
  tag: string;
  browseAllTags: string;
  browseByTag: string;
  browseTagsDescription: string;
  postsTaggedWith: string;
  postsFound: string;
  totalPosts: string;
  backToAllTags: string;
  noPostsFound: string;
  noPostsFoundDescription: string;
  
  // Footer
  footerAbout: string;
  footerResources: string;
  footerSocial: string;
  footerOther: string;
  aboutMe: string;
  contact: string;
  documentation: string;
  guides: string;
  twitter: string;
  github: string;
  rss: string;
  sourceCode: string;
  privacyPolicy: string;
  termsOfService: string;
  copyright: string;
  
  // Post Page
  readingTime: string;
  minutes: string;
  publishedOn: string;
  thanksForReading: string;
  backToHome: string;
  tableOfContents: string;
  
  // SEO
  defaultTitle: string;
  defaultDescription: string;
}

export const translations: Record<string, Translations> = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    posts: 'Posts',
    tags: 'Tags',
    
    // Hero Section
    welcomeBadge: 'Welcome to my blog',
    heroTitle: 'Thoughts on Frontend Development',
    heroDescription: 'In-depth technical articles, best practices, and hands-on experience. Focusing on React, Next.js, and cutting-edge ideas in modern web development.',
    startReading: 'Start Reading',
    learnMore: 'Learn More',
    
    // Posts Section
    latestPosts: 'Latest Posts',
    latestPostsDescription: 'Featured recently published technical articles',
    readMore: 'Read More',
    loadMore: 'Load More',
    
    // Search
    searchPlaceholder: 'Search articles...',
    searchEmpty: 'Start typing to search articles',
    searching: 'Searching...',
    searchHint: 'Type to search, press / to focus',
    toClose: 'to close',
    
    // Tags
    allTags: 'All Tags',
    tag: 'Tag',
    browseAllTags: 'Browse All Tags',
    browseByTag: 'Browse by Tag',
    browseTagsDescription: 'Explore articles by topic. Total of',
    postsTaggedWith: 'Posts tagged with',
    postsFound: 'posts found',
    totalPosts: 'articles',
    backToAllTags: 'Back to all tags',
    noPostsFound: 'No posts found',
    noPostsFoundDescription: 'Try browsing other tags or return to all posts.',
    
    // Footer
    footerAbout: 'About',
    footerResources: 'Resources',
    footerSocial: 'Social',
    footerOther: 'Other',
    aboutMe: 'About Me',
    contact: 'Contact',
    documentation: 'Documentation',
    guides: 'Guides',
    twitter: 'Twitter',
    github: 'GitHub',
    rss: 'RSS',
    sourceCode: 'Source Code',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    copyright: 'All rights reserved.',
    
    // Post Page
    readingTime: 'Reading time',
    minutes: 'minutes',
    publishedOn: 'Published on',
    thanksForReading: 'Thanks for reading! Feel free to comment below if you have any questions.',
    backToHome: '← Back to Home',
    tableOfContents: 'Table of Contents',
    
    // SEO
    defaultTitle: 'Minimalist Blog',
    defaultDescription: 'A minimalist blog built with Astro and Notion'
  },
  
  zh: {
    // Navigation
    home: '首页',
    about: '关于',
    posts: '文章',
    tags: '标签',
    
    // Hero Section
    welcomeBadge: '欢迎来到我的博客',
    heroTitle: '分享关于前端的思考',
    heroDescription: '深度技术文章、最佳实践和实战经验。关注 React、Next.js 和现代 Web 开发的前沿思想。',
    startReading: '开始阅读',
    learnMore: '了解更多',
    
    // Posts Section
    latestPosts: '最新文章',
    latestPostsDescription: '精选最近发布的技术文章',
    readMore: '阅读全文',
    loadMore: '加载更多',
    
    // Search
    searchPlaceholder: '搜索文章...',
    searchEmpty: '开始输入以搜索文章',
    searching: '搜索中...',
    searchHint: '输入搜索，按 / 键聚焦',
    toClose: '关闭',
    
    // Tags
    allTags: '所有标签',
    tag: '标签',
    browseAllTags: '浏览所有标签',
    browseByTag: '按标签浏览',
    browseTagsDescription: '按主题浏览文章。共有',
    postsTaggedWith: '标签为',
    postsFound: '篇文章',
    totalPosts: '篇文章',
    backToAllTags: '返回所有标签',
    noPostsFound: '未找到文章',
    noPostsFoundDescription: '尝试浏览其他标签或返回所有文章。',
    
    // Footer
    footerAbout: '关于',
    footerResources: '资源',
    footerSocial: '社交',
    footerOther: '其他',
    aboutMe: '关于我',
    contact: '联系方式',
    documentation: '文档',
    guides: '指南',
    twitter: 'Twitter',
    github: 'GitHub',
    rss: 'RSS',
    sourceCode: '源代码',
    privacyPolicy: '隐私政策',
    termsOfService: '使用条款',
    copyright: '保留所有权利。',
    
    // Post Page
    readingTime: '阅读时间',
    minutes: '分钟',
    publishedOn: '发布于',
    thanksForReading: '感谢阅读！如有疑问，欢迎在下方评论。',
    backToHome: '← 回到首页',
    tableOfContents: '目录',
    
    // SEO
    defaultTitle: '极简博客',
    defaultDescription: '基于 Astro 和 Notion 构建的极简博客'
  }
};

export function getTranslations(lang: string = 'en'): Translations {
  return translations[lang] || translations.en;
}

export function getCurrentLanguage(): string {
  return import.meta.env.SITE_LANGUAGE || 'en';
}