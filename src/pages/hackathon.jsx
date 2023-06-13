import HackathonRecap from "../components/hackathon-recap.jsx";
import {
  Box,
  Button,
  Flex,
  Text,
  Tooltip,
  Badge,
  Stat,
  StatHelpText,
  Link,
  Image,
  Icon,
  chakra,
  HStack,
  Highlight,
  Center,
  VStack,
  Heading,
} from "@chakra-ui/react";

import HackathonSponsors from "../components/hackathon-sponsors";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Hackathons() {
  return (
    <>
      <Flex
        mt={["20px", "130px"]}
        borderRadius="md"
        bg="blackAlpha.50"
        py={"25px"}
        px="2rem"
        mb="6rem"
        alignItems="center"
        margin="auto"
        maxW="1300px"
      >
        <Box maxW={"760px"}>
          <Heading
            color="primary"
            fontSize={["2xl", "4xl"]}
            fontWeight="600"
            mb="8px"
          >
            Tech Optimum Hacks
          </Heading>
          <Heading
            fontWeight="medium"
            color="blackAlpha.800"
            fontSize={["xl", "2xl"]}
            mb="1rem"
          >
            Our Annual Coding Competition
          </Heading>
          <Text mt="1rem" color="primary">
            Tech Optimum is committed to bridging the digital divide by
            providing an online learning platform, resources, and tools
            dedicated to computer science education for students across the
            globe.
          </Text>

          <Flex mt="1.5rem">
            <Button
              as="a"
              href="https://techoptimum.devpost.com"
              rightIcon={<ExternalLinkIcon />}
              colorScheme="blue"
            >
              Check out the Devpost
            </Button>
          </Flex>
        </Box>
        <Box pl={["0rem", "5rem"]} maxW={["80%", "60%"]} position="relative">
          <Image
            borderRadius="md"
            src="hackathon-projects-background-modified.png"
            alt="Digital Divide"
          />
          <HStack
            position="absolute"
            bottom="30px"
            color="white"
            p={4}
            gap="10px"
            borderRadius="md"
          >
            <Badge colorScheme="blue" fontSize="xl">
              300+ Participants
            </Badge>
            <Badge colorScheme={"green"} fontSize="xl">
              50+ Projects
            </Badge>
            <Badge colorScheme={"red"} fontSize="xl">
              $40k in Prizes
            </Badge>
          </HStack>
        </Box>
      </Flex>
      <Box py={["60px", "70px"]}>
        <HackathonRecap />

        <HackathonSponsors />
      </Box>
    
    </>
  );
}
