import Footer from "../components/footer";
import Header from "../components/header";
import Socials from "../components/socials";
import HackathonRecap from "../components/hackathon-recap.jsx";
import HackathonBanner from "../assets/hackathon2022.svg";
import { Box } from "@chakra-ui/react";
import HackathonWinners from "../components/hackathon-winners";
import UpcomingEvents from "../components/upcoming-events";
import HackathonSponsors from "../components/hackathon-sponsors";

export default function Hackathons() {
  return (
    <>
      <Header />
      <HackathonBanner width="100%" />
      <Box my={["60px", "100px"]}>
        <HackathonRecap />
        <HackathonWinners />
        <HackathonSponsors />
        <UpcomingEvents />
      </Box>
      <Socials />
      <Footer />
    </>
  );
}
