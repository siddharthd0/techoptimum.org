import { Link, Button, Flex, Heading, Text } from "@chakra-ui/react";
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
        marginTop="4rem"
      >
        <Heading color="#6AA0D3" fontSize="6xl">
          Join our Team
        </Heading>
        <Text maxW={"590px"}  marginTop="10px" textAlign="center" fontSize="lg">
          We are a student-run nonprofit organization dedicated to improving the future of the Computer Science industry
        </Text>

        <Link
          _hover={{
            textDecoration: "none",
          }}
          href="#jobs"
        >
          <Button
            marginTop="20px"
            rounded="full"
            pl="2rem"
            pr="2rem"
            colorScheme="joinTeamBtn"
            fontWeight={"100"}
            transition="300ms"
            _hover={{
              bgColor: "#6C7BE6",
            }}
          >
            View Volunteer Positions
          </Button>
        </Link>
      </Flex>
    </>
  );
}
