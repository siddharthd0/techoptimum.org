import {
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
        spacing="20px"
  
      >
        <Box>
          <Image src="./xyz.png"></Image>
        </Box>
        <Box>
          <Image src="./taskade.png"></Image>
        </Box>
        <Box>
          <Image src="./echo3d-2.png"></Image>
        </Box>
        <Box>
          <Image minWidth={"300px"}src="./aops.png"></Image>
        </Box>
        <Box>
          <Image src="./Replit.png"></Image>
        </Box>
        <Box>
          <Image src="./Slingshot.png"></Image>
        </Box>
        <Box maxWidth={"150px"}>
          <Image src="./Wolfram-Language-Sponsor.png"></Image>
        </Box>
      </SimpleGrid>
      {/*        <SimpleGrid alignContent={"center"} minHeight="300px" borderRadius={"20px"} padding="1rem"backgroundColor={"#05101D"} margin={"auto"} maxWidth={"900px"} minChildWidth='150px' spacing='40px'>
  <Box  transition="500ms" _hover={{
    filter:'grayscale(10%)'
  }} filter='grayscale(100%)'height='80px'> <Image src='./xyz.png' /> </Box>
  <Box transition="500ms" _hover={{
    filter:'grayscale(10%)'
  }}filter='grayscale(100%)'height='80px'> <Image borderRadius={"10px"} src='./logo_taskade_black.png' /> </Box>
  <Box transition="500ms" _hover={{
    filter:'grayscale(0%)'
  }}filter='grayscale(0%)'height='80px'> <Image src='./replit-logo.png' /> </Box>

  <Box transition="500ms" _hover={{
    filter:'grayscale(10%)'
  }}filter='grayscale(100%)'height='80px'> <Image src='./slingshot.png' /> </Box>
  <Box transition="500ms" _hover={{
    filter:'grayscale(10%)'
  }}filter='grayscale(100%)'height='80px'> <Image src='./wolframlogo.png' /> </Box>
    <Box transition="500ms" _hover={{
    filter:'grayscale(10%)'
  }}filter='grayscale(100%)'height='80px'> <Image borderRadius="15px"src='./echo3d.png' /> </Box>
{/*someone pls add art of problem solving logo here! }
</SimpleGrid>*/}
    </>
  );
}
