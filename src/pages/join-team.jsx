import Footer from "../components/footer";
import Header from "../components/header";
import Socials from "../components/socials";
import { Box } from "@chakra-ui/react";
import JoinBanner from "../assets/join-leadership-globe.svg";

export default function JoinTeam() {
  return (
    <>
      <Header />
      <JoinBanner width="50%"/>
      <Box mb="100px">
      
      </Box>
      <Socials />
      <Footer />
    </>
  );
}
