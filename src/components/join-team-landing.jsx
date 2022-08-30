import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import JoinBanner from "../assets/join-leadership-globe.svg";

export default function JoinTeamLanding() {
  return (
    <>
      <JoinBanner width="100vw" />
      <Flex flexDir="column" justifyContent="center" alignItems="center" position="absolute" top="0px" left="0px" width="100vw" height="80vh" zIndex={10}>
        <Heading color="#6AA0D3" fontSize="6xl">Become a part of our team</Heading>
        <Text color="#6AA0D3" marginTop="40px" textAlign="center" fontSize="xl">We are a student-run nonprofit organization dedicated to improving <br /> the future of the Computer Science industry</Text>
        <Button marginTop="30px" rounded="full" width="15vw" height="6vh" colorScheme="joinTeamBtn">Search For Jobs</Button>
      </Flex>
    </>
  );
}
