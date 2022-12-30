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
      <Heading textAlign={"center"} color="primary" fontSize="5xl" mt="3rem">
        Sponsors
      </Heading>

      <SimpleGrid
      alignItems={"center"}
      justifyContent="center"
      alignContent={"center"}
        borderRadius={"20px"}
        padding="3rem"
        margin={"auto"}
        maxWidth={"1100px"}
        minChildWidth="200px"
        spacingX="20px"
        spacingY="30px"
      >
        <Box>
          <Image
            maxWidth={"200px"}
            filter={"grayscale(90%)"}
            transition="300ms"
            _hover={{
              filter: "grayscale(0%)",
            }}
            alt={"xyzSponsor"}
            src="./xyz.png"
          ></Image>
        </Box>
        <Box>
          <Image
          transition="300ms"
          _hover={{
            filter: "grayscale(0%)",
          }}
            filter={"grayscale(90%)"}
            alt={"taskadeSponsor"}
            src="./taskade.png"
          ></Image>
        </Box>
        <Box>
          <Image
          transition="300ms"
          _hover={{
            filter: "grayscale(0%)",
          }}
            ml="1rem"
            maxWidth={"200px"}
            filter={"grayscale(90%)"}
            alt={"echo3dSponsor"}
            src="./echo3d-2.png"
          ></Image>
        </Box>
        <Center>
          <Box>
            <Image
            transition="300ms"
            _hover={{
              filter: "grayscale(0%)",
            }}
              marginLeft={"-1rem"}
              filter={"grayscale(90%)"}
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
          <Image
          transition="300ms"
          _hover={{
            filter: "grayscale(0%)",
          }}
            filter={"grayscale(90%)"}
            alt={"replitSponsor"}
            src="./Replit.png"
          ></Image>
        </Box>
        <Box>
          <Image
          transition="300ms"
          _hover={{
            filter: "grayscale(0%)",
          }}
            filter={"grayscale(90%)"}
            alt={"SlingshotSponsor"}
            src="./slingshot.png"
          ></Image>
        </Box>
        <Center>
          <Box maxWidth={"100px"}>
            <Image
            
            transition="300ms"
            _hover={{
              filter: "grayscale(0%)",
            }}
              filter={"grayscale(90%)"}
              alt={"WolframSponsor"}
              src="./Wolfram-Language-Sponsor.png"
            ></Image>
          </Box>
        </Center>
      </SimpleGrid>
    </>
  );
}
