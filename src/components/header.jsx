import React from "react";
import { Flex, Text, Button, Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        padding="20px 10%"
      >
        <Heading fontSize='3xl' color='primary'>Tech Optimum</Heading>
        <nav>
          <ul className="nav-links">
            <li><Text color='primary'>HOME</Text></li>
            <li><Text color='primary'>JOIN</Text></li>
            <li><Text color='primary'>HACKATHON</Text></li>
            <li><Text color='primary'>DASHBOARD</Text></li>
            <li><Text color='primary'>CONTACT</Text></li>
          </ul>
        </nav>
        <Button colorScheme="secondaryButton" borderRadius="full" px="6" fontWeight='normal'>Sign up</Button>
        <Button colorScheme="twitter" borderRadius="full" px="6" fontWeight='normal'>Log in</Button>
      </Flex>
    </>
  );
}
