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
  Image
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
    {/*  <Flex
        bgColor="#FFAC33"
        color="black"
        py={1.5}
        px={10}
        w="100%"
        zIndex={1000}
      >
        <Text margin={"auto"} textAlign={"center"}>
          This website is still a work in progress. Check out the progress{" "}
          <Link
            _hover={{}}
            isExternal
            href="https://github.com/TechOptimum/Tech-Optimum-Website"
          >
            here
          </Link>
          .
        </Text>
  </Flex>*/}
      <Flex
        zIndex="100 !important"
        justifyContent="space-between"
        alignItems="right"
        padding="25px 12%"
        position={"relative"}
        direction={["column", "row"]}
      >
        <Flex justifyContent={"start"}>
        <Image  display={["none", "block"]} marginTop={"-15px"} w="60px" src="./logo-transparent.png"></Image>

        <Heading textAlign={"center"}  alignItems="left"href="./#" fontSize="3xl" color="primary">
          Tech Optimum
        </Heading>
        </Flex>
<Flex marginTop={["1.5rem", "0rem"]} textAlign={"center"}>
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
                    <MenuItem className="link-navs-dd-text">Curriculum</MenuItem>
                  </Link>
                  <Link href="/join">
                    <MenuItem className="link-navs-dd-text">Community</MenuItem>
                  </Link>
                  <Link href="/hackathon">
                    <MenuItem className="link-navs-dd-text">Tech Optimum Hacks</MenuItem>
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
