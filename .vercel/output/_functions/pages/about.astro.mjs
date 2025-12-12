/* empty css                                 */
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_gh1gy_4Q.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Navigation } from '../chunks/Navigation_BHzImkrD.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u5173\u4E8E\u6211 | \u6781\u7B80\u535A\u5BA2" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-background"> ${renderComponent($$result2, "Navigation", $$Navigation, {})} <!-- About Content --> <article class="max-w-2xl mx-auto px-6 py-12 md:py-16"> <h1 class="text-4xl md:text-5xl font-bold mb-8 text-balance leading-tight">关于我</h1> <!-- Bio Section --> <section class="mb-12"> <p class="text-lg text-foreground/70 leading-relaxed mb-6">
我是一名全栈开发工程师，拥有 5+ 年的 Web 开发经验。热爱开源，专注于现代前端技术栈和最佳实践。
</p> <p class="text-foreground/70 leading-relaxed mb-6">
通过这个博客，我分享我在 React、Next.js、TypeScript
          和前端性能优化方面的深度思考和实战经验。相信技术应该被简化，复杂的概念应该被解释得清楚易懂。
</p> </section> <!-- Tech Stack Section --> <section class="mb-12"> <h2 class="text-2xl font-semibold mb-6">技术栈</h2> <div class="grid grid-cols-2 md:grid-cols-3 gap-4"> ${[
    "React & Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "Vercel",
    "Git & GitHub",
    "Web Performance"
  ].map((tech) => renderTemplate`<div class="border border-border rounded-lg p-4 hover:border-foreground/30 transition-all"> <p class="text-sm font-medium text-foreground">${tech}</p> </div>`)} </div> </section> <!-- Experience Section --> <section class="mb-12"> <h2 class="text-2xl font-semibold mb-6">工作经历</h2> <div class="space-y-8"> <div class="border-l-2 border-border pl-6 py-2"> <h3 class="text-lg font-semibold">高级前端开发工程师</h3> <p class="text-sm text-foreground/60">某知名科技公司 · 2022 - 现在</p> <p class="text-foreground/70 mt-2">
带领前端团队构建高性能的 Web 应用，优化核心 Web 指标，提升用户体验。
</p> </div> <div class="border-l-2 border-border pl-6 py-2"> <h3 class="text-lg font-semibold">前端开发工程师</h3> <p class="text-sm text-foreground/60">互联网初创公司 · 2019 - 2022</p> <p class="text-foreground/70 mt-2">从零开始构建公司的前端基础设施，负责多个核心产品的开发和维护。</p> </div> </div> </section> <!-- Contact Section --> <section class="border-t border-border pt-12"> <h2 class="text-2xl font-semibold mb-6">联系我</h2> <p class="text-foreground/70 mb-6">如果你想一起合作或有任何问题，欢迎通过以下方式与我联系。</p> <div class="space-y-3"> <div> <a href="mailto:hello@example.com" class="text-primary hover:underline font-medium">
hello@example.com
</a> </div> <div class="flex gap-4"> <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline text-sm">
GitHub
</a> <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline text-sm">
Twitter
</a> <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline text-sm">
LinkedIn
</a> </div> </div> </section> <!-- Back Button --> <div class="mt-12 pt-12 border-t border-border"> <a href="/" class="inline-flex items-center px-4 py-2 border border-border bg-transparent rounded-lg font-medium hover:bg-secondary transition-colors">
← 返回首页
</a> </div> </article> </main> ` })}`;
}, "D:/workspace/ai-code/astro-notion-site/src/pages/about.astro", void 0);

const $$file = "D:/workspace/ai-code/astro-notion-site/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
