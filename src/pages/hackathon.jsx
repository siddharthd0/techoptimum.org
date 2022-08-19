import Footer from "../components/footer";
import Header from "../components/header";
import Socials from "../components/socials";
import HackathonRecap from "../components/hackathon-recap.jsx";
import HackathonBanner from "../assets/hackathon2022.svg";
import { Box } from "@chakra-ui/react";
import HackathonWinners from "../components/hackathon-winners";
import UpcomingEvents from "../components/upcoming-events";

export default function Hackathons() {
  return (
    <>
      <Header />
      <HackathonBanner width="100%" />
      <Box my="100px">
        <HackathonRecap />
        <HackathonWinners />
        <UpcomingEvents />
      </Box>
      <Socials />
      <Footer />
    </>
  );
}
