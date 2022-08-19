import { Container, Flex, Heading, Text, Button, Icon } from "@chakra-ui/react";
// import { ExternalLinkIcon } from "@chakra-ui/icons";
import { BsArrowUpRight } from "react-icons/bs";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import FirstPlace from "../assets/hackathon/1stplace.png";

export default function HackathonWinners() {
  return (
    <>
      <Heading fontSize="5xl" color="primary" align="center">
        Winners
      </Heading>
      <br></br>
      <Flex align="center" justify="center">
        <Stack spacing="40px" direction="row">
          <Box boxSize="xlg">
            <Image
              width="420px"
              borderRadius="30px"
              src="https://cdn.discordapp.com/attachments/995836673738940416/1007072533335506974/firstplace.png"
            />
          </Box>
          <br />
          <Box boxSize="xlg">
            <Image
              width="400px"
              borderRadius="30px"
              src="https://media.discordapp.net/attachments/995836673738940416/1007072534082105374/2ndplace.png"
            />
          </Box>
          <br />
          <Box boxSize="xlg">
            <Image
              width="400px"
              borderRadius="30px"
              src="https://media.discordapp.net/attachments/995836673738940416/1007072533637500938/3rdplace.png"
              alt="Dan Abramov"
            />
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
