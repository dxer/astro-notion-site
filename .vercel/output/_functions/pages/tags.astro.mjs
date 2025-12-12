/* empty css                                 */
import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_gh1gy_4Q.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Navigation } from '../chunks/Navigation_BHzImkrD.mjs';
import 'clsx';
import { g as getTranslations, a as getCurrentLanguage } from '../chunks/i18n_DwAUkLwR.mjs';
import { $ as $$Footer } from '../chunks/Footer_x_YCGIcO.mjs';
import { g as getPosts } from '../chunks/notion_Bb8Pucwf.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://your-domain.com");
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { post, index } = Astro2.props;
  const currentLang = getCurrentLanguage();
  const t = getTranslations(currentLang);
  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  return renderTemplate`${maybeRenderHead()}<article class="group relative fade-in h-full"${addAttribute(`animation-delay: ${index * 100}ms`, "style")}> <a${addAttribute(`/posts/${post.slug}`, "href")} class="block h-full"> <div class="relative bg-card border border-border rounded-xl p-6 overflow-hidden transition-all duration-300 hover:border-foreground/20 hover:shadow-xl hover:shadow-foreground/5 hover:-translate-y-1 h-full flex flex-col"> <!-- Vercel-style background gradient --> <div class="absolute inset-0 bg-gradient-to-br from-transparent via-foreground/[0.02] to-foreground/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> <!-- Subtle dot pattern --> <div class="absolute inset-0 opacity-[0.015] group-hover:opacity-[0.03] transition-opacity duration-300" style="background-image: radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0); background-size: 24px 24px;"></div> <div class="relative flex flex-col h-full"> <!-- Header with enhanced category and date --> <div class="space-y-3 mb-4"> <!-- Vercel-style category badge --> <div class="flex items-center gap-3"> <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary border border-border text-xs font-medium text-foreground/80"> <div class="w-1.5 h-1.5 rounded-full bg-foreground/60"></div> ${post.tags[0] || "General"} </span> <span class="text-xs text-foreground/50 font-normal"> ${formatDate(post.publishDate)} </span> </div> <!-- Vercel-style title --> <h3 class="text-lg font-semibold group-hover:text-foreground transition-colors duration-300 leading-tight tracking-tight text-foreground/90 line-clamp-2"> ${post.title} </h3> </div> <!-- Vercel-style excerpt --> <p class="text-foreground/60 text-sm leading-relaxed line-clamp-3 flex-grow mb-4"> ${post.description} </p> <!-- Vercel-style footer --> <div class="flex items-center justify-between pt-3 mt-auto border-t border-border/50"> <!-- Reading time estimate --> <div class="flex items-center gap-1.5 text-xs text-foreground/50"> <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <circle cx="12" cy="12" r="10"></circle> <polyline points="12,6 12,12 16,14"></polyline> </svg> <span>5 min read</span> </div> <!-- Read more with Vercel-style animation --> <div class="flex items-center gap-1.5 text-sm text-foreground/70 font-medium group-hover:text-foreground group-hover:gap-2 transition-all duration-300"> <span>${t.readMore}</span> <svg class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <line x1="5" y1="12" x2="19" y2="12"></line> <polyline points="12,5 19,12 12,19"></polyline> </svg> </div> </div> </div> </div> </a> </article>`;
}, "D:/workspace/ai-code/astro-notion-site/src/components/PostCard.astro", void 0);

const $$Astro = createAstro("https://your-domain.com");
const $$Tags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tags;
  const currentLang = getCurrentLanguage();
  const t = getTranslations(currentLang);
  let posts = [];
  try {
    posts = await getPosts();
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }
  const tagCounts = /* @__PURE__ */ new Map();
  const tagPosts = /* @__PURE__ */ new Map();
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      if (!tagPosts.has(tag)) {
        tagPosts.set(tag, []);
      }
      tagPosts.get(tag).push(post);
    });
  });
  const sortedTags = Array.from(tagCounts.entries()).sort(([, a], [, b]) => b - a).map(([tag]) => tag);
  const url = new URL(Astro2.request.url);
  const selectedTag = url.searchParams.get("tag");
  const filteredPosts = selectedTag ? tagPosts.get(selectedTag) || [] : posts;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": selectedTag ? `${t.tag}: ${selectedTag}` : t.allTags, "description": selectedTag ? `${t.postsTaggedWith} ${selectedTag}` : t.browseAllTags }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-background"> ${renderComponent($$result2, "Navigation", $$Navigation, {})} <!-- Tags Header --> <section class="max-w-7xl mx-auto px-6 py-16 md:py-24"> <div class="space-y-8"> <!-- Page Title --> <div class="space-y-4"> <h1 class="text-4xl md:text-5xl font-bold"> ${selectedTag ? `${t.tag}: ${selectedTag}` : t.allTags} </h1> <p class="text-foreground/60 text-lg"> ${selectedTag ? `${filteredPosts.length} ${t.postsFound}` : `${t.browseTagsDescription} ${posts.length} ${t.totalPosts}`} </p> </div> <!-- Back to all tags if viewing specific tag --> ${selectedTag && renderTemplate`<div> <a href="/tags" class="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <line x1="19" y1="12" x2="5" y2="12"></line> <polyline points="12,19 5,12 12,5"></polyline> </svg> ${t.backToAllTags} </a> </div>`} <!-- Enhanced Tags Cloud --> ${!selectedTag && renderTemplate`<div class="space-y-6"> <h2 class="text-2xl font-semibold">${t.browseByTag}</h2> <div class="relative"> <!-- Tag cloud with size-based visualization --> <div class="flex flex-wrap gap-3 items-center justify-center p-8 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-2xl border border-border/50"> ${sortedTags.map((tag, index) => {
    const count = tagCounts.get(tag) || 0;
    const maxCount = Math.max(...Array.from(tagCounts.values()));
    const minCount = Math.min(...Array.from(tagCounts.values()));
    const normalizedSize = maxCount === minCount ? 1 : (count - minCount) / (maxCount - minCount);
    const fontSize = 0.75 + normalizedSize * 0.75;
    const opacity = 0.6 + normalizedSize * 0.4;
    return renderTemplate`<a${addAttribute(`/tags?tag=${encodeURIComponent(tag)}`, "href")} class="group inline-flex items-center gap-2 px-3 py-2 bg-background/80 hover:bg-background border border-border/50 hover:border-foreground/30 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"${addAttribute(`font-size: ${fontSize}rem; opacity: ${opacity};`, "style")}> <span class="font-medium text-foreground/80 group-hover:text-foreground transition-colors"> ${tag} </span> <span class="text-xs text-foreground/50 bg-secondary px-1.5 py-0.5 rounded-full min-w-[1.25rem] text-center"> ${count} </span> </a>`;
  })} </div> <!-- Decorative elements --> <div class="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-br from-vercel-blue to-vercel-cyan rounded-full opacity-20"></div> <div class="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-vercel-pink to-vercel-purple rounded-full opacity-15"></div> </div> <!-- Alternative list view for smaller screens --> <div class="md:hidden space-y-3"> <h3 class="text-lg font-medium text-foreground/80">${t.allTags}</h3> <div class="grid grid-cols-2 gap-2"> ${sortedTags.map((tag) => renderTemplate`<a${addAttribute(`/tags?tag=${encodeURIComponent(tag)}`, "href")} class="group flex items-center justify-between p-3 bg-secondary hover:bg-foreground/5 border border-border hover:border-foreground/20 rounded-lg transition-all duration-200"> <span class="font-medium text-foreground/80 group-hover:text-foreground text-sm"> ${tag} </span> <span class="text-xs text-foreground/50 bg-background px-2 py-1 rounded-full"> ${tagCounts.get(tag)} </span> </a>`)} </div> </div> </div>`} </div> </section> <!-- Posts Section --> <section class="max-w-7xl mx-auto px-6 pb-16 md:pb-24"> <div class="space-y-8"> ${selectedTag && renderTemplate`<div class="flex items-center justify-between"> <h2 class="text-2xl font-semibold"> ${t.postsTaggedWith} "${selectedTag}"
</h2> <span class="text-sm text-foreground/60"> ${filteredPosts.length} ${t.postsFound} </span> </div>`} ${filteredPosts.length > 0 ? renderTemplate`<div class="grid gap-6 md:gap-8 lg:grid-cols-2 xl:grid-cols-3"> ${filteredPosts.map((post, index) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post, "index": index })}`)} </div>` : renderTemplate`<div class="text-center py-16"> <div class="space-y-4"> <svg class="w-16 h-16 mx-auto text-foreground/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path> </svg> <h3 class="text-xl font-semibold text-foreground/60">${t.noPostsFound}</h3> <p class="text-foreground/50">${t.noPostsFoundDescription}</p> <a href="/tags" class="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-foreground text-background rounded-md hover:bg-foreground/90 transition-colors"> ${t.browseAllTags} </a> </div> </div>`} </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} </main> ` })}`;
}, "D:/workspace/ai-code/astro-notion-site/src/pages/tags.astro", void 0);
const $$file = "D:/workspace/ai-code/astro-notion-site/src/pages/tags.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tags,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
