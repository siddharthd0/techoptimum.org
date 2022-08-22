import { Link, Container, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { Stack, HStack, VStack } from '@chakra-ui/react'
export default function Error() {
    return (
      <>
      <Stack direction={['column', 'row']} >
        <Flex display={"flex"} direction={"column"}>
          <Flex direction={"column"} width={"70%"} margin={"1rem 0 0 11.9rem"}>
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
        <Image width={"520px"} height={"550px"} src={"/robot_404.png"}  />
        </Stack>
    </>
  );
}
          