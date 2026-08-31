import { SERVICES } from "./services.js";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/about" },
  { label: "Services", href: "/services", mega: "services" },
  { label: "Industries", href: "/industries", mega: "industries" },
  { label: "Locations", href: "/locations", mega: "locations" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Packages", href: "/packages" },
  { label: "Resources", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/** Promo cards shown inside each mega menu (4Core style) */
export const MEGA_PROMOS = {
  services: {
    statLabel: "Traffic Growth",
    statValue: "+312%",
    title: "Need Help Growing Your Business?",
    text: "Get a free SEO audit and discover opportunities to increase rankings, traffic and leads.",
  },
  industries: {
    statLabel: "Industry Growth",
    statValue: "+284%",
    title: "Need Industry-Specific SEO?",
    text: "Get a customized SEO strategy designed for your industry and growth goals.",
  },
  locations: {
    statLabel: "Global Rankings",
    statValue: "+264%",
    title: "Need SEO Services In Your Market?",
    text: "Generate more traffic, leads and customers through customized SEO strategies designed for your location.",
  },
};

/** Mega-menu services (subset + extras matching the brief) */
export const NAV_SERVICES = [
  {
    title: "Organic SEO",
    desc: "Long-term rankings, traffic and revenue.",
    href: "/services/organic-seo",
    icon: "TrendingUp",
  },
  {
    title: "AI SEO",
    desc: "ChatGPT, Gemini and AI Overviews.",
    href: "/services/ai-seo",
    icon: "Sparkles",
  },
  {
    title: "GEO",
    desc: "Referenced by generative AI engines.",
    href: "/services/geo",
    icon: "Bot",
  },
  {
    title: "AEO",
    desc: "Trusted answers across search.",
    href: "/services/aeo",
    icon: "MessageCircleQuestion",
  },
  {
    title: "Local SEO",
    desc: "Google Maps and local search.",
    href: "/services/local-seo",
    icon: "MapPin",
  },
  {
    title: "Google Map SEO",
    desc: "Local pack and nearby enquiries.",
    href: "/services/google-map-seo",
    icon: "Map",
  },
  {
    title: "eCommerce SEO",
    desc: "Shopify, WooCommerce, Magento.",
    href: "/services/ecommerce-seo",
    icon: "ShoppingBag",
  },
  {
    title: "Technical SEO",
    desc: "Crawl, index and performance.",
    href: "/services/technical-seo",
    icon: "Settings2",
  },
  {
    title: "On-Page SEO",
    desc: "Content, structure and UX signals.",
    href: "/services/on-page-seo",
    icon: "FileEdit",
  },
  {
    title: "Global SEO",
    desc: "International & multilingual growth.",
    href: "/services/global-seo",
    icon: "Globe2",
  },
  {
    title: "Google Ads",
    desc: "Search, Shopping and PMax.",
    href: "/services/google-ads",
    icon: "Target",
  },
  {
    title: "Meta Ads",
    desc: "Facebook & Instagram scale.",
    href: "/services/meta-ads",
    icon: "Megaphone",
  },
];

export const FOOTER_NAV = {
  company: [
    { label: "About", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "SEO Packages", href: "/packages" },
    { label: "Industries", href: "/industries" },
    { label: "Reviews", href: "/#testimonials" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "AI SEO", href: "/services/ai-seo" },
    { label: "Organic SEO", href: "/services/organic-seo" },
    { label: "Technical SEO", href: "/services/technical-seo" },
    { label: "Local SEO", href: "/services/local-seo" },
    { label: "eCommerce SEO", href: "/services/ecommerce-seo" },
    { label: "GEO", href: "/services/geo" },
    { label: "AEO", href: "/services/aeo" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "SEO Guides", href: "/blog" },
    { label: "Industry News", href: "/blog" },
    { label: "Glossary", href: "/blog" },
    { label: "FAQs", href: "/#faq" },
  ],
  locations: [
    { label: "USA", href: "/locations/usa" },
    { label: "UK", href: "/locations/uk" },
    { label: "Canada", href: "/locations/canada" },
    { label: "Australia", href: "/locations/australia" },
    { label: "India", href: "/locations/india" },
    { label: "UAE", href: "/locations/uae" },
  ],
};

/** Convenience: all service slugs for routing helpers */
export const SERVICE_HREFS = SERVICES.map((s) => s.href);
