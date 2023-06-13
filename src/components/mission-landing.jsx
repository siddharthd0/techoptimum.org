import {
  Box,
  Flex,
  Heading,
  Text,
  Tooltip,
  Stat,
  Image,
  StatNumber,
  StatHelpText,
  Divider,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
export default function MissionLanding() {
  return (
    <>
      <Flex
        direction={["column", "row"]}
        maxW="1000px"
        margin="auto"
        mb="2rem"
        mt="9rem"
        alignItems="center"
      >
        <Box pr={["0rem", "4rem"]} maxW={["80%", "50%"]}>
          <Image borderRadius="md" src="our-mission.jpg" />
        </Box>
        <Box mt={["2rem", "0"]} maxW={["80%", "50%"]}>
          <Heading
            fontWeight="medium"
            py="10px"
            fontSize={["4xl", "5xl"]}
            color="primary"
          >
            Our Mission
          </Heading>
          <Text fontSize="xl" color="primary">
            To provide quality programming education that will help students
            grow in the technology industry.
          </Text>
          <Text mt="1rem" color="primary" fontSize={["sm", "md"]} marginBottom="26px">
            Tech Optimum is committed to bridging the digital divide by
            providing an online learning platform, resources, and tools
            dedicated to computer science education for students across the
            globe
          </Text>
        </Box>
      </Flex>
    </>
  );
}
