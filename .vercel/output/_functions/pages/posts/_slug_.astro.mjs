/* empty css                                    */
import { e as createAstro, f as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate, h as addAttribute, l as renderScript, k as renderComponent, n as Fragment } from '../../chunks/astro/server_gh1gy_4Q.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Navigation } from '../../chunks/Navigation_BHzImkrD.mjs';
import 'clsx';
import { g as getTranslations, a as getCurrentLanguage } from '../../chunks/i18n_DwAUkLwR.mjs';
/* empty css                                     */
import { $ as $$Button } from '../../chunks/Button_CJgCXiy3.mjs';
import { a as getPostBySlug, f as formatDate } from '../../chunks/notion_CsJiZn4u.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$3 = createAstro("https://your-domain.com");
const $$NotionBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$NotionBlock;
  const { block } = Astro2.props;
  function renderRichText(richText) {
    if (!richText) return "";
    return richText.map((text) => {
      let content = text.plain_text;
      if (text.annotations.bold) {
        content = `<strong>${content}</strong>`;
      }
      if (text.annotations.italic) {
        content = `<em>${content}</em>`;
      }
      if (text.annotations.code) {
        content = `<code class="bg-secondary px-1.5 py-0.5 rounded text-sm">${content}</code>`;
      }
      if (text.annotations.strikethrough) {
        content = `<del>${content}</del>`;
      }
      if (text.annotations.underline) {
        content = `<u>${content}</u>`;
      }
      if (text.href) {
        content = `<a href="${text.href}" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">${content}</a>`;
      }
      return content;
    }).join("");
  }
  return renderTemplate`${block.type === "paragraph" && renderTemplate`${maybeRenderHead()}<p class="text-foreground/80 leading-relaxed my-4">${unescapeHTML(renderRichText(block.paragraph.rich_text))}</p>`}${block.type === "heading_1" && renderTemplate`<h1${addAttribute(block.heading_1.rich_text?.map((t) => t.plain_text).join("").toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]/g, ""), "id")} class="text-3xl font-bold mt-8 mb-4 scroll-mt-20 text-foreground">${unescapeHTML(renderRichText(block.heading_1.rich_text))}</h1>`}${block.type === "heading_2" && renderTemplate`<h2${addAttribute(block.heading_2.rich_text?.map((t) => t.plain_text).join("").toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]/g, ""), "id")} class="text-2xl font-semibold mt-8 mb-4 scroll-mt-20 text-foreground">${unescapeHTML(renderRichText(block.heading_2.rich_text))}</h2>`}${block.type === "heading_3" && renderTemplate`<h3${addAttribute(block.heading_3.rich_text?.map((t) => t.plain_text).join("").toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]/g, ""), "id")} class="text-xl font-semibold mt-6 mb-3 scroll-mt-20 text-foreground">${unescapeHTML(renderRichText(block.heading_3.rich_text))}</h3>`}${block.type === "bulleted_list_item" && renderTemplate`<li class="ml-6 my-2 text-foreground/80">${unescapeHTML(renderRichText(block.bulleted_list_item.rich_text))}</li>`}${block.type === "numbered_list_item" && renderTemplate`<li class="ml-6 my-2 text-foreground/80">${unescapeHTML(renderRichText(block.numbered_list_item.rich_text))}</li>`}${block.type === "quote" && renderTemplate`<blockquote class="border-l-4 border-primary/30 pl-4 italic my-4 text-foreground/70">${unescapeHTML(renderRichText(block.quote.rich_text))}</blockquote>`}${block.type === "code" && renderTemplate`<pre class="bg-secondary border border-border rounded-lg p-4 overflow-x-auto my-6">
    <code class="text-sm text-foreground">${block.code.rich_text[0]?.plain_text || ""}</code>
  </pre>`}${block.type === "divider" && renderTemplate`<hr class="border-border my-8">`}${block.type === "image" && renderTemplate`<div class="my-6"><img${addAttribute(block.image.file?.url || block.image.external?.url, "src")}${addAttribute(block.image.caption?.[0]?.plain_text || "", "alt")} class="rounded-lg max-w-full h-auto">${block.image.caption && block.image.caption.length > 0 && renderTemplate`<p class="text-sm text-foreground/60 text-center mt-2">${unescapeHTML(renderRichText(block.image.caption))}</p>`}</div>`}${block.type === "callout" && renderTemplate`<div class="bg-primary/10 border border-primary/20 rounded-lg p-4 my-6"><div class="flex items-start gap-3">${block.callout.icon && renderTemplate`<span class="text-lg">${block.callout.icon.emoji}</span>`}<div class="flex-1">${unescapeHTML(renderRichText(block.callout.rich_text))}</div></div></div>`}${block.type === "toggle" && renderTemplate`<details class="my-4"><summary class="cursor-pointer font-medium text-foreground hover:text-primary">${unescapeHTML(renderRichText(block.toggle.rich_text))}</summary><div class="mt-2 ml-4"><!-- Toggle content would need recursive rendering --></div></details>`}${block.type === "to_do" && renderTemplate`<div class="flex items-start gap-2 my-2"><input type="checkbox"${addAttribute(block.to_do.checked, "checked")} disabled class="mt-1"><span${addAttribute(`text-foreground/80 ${block.to_do.checked ? "line-through opacity-60" : ""}`, "class")}>${unescapeHTML(renderRichText(block.to_do.rich_text))}</span></div>`}${block.type === "table" && renderTemplate`<div class="my-6 overflow-x-auto"><table class="min-w-full border border-border rounded-lg"><tbody>${block.table.table_rows?.map((row, index) => renderTemplate`<tr${addAttribute(index === 0 ? "bg-secondary" : "hover:bg-secondary/50", "class")}>${row.cells?.map((cell, cellIndex) => index === 0 ? renderTemplate`<th class="border border-border px-4 py-2 text-left font-semibold">${unescapeHTML(renderRichText(cell))}</th>` : renderTemplate`<td class="border border-border px-4 py-2">${unescapeHTML(renderRichText(cell))}</td>`)}</tr>`)}</tbody></table></div>`}${block.type === "embed" && renderTemplate`<div class="my-6"><iframe${addAttribute(block.embed.url, "src")} class="w-full h-64 rounded-lg border border-border" frameborder="0" allowfullscreen></iframe></div>`}${block.type === "video" && renderTemplate`<div class="my-6"><video${addAttribute(block.video.file?.url || block.video.external?.url, "src")} controls class="w-full rounded-lg">
您的浏览器不支持视频播放。
</video></div>`}${block.type === "file" && renderTemplate`<div class="my-4"><a${addAttribute(block.file.file?.url || block.file.external?.url, "href")} class="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors" target="_blank" rel="noopener noreferrer"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>${block.file.caption?.[0]?.plain_text || "\u4E0B\u8F7D\u6587\u4EF6"}</a></div>`}<!-- Fallback for unsupported block types -->${!["paragraph", "heading_1", "heading_2", "heading_3", "bulleted_list_item", "numbered_list_item", "quote", "code", "divider", "image", "callout", "toggle", "to_do", "table", "embed", "video", "file"].includes(block.type) && renderTemplate`<div class="my-4 p-3 bg-muted rounded border-l-4 border-muted-foreground"><p class="text-sm text-muted-foreground">
不支持的块类型: ${block.type}</p></div>`}`;
}, "D:/workspace/ai-code/astro-notion-site/src/components/NotionBlock.astro", void 0);

const $$Astro$2 = createAstro("https://your-domain.com");
const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { headings } = Astro2.props;
  const currentLang = getCurrentLanguage();
  const t = getTranslations(currentLang);
  return renderTemplate`${headings.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="hidden lg:block fixed left-4 top-1/2 -translate-y-1/2 z-40"><!-- TOC Trigger Button --><button id="desktop-toc-trigger" class="group flex items-center justify-center w-10 h-10 bg-background/80 backdrop-blur-sm border border-border rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-background" aria-label="Toggle table of contents"><svg class="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg></button><!-- TOC Panel --><nav id="desktop-toc-panel" class="absolute left-14 top-1/2 -translate-y-1/2 w-72 bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-2xl opacity-0 invisible transform -translate-x-4 transition-all duration-300 ease-out"><div class="p-6"><!-- Header --><div class="flex items-center justify-between mb-6"><div class="flex items-center gap-3"><div class="w-2 h-2 rounded-full bg-primary"></div><h3 class="font-semibold text-foreground text-base">${t.tableOfContents}</h3></div><button id="desktop-toc-close" class="p-1.5 rounded-lg hover:bg-secondary/80 transition-colors group" aria-label="Close table of contents"><svg class="w-4 h-4 text-foreground/60 group-hover:text-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><!-- TOC Content --><div class="max-h-[60vh] overflow-y-auto toc-scrollbar pr-2"><ul class="space-y-1">${headings.map((heading, index) => renderTemplate`<li${addAttribute(`toc-item opacity-0 transform translate-x-2 transition-all duration-300 ease-out ${heading.level === 2 ? "ml-4" : heading.level === 3 ? "ml-8" : ""}`, "class")}${addAttribute(`animation-delay: ${index * 50}ms`, "style")}><a${addAttribute(`#${heading.id}`, "href")} class="group flex items-start gap-3 text-foreground/70 hover:text-foreground transition-all duration-200 toc-link py-2.5 px-3 rounded-lg hover:bg-secondary/50 relative"${addAttribute(heading.id, "data-heading-id")}><!-- Level indicator --><div${addAttribute(`flex-shrink-0 mt-2 transition-all duration-200 ${heading.level === 1 ? "w-1.5 h-1.5 bg-primary rounded-full" : heading.level === 2 ? "w-1 h-1 bg-primary/70 rounded-full" : "w-0.5 h-0.5 bg-primary/50 rounded-full"}`, "class")}></div><!-- Text --><span${addAttribute(`leading-relaxed transition-all duration-200 ${heading.level === 1 ? "font-semibold text-sm" : heading.level === 2 ? "font-medium text-sm" : "text-xs"}`, "class")}>${heading.text}</span><!-- Active indicator --><div class="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 bg-primary rounded-full transition-all duration-200 toc-active-indicator"></div></a></li>`)}</ul></div><!-- Progress indicator --><div class="mt-4 pt-4 border-t border-border/50"><div class="flex items-center gap-2 text-xs text-foreground/50"><div class="w-1.5 h-1.5 bg-primary/30 rounded-full"></div><span id="reading-progress">0% 已阅读</span></div><div class="mt-2 w-full h-1 bg-secondary rounded-full overflow-hidden"><div id="progress-bar" class="h-full bg-primary transition-all duration-300 ease-out" style="width: 0%"></div></div></div></div></nav></div><div class="lg:hidden"><!-- Backdrop --><div id="mobile-toc-backdrop" class="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 opacity-0 invisible transition-all duration-300"></div><!-- Floating Trigger --><button id="mobile-toc-trigger" class="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95" aria-label="Toggle table of contents"><svg id="mobile-toc-icon" class="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg></button><!-- Mobile TOC Panel --><div id="mobile-toc-panel" class="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border rounded-t-2xl shadow-2xl transform translate-y-full transition-all duration-500 ease-out"><!-- Handle --><div class="flex justify-center pt-3 pb-2"><div class="w-12 h-1 bg-border rounded-full"></div></div><div class="px-6 pb-6"><!-- Header --><div class="flex items-center justify-between py-4 border-b border-border/50"><div class="flex items-center gap-3"><div class="w-2 h-2 rounded-full bg-primary"></div><h3 class="font-semibold text-foreground">${t.tableOfContents}</h3></div><button id="mobile-toc-close" class="p-2 rounded-lg hover:bg-secondary/80 transition-colors" aria-label="Close table of contents"><svg class="w-5 h-5 text-foreground/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button></div><!-- TOC Content --><div class="max-h-[50vh] overflow-y-auto toc-scrollbar py-4"><ul class="space-y-2">${headings.map((heading, index) => renderTemplate`<li${addAttribute(`mobile-toc-item opacity-0 transform translate-y-4 transition-all duration-300 ease-out ${heading.level === 2 ? "ml-4" : heading.level === 3 ? "ml-8" : ""}`, "class")}${addAttribute(`animation-delay: ${index * 30}ms`, "style")}><a${addAttribute(`#${heading.id}`, "href")} class="group flex items-center gap-3 text-foreground/70 hover:text-foreground transition-all duration-200 toc-link mobile-toc-link py-3 px-4 rounded-xl hover:bg-secondary/50 relative"${addAttribute(heading.id, "data-heading-id")}><!-- Level indicator --><div${addAttribute(`flex-shrink-0 transition-all duration-200 ${heading.level === 1 ? "w-2 h-2 bg-primary rounded-full" : heading.level === 2 ? "w-1.5 h-1.5 bg-primary/70 rounded-full" : "w-1 h-1 bg-primary/50 rounded-full"}`, "class")}></div><!-- Text --><span${addAttribute(`leading-relaxed transition-all duration-200 ${heading.level === 1 ? "font-semibold" : heading.level === 2 ? "font-medium" : "text-sm"}`, "class")}>${heading.text}</span><!-- Arrow --><svg class="w-4 h-4 ml-auto text-foreground/30 group-hover:text-foreground/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></li>`)}</ul></div></div></div></div>` })}`}${renderScript($$result, "D:/workspace/ai-code/astro-notion-site/src/components/TableOfContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/workspace/ai-code/astro-notion-site/src/components/TableOfContents.astro", void 0);

const $$ReadingProgress = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="reading-progress" class="fixed top-0 left-0 w-full h-1 bg-border z-50"> <div id="progress-bar" class="h-full bg-gradient-to-r from-vercel-blue to-vercel-cyan transition-all duration-150 ease-out" style="width: 0%"></div> </div> ${renderScript($$result, "D:/workspace/ai-code/astro-notion-site/src/components/ReadingProgress.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/workspace/ai-code/astro-notion-site/src/components/ReadingProgress.astro", void 0);

const $$BackToTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="back-to-top" class="fixed bottom-6 right-6 p-3 bg-foreground text-background rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 invisible translate-y-4 z-40" aria-label="Back to top" data-astro-cid-wlspcwf4> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-wlspcwf4> <line x1="12" y1="19" x2="12" y2="5" data-astro-cid-wlspcwf4></line> <polyline points="5,12 12,5 19,12" data-astro-cid-wlspcwf4></polyline> </svg> </button> ${renderScript($$result, "D:/workspace/ai-code/astro-notion-site/src/components/BackToTop.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/workspace/ai-code/astro-notion-site/src/components/BackToTop.astro", void 0);

const $$Astro$1 = createAstro("https://your-domain.com");
const $$ShareButtons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ShareButtons;
  const { title, url, description = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center gap-3 p-4 bg-secondary rounded-lg border border-border"> <span class="text-sm font-medium text-foreground/80">Share:</span> <div class="flex items-center gap-2"> <!-- Twitter --> <button class="share-button p-2 rounded-md hover:bg-foreground/10 transition-colors" data-platform="twitter"${addAttribute(url, "data-url")}${addAttribute(`${title} ${description}`, "data-text")} aria-label="Share on Twitter"> <svg class="w-4 h-4 text-foreground/60" fill="currentColor" viewBox="0 0 24 24"> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path> </svg> </button> <!-- LinkedIn --> <button class="share-button p-2 rounded-md hover:bg-foreground/10 transition-colors" data-platform="linkedin"${addAttribute(url, "data-url")}${addAttribute(title, "data-title")}${addAttribute(description, "data-summary")} aria-label="Share on LinkedIn"> <svg class="w-4 h-4 text-foreground/60" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </button> <!-- Copy Link --> <button id="copy-link" class="p-2 rounded-md hover:bg-foreground/10 transition-colors"${addAttribute(url, "data-url")} aria-label="Copy link"> <svg class="w-4 h-4 text-foreground/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path> </svg> </button> </div> </div> ${renderScript($$result, "D:/workspace/ai-code/astro-notion-site/src/components/ShareButtons.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/workspace/ai-code/astro-notion-site/src/components/ShareButtons.astro", void 0);

function extractHeadingsFromBlocks(blocks) {
  const headings = [];
  blocks.forEach((block) => {
    if (block.type === "heading_1" && block.heading_1?.rich_text) {
      const text = block.heading_1.rich_text.map((t) => t.plain_text).join("");
      const id = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]/g, "");
      headings.push({ level: 1, text, id });
    } else if (block.type === "heading_2" && block.heading_2?.rich_text) {
      const text = block.heading_2.rich_text.map((t) => t.plain_text).join("");
      const id = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]/g, "");
      headings.push({ level: 2, text, id });
    } else if (block.type === "heading_3" && block.heading_3?.rich_text) {
      const text = block.heading_3.rich_text.map((t) => t.plain_text).join("");
      const id = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]/g, "");
      headings.push({ level: 3, text, id });
    }
  });
  return headings;
}
function calculateReadingTime(blocks) {
  const wordsPerMinute = 200;
  let wordCount = 0;
  blocks.forEach((block) => {
    if (block.type === "paragraph" && block.paragraph?.rich_text) {
      block.paragraph.rich_text.forEach((text) => {
        wordCount += text.plain_text.split(/\s+/).length;
      });
    } else if (block.type === "heading_1" && block.heading_1?.rich_text) {
      block.heading_1.rich_text.forEach((text) => {
        wordCount += text.plain_text.split(/\s+/).length;
      });
    } else if (block.type === "heading_2" && block.heading_2?.rich_text) {
      block.heading_2.rich_text.forEach((text) => {
        wordCount += text.plain_text.split(/\s+/).length;
      });
    } else if (block.type === "heading_3" && block.heading_3?.rich_text) {
      block.heading_3.rich_text.forEach((text) => {
        wordCount += text.plain_text.split(/\s+/).length;
      });
    }
  });
  return Math.ceil(wordCount / wordsPerMinute);
}

const $$Astro = createAstro("https://your-domain.com");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let post = null;
  try {
    post = await getPostBySlug(slug);
  } catch (error) {
    console.error("Failed to fetch post:", error);
  }
  if (!post) {
    return Astro2.redirect("/404");
  }
  const readingTime = post.blocks ? calculateReadingTime(post.blocks) : 5;
  const headings = post.blocks ? extractHeadingsFromBlocks(post.blocks) : [];
  const currentLang = getCurrentLanguage();
  const t = getTranslations(currentLang);
  const authorName = "dxer";
  const siteUrl = "https://your-domain.com";
  const postUrl = `${siteUrl}/posts/${post.slug}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.title, "description": post.description, "article": true, "publishedTime": post.publishDate, "tags": post.tags, "author": authorName }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-background"> ${renderComponent($$result2, "ReadingProgress", $$ReadingProgress, {})} ${renderComponent($$result2, "Navigation", $$Navigation, {})} <!-- Clean Article Layout --> <article class="max-w-4xl mx-auto px-6 py-12 md:py-16"> <div class="max-w-3xl mx-auto"> <!-- Post Header --> <header class="mb-12"> <h1 class="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight"> ${post.title} </h1> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-foreground/60 pb-6 border-b border-border"> <div class="flex items-center gap-4"> <span>${authorName}</span> <span>·</span> <span>${readingTime} ${t.minutes} ${t.readingTime}</span> </div> <span>${t.publishedOn} ${formatDate(post.publishDate)}</span> </div> </header> <!-- Post Body --> <div class="prose prose-lg max-w-none space-y-6"> ${post.blocks && post.blocks.map((block) => renderTemplate`${renderComponent($$result2, "NotionBlock", $$NotionBlock, { "block": block })}`)} </div> <!-- Share Buttons --> <div class="mt-12"> ${renderComponent($$result2, "ShareButtons", $$ShareButtons, { "title": post.title, "url": postUrl, "description": post.description })} </div> <!-- Footer --> <footer class="mt-16 pt-8 border-t border-border"> <div class="flex items-center justify-between"> <div class="text-sm text-foreground/60"> <p>${t.thanksForReading}</p> </div> ${renderComponent($$result2, "Button", $$Button, { "asChild": true, "variant": "outline" }, { "default": async ($$result3) => renderTemplate` <a href="/">${t.backToHome}</a> ` })} </div> </footer> </div> </article> <!-- Table of Contents --> ${renderComponent($$result2, "TableOfContents", $$TableOfContents, { "headings": headings })} ${renderComponent($$result2, "BackToTop", $$BackToTop, {})} </main> ` })}`;
}, "D:/workspace/ai-code/astro-notion-site/src/pages/posts/[slug].astro", void 0);
const $$file = "D:/workspace/ai-code/astro-notion-site/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
