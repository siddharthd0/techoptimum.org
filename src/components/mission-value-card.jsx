import { Text, Flex, Box, Image, Heading, WrapItem } from "@chakra-ui/react";

export default function Volunteer({ title, description }) {
  return (
    <>
      <Box
        textAlign={"center"}
        height={"215px"}
        width={"300px"}
        className="missionValueBg"
        display={"column"}
      >
        <Heading color={"primary"} fontSize={"3xl"} mt="1.5rem">
          {title}
        </Heading>
        <Text mt="8px" color={"primary"} px={"24px"} fontSize={"14px"}>
          {description}
        </Text>
      </Box>
    </>
  );
}
