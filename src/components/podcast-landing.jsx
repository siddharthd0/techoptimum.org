import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import BlueStar from "../assets/Blue-Star.svg";
import OrangeStar from "../assets/Orange-Star.svg";
import GreenStar from "../assets/Green-Star.svg";

export default function PodcastHero() {
  return (
    <>
      <Flex height="75vh">
        <Flex top="17%" left="29%" position="absolute" zIndex={1}>
          <BlueStar />
        </Flex>
        <Flex top="16%" left="42%" position="absolute" zIndex={2}>
          <OrangeStar />
        </Flex>
        <Flex top="7.5%" left="35.7%" position="absolute" zIndex={0}>
          <GreenStar />
        </Flex>
        <Flex width="full" height="75vh" position="absolute" zIndex={3} direction="column" alignItems="center" justifyContent="center">
          <Heading fontSize="7xl">OUR</Heading>
          <Heading fontSize="7xl">PODCAST</Heading>
        </Flex>
      </Flex>
      <Flex bg="#29368C" justifyContent="space-between" alignItems="center" paddingY="7" width="100vw">
        <Heading fontSize="5xl">SODE 1</Heading>
        <Heading fontSize="5xl">EPISODE 1</Heading>
        <Heading fontSize="5xl">EPISOD</Heading>
      </Flex>
    </>
  )
}