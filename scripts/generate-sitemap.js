import { writeFileSync, existsSync, mkdirSync } from "fs";
import { format } from "date-fns";

const BASE_URL = "https://csmisr.com";

// Define all routes with their priorities and change frequencies
const routes = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/about", priority: 0.8, changefreq: "monthly" },
  { path: "/services/demolition", priority: 0.9, changefreq: "monthly" },
  { path: "/services/cutting", priority: 0.9, changefreq: "monthly" },
  { path: "/contact", priority: 0.7, changefreq: "monthly" },
  { path: "/case-studies", priority: 0.8, changefreq: "monthly" },
];

function generateSitemap() {
  const today = format(new Date(), "yyyy-MM-dd");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  // Write to dist folder (for production build)
  if (existsSync("dist")) {
    writeFileSync("dist/sitemap.xml", sitemap);
    console.log("✅ Sitemap generated at dist/sitemap.xml");
  }

  // Also write to public folder (for dev and as source)
  writeFileSync("public/sitemap.xml", sitemap);
  console.log("✅ Sitemap generated at public/sitemap.xml");
}

generateSitemap();
