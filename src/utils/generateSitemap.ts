import { routes } from '../routes';
import { metadata } from '../seo/metadata';

export function generateSitemap() {
  const baseUrl = 'https://frokenkoll.se';
  const pages = Object.values(routes).map(route => ({
    url: `${baseUrl}${route.path}`,
    lastmod: new Date().toISOString(),
    changefreq: route.path === '/' ? 'weekly' : 'monthly',
    priority: route.path === '/' ? 1.0 : 0.8
  }));

  const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map(page => `
        <url>
          <loc>${page.url}</loc>
          <lastmod>${page.lastmod}</lastmod>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>
      `).join('')}
    </urlset>
  `.trim();

  return xml;
}