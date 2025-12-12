import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, p as renderSlot, r as renderTemplate } from './astro/server_gh1gy_4Q.mjs';
import 'clsx';

const $$Astro = createAstro("https://your-domain.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "default",
    size = "default",
    asChild = false,
    href,
    class: className = "",
    ...props
  } = Astro2.props;
  const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
  const variantClasses = {
    default: "bg-foreground text-background hover:bg-foreground/90 shadow-sm hover:shadow-lg active:scale-95 transition-all duration-200",
    outline: "border border-border bg-background hover:bg-secondary hover:border-foreground/20 hover:text-foreground active:scale-95 transition-all duration-200",
    secondary: "bg-secondary text-foreground hover:bg-secondary/80 shadow-sm active:scale-95 transition-all duration-200",
    ghost: "hover:bg-secondary hover:text-foreground active:scale-95 transition-all duration-200",
    link: "text-foreground/70 underline-offset-4 hover:underline hover:text-foreground active:scale-95 transition-all duration-200"
  };
  const sizeClasses = {
    default: "h-9 px-4 py-2",
    sm: "h-8 px-3",
    lg: "h-10 px-6",
    icon: "h-9 w-9"
  };
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  return renderTemplate`${asChild && href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(classes, "class")}${spreadAttributes(props)}>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<button${addAttribute(classes, "class")}${spreadAttributes(props)}>${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "D:/workspace/ai-code/astro-notion-site/src/components/ui/Button.astro", void 0);

export { $$Button as $ };
