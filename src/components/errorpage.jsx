import { Link, Container, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Image from "next/image";

export default function Error() {
    return (
      <>
        <Flex height={"80vh"} width={"100%"} direction={"column"}>
          <Flex direction={"column"} width={"70%"} margin={"0rem 0 0 11.9rem"}>
            <Heading color="white" fontSize="40px" marginBottom={"2.5rem"}>
                Wr④⓪④ng way, friend.
            </Heading>
            <Text
              fontSize="2xl"
              color="primary"
              marginBottom={"2.5rem"}
              width={"85%"}
            >
                These might help you:
            </Text>
            <Button
              backgroundColor="transparent"
              _hover={{ backgroundColor: "transparent" }}
              width="fit-content"
              padding={"0"}
              color="#A7B2FF"
              fontWeight={"400"}
              fontSize={"24px"}
              rightIcon={
                <ExternalLinkIcon position={"relative"} bottom={"2px"} />
              }
            >
            <Link href="/">Home</Link>
            </Button>
            <Button
              backgroundColor="transparent"
              _hover={{ backgroundColor: "transparent" }}
              width="fit-content"
              padding={"0"}
              color="#A7B2FF"
              fontWeight={"400"}
              fontSize={"24px"}
              rightIcon={
                <ExternalLinkIcon position={"relative"} bottom={"2px"} />
              }
            >
              Contact
            </Button>
            <Button
              backgroundColor="transparent"
              _hover={{ backgroundColor: "transparent" }}
              width="fit-content"
              padding={"0"}
              color="#A7B2FF"
              fontWeight={"400"}
              fontSize={"24px"}
              rightIcon={
                <ExternalLinkIcon position={"relative"} bottom={"2px"} />
              }
            >
              Dashboard
            </Button>
          </Flex>
        </Flex>
        <Flex marginLeft={"874px"} marginRight={"300"} marginTop={"-774px"} direction={"column"}>
        <Image width={"762px"} height={"633.29px"} src={"/robot_404.png"}  />
        </Flex>
    </>
  );
}
          