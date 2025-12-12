import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_B-WNTRaV.mjs';
import { manifest } from './manifest_DQWwF7_m.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/search.json.astro.mjs');
const _page3 = () => import('./pages/posts/_slug_.astro.mjs');
const _page4 = () => import('./pages/rss.xml.astro.mjs');
const _page5 = () => import('./pages/sitemap-index.xml.astro.mjs');
const _page6 = () => import('./pages/sitemap.xml.astro.mjs');
const _page7 = () => import('./pages/tags.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/search.json.ts", _page2],
    ["src/pages/posts/[slug].astro", _page3],
    ["src/pages/rss.xml.ts", _page4],
    ["src/pages/sitemap-index.xml.ts", _page5],
    ["src/pages/sitemap.xml.ts", _page6],
    ["src/pages/tags.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "dfef91e4-532b-432f-acb5-2c1ec8752fb5",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
