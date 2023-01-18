import Footer from "../components/footer";
import Header from "../components/header";
import Socials from "../components/socials";
import { Text, Heading,Tooltip, Flex, Link, Button, Box } from "@chakra-ui/react";

export default function Join() {
  return (
    <>
      <Header />
      <Box
        height={"80vh"}
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
          marginX="auto"
          className="greenbg"
          borderRadius={"20px"}
          maxWidth="800px"
          padding="2rem"
          opacity={".95"}
        >
          <Heading fontSize={"5xl"} color={"blue.900"}>
            We are Tech Optimum
          </Heading>
          <Text
            mt=".5rem"
            mb="1rem"
            maxW={"70%"}
            fontSize={"lg"}
            color={"blue.900"}
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
              colorScheme={"teal"}
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
              px={"25px"}
              borderRadius={"20px"}
              colorScheme={"teal"}
              fontWeight="light"
            >
              {" "}
              Join our Discord{" "}
            </Button>
          </Link>
        </Box>
      </Box>
      <Socials />
      <Footer />
    </>
  );
}
