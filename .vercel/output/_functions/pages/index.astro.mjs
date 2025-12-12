/* empty css                                 */
import { f as createComponent, m as maybeRenderHead, h as addAttribute, k as renderComponent, l as renderScript, r as renderTemplate, o as defineScriptVars } from '../chunks/astro/server_gh1gy_4Q.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Navigation } from '../chunks/Navigation_BHzImkrD.mjs';
import { $ as $$Button } from '../chunks/Button_CJgCXiy3.mjs';
/* empty css                                 */
import { $ as $$Footer } from '../chunks/Footer_x_YCGIcO.mjs';
import { g as getPosts } from '../chunks/notion_CsJiZn4u.mjs';
import { g as getTranslations, a as getCurrentLanguage } from '../chunks/i18n_DwAUkLwR.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const heroBadgeText = "Welcome to my blog";
  const heroTitle = "Thoughts on Frontend Development";
  const heroSubtitle = "Development";
  const heroDescription = "In-depth technical articles, best practices, and hands-on experience. Focusing on React, Next.js, and cutting-edge ideas in modern web development.";
  const primaryButtonText = "Start Reading";
  const secondaryButtonText = "Learn More";
  const secondaryButtonUrl = "/about";
  const showStats = false;
  const authorName = "dxer";
  const authorAvatar = "https://github.com/yourusername.png";
  const titleParts = heroTitle.split(" ");
  const mainTitle = titleParts.slice(0, -1).join(" ");
  const gradientTitle = heroSubtitle;
  return renderTemplate`<!-- Enhanced Hero Section -->${maybeRenderHead()}<section class="relative max-w-5xl mx-auto px-6 py-16 md:py-20 lg:py-24" data-astro-cid-bbe6dxrz> <!-- Dynamic Background Effects --> <div class="absolute inset-0 -z-10 overflow-hidden" data-astro-cid-bbe6dxrz> <!-- Animated gradient orbs --> <div class="absolute top-0 left-1/3 w-72 h-72 bg-gradient-to-br from-vercel-blue/15 to-vercel-cyan/15 rounded-full blur-3xl animate-pulse" data-astro-cid-bbe6dxrz></div> <div class="absolute bottom-0 right-1/3 w-64 h-64 bg-gradient-to-br from-vercel-pink/15 to-vercel-purple/15 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;" data-astro-cid-bbe6dxrz></div> <!-- Floating particles --> <div class="absolute inset-0 opacity-30" data-astro-cid-bbe6dxrz> <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-vercel-blue/40 rounded-full animate-bounce" style="animation-delay: 0.5s;" data-astro-cid-bbe6dxrz></div> <div class="absolute top-3/4 right-1/4 w-1 h-1 bg-vercel-cyan/40 rounded-full animate-bounce" style="animation-delay: 1.5s;" data-astro-cid-bbe6dxrz></div> <div class="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-vercel-purple/40 rounded-full animate-bounce" style="animation-delay: 2s;" data-astro-cid-bbe6dxrz></div> </div> </div> <div${addAttribute(`text-center space-y-8 ${"fade-in"}`, "class")} data-astro-cid-bbe6dxrz> <!-- Author Introduction (if avatar provided) --> ${renderTemplate`<div class="flex flex-col items-center gap-4 mb-6" data-astro-cid-bbe6dxrz> <div class="relative" data-astro-cid-bbe6dxrz> <img${addAttribute(authorAvatar, "src")}${addAttribute(authorName, "alt")} class="w-16 h-16 rounded-full border-2 border-border shadow-lg" data-astro-cid-bbe6dxrz> <div class="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-background rounded-full" data-astro-cid-bbe6dxrz></div> </div> <p class="text-sm text-foreground/60" data-astro-cid-bbe6dxrz> ${`你好，我是 ${authorName}` } </p> </div>`} <!-- Status Badge with enhanced styling --> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border text-sm font-medium text-foreground/80 hover:bg-secondary transition-colors" data-astro-cid-bbe6dxrz> <div class="w-2 h-2 rounded-full bg-gradient-to-r from-vercel-blue to-vercel-cyan animate-pulse" data-astro-cid-bbe6dxrz></div> ${heroBadgeText} <svg class="w-3 h-3 text-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-bbe6dxrz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-bbe6dxrz></path> </svg> </div> <!-- Main Heading with enhanced styling --> <div class="space-y-6" data-astro-cid-bbe6dxrz> <h1${addAttribute(`font-bold tracking-tight leading-tight ${"text-3xl sm:text-4xl md:text-5xl lg:text-6xl"}`, "class")} data-astro-cid-bbe6dxrz> ${mainTitle && renderTemplate`<span class="block text-foreground mb-2" data-astro-cid-bbe6dxrz> ${mainTitle} </span>`} <span${addAttribute(`block ${"bg-gradient-to-r from-vercel-blue via-vercel-cyan to-vercel-purple bg-clip-text text-transparent"}`, "class")} data-astro-cid-bbe6dxrz> ${gradientTitle} </span> </h1> <p class="text-base md:text-lg lg:text-xl text-foreground/60 max-w-3xl mx-auto leading-relaxed" data-astro-cid-bbe6dxrz> ${heroDescription} </p> </div> <!-- Enhanced CTA Buttons --> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Button", $$Button, { "asChild": true, "size": "lg", "class": "group bg-foreground text-background hover:bg-foreground/90 rounded-lg px-8 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300", "href": "#posts", "data-astro-cid-bbe6dxrz": true }, { "default": ($$result2) => renderTemplate` <span class="flex items-center gap-2" data-astro-cid-bbe6dxrz> ${primaryButtonText} <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-bbe6dxrz> <line x1="5" y1="12" x2="19" y2="12" data-astro-cid-bbe6dxrz></line> <polyline points="12,5 19,12 12,19" data-astro-cid-bbe6dxrz></polyline> </svg> </span> ` })} ${renderComponent($$result, "Button", $$Button, { "asChild": true, "variant": "outline", "size": "lg", "class": "border-border hover:bg-secondary rounded-lg px-8 py-3 font-medium hover:border-foreground/30 transition-all duration-300", "href": secondaryButtonUrl, "data-astro-cid-bbe6dxrz": true }, { "default": ($$result2) => renderTemplate`${secondaryButtonText}` })} </div> <!-- Stats Section (optional) --> ${showStats} <!-- Scroll Indicator --> <div class="pt-8" data-astro-cid-bbe6dxrz> <div class="flex flex-col items-center gap-2 text-foreground/40 hover:text-foreground/60 transition-colors cursor-pointer" onclick="document.getElementById('posts')?.scrollIntoView({behavior: 'smooth'})" data-astro-cid-bbe6dxrz> <span class="text-xs font-medium" data-astro-cid-bbe6dxrz>${"向下滚动" }</span> <svg class="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-bbe6dxrz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" data-astro-cid-bbe6dxrz></path> </svg> </div> </div> </div> </section>  ${renderScript($$result, "D:/workspace/ai-code/astro-notion-site/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/workspace/ai-code/astro-notion-site/src/components/Hero.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const currentLang = getCurrentLanguage();
  const t = getTranslations(currentLang);
  let allPosts = [];
  let posts = [];
  const POSTS_PER_PAGE = 10;
  try {
    allPosts = await getPosts();
    posts = allPosts.slice(0, POSTS_PER_PAGE);
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }
  const hasMorePosts = allPosts.length > POSTS_PER_PAGE;
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", `
  let currentPage = 1;
  let isLoading = false;

  document.addEventListener('DOMContentLoaded', () => {
    const loadMoreBtn = document.getElementById('load-more-btn');
    const postsContainer = document.querySelector('.columns-1');
    
    if (!loadMoreBtn || !postsContainer) return;

    loadMoreBtn.addEventListener('click', async () => {
      if (isLoading) return;
      
      isLoading = true;
      loadMoreBtn.textContent = currentLang === 'zh' ? '加载中...' : 'Loading...';
      loadMoreBtn.disabled = true;

      try {
        // 计算下一页的文章
        const startIndex = currentPage * POSTS_PER_PAGE;
        const endIndex = startIndex + POSTS_PER_PAGE;
        const nextPosts = allPosts.slice(startIndex, endIndex);

        if (nextPosts.length === 0) {
          loadMoreBtn.style.display = 'none';
          return;
        }

        // 创建新的文章卡片
        nextPosts.forEach((post, index) => {
          const globalIndex = startIndex + index;
          const isLarge = globalIndex % 3 === 0;
          
          const article = document.createElement('article');
          article.className = 'break-inside-avoid mb-6 group masonry-item';
          article.style.animationDelay = \`\${index * 150}ms\`;
          
          const aspectClass = isLarge ? 'aspect-[4/3]' : 
                            globalIndex % 4 === 1 ? 'aspect-square' :
                            globalIndex % 4 === 2 ? 'aspect-video' :
                            'aspect-[3/2]';

          const coverImage = post.cover && post.cover.trim() !== '' ? 
                           post.cover : 
                           'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&auto=format';

          const publishDate = new Date(post.publishDate).toLocaleDateString(
            currentLang === 'zh' ? 'zh-CN' : 'en-US'
          );

          article.innerHTML = \`
            <a href="/posts/\${post.slug}" class="block">
              <div class="bg-card border border-border rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/20">
                <div class="relative overflow-hidden rounded-t-2xl \${aspectClass}">
                  <img 
                    src="\${coverImage}" 
                    alt="\${post.title}"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none"></div>
                </div>
                
                <div class="p-6 space-y-4">
                  <div class="flex items-center gap-3 text-sm">
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium bg-primary/10 text-primary">
                      <div class="w-1.5 h-1.5 rounded-full bg-current"></div>
                      \${post.tags[0] || 'Article'}
                    </span>
                    <span class="text-foreground/50">\${publishDate}</span>
                  </div>
                  
                  <h3 class="font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight \${isLarge ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}">
                    \${post.title}
                  </h3>
                  
                  <p class="text-foreground/70 leading-relaxed \${isLarge ? 'text-base line-clamp-4' : 'text-sm line-clamp-3'}">
                    \${post.description}
                  </p>
                  
                  <div class="flex items-center justify-between pt-3 border-t border-border/50">
                    <div class="flex items-center gap-2 text-xs text-foreground/50">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12,6 12,12 16,14"></polyline>
                      </svg>
                      <span>5 min read</span>
                    </div>
                    
                    <div class="flex items-center gap-1 text-primary/70 group-hover:text-primary group-hover:gap-2 transition-all duration-300">
                      <span class="text-sm font-medium">\${t.readMore}</span>
                      <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12,5 19,12 12,19"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          \`;
          
          postsContainer.appendChild(article);
        });

        currentPage++;
        
        // 检查是否还有更多文章
        if (currentPage * POSTS_PER_PAGE >= allPosts.length) {
          loadMoreBtn.style.display = 'none';
        }

      } catch (error) {
        console.error('Failed to load more posts:', error);
      } finally {
        isLoading = false;
        loadMoreBtn.textContent = t.loadMore;
        loadMoreBtn.disabled = false;
      }
    });
  });
})();</script>`], ["", " <script>(function(){", `
  let currentPage = 1;
  let isLoading = false;

  document.addEventListener('DOMContentLoaded', () => {
    const loadMoreBtn = document.getElementById('load-more-btn');
    const postsContainer = document.querySelector('.columns-1');
    
    if (!loadMoreBtn || !postsContainer) return;

    loadMoreBtn.addEventListener('click', async () => {
      if (isLoading) return;
      
      isLoading = true;
      loadMoreBtn.textContent = currentLang === 'zh' ? '加载中...' : 'Loading...';
      loadMoreBtn.disabled = true;

      try {
        // 计算下一页的文章
        const startIndex = currentPage * POSTS_PER_PAGE;
        const endIndex = startIndex + POSTS_PER_PAGE;
        const nextPosts = allPosts.slice(startIndex, endIndex);

        if (nextPosts.length === 0) {
          loadMoreBtn.style.display = 'none';
          return;
        }

        // 创建新的文章卡片
        nextPosts.forEach((post, index) => {
          const globalIndex = startIndex + index;
          const isLarge = globalIndex % 3 === 0;
          
          const article = document.createElement('article');
          article.className = 'break-inside-avoid mb-6 group masonry-item';
          article.style.animationDelay = \\\`\\\${index * 150}ms\\\`;
          
          const aspectClass = isLarge ? 'aspect-[4/3]' : 
                            globalIndex % 4 === 1 ? 'aspect-square' :
                            globalIndex % 4 === 2 ? 'aspect-video' :
                            'aspect-[3/2]';

          const coverImage = post.cover && post.cover.trim() !== '' ? 
                           post.cover : 
                           'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&auto=format';

          const publishDate = new Date(post.publishDate).toLocaleDateString(
            currentLang === 'zh' ? 'zh-CN' : 'en-US'
          );

          article.innerHTML = \\\`
            <a href="/posts/\\\${post.slug}" class="block">
              <div class="bg-card border border-border rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/20">
                <div class="relative overflow-hidden rounded-t-2xl \\\${aspectClass}">
                  <img 
                    src="\\\${coverImage}" 
                    alt="\\\${post.title}"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none"></div>
                </div>
                
                <div class="p-6 space-y-4">
                  <div class="flex items-center gap-3 text-sm">
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium bg-primary/10 text-primary">
                      <div class="w-1.5 h-1.5 rounded-full bg-current"></div>
                      \\\${post.tags[0] || 'Article'}
                    </span>
                    <span class="text-foreground/50">\\\${publishDate}</span>
                  </div>
                  
                  <h3 class="font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight \\\${isLarge ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}">
                    \\\${post.title}
                  </h3>
                  
                  <p class="text-foreground/70 leading-relaxed \\\${isLarge ? 'text-base line-clamp-4' : 'text-sm line-clamp-3'}">
                    \\\${post.description}
                  </p>
                  
                  <div class="flex items-center justify-between pt-3 border-t border-border/50">
                    <div class="flex items-center gap-2 text-xs text-foreground/50">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12,6 12,12 16,14"></polyline>
                      </svg>
                      <span>5 min read</span>
                    </div>
                    
                    <div class="flex items-center gap-1 text-primary/70 group-hover:text-primary group-hover:gap-2 transition-all duration-300">
                      <span class="text-sm font-medium">\\\${t.readMore}</span>
                      <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12,5 19,12 12,19"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          \\\`;
          
          postsContainer.appendChild(article);
        });

        currentPage++;
        
        // 检查是否还有更多文章
        if (currentPage * POSTS_PER_PAGE >= allPosts.length) {
          loadMoreBtn.style.display = 'none';
        }

      } catch (error) {
        console.error('Failed to load more posts:', error);
      } finally {
        isLoading = false;
        loadMoreBtn.textContent = t.loadMore;
        loadMoreBtn.disabled = false;
      }
    });
  });
})();</script>`])), renderComponent($$result, "Layout", $$Layout, { "title": t.defaultTitle, "description": t.defaultDescription }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-background"> ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} <!-- Posts Section --> <section id="posts" class="max-w-7xl mx-auto px-6 py-12 md:py-16"> <div class="space-y-10"> <div class="space-y-3"> <h2 class="text-2xl md:text-3xl font-bold">${t.latestPosts}</h2> <p class="text-foreground/60">${t.latestPostsDescription}</p> </div> <!-- Masonry/Waterfall Layout --> <div class="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"> ${posts.map((post, index) => {
    const isLarge = index % 3 === 0;
    return renderTemplate`<article class="break-inside-avoid mb-6 group masonry-item"${addAttribute(`animation-delay: ${index * 150}ms`, "style")}> <a${addAttribute(`/posts/${post.slug}`, "href")} class="block"> <div class="bg-card border border-border rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/20"> <!-- Image/Visual Area - Cover Image or Default --> <div${addAttribute(`relative overflow-hidden rounded-t-2xl ${isLarge ? "aspect-[4/3]" : index % 4 === 1 ? "aspect-square" : index % 4 === 2 ? "aspect-video" : "aspect-[3/2]"}`, "class")}> <img${addAttribute(post.cover && post.cover.trim() !== "" ? post.cover : "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&auto=format", "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover" loading="lazy"> <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none"></div> </div> <!-- Content Area --> <div class="p-6 space-y-4"> <!-- Meta Info --> <div class="flex items-center gap-3 text-sm"> <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium bg-primary/10 text-primary"> <div class="w-1.5 h-1.5 rounded-full bg-current"></div> ${post.tags[0] || "Article"} </span> <span class="text-foreground/50"> ${new Date(post.publishDate).toLocaleDateString("zh-CN" )} </span> </div> <!-- Title --> <h3${addAttribute(`font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight ${isLarge ? "text-xl md:text-2xl" : "text-lg md:text-xl"}`, "class")}> ${post.title} </h3> <!-- Description --> <p${addAttribute(`text-foreground/70 leading-relaxed ${isLarge ? "text-base line-clamp-4" : "text-sm line-clamp-3"}`, "class")}> ${post.description} </p> <!-- Footer --> <div class="flex items-center justify-between pt-3 border-t border-border/50"> <div class="flex items-center gap-2 text-xs text-foreground/50"> <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <circle cx="12" cy="12" r="10"></circle> <polyline points="12,6 12,12 16,14"></polyline> </svg> <span>5 min read</span> </div> <div class="flex items-center gap-1 text-primary/70 group-hover:text-primary group-hover:gap-2 transition-all duration-300"> <span class="text-sm font-medium">${t.readMore}</span> <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <line x1="5" y1="12" x2="19" y2="12"></line> <polyline points="12,5 19,12 12,19"></polyline> </svg> </div> </div> </div> </div> </a> </article>`;
  })} </div> <!-- Load More Button --> ${hasMorePosts && renderTemplate`<div class="flex justify-center mt-12"> <button id="load-more-btn" class="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium"> ${t.loadMore} </button> </div>`} </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} </main> ` }), defineScriptVars({ allPosts, POSTS_PER_PAGE, currentLang, t }));
}, "D:/workspace/ai-code/astro-notion-site/src/pages/index.astro", void 0);
const $$file = "D:/workspace/ai-code/astro-notion-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
