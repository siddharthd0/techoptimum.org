import React from "react";
import {
  Flex,
  Text,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  Spacer,
  NextChakraLink,
  SimpleButton,
  Image,
} from "@chakra-ui/react";

import Link from "next/link";
import Head from "next/head";

export default function Header() {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();
  const {
    isOpen: isSecondOpen,
    onOpen: onSecondOpen,
    onClose: onSecondClose,
  } = useDisclosure();

  return (
    <>
      <Head>
        <link rel="icon" href="/TechOptimumLogo.png" />
        <meta name="title" content="Tech Optimum" />
        <meta
          name="description"
          content="A student-led organization helping and inspiring future leaders of the tech industry worldwide."
        />
        <title>Tech Optimum</title>
      </Head>
      <Flex
        zIndex="100 !important"
        justifyContent="space-between"
        padding="15px 12%"
        position={"relative"}
        direction={["column", "row"]}
        alignItems="center"
      >
        <Flex alignItems={"center"} justifyContent={"start"}>
          <Link _hover={{}} href={"./"}>
            <Image
              _hover={{
                cursor: "pointer",
              }}
              display={{ base: "block", md: "block" }}
              w="60px"
              src="./logo-transparent.png"
              alt={"Tech Optimum Logo"}
            ></Image>
          </Link>
          <Link href={"./"}>
            <Heading
              _hover={{
                cursor: "pointer",
              }}
              marginTop={"7px"}
              textAlign={"center"}
              alignItems="left"
              href="https://techoptimum.org"
              fontSize="3xl"
              color="primary"
              display={{ base: "none", md: "block" }}
            >
              Tech Optimum
            </Heading>
          </Link>
        </Flex>

        <Flex marginTop={["1.5rem", "2.1px"]} textAlign={"center"}>
          <nav>
            <ul className="nav-links">
              <li>
                <Text className="link-navs" color="primary">
                  <Link href="/">HOME</Link>
                </Text>
              </li>
              <li>
                <Menu gutter={"5"} isOpen={isEditOpen}>
                  <MenuButton
                    className="link-navs"
                    bgColor={"transparent"}
                    color="primary"
                    onMouseEnter={onEditOpen}
                    onMouseLeave={onEditClose}
                  >
                    ABOUT
                  </MenuButton>
                  <div className="testing-nav">
                    <MenuList
                      onMouseEnter={onEditOpen}
                      onMouseLeave={onEditClose}
                      className="link-navs-dropdown"
                    >
                      <Link href="/about">
                        <MenuItem className="link-navs-dd-text">
                          Meet the Team
                        </MenuItem>
                      </Link>
                      <Link href="/contact">
                        <MenuItem className="link-navs-dd-text">
                          Contact us
                        </MenuItem>
                      </Link>
                      <Link href="/faq">
                        <MenuItem className="link-navs-dd-text">Faq</MenuItem>
                      </Link>
                    </MenuList>
                  </div>
                </Menu>
              </li>
              <li>
                <Menu gutter={"5"} isOpen={isSecondOpen}>
                  <MenuButton
                    className="link-navs"
                    bgColor={"transparent"}
                    color="primary"
                    onMouseEnter={onSecondOpen}
                    onMouseLeave={onSecondClose}
                  >
                    INITIATIVES
                  </MenuButton>
                  <MenuList
                    onMouseEnter={onSecondOpen}
                    onMouseLeave={onSecondClose}
                    className="link-navs-dropdown"
                  >
                    <Link href="./curriculum">
                      <MenuItem className="link-navs-dd-text">
                        Curriculum
                      </MenuItem>
                    </Link>
                    <Link href="/join">
                      <MenuItem className="link-navs-dd-text">
                        Community
                      </MenuItem>
                    </Link>
                    <Link href="/hackathon">
                      <MenuItem className="link-navs-dd-text">
                        Tech Optimum Hacks
                      </MenuItem>
                    </Link>
                    <Link href="/podcast">
                      <MenuItem className="link-navs-dd-text">
                        Tech Optimum Talks
                      </MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
              </li>
              <li>
                <Text className="link-navs" color="primary">
                  <Link href="/join-team">VOLUNTEER</Link>
                </Text>
              </li>
            </ul>
          </nav>
        </Flex>
      </Flex>
    </>
  );
}
