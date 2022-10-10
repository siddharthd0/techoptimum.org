import { Container, Flex, Heading, Text, Button, Icon, AbsoluteCenter } from "@chakra-ui/react";
// import { ExternalLinkIcon } from "@chakra-ui/icons";
import { BsArrowUpRight } from "react-icons/bs";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import FirstPlace from "../assets/hackathon/1stplace.png";
import SquiggleLine from "../assets/Squiggly-Line.svg";
import Vector from "../assets/Vector.svg";


export default function UpcomingEvents() {
  return (
    <>
      <br></br>
      <Flex
      
        color="primary"
        mb={"3rem"}
        mt="0"
        paddingTop={"4rem"}
        height={"583px"}
        backgroundColor={"#05101D"}
        display={"column"}
        align="center"
        justify="center"
      >
        <Heading mb={"4rem"} fontSize="5xl" color="primary" align="center">
          Upcoming Events
        </Heading>
        <div></div>
        <h2 align="center">More events coming soon...</h2>
        <SquiggleLine style={{position:'absolute',left: '90%',top: '0%',bottom: '50.55%'}}/>
        <Vector style={{position:"absolute",top: "45%",bottom: "0.01%"}}/>
      </Flex>
    </>
  );
}
