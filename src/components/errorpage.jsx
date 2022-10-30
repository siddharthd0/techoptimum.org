import { Link, Container, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Stack, HStack, VStack, Image, Box } from "@chakra-ui/react";
export default function Error() {
  return (
    <>
      <Stack direction={["column", "row"]}>
        <Flex display={"flex"} direction={"column"}>
          <Flex
            direction={"column"}
            width={"70%"}
            margin={["0 0 0 3.8rem", "1rem 0 0 11.9rem"]}
          >
            <Heading
              color="white"
              fontSize={["30px", "40px"]}
              marginBottom={"2.5rem"}
            >
              Wr④⓪④ng way, Friend.
            </Heading>
            <Text
              fontSize={["xl", "2xl"]}
              color="primary"
              marginBottom={"1rem"}
              width={"85%"}
            >
              These might help you:
            </Text>
            <Button
              backgroundColor="transparent"
              _hover={{
                backgroundColor: "transparent",
                color: "#9DB2F6",
              }}
              _active={{
                backgroundColor: "transparent",
                color: "#9DB2F6",
              }}
              width="fit-content"
              padding={"0"}
              color="#1B76FF"
              fontWeight={"400"}
              rightIcon={
                <ExternalLinkIcon position={"relative"} bottom={"2px"} />
              }
            >
              HOME
            </Button>
            <Button
              backgroundColor="transparent"
              _hover={{
                backgroundColor: "transparent",
                color: "#9DB2F6",
              }}
              width="fit-content"
              padding={"0"}
              color="#1B76FF"
              fontWeight={"400"}
              rightIcon={
                <ExternalLinkIcon position={"relative"} bottom={"2px"} />
              }
            >
              CONTACT
            </Button>
            <Button
              backgroundColor="transparent"
              _hover={{
                backgroundColor: "transparent",
                color: "#9DB2F6",
              }}
              width="fit-content"
              padding={"0"}
              color="#1B76FF"
              fontWeight={"400"}
              rightIcon={
                <ExternalLinkIcon position={"relative"} bottom={"2px"} />
              }
            >
              DASHBOARD
            </Button>
          </Flex>
        </Flex>
        <Box
          boxSize={["xs", "md", "lg"]}
          paddingLeft={{ base: "60px", md: "0", lg: "0" }}
        >
          <Image src="/robot_404.png" alt="404" />
        </Box>
      </Stack>
    </>
  );
}
