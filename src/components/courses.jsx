import { Flex, Heading, Text, Button, Container } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Courses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Flex marginLeft={"7rem"} direction={"column"}>
      <Heading color="primary" fontSize="5xl">
        Courses
      </Heading>
      <Flex
        width={"80%"}
        marginTop={"2.5rem"}
        justifyContent={"space-between"}
        ref={ref}
      >
        <Flex
          height={"35vh"}
          width={"20vw"}
          backgroundColor="#003B73"
          borderRadius={"22px"}
          direction={"column"}
          padding={"2rem"}
        >
          <Heading
            color="#FFF6AA"
            fontSize="2xl"
            fontWeight={"400"}
            height={"25%"}
          >
            MongoDB.
          </Heading>
          <Text
            color={"rgba(255, 246, 170, 0.7)"}
            fontWeight={"400"}
            fontSize="sm"
            height={"50%"}
          >
            Use databases in your own website. Discover how data can be stored
            in DB's like Mongo and learn how to control the data.
          </Text>
          <Flex height={"25%"} alignItems={"center"}>
            <Button
              backgroundColor="transparent"
              _hover={{ backgroundColor: "transparent" }}
              width="fit-content"
              padding={"0"}
              color="#FFF6AA"
              fontWeight={"400"}
              rightIcon={
                <ExternalLinkIcon position={"relative"} bottom={"2px"} />
              }
            >
              LEARN MORE
            </Button>
          </Flex>
        </Flex>
        <Flex
          height={"35vh"}
          width={"20vw"}
          backgroundColor="#05445E"
          borderRadius={"22px"}
          direction={"column"}
          padding={"2rem"}
          as={motion.div}
        >
          <Heading
            color="#FFF6AA"
            fontSize="2xl"
            fontWeight={"400"}
            height={"25%"}
          >
            Web Dev.
          </Heading>
          <Text
            color={"rgba(255, 246, 170, 0.7)"}
            fontWeight={"400"}
            fontSize="sm"
            height={"50%"}
          >
            Create simple websites using HTML, CSS and JS. Host, publish and
            share your personalized website that you created from scratch.
          </Text>
          <Flex height={"25%"} alignItems={"center"}>
            <Button
              backgroundColor="transparent"
              _hover={{ backgroundColor: "transparent" }}
              width="fit-content"
              padding={"0"}
              color="#FFF6AA"
              fontWeight={"400"}
              rightIcon={
                <ExternalLinkIcon position={"relative"} bottom={"2px"} />
              }
            >
              LEARN MORE
            </Button>
          </Flex>
        </Flex>
        <Flex
          height={"35vh"}
          width={"20vw"}
          backgroundColor="#145DA0"
          borderRadius={"22px"}
          direction={"column"}
          padding={"2rem"}
        >
          <Heading
            color="#FFF6AA"
            fontSize="2xl"
            fontWeight={"400"}
            height={"25%"}
          >
            Game Dev.
          </Heading>
          <Text
            fontWeight={"400"}
            fontSize="sm"
            color={"rgba(255, 246, 170, 0.7)"}
            height={"50%"}
          >
            Learn how to create simple games, create real-world applications
            using languages like Javascript.
          </Text>
          <Flex height={"25%"} alignItems={"center"}>
            <Button
              backgroundColor="transparent"
              _hover={{ backgroundColor: "transparent" }}
              width="fit-content"
              padding={"0"}
              color="#FFF6AA"
              fontWeight={"400"}
              rightIcon={
                <ExternalLinkIcon position={"relative"} bottom={"2px"} />
              }
            >
              LEARN MORE
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
