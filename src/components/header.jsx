import React from "react";
import { Flex, Text, Button, Heading, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import Link from "next/link";

export default function Header() {
  return (
    <>
      <Flex
        zIndex={100}
        position="relative"
        justifyContent="space-between"
        alignItems="center"
        padding="20px 10%"
      >
        <Heading href="./#" fontSize="3xl" color="primary">
          Tech Optimum
        </Heading>


        <nav>
          <ul className="nav-links">
            <li>
              <Text className="link-navs" color="primary">
                <Link href="/">HOME</Link>
              </Text>
            </li>
            <li>
            <Menu>
  <MenuButton className="link-navs" bgColor={"transparent"} color="primary"as={Button} >
   ABOUT
  </MenuButton>
  <MenuList className="link-navs-dropdown">
    <MenuItem className="link-navs-dd-text">Meet the Team</MenuItem>
    <MenuItem className="link-navs-dd-text">Contact us</MenuItem>
    <MenuItem className="link-navs-dd-text">Faq</MenuItem>
  </MenuList>
</Menu>
            </li>
            <li>
            <Text className="link-navs" color="primary">
                <Link href="/hackathon">HACKATHON</Link>
              </Text>
            </li>
            <li>
            <Text className="link-navs" color="primary">
                <Link href="/podcast">PODCAST</Link>
              </Text>
            </li>

            <li>
            <Text className="link-navs" color="primary">
                <Link href="/about">ABOUT</Link>
              </Text>
            </li>
          </ul>
        </nav>
        <Flex alignItems="right" justifyContent="space-between">
          <Button
            colorScheme="secondaryButton"
            borderRadius="full"
            px="6"
            fontWeight="normal"
          >
            Sign up
          </Button>
          <Button
            colorScheme="primaryButton"
            borderRadius="full"
            px="6"
            n
            fontWeight="normal"
            marginLeft="20px"
          >
            Log in
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
