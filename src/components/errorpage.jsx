
import { Link, Container, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Stack, HStack, VStack, Image, Box } from "@chakra-ui/react";
export default function Error() {
  return (
    <>
      <Stack minH="70vh" mt="5rem" direction={["column", "row"]}>
        <Flex margin="auto" display={"flex"} direction={"column"}>
          <Flex direction={"column"} margin="auto">
            <Heading
              color="primary"
              fontSize="5xl"
              fontWeight="medium"
              marginBottom={"2.5rem"}
            >
              Wr④⓪④ng way, Friend.
            </Heading>
            <Text
              fontSize={["xl", "2xl"]}
              color="primary"
              marginBottom={"1rem"}
            >
              These might help you:
            </Text>
            <Button
              mb="1rem"
              rightIcon={
                <ExternalLinkIcon position={"relative"} bottom={"2px"} />
              }
            >
              Home
            </Button>
            <Button
              mb="1rem"
              rightIcon={
                <ExternalLinkIcon position={"relative"} bottom={"2px"} />
              }
            >
              Contact
            </Button>
            <Button
              rightIcon={
                <ExternalLinkIcon position={"relative"} bottom={"2px"} />
              }
            >
              Dashboard
            </Button>
          </Flex>
        </Flex>
      </Stack>
    </>
  );
}
