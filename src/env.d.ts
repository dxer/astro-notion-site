/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly NOTION_TOKEN: string;
  readonly NOTION_DATABASE_ID: string;
  readonly SITE_LANGUAGE: string;
  readonly SITE_URL: string;
  readonly SITE_TITLE: string;
  readonly SITE_DESCRIPTION: string;
  readonly HERO_BADGE_TEXT: string;
  readonly HERO_TITLE: string;
  readonly HERO_SUBTITLE: string;
  readonly HERO_DESCRIPTION: string;
  readonly HERO_PRIMARY_BUTTON_TEXT: string;
  readonly HERO_SECONDARY_BUTTON_TEXT: string;
  readonly HERO_SECONDARY_BUTTON_URL: string;
  readonly HERO_ANIMATION: string;
  readonly HERO_STYLE: string;
  readonly HERO_SHOW_STATS: string;
  readonly AUTHOR_NAME: string;
  readonly AUTHOR_EMAIL: string;
  readonly AUTHOR_BIO: string;
  readonly AUTHOR_LOCATION: string;
  readonly AUTHOR_WEBSITE: string;
  readonly SOCIAL_TWITTER: string;
  readonly SOCIAL_GITHUB: string;
  readonly SOCIAL_LINKEDIN: string;
  readonly SOCIAL_YOUTUBE: string;
  readonly SOCIAL_INSTAGRAM: string;
  readonly AUTHOR_AVATAR: string;
  readonly GOOGLE_ANALYTICS_ID: string;
  readonly DEFAULT_OG_IMAGE: string;
  readonly TWITTER_SITE: string;
  readonly POSTS_PER_PAGE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}