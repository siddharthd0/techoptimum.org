import Document, { Html, Head, Main, NextScript } from "next/document";

const META_CONFIG = [
  {
    name: "title",
    content: "Tech Optimum | Free Coding Courses",
  },
  {
    name: "description",
    content:
      "Tech Optimum is a 501(c)(3) non-profit that strives to eliminate technological disparity among students across the globe. Through our comprehensive suite of resources – from coding courses to interactive quizzes & videos – we aim to ignite a spark of passion for technology in all students across the globe.",
  },
  {
    name: "keywords",
    content:
      "Tech Optimum, Coding Education, Free Programming Courses, Free Coding Resources, Resources, EdTech, Digital Divide, Computer Science, JavaScript, Python, Data Science, Web Development, Interactive Learning, Free Coding Courses, Tech Community, Tech Optimum",
  },
];

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />

          {/* SEO Meta Tags */}
          {META_CONFIG.map(({ name, content }) => (
            <meta key={name} name={name} content={content} />
          ))}

          {/* Open Graph Meta Tags */}
          {META_CONFIG.map(({ property, content }) => (
            <meta
              key={property}
              property={`og:${property}`}
              content={content}
            />
          ))}

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          {META_CONFIG.map(({ name, content }) => (
            <meta key={name} name={`twitter:${name}`} content={content} />
          ))}

          {/* Google Site Verification (if you have a Google Search Console account) */}
          <meta
            name="google-site-verification"
            content="EjKDS61ntb0xJK0JnTottBs-5do_YxjqO1vsnRoZusY"
          />

          {/* Google tag (gtag.js) */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-C227L4WGXM"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-C227L4WGXM');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
