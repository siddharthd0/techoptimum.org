import { Link, Heading, Flex, Text, Button } from "@chakra-ui/react";
// import JoinText from "../assets/Join-text-underline.svg";

export default function JoinHero() {
  return (
    <>
      <Flex
        bg="#29368C"
        textAlign="center"
        flexDir="column"
        justifyContent="space-around"
        alignItems="center"
        height="90vh"
        width="100vw"
        paddingTop="5%"
        paddingBottom="10%"
      >
        <Heading fontWeight={100} fontSize={"6xl"}>
          Become a Member.<br />
          It's free.
        </Heading>
        <Text fontSize="2xl">
          Get access to free services, including free <br /> courses, free
          workshops, and a helpful community!
        </Text>
        <Link href="./dashboard">
        <Button
          colorScheme="buttonBg"
          padding="40px"
          fontSize="3xl"
          fontWeight="normal"
          rounded="full"
          _hover={{
            textDecoration: "none !important"
          }}
        >
          Get access now
        </Button>
        </Link>
      </Flex>
    </>
  );
}
