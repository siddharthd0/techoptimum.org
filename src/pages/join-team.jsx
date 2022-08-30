import Footer from "../components/footer";
import Header from "../components/header";
import Socials from "../components/socials";
import { Box } from "@chakra-ui/react";
import JoinTeamLanding from '../components/join-team-landing';

export default function JoinTeam() {
  return (
    <>
      <Header />
      <Box zIndex={"2"} position="relative" top="-120px" mb="100px" overflow="hidden">
        <JoinTeamLanding />
      </Box>
      <Socials />
      <Footer />
    </>
  );
}
