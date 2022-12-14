import React from "react";
import {
  Flex,
  Text,
  Image,
  Input,
  Heading,
  Button,
  Link,
  Divider,
} from "@chakra-ui/react";

export default function Mission() {
  return (
    <>
      <Flex mb="6rem" marginLeft={["2rem", "7rem"]} direction={"column"}>
        <Heading fontSize={"5xl"} color="primary">Our Mission</Heading>
        <Text color="primary"fontSize={"lg"} mt="1.5rem" maxW={"700px"}>
          More than one-third of the world's population especially students
          continues to be excluded from technology because of the digital
          divide. We offer students in need accessible resources, tools, and a
          learning platform along with an inclusive community to learn more
          about their passion. We envision a diverse community that strives for
          inclusion in the technology industry.
        </Text>
      </Flex>
    </>
  );
}
