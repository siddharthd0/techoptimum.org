import React from "react";
import {
  Flex,
  Text,
  Image,
  Input,
  Heading,
  Button,
  Link,
  Box,
  Divider,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Footer() {
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems={{ base: "center", md: "center" }}
        padding="23px 12% "
        bgColor="footerBg"
        direction={{ base: "column", md: "row" }}
        gap={{ base: "20px", md: "0px" }}
      >
        <Flex alignItems={{ base: "center", md: "start" }} direction="column">
          <Flex alignItems={{ base: "center", md: "start" }}>
            <Image
              width="150px"
              marginBottom={"-1.1rem"}
              src="/text-lblue-transparent.png"
              alt="Logo"
              ml="-12px"
            />
          </Flex>
          <Heading fontSize="md" color="primary" marginTop={8} marginBottom={5}>
            RECIEVE WEEKLY EMAILS
          </Heading>
          <Flex alignItems={"center"}>
            <Input
              border="none"
              borderRadius={"15px 0px 0px 15px"}
              padding="25px"
              h="50px"
              placeholder="Enter your email"
              bgColor="inputBg"
              width="220px"
            />
            <Button
              borderRadius={"0 15px 15px 0px"}
              h="49px"
              colorScheme="buttonBg"
            >
              <ArrowForwardIcon />
            </Button>
          </Flex>
        </Flex>
        <Divider width={{ base: 80, md: 0 }} />
        <Flex
          direction={"column"}
          h="130px"
          justifyContent="space-between"
          alignItems={{ base: "center", md: "start" }}
        >
          <Heading color="primary" fontSize="md">
            ABOUT
          </Heading>
          <Text color="primary" fontSize="md">
            <Link href="./faq">FAQ</Link>
          </Text>
          <Text color="primary" fontSize="md">
            <Link href="./contact">Contact</Link>
          </Text>
          <Text color="primary" fontSize="md">
            <Link href="./about">Team</Link>
          </Text>
        </Flex>
        <Divider  width={{ base: 80, md: 0 }} />
        <Flex
          direction={"column"}
          h="130px"
          justifyContent="space-between"
          alignItems={{ base: "center", md: "start" }}
        >
          <Heading color="primary" fontSize="md">
            OTHER
          </Heading>

          <Text color="primary" fontSize="md">
            <Link href="join"> Community</Link>
          </Text>
          <Text color="primary" fontSize="md">
            <Link href="curriculum"> Courses</Link>
          </Text>
          <Text color="primary" fontSize="md">
            <Link href="discord"> Discord</Link>
          </Text>
        </Flex>
        {/* </Flex> */}
        <Divider width={{ base: 80, md: 0 }} />
        <Flex
          direction={"column"}
          alignItems={{ base: "center", md: "start" }}
          justifyContent={{ base: "center", md: "start" }}
        >
          <Text
            width={{ base: "300px", md: "250px" }}
            color="primary"
            fontSize="sm"
            textAlign={{ base: "center", md: "left" }}
          >
            Tech Optimum is a non-profit organization that aims to provide
            educational resources to underprivileged students, to ensure
            everyone has access to the same opportunities.
          </Text>
        </Flex>
      </Flex>

      <Box>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          padding="15px 12% "
          backgroundColor={"footerBg"}
          direction={{ base: "column", md: "row" }}
        >
          <Text color="primary" fontSize="sm">
            Tech Optimum © 2023. All rights reserved.
          </Text>
          <Text display={"flex"} color="primary" fontSize="sm">
          <Text>EIN: 88-3677650 | team@techoptimum.org</Text>
          </Text>
        </Flex>

      </Box>
    </>
  );
}
