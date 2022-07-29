import Footer from "../components/footer";
import Header from "../components/header";
import HeroHeader from "../components/homepage-landing";
import Courses from "../components/courses";
import Jobs from "../components/jobs";
import Events from "../components/events";
import Finder from "../components/internship-finder";
import Socials from "../components/socials";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Header />
      <Box my="100px">
        <HeroHeader />
        <Courses />
        <Events />
        <Jobs />
        <Finder />
      </Box>
      <Socials />
      <Footer />
    </>
  );
}
