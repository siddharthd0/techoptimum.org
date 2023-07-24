import { Flex, Text, Badge, Button, VStack, Box, Wrap } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Head from "next/head";

const ProjectCard = ({ projectName, projectUrl }) => {
  return (
    <>
      <Button size="xs" as="a" href={projectUrl}>
        {projectName} <ExternalLinkIcon mx="7px" />
      </Button>
    </>
  );
};

const Courses = () => {
  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/aos@next/dist/aos.css"
          rel="stylesheet"
          key="test"
        />
      </Head>

      <Box
        mt={["0rem", "0"]}
        px={["20px", "0"]}
        mx="auto"
        direction={{ base: "column", md: "column" }}
      >
        <Flex direction={{ base: "column", md: "row" }}>
          <Box direction="column">
            <Flex
              direction="column"
              alignItems={{ base: "center", md: "start" }}
            >
              <Text
                my={["1rem", "0"]}
                textAlign={["center", "left"]}
                color="blackAlpha.800"
                fontSize="xl"
                fontWeight="400"
              >
                Our annual 48-hour coding competition
              </Text>
              <Flex
                direction="row"
                alignItems={{ base: "center", md: "start" }}
                justifyItems={{ base: "center" }}
              >
                <Badge mx="6px" colorScheme="blue">
                  300+ Participants
                </Badge>
                <Badge mx="6px" colorScheme="blue">
                  50+ Projects
                </Badge>
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <Text
          mt={["1rem", "0"]}
          textAlign={["center", "left"]}
          mb="6px"
          color="blackAlpha.800"
        >
          Here are just some of the projects that were created at Tech Optimum
          Hacks 2022.
        </Text>
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          <VStack mt={["30px", "0"]} maxWidth={["100%", "70%"]}>
            <Wrap gap="5px" direction={{ base: "column", md: "row" }}>
              <ProjectCard
                projectName="Machine Learning Stock Predictor"
                projectUrl="https://devpost.com/software/smartstock-meoq24"
              />
              <ProjectCard
                projectName={"Mental Health Care Manager"}
                projectUrl="https://devpost.com/software/mental-healthcare-manager"
              />
              <ProjectCard
                projectName="A Portfolio Generator"
                projectUrl="https://devpost.com/software/genfolio"
              />
              <ProjectCard
                projectName="Data Visualization for Natural Disasters"
                projectUrl={"https://devpost.com/software/badmap"}
              />

              <ProjectCard
                projectName="A Pixel Game"
                projectUrl="https://devpost.com/software/steve-s-pixels"
              />
              <ProjectCard
                projectName="Bridging the Gender Gap in STEM"
                projectUrl="https://devpost.com/software/lions-bridge-the-gap"
              />
            </Wrap>
            <Button
              as="a"
              href="https://techoptimum.devpost.com/project-gallery"
              alignSelf="stretch"
            >
              View All 50 Projects <ExternalLinkIcon mx="7px" />
            </Button>
          </VStack>
        </Flex>
      </Box>
    </>
  );
};

export default Courses;
