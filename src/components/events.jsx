import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Events() {
  return (
    <Flex marginLeft={"7rem"} marginTop={"10rem"} direction={"column"}>
      <Heading color="primary" fontSize="5xl">
        Events
      </Heading>
      <Text color="primary" fontSize="3xl" marginTop={"2.5rem"}>
        Participate in events hosted by Tech Optimum
      </Text>
      <Text color="primary" fontSize="xl" marginTop={"2.5rem"} width={"70%"}>
        We host yearly hackathons. A hackathon is 48-hour coding competition in
        which participants can code projects as a team or individually and
        competet for numerous prizes!. Not only that but, we host fun
        tournaments.
      </Text>
    </Flex>
  );
}
