import { ExternalLinkIcon } from "@chakra-ui/icons";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Link } from "@chakra-ui/react";
import { BsArrowUpRight, BsBox } from "react-icons/bs";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Icon,
  
} from "@chakra-ui/react";

export default function CurriculmLanding() {
  return (
    <>
      <Box className="curriculmbg">
        <Flex direction="row">
          <Flex
            marginLeft={["2rem", "7rem"]}
            marginTop={"8rem"}
            direction={"column"}
            width="50%;"
          >
            <Heading fontSize={"5xl"} color="primary" marginBottom={".75rem"}>
              {" "}
              Tech Optimum Curriculm
            </Heading>
            <Text  width="80%;"marginBottom="1.25rem">

              Taking an effective and efficient approach to computer science is
              integral to our philosophy. To practice what you have learned, you
              should be able to do practical programming projects. All you need
              is a willingness to learn; we&apos;ll help you do the rest!
            </Text>
            <Link href="#web-dev">
            <Button width="130px" fontWeight={"light"} colorScheme="buttonBg">
              Learn More
            </Button>
            </Link>
          </Flex>
          <Box
            borderRadius={"15px"}
            height="300px"
            width="400px"
            backgroundColor={"#2E3569"}
            marginTop={"5.5rem"}
            marginLeft={["4rem", "5rem"]}
            direction={"column"}
            padding={"1.5rem"}
          >
            <Heading marginTop={"1rem"} fontSize={"3xl"} color="#FE9292">Intro to Web Dev.</Heading>
            <Text>4 weeks · Introductory Course</Text>
            <br/>
            <Heading fontSize={"3xl"} color="#FE9292">Intro to Game Dev.</Heading>
            <Text>6 weeks · Intermediate Course</Text>
            <br/>
            <Heading fontSize={"3xl"} color="#FE9292">Intro to Python</Heading>
            <Text>2 weeks · Introductory Course</Text>
            <br/>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
