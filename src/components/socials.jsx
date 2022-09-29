import React from "react";
import { Box, Text, Flex, Wrap, WrapItem, Center} from "@chakra-ui/react";
export default function Socials() {
  return (
    <>
      <Flex flexDirection={"column"}>
          <Box w={"1545px"} h={"1px"} bgColor={"#222E75"}></Box>
      </Flex>

       <Center>
        
            <Wrap mx="2rem" my={"3rem"}>
            <WrapItem
              fontWeight={"800"}
              fontSize={"16px"}
              color={"#878787"}
               px="1.25rem"
              className="socials-text-tiktok smooth-hover"
            >
              TIKTOK
            </WrapItem>
            <WrapItem
              fontWeight={"800"}
              fontSize={"16px"}
              color={"#878787"}
              px="1.25rem"
              className="socials-text-twitter smooth-hover"
            >
              TWITTER
            </WrapItem>
            <WrapItem
              fontWeight={"800"}
              fontSize={"16px"}
              color={"#878787"}
              px="1.25rem"
              className="socials-text-instagram smooth-hover"
            >
              INSTAGRAM
            </WrapItem>
            <WrapItem
              fontWeight={"800"}
              fontSize={"16px"}
              color={"#878787"}
              px="1.25rem"
              className="socials-text-linkedin smooth-hover"
            >
              LINKEDIN
            </WrapItem>
            <WrapItem
              fontWeight={"800"}
              fontSize={"16px"}
              color={"#878787"}      
              className="socials-text-discord smooth-hover"
              px="1.25rem"
            >
              DISCORD
            </WrapItem>
            </Wrap>
          
        
     </Center>
    </>
  );
}
