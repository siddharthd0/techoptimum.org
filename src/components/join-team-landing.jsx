import { Link, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import JoinBanner from "../assets/join-team-globe.svg";

export default function JoinTeamLanding() {
  return (
    <>
      <Flex marginTop={"-4.5rem"}>
        <JoinBanner width="100vw" />
      </Flex>
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        width="100vw"
        height="80vh"
        zIndex={10}
        marginTop="5rem"
      >
        <Heading color="#6AA0D3" fontSize="6xl">
          Join our Team
        </Heading>
        <Text color="#6AA0D3" marginTop="40px" textAlign="center" fontSize="xl">
          We are a student-run nonprofit organization dedicated to improving{" "}
          <br /> the future of the Computer Science industry
        </Text>

        <Link
          _hover={{
            textDecoration: "none",
          }}
          href="#jobs"
        >
          <Button
            marginTop="30px"
            rounded="full"
            pl="2rem"
            pr="2rem"
            colorScheme="joinTeamBtn"
            fontWeight={"100"}
          >
            View Volunteer Positions
          </Button>
        </Link>
      </Flex>
    </>
  );
}
