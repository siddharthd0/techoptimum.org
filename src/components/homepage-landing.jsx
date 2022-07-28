import { Container, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function HeroHeader() {
  return (
    <>
      <Flex height={"100vh"} width={"100%"} direction={"column"}>
        <Flex direction={"column"} width={"60%"} margin={"0rem 0 0 6rem"}>
          <Heading color="primary" fontSize="5xl" marginBottom={"2.5rem"}>
            Learn. Participate. Accomplish.
          </Heading>
          <Text
            fontSize="2xl"
            color="primary"
            marginBottom={"2.5rem"}
            width={"85%"}
          >
            A student-led organization helping and inspiring future leaders of
            the tech industry worldwide.
          </Text>
          <Button
            backgroundColor="transparent"
            _hover={{ backgroundColor: "transparent" }}
            width="fit-content"
            padding={"0"}
            color="#1B76FF"
            fontWeight={"400"}
            rightIcon={
              <ExternalLinkIcon position={"relative"} bottom={"2px"} />
            }
          >
            LEARN MORE
          </Button>
        </Flex>
        <Container
          maxWidth={"60%"}
          backgroundColor="#29368C"
          height={"20vh"}
          margin={"0 auto"}
          borderRadius={"36px"}
          marginTop={"5rem"}
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
              fontSize="2xl"
              fontWeight={"400"}
              width={"35%"}
              textAlign={"center"}
            >
              <CountUp end={40} duration={4} useEasing={true} delay={1.5} />+
              FREE PROGRAMMING COURSES
            </Heading>
            <Heading
              color="white"
              fontSize="2xl"
              fontWeight={"400"}
              width={"5%"}
            >
              +
            </Heading>
            <Heading
              color="white"
              fontSize="2xl"
              fontWeight={"400"}
              width={"30%"}
              textAlign={"center"}
            >
              INTERNSHIP FINDER
            </Heading>
            <Heading
              color="white"
              fontSize="2xl"
              fontWeight={"400"}
              width={"5%"}
            >
              +
            </Heading>
            <Heading
              color="white"
              fontSize="2xl"
              fontWeight={"400"}
              width={"30%"}
              textAlign={"center"}
            >
              <CountUp end={300} duration={4} useEasing={true} delay={1.5} />+
              COMMUNITY MEMBERS
            </Heading>
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
