import { Flex, Text, Button } from "@chakra-ui/react";
import JoinText from '../assets/Join-text-underline.svg';

export default function JoinHero() {
  return (
    <>
      <Flex bg="#29368C" textAlign="center" flexDir="column" justifyContent="space-around" alignItems="center" height="90vh" width="100vw" paddingTop="5%" paddingBottom="10%">
        <JoinText height="30%"/>
        <Text fontSize="2xl">Get access to free services, including free <br /> courses, free workshops, and a helpful community!</Text>
        <Button colorScheme="buttonBg" padding="40px" fontSize="3xl" fontWeight="normal" rounded="full">Get access now</Button>
      </Flex>
    </>
  )
}