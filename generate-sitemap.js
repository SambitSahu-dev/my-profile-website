import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://www.sambitsahu.in' });

// Add your site pages manually here
sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
sitemap.write({ url: '/about', changefreq: 'weekly', priority: 0.8 });
sitemap.write({ url: '/contact', changefreq: 'weekly', priority: 0.8 });
sitemap.write({ url: '/blogs', changefreq: 'weekly', priority: 0.8 });

sitemap.end();

streamToPromise(sitemap).then((data) => {
  createWriteStream('./dist/sitemap.xml').write(data.toString());
});
