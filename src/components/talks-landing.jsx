import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import Link from "next/link";
import TalksCard from "./talks-card";

export default function PodcastHero() {
  return (
    <>
      <Flex
        margin={"auto"}
        direction={"column"}
        mt={["2rem", "5rem"]}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image margin="auto" width={"200px"} src="talks-logo.png" />
        <Heading
          mt="1rem"
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
            mt="15px !important"
            margin="auto"
            width={["130px", "185px"]}
            alignContent={"center"}
            fontSize={["md", "lg"]}
            fontWeight={"light"}
            color="black"
            background={"primary"}
            transition="0.3s"
            _hover={{ background: "purple.300" }}
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
