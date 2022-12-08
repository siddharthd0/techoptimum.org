import { ExternalLinkIcon } from "@chakra-ui/icons";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Link } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { Container, Flex, Heading, Text, Button, Icon } from "@chakra-ui/react";
import { NodeNextRequest } from "next/dist/server/base-http/node";

export default function HeroHeader() {
  return (
    <>
      <Flex marginBottom={"100px"} width={"100%"} direction={"column"}>
        <Flex direction={"column"} marginLeft={["2rem", "9rem"]}>
          <Heading
            className="gradient-title"
            fontSize={["4xl", "5xl"]}
            marginBottom={{ base: ".5em", md: "1rem", lg: "2rem" }}
          >
            Learn. Participate. Accomplish.
          </Heading>
          <Text
            fontSize={["lg", "2xl"]}
            color="primary"
            marginBottom={{ base: ".3em", md: ".7rem", lg: "1rem" }}
            width={"75%"}
          >
            A student-led organization dedicated helping and inspiring the next
            generation of tech leaders.
          </Text>
          <Link
            _hover={{
              textDecoration: "none",
            }}
            href="./curriculum"
          >
            <Button
             fontSize={["sm", "md"]}
              backgroundColor="transparent"
              _hover={{
                backgroundColor: "transparent",
                color: "#9DB2F6",
              }}
              _active={{
                backgroundColor: "transparent",
                color: "#9DB2F6",
              }}
              width="fit-content"
              padding={"0"}
              color="#1B76FF"
              fontWeight={"500"}
              rightIcon={
                <ExternalLinkIcon position={"relative"} bottom={"2px"} />
              }
            >
              LEARN MORE
            </Button>
          </Link>
        </Flex>

        <Container
          maxWidth={["290px", "500px", "800px"]}
          backgroundColor="#29368C"
          height={["330px", "150px"]}
          borderRadius={"25px"}
          marginTop={"3rem"}
          as={motion.div}
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            transition: { duration: 1 },
            ease: "easeIn",
            y: 0,
          }}
        >
          <Flex
            direction={["column", "row"]}
            alignItems={"center"}
            height={"100%"}
            marginTop="2"
          >
            <Heading
              marginTop={["2rem", "0rem"]}
              color="white"
              fontSize={["lg", "2xl"]}
              fontWeight={"400"}
              width={["80%", "30%"]}
              textAlign={"center"}
            >
              <CountUp end={10} duration={6} useEasing={true} delay={1.5} />+
              PROGRAMMING COURSES
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
              color="white"
              fontSize={["lg", "2xl"]}
              fontWeight={"400"}
              width={["80%", "30%"]}
              textAlign={"center"}
            >
              INTERNSHIP FINDER
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
              color="white"
              fontSize={["lg", "2xl"]}
              fontWeight={"400"}
              width={["70%", "30%"]}
              textAlign={"center"}
            >
              <CountUp end={300} duration={6} useEasing={true} delay={1.5} />+
              COMMUNITY MEMBERS
            </Heading>
            <Link
              marginBottom={["2rem", "0rem"]}
              marginTop={["1.6rem", "0rem"]}
              href="./join"
              transition="500ms"
            >
              <Icon className="diagonal-button" as={BsArrowUpRight} />
            </Link>
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
