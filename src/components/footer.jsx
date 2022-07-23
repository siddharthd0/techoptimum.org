import React from 'react'
import { Flex, Text, Image, Input, Heading, Button } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        padding="60px 10%"
        bgColor="footerBg"
      >
        <Flex direction="column">
          <Flex alignItems="end">
            <Image boxSize='50px' objectFit='cover' src='/Logo.png' alt='Logo' />
            <Text marginLeft={3} fontSize="3xl" color="primary">TECH OPTIMUM</Text>
          </Flex>
          <Text fontSize="md" color="primary" marginTop={8} marginBottom={5}>RECIEVE WEEKLY EMAILS</Text>
          <Input border="none" borderRadius={15} padding="20px" h="50px" placeholder='EMAIL:' bgColor="inputBg" />
        </Flex>
        <Flex direction={"column"} h="140px" justifyContent="space-between" alignItems="start">
          <Heading color="primary" fontSize="lg">About</Heading>
          <Text color="primary" fontSize="lg">COMMUNITY</Text>
          <Text color="primary" fontSize="lg">CONTACT US</Text>
          <Text color="primary" fontSize="lg">JOIN OUR TEAM</Text>
        </Flex>
        <Flex direction={"column"} h="140px" justifyContent="space-between" alignItems="start">
          <Heading color="primary" fontSize="lg">About</Heading>
          <Text color="primary" fontSize="lg">BECOME A MEMBER</Text>
          <Text color="primary" fontSize="lg">WORKSHOPS</Text>
          <Text color="primary" fontSize="lg">JOIN OUR COMMUNITY</Text>
        </Flex>
        <Flex direction={"column"} alignItems="start" justifyContent="center">
          <Text color="primary" fontSize="3xl">Check us out, you’ll <br /> definitely like it!</Text>
          <Button colorScheme="buttonBg" borderRadius="full" px="6" marginTop={5} fontWeight='normal'>Join Now</Button>
        </Flex>
      </Flex>
    </>
  )
}
