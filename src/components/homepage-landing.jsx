import { ExternalLinkIcon } from "@chakra-ui/icons";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Link } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import {
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import { NodeNextRequest } from "next/dist/server/base-http/node";

export default function HeroHeader() {
  return (
    <>
      <Flex mb="60px" width={"100%"} direction={"column"}>
        <Flex alignItems={"center"} direction={"column"}>
          <Heading
          px={["3rem", "0rem"]}
            as={motion.div}
            initial={{ opacity: 0, x: -40 }}
            animate={{
              opacity: 1,
              transition: { duration: 1 },
              ease: "easeIn",
              x: 0,
            }}
            className="gradient-title"
            fontSize={["4xl", "7xl"]}
            marginBottom={{ base: ".5em", md: "1rem", lg: "1.5rem" }}
          >
            Learn. Create. Accomplish.
          </Heading>
          <Text
            as={motion.div}
            initial={{ opacity: 0, x: -40 }}
            animate={{
              opacity: 1,
              transition: { duration: 1 },
              ease: "easeIn",
              x: 0,
              delay: 1,
            }}
            fontSize={["md", "2xl"]}
            color="primary"
            marginBottom={{ base: ".3em", md: ".7rem", lg: "1rem" }}
            width={"70%"}
            textAlign={"center"}
          >
            Tech Optimum offers accessible resources including courses and
            internships to help aspiring coders acquire skills and practical
            experience.
          </Text>
        </Flex>

        <Container
          boxShadow="0px 3px 65px rgba(50, 10, 350, 0.6)"
          maxWidth={["290px", "500px", "800px"]}
          backgroundColor="#29368C"
          height={["495px", "150px"]}
          borderRadius={"15px"}
          marginTop={"2rem"}
          as={motion.div}
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            transition: { duration: 1 },
            ease: "easeIn",
            y: 0,
            delay: 4.5,
          }}
        >
          <Flex
            direction={["column", "row"]}
            alignItems={"center"}
            height={"100%"}
            marginTop="1"
          >
            <Heading
              borderRadius={"10px"}
              marginTop={["2rem", "0rem"]}
              color="white"
              fontSize={["lg", "2xl"]}
              fontWeight={"400"}
              px={"1rem"}
              py="10px"
              width={["80%", "200px"]}
              textAlign={"center"}
              transition="transform 0.5s ease 0s, background 0.5s ease 0s"
              _hover={{
                transform: "rotate(-10deg)",
              }}
            >
              Programming Courses
            </Heading>
            <Heading
              color="white"
              fontSize={["xl", "2xl"]}
              fontWeight={"400"}
              width={"5%"}
              textAlign="center"
            >
              +
            </Heading>
            <Heading
              borderRadius={"10px"}
              marginTop={["2rem", "0rem"]}
              color="white"
              fontSize={["lg", "2xl"]}
              fontWeight={"400"}
              px={"1rem"}
              py="10px"
              width={["80%", "200px"]}
              textAlign={"center"}
              transition="transform 0.5s ease 0s, background 0.5s ease 0s"
              _hover={{
                transform: "rotate(10deg)",
              }}
            >
              Accessible Internships
            </Heading>
            <Heading
              color="white"
              fontSize={["lg", "2xl"]}
              fontWeight={"400"}
              width={"5%"}
              textAlign="center"
            >
              +
            </Heading>
            <Heading
              borderRadius={"10px"}
              marginTop={["2rem", "0rem"]}
              color="white"
              fontSize={["lg", "2xl"]}
              fontWeight={"400"}
              px={"1rem"}
              py="10px"
              width={["80%", "200px"]}
              textAlign={"center"}
              transition="transform 0.5s ease 0s, background 0.5s ease 0s"
              _hover={{
                transform: "rotate(-10deg)",
              }}
            >
              Inclusive Community
            </Heading>
            <Link
              marginTop={["1.6rem", "0rem"]}
              href="./about"
              _hover={{
                transform: "rotate(45deg)",
              }}
              transition="transform 0.4s ease"
            >
              <Icon className="diagonal-button" as={BsArrowUpRight} />
            </Link>
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
