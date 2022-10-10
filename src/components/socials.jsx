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
            className="social-section"
            //  justifyContent={"center"}
            justifyContent={"space-around"}
            my={"3rem"}
            direction={{base:'column',md:'row',lg:'row'}}
            w={{base:'200px',md:'500px',lg:'700px'}}
            fontSize={{base:'20px',md:'15px',lg:'30px'}}
            marginLeft={{base:'75px',md:'70px ',lg:'0'}}
          >
            <Text
              fontWeight={"800"}
              color={"#878787"}
              mr={"50px"}
              className="socials-text-tiktok smooth-hover"
              marginBottom={{base:'10px'}}
            >
           TIKTOK
            </Text>
            <a href="https://twitter.com/TechOptimumHQ">
            <Text
              fontWeight={"800"}
              color={"#878787"}
              mr={"50px"}
              className="socials-text-twitter smooth-hover"
              marginBottom={{base:'10px'}}
            >
              TWITTER
            </Text>
            </a>
            <a href="https://www.instagram.com/techoptimum_">
            <Text
              fontWeight={"800"}
              color={"#878787"}
              mr={"50px"}
              className="socials-text-instagram smooth-hover"
              marginBottom={{base:'10px'}}
            >
              INSTAGRAM
            </Text>
            </a>
            <a href="https://www.linkedin.com/company/techoptimum">
            <Text
              fontWeight={"800"}
              color={"#878787"}
              mr={"50px"}
              className="socials-text-linkedin smooth-hover"
              marginBottom={{base:'10px'}}
            >
              LINKEDIN
            </Text>
            </a>
            <a href="https://discord.gg/w7cymgdRBH">
            <Text
              fontWeight={"800"}
              color={"#878787"}
              mr={"50px"}
              className="socials-text-discord smooth-hover"
              marginBottom={{base:'10px'}}
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
