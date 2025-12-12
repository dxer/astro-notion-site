import { e as createAstro, f as createComponent, r as renderTemplate, u as unescapeHTML, h as addAttribute, m as maybeRenderHead, l as renderScript, k as renderComponent, p as renderSlot, q as renderHead } from './astro/server_gh1gy_4Q.mjs';
import 'piccolore';
import 'clsx';
import { g as getTranslations, a as getCurrentLanguage } from './i18n_DwAUkLwR.mjs';
/* empty css                         */

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro("https://your-domain.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title,
    description,
    image,
    article = false,
    publishedTime,
    modifiedTime,
    tags = [],
    author,
    canonical
  } = Astro2.props;
  const siteUrl = "https://your-domain.com";
  const siteTitle = "Byte Blog";
  const siteDescription = "A minimalist blog built with Astro and Notion";
  const defaultOgImage = "https://your-domain.com/og-image.jpg";
  const authorName = "dxer";
  const twitterSite = "@yourusername";
  const finalTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const finalDescription = description || siteDescription;
  const finalImage = image || defaultOgImage;
  const finalAuthor = author || authorName;
  const finalCanonical = canonical || Astro2.url.href;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><meta name="author"', '><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:site_name"', ">", "", "", "", '<!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><meta property="twitter:site"', '><meta property="twitter:creator"', '><!-- Additional SEO Meta Tags --><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta charset="UTF-8"><!-- Language --><meta http-equiv="content-language"', '><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- RSS Feed --><link rel="alternate" type="application/rss+xml"', ' href="/rss.xml"><!-- JSON-LD Structured Data --><script type="application/ld+json">', "</script>"])), finalTitle, addAttribute(finalTitle, "content"), addAttribute(finalDescription, "content"), addAttribute(finalAuthor, "content"), addAttribute(finalCanonical, "href"), addAttribute(article ? "article" : "website", "content"), addAttribute(finalCanonical, "content"), addAttribute(finalTitle, "content"), addAttribute(finalDescription, "content"), addAttribute(finalImage, "content"), addAttribute(siteTitle, "content"), article && publishedTime && renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>`, article && modifiedTime && renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>`, article && finalAuthor && renderTemplate`<meta property="article:author"${addAttribute(finalAuthor, "content")}>`, article && tags.length > 0 && tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`), addAttribute(finalCanonical, "content"), addAttribute(finalTitle, "content"), addAttribute(finalDescription, "content"), addAttribute(finalImage, "content"), addAttribute(twitterSite, "content"), addAttribute(twitterSite, "content"), addAttribute("zh", "content"), addAttribute(siteTitle, "title"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": article ? "BlogPosting" : "WebSite",
    "name": finalTitle,
    "description": finalDescription,
    "url": finalCanonical,
    "image": finalImage,
    ...article && {
      "headline": title,
      "datePublished": publishedTime,
      "dateModified": modifiedTime || publishedTime,
      "author": {
        "@type": "Person",
        "name": finalAuthor,
        "url": "https://your-website.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": siteTitle,
        "url": siteUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/favicon.svg`
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": finalCanonical
      },
      "keywords": tags.join(", "),
      "articleSection": tags[0] || "Technology",
      "inLanguage": "zh"
    },
    ...!article && {
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${siteUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      },
      "sameAs": [
        `https://twitter.com/${"@yourusername".replace("@", "")}`,
        `https://github.com/${"yourusername"}`,
        `https://linkedin.com/in/${"yourusername"}`
      ].filter(Boolean)
    }
  })));
}, "D:/workspace/ai-code/astro-notion-site/src/components/SEO.astro", void 0);

const $$GoogleAnalytics = createComponent(($$result, $$props, $$slots) => {
  const GA_ID = "";
  return renderTemplate`${GA_ID}`;
}, "D:/workspace/ai-code/astro-notion-site/src/components/GoogleAnalytics.astro", void 0);

const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const currentLang = getCurrentLanguage();
  const t = getTranslations(currentLang);
  return renderTemplate`<!-- Search Modal -->${maybeRenderHead()}<div id="search-modal" class="fixed inset-0 z-50 hidden"> <!-- Backdrop --> <div class="absolute inset-0 bg-background/80 backdrop-blur-sm" id="search-backdrop"></div> <!-- Modal Content --> <div class="relative flex items-start justify-center min-h-screen pt-16 px-4"> <div class="w-full max-w-2xl bg-card border border-border rounded-xl shadow-2xl"> <!-- Search Input --> <div class="p-4 border-b border-border"> <div class="relative"> <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <circle cx="11" cy="11" r="8"></circle> <path d="m21 21-4.35-4.35"></path> </svg> <input id="search-input" type="text"${addAttribute(t.searchPlaceholder, "placeholder")} class="w-full pl-10 pr-4 py-3 bg-transparent text-foreground placeholder:text-foreground/50 focus:outline-none text-lg" autocomplete="off"> <button id="search-close" class="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-secondary transition-colors"> <svg class="w-4 h-4 text-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <line x1="18" y1="6" x2="6" y2="18"></line> <line x1="6" y1="6" x2="18" y2="18"></line> </svg> </button> </div> </div> <!-- Search Results --> <div id="search-results" class="max-h-96 overflow-y-auto"> <div id="search-empty" class="p-8 text-center text-foreground/50"> <svg class="w-12 h-12 mx-auto mb-4 text-foreground/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <circle cx="11" cy="11" r="8"></circle> <path d="m21 21-4.35-4.35"></path> </svg> <p>${t.searchEmpty}</p> </div> <div id="search-loading" class="hidden p-8 text-center"> <div class="animate-spin w-6 h-6 border-2 border-foreground/20 border-t-foreground rounded-full mx-auto mb-4"></div> <p class="text-foreground/50">${t.searching}</p> </div> <div id="search-list" class="hidden"></div> </div> <!-- Search Footer --> <div class="p-4 border-t border-border text-xs text-foreground/50 flex items-center justify-between"> <span>${t.searchHint}</span> <div class="flex items-center gap-2"> <kbd class="px-2 py-1 bg-secondary rounded text-xs">ESC</kbd> <span>${t.toClose}</span> </div> </div> </div> </div> </div> ${renderScript($$result, "D:/workspace/ai-code/astro-notion-site/src/components/Search.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/workspace/ai-code/astro-notion-site/src/components/Search.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://your-domain.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description,
    image,
    article = false,
    publishedTime,
    modifiedTime,
    tags = [],
    author,
    canonical
  } = Astro2.props;
  const currentLang = getCurrentLanguage();
  return renderTemplate(_a || (_a = __template(["<html", " data-astro-cid-sckkx6r4> <head>", '<meta name="generator"', `><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"><!-- Theme script to prevent flash --><script>
      (function() {
        const savedTheme = localStorage.getItem('theme');
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const theme = savedTheme || systemTheme;
        
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        }
      })();
    <\/script>`, '</head> <body class="font-sans antialiased" data-astro-cid-sckkx6r4> ', " <!-- Search Modal --> ", " <!-- Google Analytics --> ", "  </body> </html>"])), addAttribute(currentLang, "lang"), renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "image": image, "article": article, "publishedTime": publishedTime, "modifiedTime": modifiedTime, "tags": tags, "author": author, "canonical": canonical, "data-astro-cid-sckkx6r4": true }), addAttribute(Astro2.generator, "content"), renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Search", $$Search, { "data-astro-cid-sckkx6r4": true }), renderComponent($$result, "GoogleAnalytics", $$GoogleAnalytics, { "data-astro-cid-sckkx6r4": true }));
}, "D:/workspace/ai-code/astro-notion-site/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://your-domain.com");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Navigation;
  const { pathname } = Astro2.url;
  const currentLang = getCurrentLanguage();
  const t = getTranslations(currentLang);
  const siteTitle = "Byte Blog";
  return renderTemplate`${maybeRenderHead()}<nav class="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"> <div class="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between"> <!-- Vercel-style Logo --> <a href="/" class="group flex items-center gap-3 text-lg font-semibold text-foreground hover:opacity-80 transition-opacity duration-200"> <div class="relative"> <div class="w-7 h-7 bg-foreground rounded-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-200"> <svg class="w-4 h-4 text-background" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"></path> </svg> </div> <div class="absolute -inset-1 bg-gradient-to-r from-vercel-blue to-vercel-cyan rounded-sm opacity-0 group-hover:opacity-20 transition-opacity duration-200 blur-sm"></div> </div> <span class="hidden sm:block font-medium">${siteTitle}</span> </a> <!-- Vercel-style Navigation --> <div class="flex items-center gap-4"> <!-- Desktop Navigation --> <div class="hidden md:flex items-center gap-6"> <a href="/" class="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors duration-200 relative group"> ${t.home} <div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground group-hover:w-full transition-all duration-200"></div> </a> <a href="/#posts" class="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors duration-200 relative group"> ${t.posts} <div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground group-hover:w-full transition-all duration-200"></div> </a> <a href="/tags" class="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors duration-200 relative group"> ${t.tags} <div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground group-hover:w-full transition-all duration-200"></div> </a> <a href="/about" class="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors duration-200 relative group"> ${t.about} <div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground group-hover:w-full transition-all duration-200"></div> </a> </div> <!-- Action Buttons --> <div class="flex items-center gap-2"> <!-- Search Button --> <button id="search-toggle" class="p-2 rounded-md hover:bg-secondary transition-colors duration-200 group" aria-label="Search"> <svg class="w-4 h-4 text-foreground/60 group-hover:text-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <circle cx="11" cy="11" r="8"></circle> <path d="m21 21-4.35-4.35"></path> </svg> </button> <!-- Vercel-style Theme Toggle --> <button id="theme-toggle" class="p-2 rounded-md hover:bg-secondary transition-colors duration-200 group" aria-label="Toggle theme"> <svg id="sun-icon" class="w-4 h-4 hidden text-foreground/60 group-hover:text-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <circle cx="12" cy="12" r="5"></circle> <line x1="12" y1="1" x2="12" y2="3"></line> <line x1="12" y1="21" x2="12" y2="23"></line> <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line> <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line> <line x1="1" y1="12" x2="3" y2="12"></line> <line x1="21" y1="12" x2="23" y2="12"></line> <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line> <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line> </svg> <svg id="moon-icon" class="w-4 h-4 text-foreground/60 group-hover:text-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path> </svg> </button> <!-- Mobile Menu Button --> <button id="mobile-menu-toggle" class="md:hidden p-2 rounded-md hover:bg-secondary transition-colors duration-200 group" aria-label="Toggle mobile menu"> <svg id="hamburger-icon" class="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <line x1="3" y1="6" x2="21" y2="6"></line> <line x1="3" y1="12" x2="21" y2="12"></line> <line x1="3" y1="18" x2="21" y2="18"></line> </svg> <svg id="close-icon" class="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <line x1="18" y1="6" x2="6" y2="18"></line> <line x1="6" y1="6" x2="18" y2="18"></line> </svg> </button> </div> </div> </div> <!-- Mobile Menu --> <div id="mobile-menu" class="md:hidden hidden bg-background/95 backdrop-blur-xl border-b border-border"> <div class="max-w-6xl mx-auto px-6 py-4 space-y-3"> <a href="/" class="block py-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors duration-200"> ${t.home} </a> <a href="/#posts" class="block py-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors duration-200"> ${t.posts} </a> <a href="/tags" class="block py-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors duration-200"> ${t.tags} </a> <a href="/about" class="block py-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors duration-200"> ${t.about} </a> </div> </div> </nav> ${renderScript($$result, "D:/workspace/ai-code/astro-notion-site/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/workspace/ai-code/astro-notion-site/src/components/Navigation.astro", void 0);

export { $$Layout as $, $$Navigation as a };
