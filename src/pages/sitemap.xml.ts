import type { APIRoute } from 'astro';

const pages = [
  { url: '', priority: '1.0', changefreq: 'weekly' },
  { url: '/missiya-kompanii/', priority: '0.9', changefreq: 'monthly' },
  { url: '/o-kompanii/', priority: '0.9', changefreq: 'monthly' },
  { url: '/istoriya-kompanii/', priority: '0.8', changefreq: 'monthly' },
  { url: '/pochemu-my/', priority: '0.9', changefreq: 'monthly' },
  
  // Внутрипольные
  { url: '/katalog/vk/', priority: '0.8', changefreq: 'weekly' },
  { url: '/katalog/vk-eko/', priority: '0.8', changefreq: 'weekly' },
  { url: '/katalog/vkv24/', priority: '0.8', changefreq: 'weekly' },
  { url: '/katalog/vke/', priority: '0.8', changefreq: 'weekly' },
  { url: '/katalog/vkve/', priority: '0.8', changefreq: 'weekly' },
  { url: '/katalog/vkv-vke/', priority: '0.8', changefreq: 'weekly' },
  
  // Напольные
  { url: '/katalog/vkn/', priority: '0.8', changefreq: 'weekly' },
  { url: '/katalog/vkvn/', priority: '0.8', changefreq: 'weekly' },
  { url: '/katalog/vkn-eco/', priority: '0.8', changefreq: 'weekly' },
  { url: '/katalog/vken/', priority: '0.8', changefreq: 'weekly' },
  
  // Настенные
  { url: '/katalog/vks/', priority: '0.8', changefreq: 'weekly' },
  { url: '/katalog/vks-eco/', priority: '0.8', changefreq: 'weekly' },
  { url: '/katalog/vks-vert/', priority: '0.8', changefreq: 'weekly' },
  { url: '/katalog/vkves/', priority: '0.8', changefreq: 'weekly' },
  
  // Специальные
  { url: '/katalog/vksk/', priority: '0.7', changefreq: 'weekly' },
  { url: '/katalog/vkvp/', priority: '0.7', changefreq: 'weekly' },
  { url: '/katalog/vkvm/', priority: '0.7', changefreq: 'weekly' },
  
  { url: '/katalog/regulirovanie/', priority: '0.7', changefreq: 'monthly' },
  { url: '/spetsialnye-ispolneniya/spec/', priority: '0.7', changefreq: 'monthly' },
  { url: '/komplektuyushchie/aksessuary/', priority: '0.7', changefreq: 'monthly' },
  { url: '/instrukcii/montazh/', priority: '0.6', changefreq: 'monthly' },
  { url: '/instrukcii/montazh-vks/', priority: '0.6', changefreq: 'monthly' },
  { url: '/sertifikaty/deklaratsii/', priority: '0.6', changefreq: 'yearly' },
];

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site?.toString() || 'https://vitron.ru';
  
  const urls = pages.map(page => `
    <url>
      <loc>${siteUrl}${page.url}</loc>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
  `).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
