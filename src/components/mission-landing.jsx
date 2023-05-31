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
      <Flex direction={["column", "row"]} maxW="1000px" margin="auto" mb="2rem" mt="2rem" alignItems="center">
        <Box pr={["0rem", "4rem"]} maxW={["80%","50%"]}>
          <Image borderRadius="md" src="our-mission.jpg" />
        </Box>
        <Box mt={["2rem", "0"]} maxW={["80%","50%"]}>
          <Heading py="10px" fontSize={["4xl","5xl"]} color="primary">
            Our Mission
          </Heading>
          <Text fontSize={["sm", "md"]} marginBottom="26px">
            More than one-third of the world&apos;s population especially
            students continues to be excluded from technology because of the{" "}
            <Link
              isExternal
              href="https://en.wikipedia.org/wiki/Digital_divide"
            >
              digital divide
            </Link>
            . Tech Optimum offers students in-need accessible resources, tools,
            and a learning platform along with an inclusive community to learn
            more computer science. We envision a diverse community that strives
            for inclusion in the technology industry.
          </Text>
        </Box>
      </Flex>
    </>
  );
}
