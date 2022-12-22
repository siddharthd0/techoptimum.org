import { Link } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Highlight,
} from "@chakra-ui/react";

export default function MissionLanding() {
  return (
    <>
      <Box
        height={["500px", "500px"]}
        marginTop={["-15rem", "-6rem"]}
        className="missionbg"
      >
        <Flex justifyContent={"center"} direction={["column", "row"]}>
          <Flex
            marginTop={["6rem", "10rem"]}
            direction={"column"}
            maxWidth={["90%", "50%"]}
          >
            <Heading
              fontSize={["3xl", "5xl"]}
              color="
              #5EE0F9"
              textAlign={"center"}
              marginBottom={"1.2rem"}
            >
              {" "}
              <Highlight
                query={["Our Mission"]}
                styles={{
                  px: "3",
                  pt: "1.5",
                  rounded: "full",
                  bg: "blue.200",
                  color: "blue.800",
                }}
              >
                Our Mission
              </Highlight>
            </Heading>
            <Text
              textAlign={"center"}
              fontSize={["md", "18px"]}
              marginBottom="1.25rem"
            >
              More than one-third of the world&apos;s population especially students
              continues to be excluded from technology because of the digital
              divide. We offer students in need accessible resources, tools, and
              a learning platform along with an inclusive community to learn
              more about their passion. We envision a diverse community that
              strives for inclusion in the technology industry.
            </Text>
            <Link
              _hover={{
                textDecoration: "none",
              }}
              margin={"auto"}
              href="#accomplish"
            >
              <Button
                borderRadius={"full"}
                margin={"auto"}
                fontWeight={"100"}
                bgColor={"blue.500"}
                width={"350px"}
                _hover={{
                  bgColor: "blue.400",
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
