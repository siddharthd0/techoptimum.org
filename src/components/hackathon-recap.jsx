import ChessIcon from "../assets/chess.svg";
import SkribblIoIcon from "../assets/skribblio.svg";
import WorkshopsIcon from "../assets/workshops.svg";

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Icon,
} from "@chakra-ui/react";
// import { ExternalLinkIcon } from "@chakra-ui/icons";
import { BsArrowUpRight } from "react-icons/bs";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Highlight, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function HackathonRecap() {
  return (
    <>
      <Flex id="recap" direction="column" marginBottom={"3rem"} align="center">
        <Heading
          fontWeight={"100"}
          fontSize={"5xl"}
          maxW={"1000px"}
          lineHeight="medium"
          textAlign={"center"}
        >
          <Highlight
            query={["2022", "Tech Optimum Hacks 2022:"]}
            styles={{
              px: "14px",
              py: "10px",
              rounded: "12px",
              bg: "linear-gradient(156.16deg, #0b2b5f 17.37%, #334c81 86.15%)",
              fontWeight: "100",
              color: "blue.100",
            }}
          >
            Quick Recap of Tech Optimum Hacks 2022:
          </Highlight>
        </Heading>

        <Text mt="8px" color="grey" fontSize={"lg"}>
          (We did more than just coding!)
        </Text>
        <Container
          marginTop={"50px! important"}
          maxWidth={"570px"}
          className="missionbg"
          height={["120px", "150px"]}
          margin={"1rem auto"}  
          borderRadius={"36px"}
          paddingTop={"1rem"}
          as={motion.div}
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            transition: { duration: 1 },
            ease: "easeIn",
            y: 0,
          }}
        >
          <Flex alignItems={"center"} height={"100%"}>
            <Heading
              color="white"
              fontSize={["2xl", "4xl"]}
              fontWeight={"400"}
              textAlign={"left"}
              ml={"6%"}
              mr={"6%"}
            >
              <CountUp end={313} duration={4} useEasing={true} delay={1.5} />+
              <Text fontWeight={"400"} fontSize={["xl", "2xl"]}>
                Participants
              </Text>
            </Heading>
            <Heading
              color="white"
              fontSize={["4xl", "6xl"]}
              fontWeight={"300"}
              width={"5%"}
            >
              /
            </Heading>
            <Heading
              color="white"
              fontSize={["2xl", "4xl"]}
              fontWeight={"400"}
              width={"47.5%"}
              textAlign={"left"}
              ml={"1rem"}
            >
              $<CountUp end={41750} duration={4} useEasing={true} delay={1.5} />
              +<br></br>
              <Text fontWeight={"400"} fontSize={["xl", "2xl"]}>
                Prizes
              </Text>
            </Heading>
            <Link
              href="https://techoptimum.devpost.com"
              isExternal
              transition="500ms"
            >
              <Icon
                display={["none", "block"]}
                className="diagonal-button-secondary"
                as={BsArrowUpRight}
              />
            </Link>
          </Flex>
        </Container>

        <Flex
          borderRadius={"20px"}
          mt="2rem"
          py="2rem"
          px="5rem"
          className="missionbg"
          direction={["column", "row"]}
        >
          <Flex alignItems={"center"} height={"100%"}>
            <Flex align="center" justify="center">
              <ChessIcon width="55px" height="auto" />

              <Heading
                mx="20px"
                textAlign="center"
                color="primary"
                fontSize={["2xl", "3xl"]}
              >
                Chess <br />
                Tournaments
              </Heading>
            </Flex>
          </Flex>
          <Flex alignItems={"center"} height={"100%"}>
            <Flex align="center" justify="center" paddingLeft="10px">
              <SkribblIoIcon width="70px" height="auto" />

              <Heading
                mx={"30px"}
                textAlign={"center"}
                color="primary"
                fontSize={["2xl", "3xl"]}
              >
                Skribble.io <br />
                Tournaments
              </Heading>
            </Flex>
          </Flex>
          <Flex alignItems={"center"} height={"100%"}>
            <Flex align="center" justify="center" paddingLeft="5%">
              <WorkshopsIcon width="60px" />

              <Heading
                marginLeft={"20px"}
                textAlign={"center"}
                color="primary"
                fontSize={["2xl", "3xl"]}
              >
                Programming
                <br />
                Workshops
              </Heading>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
