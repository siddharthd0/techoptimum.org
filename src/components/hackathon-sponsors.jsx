import {
  Stack,
  HStack,
  VStack,
  SimpleGrid,
  Flex,
  Heading,
  Box,
  Image,
  transition,
  Center,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Link } from "@chakra-ui/react";

export default function HackathonSponsors() {
  return (
    <>
      <Heading
        textAlign={"center"}
        color="primary"
        fontSize="6xl"
        mt="3rem"
        marginBottom={"1rem"}
      >
        Sponsors
      </Heading>

      <SimpleGrid
        borderRadius={"20px"}
        padding="3rem"
        backgroundColor={"#05101D"}
        margin={"auto"}
        maxWidth={"1100px"}
        minChildWidth="200px"
        spacingX="20px"
        spacingY="30px"
      >
        <Box>
          <Image alt={"xyzSponsor"} src="./xyz.png"></Image>
        </Box>
        <Box>
          <Image alt={"taskadeSponsor"} src="./taskade.png"></Image>
        </Box>
        <Box>
          <Image alt={"echo3dSponsor"} src="./echo3d-2.png"></Image>
        </Box>
        <Center>
          <Box>
            <Image
              alt={"aopsSponsor"}
              boxSize={"100px"}
              marginBottom="5"
              maxHeight="79"
              minWidth="250"
              src="./aops.png"
            ></Image>
          </Box>
        </Center>
        <Box paddingTop="7">
          <Image alt={"replitSponsor"} src="./Replit.png"></Image>
        </Box>
        <Box>
          <Image alt={"SlingshotSponsor"} src="./slingshot.png"></Image>
        </Box>
        <Center>
          <Box maxWidth={"122px"}>
            <Image
              alt={"WolframSponsor"}
              src="./Wolfram-Language-Sponsor.png"
            ></Image>
          </Box>
        </Center>
      </SimpleGrid>
    </>
  );
}
