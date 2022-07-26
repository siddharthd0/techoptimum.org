import Footer from "../components/footer";
import Header from "../components/header";
import HeroHeader from "../components/homepage-landing";
import Courses from "../components/courses";

import Events from "../components/events";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>

      <Box my="50px">
        <Header />
        <HeroHeader />
        <Courses />
        <Events />
      </Box>
      <Footer />
    </>
  );
}
