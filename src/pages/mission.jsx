import Head from "next/head";
import Mission from "../components/mission";
import MissionLanding from "../components/mission-landing";
import MissionValues from "../components/mission-values";

export default function MissionPage() {
  return (
    <>
      <Head>
        <title>Our Mission | Tech Optimum</title>
        <meta
          name="description"
          content="Learn about our mission at Tech Optimum to provide free, quality, and accessible computer science education globally. Discover our values and what drives us to do what we do."
        />
        <meta
          name="keywords"
          content="Mission, Tech Optimum, Computer Science Education, Values, Vision"
        />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Our Mission | Tech Optimum" />
        <meta
          property="og:description"
          content="Learn about our mission at Tech Optimum to provide free, quality, and accessible computer science education globally. Discover our values and what drives us to do what we do."
        />
        <meta property="og:image" content="tech-optimum-logo.png" />{" "}
        <meta property="og:url" content="https://techoptimum.org/mission" />{" "}
        <meta name="twitter:title" content="Our Mission | Tech Optimum" />
        <meta
          name="twitter:description"
          content="Learn about our mission at Tech Optimum to provide free, quality, and accessible computer science education globally. Discover our values and what drives us to do what we do."
        />
        <meta name="twitter:image" content="tech-optimum-logo.png" />{" "}
      </Head>

      <MissionLanding />

      <MissionValues />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
