import Footer from "../components/footer";
import Header from "../components/header";
import Socials from "../components/socials";
import { Box } from "@chakra-ui/react";
import JoinTeamLanding from '../components/join-team-landing';
import JoinTeamJobs from "../components/join-team-jobs";

export default function JoinTeam() {
  return (
    <>
      <Header />
      <Box zIndex={"2"} position="relative" top="-120px" overflow="hidden">
        <JoinTeamLanding />
        <JoinTeamJobs />
      </Box>
      <Socials />
      <Footer />
    </>
  );
}
