import { Link, Flex, Text, Heading, IconButton } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";

export default function JoinDiscord() {
  return (
    <>
      <Flex marginLeft={["2rem", "10rem"]} flexDir="column" padding="1rem">
        <Flex marginTop="1.75rem" alignItems="center">
          <Heading fontSize={["2xl","4xl"]} color="primary" display="flex">
            Chatting Community for you
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
              left="10px"
              bottom="3px"
            ></IconButton>
          </Link>
        </Flex>

        <Text maxWidth={"700px"} marginY="15px" fontSize={["sm","xl"]}>
          A public community full of programmers of all skill-levels. Whether
          you need computer science help, want to network, or just want to be
          entertained from our daily memes, we have it all.
        </Text>
        <Flex marginTop={"3.5rem"}>
          <Heading fontSize={["2xl","4xl"]}color="primary">Channels for your Needs </Heading>
        </Flex>
        <Text maxWidth={"700px"} marginY="10px" fontSize={["sm","xl"]}>
          We have many channels where you can chat with other community members
          about various things! From memes, to coding help, we are here for you!
        </Text>
        <Flex
          marginTop="20px"
          w={{ base: "300px", md: "400px", lg: "750px" }}
          h={{ base: "100px", md: "150px", lg: "200px"}}
          display="grid"
          gridTemplateColumns="repeat(2, minmax(0, 1fr))"
        >
          <Flex
            padding={{ base: "5px", md: "20px", lg: "40px" }}
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
              fontSize={{ base: "md", md: "2xl", lg: "3xl" }}
              transition="500ms"
              _hover={{
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              #General
            </Heading>
            <Text fontSize={{ base: "11px", md: "lg", lg: "xl" }}>Discuss with other enthusiasts</Text>
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
              fontSize={{ base: "md", md: "2xl", lg: "3xl" }}
              _hover={{
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              #Coding-memes
            </Heading>
            <Text fontSize={{ base: "11px", md: "lg", lg: "xl" }}>Get your daily dose of laughter</Text>
          </Flex>
        </Flex>
        <Flex
          width={{ base: "300px", md: "400px", lg: "750px" }}
          height={{ base: "130px", md: "230px", lg: "350px" }}
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
              fontSize={{ base: "md", md: "2xl", lg: "3xl" }}
              _hover={{
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              #CS-help
            </Heading>
            <Text fontSize={{ base: "11px", md: "lg", lg: "xl" }}>
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
              paddingTop={["50px", "50px"]}
            >
              <Heading
                fontSize={{ base: "sm", md: "2xl", lg: "3xl" }}
                _hover={{
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                #Networking
              </Heading>

              <Text fontSize={{ base: "10px", md: "lg", lg: "xl" }}>
                Build your network
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
