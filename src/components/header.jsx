import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        padding="20px 10%"
      >
        <Text>Tech Optimum</Text>
        <nav>
          <ul className="nav-links">
            <li>HOME</li>
            <li>JOIN</li>
            <li>HACKATHON</li>
            <li>DASHBOARD</li>
            <li>CONTACT</li>
          </ul>
        </nav>
        <Button>Sign up</Button>
        <Button>Log in</Button>
      </Flex>
    </>
  );
}
