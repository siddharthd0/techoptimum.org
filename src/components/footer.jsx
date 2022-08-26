import React from "react";
import { Flex, Text, Image, Input, Heading, Button, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Footer() {
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        padding="60px 10%"
        bgColor="footerBg"
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
          <Input
            border="none"
            borderRadius={15}
            padding="20px"
            h="50px"
            placeholder="EMAIL:"
            bgColor="inputBg"
          />
        </Flex>
        <Flex
          direction={"column"}
          h="130px"
          justifyContent="space-between"
          alignItems="start"
        >
          <Heading color="primary" fontSize="lg">
            ABOUT
          </Heading>

          <Text color="primary" fontSize="md">
            <Link href="./community"> 
            Community
            </Link>

          </Text>
          <Text color="primary" fontSize="md">
          <Link href="./contact"> 
           Contact</Link>
          </Text>
          <Text color="primary" fontSize="md">
          <Link href="./join-leadership"> 
           Join our Team</Link>
          </Text>
        </Flex>

        <Flex
          direction={"column"}
          h="130px"
          justifyContent="space-between"
          alignItems="start"
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
        <Flex direction={"column"} alignItems="start" justifyContent="center">
          <Text width="250px" color="primary" fontSize="md">
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
