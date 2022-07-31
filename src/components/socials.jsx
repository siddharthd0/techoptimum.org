import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
export default function Socials() {
  return (
    <>
      <Flex flexDirection={"column"}>
        <Flex justifyContent={"center"}>
          <Box w={"1545px"} h={"1px"} bgColor={"#222E75"}></Box>
        </Flex>
        <Flex justifyContent={"center"}>
          <Flex
            //  justifyContent={"center"}
            justifyContent={"space-around"}
            my={"4rem"}
            w={"500px"}
          >
            <Text
              fontWeight={"800"}
              fontSize={"16px"}
              color={"#878787"}
              mr={"50px"}
            >
              TIKTOK
            </Text>
            <Text
              fontWeight={"800"}
              fontSize={"16px"}
              color={"#878787"}
              mr={"50px"}
            >
              TWITTER
            </Text>
            <Text
              fontWeight={"800"}
              fontSize={"16px"}
              color={"#878787"}
              mr={"50px"}
            >
              INSTAGRAM
            </Text>
            <Text
              fontWeight={"800"}
              fontSize={"16px"}
              color={"#878787"}
              mr={"50px"}
            >
              LINKEDIN
            </Text>
            <Text
              fontWeight={"800"}
              fontSize={"16px"}
              color={"#878787"}
              mr={"50px"}
            >
              DISCORD
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
