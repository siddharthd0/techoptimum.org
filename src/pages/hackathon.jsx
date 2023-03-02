import Footer from "../components/footer";
import Header from "../components/header";
import Socials from "../components/socials";
import HackathonRecap from "../components/hackathon-recap.jsx";
import { Link, Button, Text, Heading, Box } from "@chakra-ui/react";
import HackathonWinners from "../components/hackathon-winners";
import HackathonSponsors from "../components/hackathon-sponsors";

export default function Hackathons() {
  return (
    <>
      <Header />
      <Box
        mt={["-15rem", "-5rem"]}
        height={["90vh", "100vh"]}
        backgroundImage={"/hackathon-projects-background-modified.png"}
        backgroundSize={"cover"}
        className="shadowBg"
      >
        <br />
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />
        <br />

        <Box
          marginX={["2rem", "auto"]}
          className="missionbg"
          borderRadius={"20px"}
          maxWidth="800px"
          padding="2rem"
          opacity={".948"}
          mt={["3rem", "0"]}
        >
          <Text fontSize={["xl", "4xl"]}>Welcome to</Text>
          <Heading color="primary" fontSize={["3xl", "6xl"]}>
            Tech Optimum Hacks
          </Heading>
          <Text fontSize={["sm", "xl"]}>
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
              fontSize={["xs", "lg"]}
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
