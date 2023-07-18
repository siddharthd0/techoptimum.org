import { Providers } from "./providers";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

import "@/styles/globals.css";
import theme from "@/styles/theme";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Tech Optimum | Free Coding Courses',
  description: 'Tech Optimum is a 501(c)(3) non-profit that strives to eliminate technological disparity among students across the globe. Through our comprehensive suite of resources – from coding courses to interactive quizzes & videos – we aim to ignite a spark of passion for technology in all students across the globe.',
  keywords: ['Tech Optimum', 'Coding Education', 'Free Programming Courses', 'Free Coding Resources', 'Resources', 'EdTech', 'Digital Divide', 'Computer Science', 'JavaScript', 'Python', 'Data Science', 'Web Development', 'Interactive Learning', 'Free Coding Courses', 'Tech Community', 'Tech Optimum'],
  twitter: {
    cardType: 'summary_large_image',
    title: 'Tech Optimum | Free Coding Courses',
    description: 'Tech Optimum is a 501(c)(3) non-profit that strives to eliminate technological disparity among students across the globe. Through our comprehensive suite of resources – from coding courses to interactive quizzes & videos – we aim to ignite a spark of passion for technology in all students across the globe.'
  },
  googleSiteVerification: 'EjKDS61ntb0xJK0JnTottBs-5do_YxjqO1vsnRoZusY',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-C227L4WGXM"
        ></Script>
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
      </head>
      <body>
        <Providers theme={theme}>
          <Header />
          {children}
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
