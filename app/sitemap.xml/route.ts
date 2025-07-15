export async function GET() {
  const baseUrl = 'https://corexalabs.com';
  const staticRoutes = [
    '',
    'services',
  ];
  const serviceSlugs = [
    'web-development',
    'mobile-app-development',
    'ai-machine-learning',
    'cloud-solutions',
    'custom-software',
    'devops-consulting',
  ];

  // --- BLOG ROUTES ---
  let blogSlugs: string[] = [];
  try {
    const blogsData = await import('../blogs/blogs-data.json');
    blogSlugs = blogsData.default.map((b: any) => b.slug);
  } catch (e) {
    blogSlugs = [];
  }

  const urls = [
    ...staticRoutes.map((route) => `${baseUrl}/${route}`),
    ...serviceSlugs.map((slug) => `${baseUrl}/services/${slug}`),
    ...blogSlugs.map((slug) => `${baseUrl}/blogs/${slug}`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `<url><loc>${url.replace(/\/$/, '')}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`
    )
    .join('\n  ')}
</urlset>`;
  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 