import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

export default function CurriculmLanding() {
  return (
    <>
      <Box className="curriculmbg">
        <Flex direction={["column","row"]}>
          <Flex
            marginLeft={["2rem", "7rem"]}
            marginTop={["3.5rem","8rem"]}
            direction={"column"}
           maxWidth={["90%","50%"]}
          >
            <Heading fontSize={["3xl","5xl"]} color="primary" marginBottom={".75rem"}>
              {" "}
              Tech Optimum Curriculum
            </Heading>
            <Text  fontSize={["sm","md"]} maxWidth="80%"marginBottom="1.25rem">

              Taking an effective and efficient approach to computer science is
              integral to our philosophy. To practice what you have learned, you
              should be able to do practical programming projects. All you need
              is a willingness to learn; we&apos;ll help you do the rest!
            </Text>
            <Link _hover={{
                textDecoration : "none"
            }}  href="#web-dev">
            <Button width="130px" fontWeight={"light"} colorScheme="buttonBg">
              Learn More
            </Button>
            </Link>
          </Flex>
          <Box
          display={["none","block"]}
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
            <Text>4 weeks · Introductory Course</Text>
            <br/>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
