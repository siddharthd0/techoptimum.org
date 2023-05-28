import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Highlight,
  Tabs,
  Tooltip,
  TabList,
  TabPanels,
  Tab,
  Divider,
  TabPanel,
  TabIndicator,
  Stat,
  StatLabel,
  StatNumber,
  Link,
  StatHelpText,
  SimpleGrid,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
export default function MissionLanding() {
  return (
    <>
      <Box
        height={["110vh", "100vh"]}
        marginTop={["-15rem", "-6rem"]}
        className="missionbg"
      >
        <Flex
          paddingTop={["17rem", "14rem"]}
          marginLeft={["2rem", "0rem"]}
          justify="center"
          direction={["column", "row"]}
          alignItems="center"
        >
          <Flex pr="2rem" direction={"column"} maxWidth={["90%", "40%"]}>
            <Heading
              fontSize={["3xl", "6xl"]}
              color="primary"
              marginBottom={"10px"}
              textAlign="center"
            >
              Our Mission
            </Heading>
            <Text   textAlign="center"fontSize={["sm", "lg"]} marginBottom="26px">
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
          </Flex>
        
        </Flex>
      </Box>
    </>
  );
}
