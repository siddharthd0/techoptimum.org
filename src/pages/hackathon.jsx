import Footer from "../components/footer";
import Header from "../components/header";
import Socials from "../components/socials";
import HackathonRecap from "../components/hackathon-recap.jsx";
import { Link, Button, Text, Flex, Heading, Box } from "@chakra-ui/react";
import HackathonWinners from "../components/hackathon-winners";
import UpcomingEvents from "../components/upcoming-events";
import HackathonSponsors from "../components/hackathon-sponsors";

export default function Hackathons() {
  return (
    <>
      <Header />
      <Box
        height={"80vh"}
        backgroundImage={"/hackathon-projects-background-modified.png"}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        backdropFilter={"blur(10px)"}
        
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <Box
          marginX="auto"
          className="missionbg"
          borderRadius={"20px"}
          maxWidth="800px"
          padding="2rem"
          opacity={".948"}
        >
          <Text fontSize={"4xl"}>Welcome to</Text>
          <Heading color="primary" fontSize="6xl">
            Tech Optimum Hacks
          </Heading>
          <Text fontSize={"xl"}>
            A 48-hour hackathon where you can explore your coding potential.
            Come join us in July 2023 for Tech Optimum Hacks 2023!
          </Text>
          <Link
            _hover={{
              textDecoration: "none",
            }}
            href="#recap"
          >
            <Button
              px="30px"
              transition={"200ms !important"}
              bgColor={"#4559E9"}
              borderRadius={"18px"}
              color={"#FFFFFF"}
              fontWeight={"400"}
              fontSize={["sm", "lg"]}
              _hover={{ bgColor: "#3244ca" }}
              _active={{ bgColor: "#3244ca" }}
              mt={["1.5rem", "10px"]}
            >
              Check out TO Hacks 2022 Recap
            </Button>
          </Link>
        </Box>
      </Box>
      <Box py={["60px", "70px"]}>
        <HackathonRecap />
        <HackathonWinners />
        <HackathonSponsors />
      </Box>
      <Socials />
      <Footer />
    </>
  );
}
