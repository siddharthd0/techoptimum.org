import { Box, Heading } from "@chakra-ui/react";
import Navbar from "../components/header";
import Script from "next/script";
import Head from "next/head";

export default function Donations() {
  return (
    <>
      <Head>
        <title>Donate | Tech Optimum</title>
        <meta
          name="description"
          content="Help Tech Optimum continue to provide free and high-quality computer science education resources to students around the world. Every donation counts!"
        />
        <meta
          name="keywords"
          content="Donations, Tech Optimum, Computer Science Education, Free Resources, Support, Non-Profit"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Donate | Tech Optimum" />
        <meta
          property="og:description"
          content="Help Tech Optimum continue to provide free and high-quality computer science education resources to students around the world. Every donation counts!"
        />
        <meta property="og:image" content="/tech-optimum-logo.png" />
        <meta property="og:url" content="https://techoptimum.org/donate" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:title" content="Donate | Tech Optimum" />
        <meta
          name="twitter:description"
          content="Help Tech Optimum continue to provide free and high-quality computer science education resources to students around the world. Every donation counts!"
        />
        <meta name="twitter:image" content="/tech-optimum-logo.png" />
      </Head>
      <Box
        textAlign="center"
        mx="auto"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          fontSize={["3xl", "5xl"]}
          pt="9rem"
          fontWeight="medium"
          color="primary"
        >
          Donate to Tech Optimum
        </Heading>
        <Heading
          mt="1rem"
          fontSize={["lg", "2xl"]}
          fontWeight="medium"
          color="blackAlpha.800"
          mb="3rem"
        >
          Help us continue to provide free resources to students
        </Heading>

        <iframe
          className="donation-form"
          src="https://givebutter.com/embed/c/tech-optimum-donations"
          name="givebutter"
          frameBorder="0"
          scrolling="no"
          seamless
          allowpaymentrequest
          style={{ display: "block", margin: "0 auto", maxWidth: "90%" }}
        ></iframe>
        <Script src="https://givebutter.com/js/widget.js"></Script>
      </Box>
    </>
  );
}
