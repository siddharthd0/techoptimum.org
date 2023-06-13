import {
  Flex,
  Heading,
  Text,
  Badge,
  Button,
  VStack,
  Stack,
  Box,
  Spacer,
  Center,
  Link,
  Wrap,
  AspectRatio,
  Image,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useInView } from "framer-motion";
import Head from "next/head";
import { IoIosArrowForward } from "react-icons/io";

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

      <Box mt={["0rem", "0"]} px={["20px", "0"]} mx="auto" maxW="980px" direction={{ base: "column", md: "column" }}>
        <Flex direction={{ base: "column", md: "row" }}>
          <Box direction="column">
            <Flex direction={["column", "row"]} mt=".5rem" alignItems="center">
              <Heading textAlign={["center", "none"]} fontSize="3xl" fontWeight="medium" color="primary">
                Tech Optimum Hacks
              </Heading>
              <Spacer />
              <Button
              mt={["1rem", "0"]}
                size="sm"
                rightIcon={<IoIosArrowForward />}
                as="a"
                href="/hackathon"
              >
                Last Year&apos;s Recap
              </Button>
            </Flex>
            <Flex direction={["column", "row"]} alignItems="center" my="4px">
              <Text my={["1rem", "0"]} textAlign={["center", "left"]} color="blackAlpha.800">
                Our annual 48-hour coding competition
              </Text>
              <Badge mx="6px" colorScheme="blue">
                300+ Participants
              </Badge>
              <Badge  mt={["1rem", "0"]} colorScheme="blue" mx="6px">
                50+ Projects
              </Badge>
            </Flex>
          </Box>
        </Flex>
        <Text  mt={["1rem", "0"]} textAlign={["center", "left"]} mb="6px" color="blackAlpha.800">
          Here are just some of the projects that were created at Tech Optimum
          Hacks 2022.
        </Text>
        <Flex direction={{ base: "column", md: "row" }} justifyContent="space-between">
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

              <ProjectCard projectName="A Pixel Game" projectUrl="https://devpost.com/software/steve-s-pixels" />
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
