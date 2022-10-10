import React from "react";
import { Flex, Text, Button, Heading, Link} from "@chakra-ui/react";


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
        <Heading href="./#" color="primary" fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
          Tech Optimum
        </Heading>


        <Flex  alignItems='center'>
          <ul className="nav-links">
            <li>
              <Text className="link-navs" color="primary">
                <Link href="/">HOME</Link>
              </Text>
            </li>
            <li>
            <Text className="link-navs" color="primary">
                <Link href="/join">JOIN</Link>
              </Text>
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
        </Flex>
        <Flex alignItems="right" justifyContent="space-between">
          <Button
            colorScheme="secondaryButton"
            borderRadius="full"
            px="6"
            fontWeight="normal"
            w={{base: '50px', md: '100px', lg: '150px'}}
            fontSize={{base: '10px', md: '20px', lg: '20px'}}
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
            w={{base: '10px', md: '10px', lg: '150px'}}
            fontSize={{base: '10px', md: '10px', lg: '20px'}}
          >
            Log in
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
