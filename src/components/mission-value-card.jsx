import { Text, Flex, Box, Image, Heading, WrapItem } from "@chakra-ui/react";

export default function Volunteer({ title, description }) {
  return (
    <>
      <Box
        textAlign={"center"}
        height={["180px","225px"]}
        width={"300px"}
       
        display={"column"}
        borderRadius="md"
      >
        <Heading  color={"primary"} fontSize={["xl", "3xl"]} mt="1.5rem">
          {title}
        </Heading>
        <Text color={"primary"} mt="8px"  px={"24px"} fontSize={["xs", "sm"]}>
          {description}
        </Text>
      </Box>
    </>
  );
}
