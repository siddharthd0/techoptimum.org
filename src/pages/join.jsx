import Footer from "../components/footer";
import Header from "../components/header";
import Socials from "../components/socials";
import {
  Text,
  Heading,
  Tooltip,
  Flex,
  Link,
  Button,
  Box,
} from "@chakra-ui/react";
import DiscordPageLanding from "../components/discord-page-landing";

export default function Join() {
  return (
    <>
      <Header />
      <Box
        height={["90vh", "80vh"]}
        backgroundImage={"/join-landing.png"}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        backdropFilter={"blur(10px)"}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Box
          marginX={["2rem", "auto"]}
          className="greenbg"
          borderRadius={"20px"}
          maxWidth="800px"
          padding="2rem"
          opacity={".95"}
        >
          <Heading fontSize={["4xl", "6xl"]} color={"blue.100"}>
            We are Tech Optimum
          </Heading>
          <Text
            mt=".5rem"
            mb="1rem"
            maxW={"70%"}
            fontSize={["md", "xl"]}
            color={"blue.200"}
          >
            A platform where you can innovate, learn, create, and share your
            projects with our community.
          </Text>
          <Link
            _hover={{
              textDecoration: "none",
            }}
            href="#do"
          >
            <Button
              mr={"18px"}
              px={"25px"}
              borderRadius={"20px"}
              colorScheme={"blue"}
              fontWeight="light"
            >
              {" "}
              Learn more about what we do{" "}
            </Button>
          </Link>
          <Link
            _hover={{
              textDecoration: "none",
            }}
            href="/discord"
            isExternal
          >
            <Button
              mt={["1rem", "0"]}
              px={"25px"}
              borderRadius={"20px"}
              colorScheme={"green"}
              fontWeight="light"
            >
              {" "}
              Join our Discord{" "}
            </Button>
          </Link>
        </Box>
      </Box>

      <Flex id="do" marginLeft={["2rem", "12rem"]} maxW={"750px"} my="3rem">
        <Flex direction={"column"}>
          <Heading mb="14px" color={"primary"} fontSize={"5xl"}>
            Our Discord Server
          </Heading>
          <Text mb="17px">
            We have a community of over 400+ members on our Discord server. We
            have a variety of channels for you to chat in, including a general
            chat, a tech help channel, and a channel for you to share your
            projects. Innovate in our Discord server and if you ever need coding
            help, we&apos;re here!
          </Text>
          <Link
            _hover={{
              textDecoration: "none",
            }}
            href="/discord"
            isExternal
          >
            <Button
              px={"30px"}
              borderRadius={"20px"}
              colorScheme={"joinTeamBtn"}
              fontWeight="light"
            >
              {" "}
              Join Now
            </Button>
          </Link>
        </Flex>
      </Flex>

      <Socials />
      <Footer />
    </>
  );
}
