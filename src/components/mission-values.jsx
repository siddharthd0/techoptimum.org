import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Highlight,
  Tabs,
  Tooltip,
  Spacer,
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
  WrapItem,
} from "@chakra-ui/react";
import { Wrap } from "@chakra-ui/react";
import MissionValue from "../components/mission-value-card";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function MissionValues() {
  return (
    <>
      <Flex direction="column" maxW="1000px" margin="auto" mb="2rem" mt="2rem">
      <Flex justifyContent={"center"} alignItems="center">
            <Box mt="1rem" direction="column">
              <Heading
                color="primary"
                fontSize={["4xl", "5xl"]}
                data-aos="fade-up"
                data-aos-duration="800"
              >
               Equality
              </Heading>
           
            </Box>
            <Spacer />
            <Button
            fontSize="xl"
              data-aos="fade-up"
              data-aos-duration="900"
             
              my={["1rem", "1.5rem"]}
              bgColor={"#4559E9"}
              borderRadius={"20px"}
              color={"#FFFFFF"}
              fontWeight={"400"}
              px="3rem"
              py="10px"
            
              _hover={{ bgColor: "#3244ca" }}
              _active={{ bgColor: "#3244ca" }}
              colorScheme={"blue"}
              as="a"
              href="/donate"
            >
              Donate to Make a Difference
            </Button>
          </Flex>
        <Flex direction="row" justify="center">
          <Box pr={["0rem", "3rem"]} >
            <Heading py="10px" fontSize="3xl" color="primary">
              Computer Science Education
            </Heading>
            <Link
              _hover={{
                textDecoration: "none",
                color: "primary",
              }}
              href="https://advocacy.code.org/2022_state_of_cs.pdf"
            >
              <Tooltip label="Click to view the full Source of Computer Science Teachers Association, 2020">
                <Stat data-aos="zoom-in" data-aos-duration="500">
                  <StatNumber fontSize="xl" color="primary">
                    54%
                  </StatNumber>

                  <Text pb="5px" fontSize="sm">
                    of public schools in the U.S. do not offer computer science
                    courses.{" "}
                  </Text>
                  <StatHelpText fontSize="9px">
                    {" "}
                    (Computer Science Teachers Association, 2020)
                  </StatHelpText>
                </Stat>
              </Tooltip>
            </Link>
            <Divider borderColor="whiteAlpha.400" pt="5px" mb="14px" />
            <Text fontSize="sm">
              Tech Optimum is working hard to close this bridge this divide and
              make computer science education accessible for everyone.
            </Text>
            <Button
               fontSize="md"
               data-aos="fade-up"
               data-aos-duration="900"
              
               my={[".7rem", "1.3rem"]}
               bgColor={"#4559E9"}
               borderRadius={"20px"}
               color={"#FFFFFF"}
               fontWeight={"400"}
               px="2rem"
               py="10px"
             
               _hover={{ bgColor: "#3244ca" }}
               _active={{ bgColor: "#3244ca" }}
               colorScheme={"blue"}
               as="a"
               href="https://dashboard.techoptimum.org"
            >
              Check out our Learning Platform{" "}
              <ExternalLinkIcon mb="5px" marginLeft="10px" />
            </Button>
          </Box>

          <Box maxW="40%">
            <Heading py="10px" fontSize="3xl" color="primary">
              The Digital Divide
            </Heading>
            <Link
              _hover={{
                textDecoration: "none",
                color: "primary",
              }}
              href="https://www.un.org/en/delegate/itu-29-billion-people-still-offline"
            >
              <Tooltip label="Click to view the full Source of United Nations 2021">
                <Stat data-aos="zoom-in" data-aos-duration="1000">
                  <StatNumber fontSize="lg" color="primary">
                    37%
                  </StatNumber>
                  <Text pb="5px" fontSize="sm">
                    of the global population lack access to the Internet;
                    preventing them from accessing the tools to learn about
                    computer science.
                  </Text>
                  <StatHelpText fontSize="9px">
                    {" "}
                    (United Nations (2021))
                  </StatHelpText>
                </Stat>
              </Tooltip>
            </Link>
            <Divider borderColor="whiteAlpha.400" pt="5px" mb="14px" />
            <Text fontSize="sm">
              With your support, we can make give technology, such as
              Laptops/PCs to people in-need to allow for them to thrive in the
              tech industry.
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Wrap
        pt="2rem !important"
        spacing={"25px"}
        justify="center"
        maxWidth={"1000px"}
        margin="auto"
      >
        <WrapItem>
          <MissionValue
            title={"Diversity"}
            description="Diversity is an important step towards creating a more equitable society for everyone. We strive to have a community of various ethnic, cultural, and social identities."
          />
        </WrapItem>
        <WrapItem>
          <MissionValue
            title="Inclusivity"
            description={
              "Adopting an inclusive mindset can lead to a more diverse community. At Tech Optimum, we strive to foster a sense of community through including everyone."
            }
          />
        </WrapItem>
        <WrapItem>
          <MissionValue
            title={"Passion"}
            description="Being passionate drives our inspiration and creativity. we fuel your desire to learn and explore new things from our compassion in both community and education."
          />
        </WrapItem>
        <WrapItem>
          <MissionValue
            title={"Dependability"}
            description="We are here to support you. We’re always here for you to lean on. We ensure that you have a trustworthy community you can always look forward to. "
          />
        </WrapItem>
        <WrapItem>
          <MissionValue
            title={"Quality"}
            description="Demonstrating quality from us and from you is important to us. Quality leads to your success, which is important to us. We believe that is essential to creating sustainable ideas."
          />
        </WrapItem>
        <WrapItem>
          <MissionValue
            title={"Impactful"}
            description="We don’t exist for no reason. We are here so you can take away important ideas and ensure that Tech Optimum has impacted you more than just a organization. "
          />
        </WrapItem>
      </Wrap>
    </>
  );
}
