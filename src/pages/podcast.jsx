import Footer from "../components/footer";
import Header from "../components/header";
import Socials from "../components/socials";
import { Box } from "@chakra-ui/react";
import PodcastHero from "../components/podcast-landing";
import PodcastPlayer from "../components/podcast-player";

export default function Podcasts() {
  return (
    <>
      <Header />
      <Box mb="100px">
        <PodcastHero />
        <PodcastPlayer />
      </Box>
      <Socials />
      <Footer />
    </>
  );
}
