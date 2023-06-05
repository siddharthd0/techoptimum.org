import React from "react";
import {
  Box,
  Text,
  Flex,
  Wrap,
  WrapItem,
  Center,
  Link,
  Icon,
} from "@chakra-ui/react";
import {
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaDiscord,
  FaLinkedin,
} from "react-icons/fa";
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
              px="1.55rem"
              className="socials-text-tiktok smooth-hover"
            >
              <Icon as={FaTiktok} boxSize={"24px"} />
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
              px="1.55rem"
              className="socials-text-twitter smooth-hover"
            >
              <Icon as={FaTwitter} boxSize={"24px"} />
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
              px="1.55rem"
              className="socials-text-instagram smooth-hover"
            >
              <Icon as={FaInstagram} boxSize={"24px"} />
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
              px="1.55rem"
              className="socials-text-linkedin smooth-hover"
            >
              <Icon as={FaLinkedin} boxSize={"24px"} />
            </WrapItem>
          </Link>
          <Link
            isExternal
            _hover={{
              textDecoration: "none",
            }}
            href="/discord"
          >
            <WrapItem
              fontWeight={"800"}
              fontSize={"16px"}
              color={"#878787"}
              className="socials-text-discord smooth-hover"
              px="1.55rem"
            >
              <Icon as={FaDiscord} boxSize={"24px"} />
            </WrapItem>
          </Link>
        </Wrap>
      </Center>
    </>
  );
}
