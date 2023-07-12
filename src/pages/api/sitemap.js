const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

const handler = async (req, res) => {
  try {
    const links = [
      { url: '/', changefreq: 'daily', priority: 1.0 },
      { url: '/volunteer', changefreq: 'weekly', priority: 0.8 },
      { url: '/hackathon', changefreq: 'weekly', priority: 0.8 },
      { url: '/courses', changefreq: 'weekly', priority: 0.8 },
      { url: '/donate', changefreq: 'monthly', priority: 0.5 },
      // Add more URLs as needed
    ];

    const stream = new SitemapStream({ hostname: 'https://www.techoptimum.org' });

    res.writeHead(200, {
      'Content-Type': 'application/xml',
    });

    const xmlString = await streamToPromise(
      Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    res.end(xmlString);
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

export default handler;
