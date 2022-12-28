import { Link } from "@chakra-ui/react";
import { Box, Flex, Heading, Text, Button, Highlight } from "@chakra-ui/react";

export default function MissionLanding() {
  return (
    <>
      <Box
        height={["110vh", "100vh"]}
        marginTop={["-15rem", "-6rem"]}
        className="missionbg"
      >
        <Flex marginLeft={["2rem", "0rem"]} justifyContent={"center"} direction={["column", "row"]}>
          <Flex
            marginTop={["17rem", "15rem"]}
            direction={"column"}
            maxWidth={["90%", "50%"]}
          >
            <Heading
              fontSize={["4xl", "5xl"]}
              color="primary"
              textAlign={"center"}
              marginBottom={"18px"}
            >
              Our Mission:
            </Heading>
            <Text
              textAlign={"center"}
              fontSize={["md", "18px"]}
              marginBottom="26px"
            >
              More than one-third of the world&apos;s population especially
              students continues to be excluded from technology because of the{" "}
              <Link
                isExternal
                href="https://en.wikipedia.org/wiki/Digital_divide"
              >
                digital divide
              </Link>
              . We offer students in need accessible resources, tools, and a
              learning platform along with an inclusive community to learn more
              about their passion. We envision a diverse community that strives
              for inclusion in the technology industry.
            </Text>
            <Link
              _hover={{
                textDecoration: "none",
              }}
              margin={"auto"}
              href="#accomplish"
            >
              <Button
                fontSize={["sm","lg"]}
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
                Learn how we accomplish this
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
