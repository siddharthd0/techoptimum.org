import { Text, Flex, Box, Image, Heading, WrapItem } from "@chakra-ui/react";

export default function Volunteer({ title, description }) {
  return (
    <>
      <Box
        textAlign={"center"}
        height={"225px"}
        width={"300px"}
        className="missionValueBg"
        display={"column"}
      >
        <Heading color={"primary"} fontSize={"3xl"} mt="1.5rem">
          {title}
        </Heading>
        <Text color={"primary"} mt="8px"  px={"24px"} fontSize={"15px"}>
          {description}
        </Text>
      </Box>
    </>
  );
}
