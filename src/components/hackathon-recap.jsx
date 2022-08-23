import ChessIcon from "../assets/chess.svg";

import { Container, Flex, Heading, Text, Button, Icon } from "@chakra-ui/react";
// import { ExternalLinkIcon } from "@chakra-ui/icons";
import { BsArrowUpRight } from "react-icons/bs";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function HackathonRecap() {
  return (
    <>
      <Flex direction={"column"} width={"100%"} align="center">
        <Heading color="primary" fontSize="6xl" marginBottom={"2.5rem"}>
          Quick Recap
        </Heading>

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
              <CountUp end={300} duration={4} useEasing={true} delay={1.5} />+
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
              $<CountUp end={40000} duration={4} useEasing={true} delay={1.5} />
              +<br></br>
              <Text fontWeight={"400"} fontSize="2xl">
                Prizes
              </Text>
            </Heading>
            <Link href='https://techoptimum.devpost.com' isExternal
            transition="500ms">
            <Icon className="diagonal-button" as={BsArrowUpRight} />
            </Link>
          </Flex>
        </Container>
        <Flex alignItems={"center"} height={"100%"}>
          {/*<Flex align="center" justify="center"left="37.5%" width={"25%"} marginTop={"2.5rem"}>
					<ChessIcon width="20%" height="auto" />
					<Heading width="80%" color="primary" fontSize="3xl">
						Chess Tournament
					</Heading>
				</Flex>*/}

          <br />
          <br />
          <br />
        </Flex>
      </Flex>
    </>
  );
}
