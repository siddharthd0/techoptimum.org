import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";

export default function PodcastHero() {
  return (
    <>
      <Flex
        margin={"auto"}
        maxW={"800px"}
        direction={"column"}
        mt={["2rem", "5rem"]}
        justifyContent={"center"}
      >
        <Image margin="auto" width={"200px"} src="talks-logo.png" />
        <Heading
          mt="1rem"
          fontWeight={"100"}
          fontSize={["3xl", "5xl"]}
          color="primary"
          textAlign={"Center"}
        >
          Tech Optimum Talks
        </Heading>
        <Text
          margin="auto !important"
          width={"60%"}
          mt="10px !important"
          fontWeight={"100"}
          fontSize={["md", "2xl"]}
          color="primary"
          textAlign={"Center"}
        >
          Listen to discussions with leaders in the Tech Industry.
        </Text>
        <Button
          mt="15px !important"
          margin="auto"
          width={["130px", "185px"]}
          alignContent={"center"}
          fontSize={["md", "lg"]}
          fontWeight={"light"}
          color="black"
          background={"primary"}
          transition="0.3s"
          _hover={{ background: "purple.300" }}
          mb="5rem"
          isDisabled="true"
        >
          Listen Now
        </Button>
      </Flex>
    </>
  );
}
