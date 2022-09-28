

import { SimpleGrid, Flex, Heading, Box, Image, transition} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Link } from '@chakra-ui/react'


export default function HackathonSponsors() {
	return (
		<>
	
				<Heading textAlign={"center"} color="primary" fontSize="6xl" mt="3rem"marginBottom={"1rem"}>
					Sponsors
				</Heading>
                <SimpleGrid alignContent={"center"} minHeight="300px" borderRadius={"20px"} padding="1rem"backgroundColor={"#05101D"} margin={"auto"} maxWidth={"900px"} minChildWidth='150px' spacing='40px'>
  <Box  transition="500ms" _hover={{
    filter:'grayscale(10%)'
  }} filter='grayscale(100%)'height='80px'> <Image src='./xyz.png' /> </Box>
  <Box transition="500ms" _hover={{
    filter:'grayscale(10%)'
  }}filter='grayscale(100%)'height='80px'> <Image borderRadius={"10px"} src='./taskade.jpg' /> </Box>
  <Box transition="500ms" _hover={{
    filter:'grayscale(10%)'
  }}filter='grayscale(100%)'height='80px'> <Image src='./replit-logo.png' /> </Box>
  <Box transition="500ms" _hover={{
    filter:'grayscale(10%)'
  }}filter='grayscale(100%)'height='80px'> <Image src='./slingshot.png' /> </Box>
  <Box transition="500ms" _hover={{
    filter:'grayscale(10%)'
  }}filter='grayscale(100%)'height='80px'> <Image src='./wolframlogo.png' /> </Box>
    <Box transition="500ms" _hover={{
    filter:'grayscale(10%)'
  }}filter='grayscale(100%)'height='80px'> <Image borderRadius="15px"src='./echo3d.png' /> </Box>
{/*someone pls add art of problem solving logo here! */}
</SimpleGrid>


		
		</>
	);
}
