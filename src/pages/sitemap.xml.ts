import type { APIRoute } from 'astro';
import { publications } from '../data/publications';

const staticPages = [
  '',
  'research/',
  'publications/',
  'cv/',
  'news/',
  'contact/',
];

export const GET: APIRoute = ({ site }) => {
  const urls = [
    ...staticPages.map((path) => new URL(path, site).toString()),
    ...publications.map((publication) => new URL(`publications/${publication.slug}/`, site).toString()),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
