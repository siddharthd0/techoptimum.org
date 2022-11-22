import ChessIcon from "../assets/chess.svg";
import SkribblIoIcon from "../assets/skribblio.svg";
import WorkshopsIcon from "../assets/workshops.svg";

import { Container, Flex, Heading, Text, Button, Icon } from "@chakra-ui/react";
// import { ExternalLinkIcon } from "@chakra-ui/icons";
import { BsArrowUpRight } from "react-icons/bs";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function HackathonRecap() {
  return (
    <>
      <Flex marginBottom={"3rem"} direction={"column"} width={"100%"} align="center">
        <Heading fontSize="7xl" color={"primary"}>
          Quick Recap
        </Heading>
        <Text  maxWidth={"600px"} marginBottom="2rem" marginTop={"1.4rem"} fontSize="xl">
          Tech Optimum Hacks was our first annual 48-hour virtual hackathon. We had over 50 project submissions and hosted 3 workshops. 
          We will be hosting our next hackathon in June 2023. Whether you've never touched code, or are a coding master, you are welcome to participate! We look forward to seeing you. 
        </Text>
        <Container
          maxWidth={"570px"}
          backgroundColor="#29368C"
          height={"150px"}
          margin={"0 auto"}
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
              fontSize="4xl"
              fontWeight={"400"}
              textAlign={"left"}
              ml={"6%"}
              mr={"6%"}
            >
              <CountUp end={313} duration={4} useEasing={true} delay={1.5} />+
              <Text fontWeight={"400"} fontSize="2xl">
                Participants
              </Text>
            </Heading>
            <Heading
              color="white"
              fontSize="6xl"
              fontWeight={"300"}
              width={"5%"}
            >
              /
            </Heading>
            <Heading
              color="white"
              fontSize="4xl"
              fontWeight={"400"}
              width={"47.5%"}
              textAlign={"left"}
              ml={"1.1rem"}
            >
              $<CountUp end={41750} duration={4} useEasing={true} delay={1.5} />
              +<br></br>
              <Text fontWeight={"400"} fontSize="2xl">
                Prizes
              </Text>
            </Heading>
            <Link
              href="https://techoptimum.devpost.com"
              isExternal
              transition="500ms"
            >
              <Icon className="diagonal-button" as={BsArrowUpRight} />
            </Link>
          </Flex>
        </Container>
      
       {/* <Flex alignItems={"center"} height={"100%"}>
          <Flex
            align="center"
            justify="center"
            paddingLeft="15%"
            width={"70%"}
            marginTop={"2.5rem"}
          >
            <ChessIcon width="25%" height="auto" />
            <Heading width="5%" color="primary" fontSize="3xl"></Heading>
            <Heading
              textAlign="center"
              width="70%"
              color="primary"
              fontSize="3xl"
            >
              Chess Tournament
            </Heading>
          </Flex>
        </Flex>
        <Flex alignItems={"center"} height={"100%"}>
          <Flex
            align="center"
            justify="center"
            paddingLeft="5%"
            width={"90%"}
            marginTop={"2.5rem"}
          >
            <SkribblIoIcon width="25%" height="auto" />
            <Heading width="10%" color="primary" fontSize="3xl"></Heading>
            <Heading width="65%" color="primary" fontSize="3xl">
              Skribble.io
            </Heading>
          </Flex>
        </Flex>
        <Flex alignItems={"center"} height={"100%"} marginBottom={"7.5rem"}>
          <Flex
            align="center"
            justify="center"
            paddingLeft="5%"
            width={"70%"}
            marginTop={"2.5rem"}
          >
            <WorkshopsIcon width="27.5%" height="auto" />
            <Heading width="17.5%" color="primary" fontSize="3xl"></Heading>
            <Flex width="57.5%" height="100%">
              <Heading width="100%" height="50%" color="primary" fontSize="3xl">
                Workshops
              </Heading>
            </Flex>
          </Flex>
        </Flex>
        */}
      </Flex>
    </>
  );
}
