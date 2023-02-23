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
import { motion } from "framer-motion";

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
  const buttonVariants = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 150,
       
      },
    },
  };
  const buttonDelay = 0.15;
  return (
    <>
      <Head>
        <link rel="icon" href="/TechOptimumLogo.png" />
        <meta name="title" content="Tech Optimum" />
        <meta
          name="description"
          content="A student-led organization helping and inspiring future leaders of the tech industry worldwide."
        />
        <meta name="og:title" content="Tech Optimum "></meta>
        <meta name="og:description" content="A student-led organization dedicated to helping and inspiring the next generation of tech leaders."></meta>
        <meta name="og:image" content=" /meta.png"></meta>
        <title>Tech Optimum</title>
      </Head>
      <Flex
        zIndex="100 !important"
        justifyContent="space-between"
        padding="15px 115px"
        position={"relative"}
        direction={["column", "row"]}
        alignItems="center"
      >
         <motion.div
            variants={{
              ...buttonVariants,
              visible: {
                ...buttonVariants.visible,
                transition: {
                  ...buttonVariants.visible.transition,
                  delay: buttonDelay * 1,
                },
              },
            }}
            initial="hidden"
            animate="visible"
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
        </motion.div>

        <Flex marginTop={["1.5rem", "2.1px"]} textAlign={"center"}>
          <nav>
            <ul className="nav-links">
              
              <li>
              <motion.div
            variants={{
              ...buttonVariants,
              visible: {
                ...buttonVariants.visible,
                transition: {
                  ...buttonVariants.visible.transition,
                  delay: buttonDelay * 2,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
                <Text className="link-navs" color="primary">
                  <Link className="link-navs" href="/">
                    HOME
                  </Link>
                </Text>
                </motion.div>
              </li>
              <li>
                <Menu gutter={"5"} isOpen={isEditOpen}>
                <motion.div
            variants={{
              ...buttonVariants,
              visible: {
                ...buttonVariants.visible,
                transition: {
                  ...buttonVariants.visible.transition,
                  delay: buttonDelay * 3.5,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
                  <MenuButton
                    className="link-navs"
                    bgColor={"transparent"}
                    color="primary"
                    onMouseEnter={onEditOpen}
                    onMouseLeave={onEditClose}
                  >
                    ABOUT
                  </MenuButton>
                  </motion.div>
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
                        <MenuItem className="link-navs-dd-text">FAQ</MenuItem>
                      </Link>
                    </MenuList>
                  </div>
                </Menu>
              </li>
              <li>
                <Menu gutter={"5"} isOpen={isSecondOpen}>
                <motion.div
            variants={{
              ...buttonVariants,
              visible: {
                ...buttonVariants.visible,
                transition: {
                  ...buttonVariants.visible.transition,
                  delay: buttonDelay * 5,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
                  <MenuButton
                    className="link-navs"
                    bgColor={"transparent"}
                    color="primary"
                    onMouseEnter={onSecondOpen}
                    onMouseLeave={onSecondClose}
                  >
                    INITIATIVES
                  </MenuButton>
                  </motion.div>
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
              <motion.div
            variants={{
              ...buttonVariants,
              visible: {
                ...buttonVariants.visible,
                transition: {
                  ...buttonVariants.visible.transition,
                  delay: buttonDelay * 6.5,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
                <Text className="link-navs" color="primary">
                  <Link href="/join-team">VOLUNTEER</Link>
                </Text>
                </motion.div>
              </li>
              <li >
              <motion.div
            variants={{
              ...buttonVariants,
              visible: {
                ...buttonVariants.visible,
                transition: {
                  ...buttonVariants.visible.transition,
                  delay: buttonDelay * 8,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
                <Link _hover={{
                  cursor:"pointer",
                }} href="/donate">
                  <Text
                  transition={"400ms"}
                   ml="12px !important" 
                    fontWeight={"bold !important"}
                    color="primary"
                    backgroundColor={"transparent"}
                    _hover={{
                      cursor:"pointer",
                      color: "white",
                      backgroundColor: "transparent",
                    }}
                  >
                    DONATE
                  </Text>
                </Link>
                </motion.div>
              </li>
            </ul>
          </nav>
        </Flex>
      </Flex>
    </>
  );
}
