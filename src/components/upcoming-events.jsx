import { Container, Flex, Heading, Text, Button, Icon } from "@chakra-ui/react";
// import { ExternalLinkIcon } from "@chakra-ui/icons";
import { BsArrowUpRight } from "react-icons/bs";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import FirstPlace from "../assets/hackathon/1stplace.png";
import SquiggleLine from "../assets/Squiggly-Line.svg";
import SquiggleLine2 from "../assets/Squiggly-Line-2.svg";
export default function UpcomingEvents() {
  return (
    <>
      <br></br>
      <Flex
        position={"relative"}
        color="primary"
        mb={"3rem"}
        mt={"4rem"}
        paddingTop={"4rem"}
        height={"300px"}
        backgroundColor={"#05101D"}
        display={"column"}
        align="center"
        justify="center"
      >
        <Heading mb={"4rem"} fontSize="5xl" color="primary" align="center" style={{display:'flex'}}>
          <SquiggleLine2 style={{marginTop:'7vh'}}/>
          <h1 style={{marginLeft:'auto',flex:1}}>Upcoming Events</h1>
          <SquiggleLine />
        </Heading>
        <div></div>
        <h2 align="center">More events coming soon...</h2>
      </Flex>
    </>
  );
}