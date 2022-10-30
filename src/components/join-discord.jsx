import {
  Link,
  Flex,
  Text,
  Button,
  Heading,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";

export default function JoinDiscord() {
  return (
    <>
      <Flex flexDir="column" width="100vw" padding="5vw">
        <Flex alignItems="center">
          <Heading display="flex">
            Join our
            <Text mx="15px" color="#738BDA">
              Discord
            </Text>
            Server
          </Heading>
          <Link href="./discord">
            <IconButton
              _hover={{
                backgroundColor: "transparent",
                color: "#738BDA",
              }}
              icon={<BsArrowUpRight />}
              background="transparant"
              color="#1B76FF"
              fontSize="3xl"
            ></IconButton>
          </Link>
        </Flex>
        <Text marginY="40px" fontSize="xl">
          A public community full of programmers of all skill-levels. Whether{" "}
          <br />
          you need computer science help, want to network, or just want to be{" "}
          <br />
          entertained from our daily memes, we have it all.
        </Text>
        <Heading marginTop="60px">Channels for your needs</Heading>
        <Flex
          marginTop="20px"
          w={{ base: "350px", md: "500px", lg: "1000px" }}
          height="167px"
          display="grid"
          gridTemplateColumns="repeat(2, minmax(0, 1fr))"
        >
          <Flex
            padding={{ base: "10px", md: "20px", lg: "40px" }}
            flexDir="column"
            justifyContent="center"
            bg="#4559E9"
            rounded="3xl"
            marginBottom="20px"
            marginRight="20px"
            borderWidth="5px"
            transition={"500ms"}
            borderColor="#4559E9"
            _hover={{
              borderColor: "#79BFF8",
            }}
          >
            <Heading
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              transition="500ms"
              _hover={{
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              #General
            </Heading>
            <Text>Discuss with other enthusiasts</Text>
          </Flex>
          <Flex
            padding={{ base: "10px", md: "20px", lg: "40px" }}
            flexDir="column"
            justifyContent="center"
            bg="#56D16A"
            rounded="3xl"
            marginBottom="20px"
            marginLeft="20px"
            borderWidth="5px"
            transition={"500ms"}
            borderColor="#56D16A"
            _hover={{
              borderColor: "#CBEED0",
            }}
          >
            <Heading
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              _hover={{
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              #Coding-memes
            </Heading>
            <Text>Get your daily dose of laughter</Text>
          </Flex>
        </Flex>
        <Flex
          width={{ base: "350px", md: "500px", lg: "1000px" }}
          height={{ base: "250px", md: "300px", lg: "350px" }}
          marginTop={{ base: "15px", md: "30px", lg: "40px" }}
        >
          <Flex
            paddingTop={{ base: "30px", md: "40px", lg: "100px" }}
            flexDir="column"
            rounded="3xl"
            paddingLeft={"20px"}
            marginRight="20px"
            width="80%"
            className="cs-help"
            borderWidth="5px"
            transition={"500ms"}
            borderColor="transparent"
            _hover={{
              borderColor: "#FBDEA0",
            }}
          >
            <Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
              _hover={{
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              #CS-help
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>
              Get help with your CS problems
            </Text>
          </Flex>
          <Flex
            flexDir="column"
            bg="#05445E"
            rounded="3xl"
            width="25%"
            borderWidth="5px"
            transition={"500ms"}
            borderColor="transparent"
            _hover={{
              borderColor: "#94D3ED",
            }}
          >
            <Flex
              flexDir="column"
              transform="rotate(90deg)"
              margin={"auto"}
              paddingTop={"50px"}
            >
              <Heading
                fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
                _hover={{
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                #Networking
              </Heading>

              <Text fontSize={{ base: "sm", md: "lg", lg: "xl" }}>
                Build your network
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
