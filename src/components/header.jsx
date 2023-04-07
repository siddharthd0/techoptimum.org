import React from "react";
import {
  Box,
  Flex,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  List,
  Text,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  useDisclosure,
  Image,
  DrawerHeader,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import { useBoolean } from "@chakra-ui/react";

import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Header() {
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
      y: -10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "fade",
        damping: 10,
        stiffness: 150,
      },
    },
  };
  const drawerButtonVariants = {
    hidden: {
      y: -10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "fade",
        damping: 10,
        stiffness: 150,
      },
    },
  };
  const buttonDelay = 0.15;
  return (
    <>
      <Show breakpoint="(min-width: 800px)">
        <Head>
          <link rel="icon" href="/TechOptimumLogo.png" />
          <meta name="title" content="Tech Optimum" />
          <meta
            name="description"
            content="A student-led organization helping and inspiring future leaders of the tech industry worldwide."
          />
          <meta name="og:title" content="Tech Optimum "></meta>
          <meta
            name="og:description"
            content="A student-led organization dedicated to helping and inspiring the next generation of tech leaders."
          ></meta>
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
                  w="45px"
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
                  fontSize="2xl"
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
                        Home
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
                        About
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
                            Team
                          </MenuItem>
                        </Link>
                        <Link href="/contact">
                          <MenuItem className="link-navs-dd-text">
                            Contact
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
                        Initiatives
                      </MenuButton>
                    </motion.div>
                    <MenuList
                      onMouseEnter={onSecondOpen}
                      onMouseLeave={onSecondClose}
                      className="link-navs-dropdown"
                    >
                      <Link href="./curriculum">
                        <MenuItem className="link-navs-dd-text">
                          Courses
                        </MenuItem>
                      </Link>

                      <Link href="/hackathon">
                        <MenuItem className="link-navs-dd-text">
                          Hackathon
                        </MenuItem>
                      </Link>
                      <Link href="/podcast">
                        <MenuItem className="link-navs-dd-text">Talks</MenuItem>
                      </Link>
                      <Link href="/links">
                        <MenuItem className="link-navs-dd-text">Links</MenuItem>
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
                      <Link href="/join-team">Volunteer</Link>
                    </Text>
                  </motion.div>
                </li>
                <li>
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
                    <Link
                      _hover={{
                        cursor: "pointer",
                      }}
                      href="/donate"
                      isExternal
                    >
                      <Text
                        transition={"400ms"}
                        ml="7px !important"
                        fontWeight={"700!important"}
                        color="primary"
                        _hover={{
                          cursor: "pointer",

                          opacity: "0.7 !important",
                        }}
                      >
                        Donate
                      </Text>
                    </Link>
                  </motion.div>
                </li>
              </ul>
            </nav>
          </Flex>
        </Flex>
      </Show>

      <Show breakpoint="(max-width: 800px)">
        <Flex width="80%" m="auto">
          <motion.div
            variants={{
              ...buttonVariants,
              visible: {
                ...buttonVariants.visible,
              },
            }}
            initial="hidden"
            animate="visible"
          >
            <Flex padding="15px" alignItems={"center"} justifyContent={"start"}>
              <Link _hover={{}} href={"./"}>
                <Image
                  _hover={{
                    cursor: "pointer",
                  }}
                  display={{ base: "block", md: "block" }}
                  w="45px"
                  src="./logo-transparent.png"
                  alt={"Tech Optimum Logo"}
                ></Image>
              </Link>
              <Heading size="md" color="primary">
                Tech Optimum
              </Heading>
            </Flex>
          </motion.div>
          <motion.div
            variants={{
              ...buttonVariants,
              visible: {
                ...buttonVariants.visible,
              },
            }}
            initial="hidden"
            animate="visible"
            style={{ marginLeft: "auto", padding: "0.3rem" }}
          >
            <ResponsiveHeader
              buttonVariants={drawerButtonVariants}
              buttonDelay
            />
          </motion.div>
        </Flex>
      </Show>
    </>
  );
}

const ResponsiveHeader = ({ buttonVariants }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [aboutIsOpen, setAboutIsOpen] = useBoolean();
  const [initiativeIsOpen, setInitiativeIsOpen] = useBoolean();
  const btnRef = React.useRef();
  const buttonDelay = 0.2;

  return (
    <>
      <Box padding="15px">
        <HamburgerIcon
          ref={btnRef}
          onClick={onOpen}
          boxSize="9"
          color="#9da5f0"
        />
        <Box>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton size="lg" />
              <DrawerHeader>
                <Flex alignItems={"center"} justifyContent={"start"}>
                  <Link _hover={{}} href={"./"}>
                    <Image
                      _hover={{
                        cursor: "pointer",
                      }}
                      w="35px"
                      src="./logo-transparent.png"
                      alt={"Tech Optimum Logo"}
                    ></Image>
                  </Link>
                  <Heading size="md" color="primary">
                    Tech Optimum
                  </Heading>
                </Flex>
              </DrawerHeader>
              <DrawerBody>
                <Flex direction="column">
                  <List className="nav-links">
                    <motion.div
                      variants={{
                        ...buttonVariants,
                        visible: {
                          ...buttonVariants.visible,
                          transition: {
                            ...buttonVariants.visible.transition,
                            delay: buttonDelay * 1.5,
                          },
                        },
                      }}
                      initial="hidden"
                      animate="visible"
                    >
                      <Box pb="5">
                        <Text
                          className="link-navs link-navs-responsive"
                          color="primary"
                        >
                          <Link className="link-navs" href="/">
                            Home
                          </Link>
                        </Text>
                      </Box>
                    </motion.div>
                    <motion.div
                      variants={{
                        ...buttonVariants,
                        visible: {
                          ...buttonVariants.visible,
                          transition: {
                            ...buttonVariants.visible.transition,
                            delay: buttonDelay * 2.5,
                          },
                        },
                      }}
                      initial="hidden"
                      animate="visible"
                      className="link-navs-responsive"
                      onClick={() => setAboutIsOpen.toggle()}
                    >
                      <Box pb="5">
                        <Flex>
                          <Text
                            className="link-navs"
                            bgColor={"transparent"}
                            color="primary"
                          >
                            About
                          </Text>
                          {aboutIsOpen ? (
                            <ChevronDownIcon
                              boxSize="5"
                              className="link-navs-dropdown-responsive"
                            />
                          ) : (
                            <ChevronRightIcon
                              boxSize="5"
                              my="auto"
                              className="link-navs-dropdown-responsive"
                            />
                          )}
                        </Flex>
                        {aboutIsOpen && (
                          <Box className="link-navs-responsive">
                            <UnorderedList display="flex" flexDir="column">
                              <ListItem display="block" className="link-navs">
                                <Link href="/about">
                                  <Text py="2">Team</Text>
                                </Link>
                              </ListItem>
                              <ListItem display="block" className="link-navs">
                                <Link href="/contact">
                                  <Text py="2">Contact</Text>
                                </Link>
                              </ListItem>
                              <ListItem display="block" className="link-navs">
                                <Link href="/faq">
                                  <Text pt="2">FAQ</Text>
                                </Link>
                              </ListItem>
                            </UnorderedList>
                          </Box>
                        )}
                      </Box>
                    </motion.div>
                    <Box pb="5">
                      <motion.div
                        variants={{
                          ...buttonVariants,
                          visible: {
                            ...buttonVariants.visible,
                            transition: {
                              ...buttonVariants.visible.transition,
                              delay: buttonDelay * 3,
                            },
                          },
                        }}
                        initial="hidden"
                        animate="visible"
                        className="link-navs-responsive"
                        onClick={() => setInitiativeIsOpen.toggle()}
                      >
                        <Flex>
                          <Text
                            className="link-navs"
                            bgColor={"transparent"}
                            color="primary"
                          >
                            Initiatives
                          </Text>
                          {initiativeIsOpen ? (
                            <ChevronDownIcon
                              boxSize="5"
                              className="link-navs-dropdown-responsive"
                            />
                          ) : (
                            <ChevronRightIcon
                              boxSize="5"
                              my="auto"
                              className="link-navs-dropdown-responsive"
                            />
                          )}
                        </Flex>
                        {initiativeIsOpen && (
                          <Box className="link-navs-responsive">
                            <UnorderedList display="flex" flexDir="column">
                              <ListItem className="link-navs">
                                <Link href="./curriculum">
                                  <Text py="2">Courses</Text>
                                </Link>
                              </ListItem>
                              <ListItem className="link-navs">
                                <Link href="/hackathon">
                                  <Text py="2">Hackathon</Text>
                                </Link>
                              </ListItem>
                              <ListItem className="link-navs">
                                <Link href="/podcast">
                                  <Text py="2">Talks</Text>
                                </Link>
                              </ListItem>
                            </UnorderedList>
                          </Box>
                        )}
                      </motion.div>
                    </Box>
                    <motion.div
                      variants={{
                        ...buttonVariants,
                        visible: {
                          ...buttonVariants.visible,
                          transition: {
                            ...buttonVariants.visible.transition,
                            delay: buttonDelay * 4.5,
                          },
                        },
                      }}
                      initial="hidden"
                      animate="visible"
                      className="link-navs-responsive"
                    >
                      <Box pb="5">
                        <Text
                          className="link-navs"
                          bgColor={"transparent"}
                          color="primary"
                        >
                          <Link href="/join-team">Volunteer</Link>
                        </Text>
                      </Box>
                    </motion.div>
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
                      <Box className="link-navs link-navs-responsive" pb="5">
                        <Link
                          _hover={{
                            cursor: "pointer",
                          }}
                          href="/donate"
                          isExternal
                        >
                          <Text
                            transition={"400ms"}
                            fontWeight={"700!important"}
                            color="primary"
                            _hover={{
                              cursor: "pointer",
                              color: "#ffffff",
                              opacity: "0.7 !important",
                            }}
                          >
                            Donate
                          </Text>
                        </Link>
                      </Box>
                    </motion.div>
                  </List>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
    </>
  );
};
