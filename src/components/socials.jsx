import React from "react";
import {
  Box,
  Text,
  Flex,
  Wrap,
  WrapItem,
  Center,
  Link,
} from "@chakra-ui/react";
export default function Socials() {
  return (
    <>
      <Flex flexDirection={"column"}>
        <Box w={"100%"} h={"1px"} bgColor={"#222E75"}></Box>
      </Flex>

      <Center>
        <Wrap mx="2rem" my={"3rem"} justify="center">
          <Link
            isExternal
            _hover={{
              textDecoration: "none",
            }}
            href="https://www.tiktok.com/@techoptimum"
          >
            <WrapItem
              fontWeight={"800"}
              fontSize={"16px"}
              color={"#878787"}
              px="1.25rem"
              className="socials-text-tiktok smooth-hover"
            >
              TIKTOK
            </WrapItem>
          </Link>
          <Link
            isExternal
            _hover={{
              textDecoration: "none",
            }}
            href="https://twitter.com/TechOptimumHQ"
          >
            <WrapItem
              fontWeight={"800"}
              fontSize={"16px"}
              color={"#878787"}
              px="1.25rem"
              className="socials-text-twitter smooth-hover"
            >
              TWITTER
            </WrapItem>
          </Link>
          <Link
            isExternal
            _hover={{
              textDecoration: "none",
            }}
            href="https://www.instagram.com/techoptimum_"
          >
            <WrapItem
              fontWeight={"800"}
              fontSize={"16px"}
              color={"#878787"}
              px="1.25rem"
              className="socials-text-instagram smooth-hover"
            >
              INSTAGRAM
            </WrapItem>
          </Link>
          <Link
            isExternal
            _hover={{
              textDecoration: "none",
            }}
            href="https://www.linkedin.com/company/techoptimum"
          >
            <WrapItem
              fontWeight={"800"}
              fontSize={"16px"}
              color={"#878787"}
              px="1.25rem"
              className="socials-text-linkedin smooth-hover"
            >
              LINKEDIN
            </WrapItem>
          </Link>
          <Link
            isExternal
            _hover={{
              textDecoration: "none",
            }}
            href="https://discord.gg/w7cymgdRBH"
          >
            <WrapItem
              fontWeight={"800"}
              fontSize={"16px"}
              color={"#878787"}
              className="socials-text-discord smooth-hover"
              px="1.25rem"
            >
              DISCORD
            </WrapItem>
          </Link>
        </Wrap>
      </Center>
    </>
  );
}
