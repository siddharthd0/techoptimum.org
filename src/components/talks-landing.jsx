import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import Link from "next/link";
import TalksCard from "./talks-card";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function PodcastHero() {
  return (
    <>
      <Flex
        margin={"auto"}
        direction={"column"}
        mt={["2rem", "10rem"]}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image margin="auto" width={"400px"} src="to-talks-logo.png" alt="TO Talks Logo" />
        <Heading

          fontWeight={"100"}
          fontSize={["3xl", "5xl"]}
          color="primary"
          textAlign={"Center"}
        >
          Tech Optimum Talks
        </Heading>
        <Text
          margin="auto !important"
          width={"60%"}
          mt="10px !important"
          fontWeight={"100"}
          fontSize={["md", "2xl"]}
          color="primary"
          textAlign={"Center"}
        >
          Unveiling the Future of CS with Top Tech Leaders
        </Text>
        <Link href="https://www.youtube.com/@techoptimum/videos">
          <Button
          rightIcon={<ExternalLinkIcon />}
            mt="15px !important"
            margin="auto"
            mx="2rem"

            mb="5rem"
          >
            Listen Now
          </Button>
        </Link>
        <TalksCard
          description={
            "Listen to Super Julie Braun's experiences as a startup founder, and their mission with Super Purposes. Explore the journey of Julie with Arnav Pandey."
          }
          date="August 7th, 2022"
          role="CEO of Super Purposes"
          link="https://youtu.be/z1eYhWAAwno"
          src="superjulie.jpeg"
          name={"Julie Braun"}
        />
      </Flex>
    </>
  );
}
