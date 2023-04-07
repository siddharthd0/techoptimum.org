import { Html } from "next/document";
import React from "react";

export default function _document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="title"
          content="Tech Optimum | Bridging the Digital Divide."
        />
        <meta
          name="description"
          content="More than one-third of the world's population especially students continues to be excluded from technology because of the digital divide. We offer students in need accessible resources, tools, and a learning platform along with an inclusive community to learn more about their passion. We envision a diverse community that strives for inclusion in the technology industry."
        />
        <meta
          name="keywords"
          content="Education, Technology, Computer Science, Javascript, Courses, SQL, Java, Web, Developer, Programming, EdTech, TechEd, Software Engineering, Engineering, Software Developing"
        />

        {/* Open Graph meta tags for social media sharing */}
        <meta
          property="og:title"
          content="Tech Optimum | Bridging the Digital Divide."
        />
        <meta
          property="og:description"
          content="More than one-third of the world's population especially students continues to be excluded from technology because of the digital divide. We offer students in need accessible resources, tools, and a learning platform along with an inclusive community to learn more about their passion. We envision a diverse community that strives for inclusion in the technology industry."
        />
        <meta property="og:image" content="/public/TechOptimumBanner.png" />
        <meta property="og:url" content="https://www.techoptimum.org" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="/public/TechOptimumBanner.png" />
        <meta
          name="twitter:title"
          content="Tech Optimum | Bridging the Digital Divide."
        />
        <meta
          name="twitter:description"
          content="More than one-third of the world's population especially students continues to be excluded from technology because of the digital divide. We offer students in need accessible resources, tools, and a learning platform along with an inclusive community to learn more about their passion. We envision a diverse community that strives for inclusion in the technology industry."
        />
        <meta name="twitter:image" content="/public/TechOptimumBanner.png" />

        {/* Google Site Verification (if you have a Google Search Console account) */}
        <meta
          name="google-site-verification"
          content="EjKDS61ntb0xJK0JnTottBs-5do_YxjqO1vsnRoZusY"
        />

        {/* <!-- Google tag (gtag.js) --> */}
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
