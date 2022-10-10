import React from "react";
import { Box, Text, Flex, Wrap, WrapItem, Center} from "@chakra-ui/react";
export default function Socials() {
  return (
    <>
      <Flex flexDirection={"column"}>
          <Box w={"1545px"} h={"1px"} bgColor={"#222E75"}></Box>
        </Flex>
        <Flex justifyContent={"center"}>
          <Flex
            className="social-section"
            //  justifyContent={"center"}
            justifyContent={"space-around"}
            my={"3rem"}
            w={"500px"}
          >
            <a href="https://www.tiktok.com/@techoptimum">
            <Text
              fontWeight={"800"}
              fontSize={"16px"}
              color={"#878787"}
               px="1.25rem"
              className="socials-text-tiktok smooth-hover"
            >
              TIKTOK
            </Text>
            </a>
            <a href="https://twitter.com/TechOptimumHQ">
            <Text
              fontWeight={"800"}
              fontSize={"16px"}
              color={"#878787"}
              px="1.25rem"
              className="socials-text-twitter smooth-hover"
            >
              TWITTER
            </Text>
            </a>
            <a href="https://www.instagram.com/techoptimum_">
            <Text
              fontWeight={"800"}
              fontSize={"16px"}
              color={"#878787"}
              px="1.25rem"
              className="socials-text-instagram smooth-hover"
            >
              INSTAGRAM
            </Text>
            </a>
            <a href="https://www.linkedin.com/company/techoptimum">
            <Text
              fontWeight={"800"}
              fontSize={"16px"}
              color={"#878787"}
              px="1.25rem"
              className="socials-text-linkedin smooth-hover"
            >
              LINKEDIN
            </Text>
            </a>
            <a href="https://discord.gg/w7cymgdRBH">
            <Text
              fontWeight={"800"}
              fontSize={"16px"}
              color={"#878787"}      
              className="socials-text-discord smooth-hover"
              px="1.25rem"
            >
              DISCORD
            </Text>
            </a>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
