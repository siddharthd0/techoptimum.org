import Footer from "../components/footer";
import Header from "../components/header";
import Socials from "../components/socials";
import { Box } from "@chakra-ui/react";
import JoinHero from "../components/discord-page-landing";
import JoinDiscord from "../components/join-discord";

export default function Join() {
  return (
    <>
      <Header />
      <Box mb="100px">
        <JoinHero />
        <JoinDiscord />
      </Box>
      <Socials />
      <Footer />
    </>
  );
}
