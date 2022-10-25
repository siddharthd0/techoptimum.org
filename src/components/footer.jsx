import React from "react";
import {
  Flex,
  Text,
  Image,
  Input,
  Heading,
  Button,
  Link,
  Wrap,
  WrapItem,
  Divider,
} from "@chakra-ui/react";
import {
  ExternalLinkIcon,
  InfoOutlineIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";

export default function Footer() {
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems={{ base: "center", md: "center" }}
        padding="60px 10%"
        bgColor="footerBg"
        direction={{ base: "column", md: "row" }}
        gap={{ base: "20px", md: "0px" }}
      >
        <Flex direction="column">
          <Flex alignItems="end">
            <Image
              boxSize="50px"
              objectFit="cover"
              src="/Logo.png"
              alt="Logo"
            />
            <Text marginLeft={3} fontSize="3xl" color="primary">
              TECH OPTIMUM
            </Text>
          </Flex>
          <Text fontSize="md" color="primary" marginTop={8} marginBottom={5}>
            RECIEVE WEEKLY EMAILS
          </Text>
          <Flex>
            <Input
              border="none"
              borderRadius={15}
              padding="25px"
              h="50px"
              placeholder="Enter your email"
              bgColor="inputBg"
            />
            <Button
              colorScheme="buttonBg"
              fontWeight="normal"
              borderRadius={15}
              padding="25px"
              h="50px"
              marginLeft={5}
              rightIcon={<ArrowForwardIcon />}
            >
              Sign up
            </Button>
          </Flex>
        </Flex>
        <Divider width={{ base: 80, md: 0 }} />
        {/* if screen size greater than medium remove the flex */}

        {/* <Flex
        justifyContent="space-around"> */}
        <Flex
          direction={"column"}
          h="130px"
          justifyContent="space-between"
          alignItems={{ base: "center", md: "start" }}
        >
          <Heading color="primary" fontSize="lg">
            ABOUT
          </Heading>

          <Text color="primary" fontSize="md">
            <Link href="./community">Community</Link>
          </Text>
          <Text color="primary" fontSize="md">
            <Link href="./contact">Contact</Link>
          </Text>
          <Text color="primary" fontSize="md">
            <Link href="./join-leadership">Join our Team</Link>
          </Text>
        </Flex>
        <Divider width={{ base: 80, md: 0 }} />
        <Flex
          direction={"column"}
          h="130px"
          justifyContent="space-between"
          alignItems={{ base: "center", md: "start" }}
        >
          <Heading color="primary" fontSize="lg">
            OTHER
          </Heading>

          <Text color="primary" fontSize="md">
            <Link href="join"> Become a Member</Link>
          </Text>
          <Text color="primary" fontSize="md">
            <Link href="workshops"> Workshops</Link>
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
            fontSize="md"
            textAlign={{ base: "center", md: "left" }}
          >
            At Tech Optimum, we strive for excellence when it comes to
            programming. Interested? Join us in the process of improving the
            future of CS.
          </Text>
          <Button
            colorScheme="buttonBg"
            borderRadius="full"
            px="6"
            marginTop={3}
            fontWeight="normal"
            rightIcon={
              <ExternalLinkIcon position={"relative"} bottom={"2px"} />
            }
          >
            Join now
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
