import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Icon,
  VStack,
  Wrap,
  Button,
  Badge,
  Spacer,
  Highlight,
  Link,
  Image,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { BsArrowUpRight } from "react-icons/bs";

const ProjectCard = ({ projectName, projectUrl }) => {
  return (
    <>
      <Button size="xs" as="a" href={projectUrl}>
        {projectName} <ExternalLinkIcon mx="7px" />
      </Button>
    </>
  );
};
const ExpandedProjectCard = ({
  projectName,
  projectUrl,
  projectDescription,
  projectVideoIframe,
  projectImage,
  projectPlace,
}) => {
  return (
    <>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        p="6"
        direction="column"
      >
        <Flex alignItems="center">
        <Heading fontSize="2xl" fontWeight="medium" color="primary">
          {projectName}
        </Heading>
        <Spacer/>
        <Badge py="1" borderRadius="full" px="2" colorScheme="teal">
          {projectPlace}
        </Badge></Flex>

        <Text mt="2" color="blackAlpha.800">
          {projectDescription}
        </Text>
        <Box borderRadius="lg" pt="1rem">
          <iframe
            src={projectVideoIframe}
            title={projectName}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Box>
        <Button
          mt="1rem"
          as="a"
          href={projectUrl}
          rightIcon={<ExternalLinkIcon />}
          variant="outline"
        >
          View Project
        </Button>
      </Box>
    </>
  );
};

export default function HackathonRecap() {
  return (
    <>
      <Flex
       
        width="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        marginBottom={"3rem"}
      >
        <Heading
          color="primary"
          fontWeight={"medium"}
          fontSize={["3xl", "5xl"]}
          textAlign={"center"}
        >
          <Highlight
            query={["2022", "Hacks", "Tech Optimum"]}
            styles={{
              px: "14px",
              py: "10px",
              rounded: "lg",
              bg: "gray.700",
              fontWeight: "medium",
              color: "white",
            }}
          >
            Quick Recap of Tech Optimum Hacks 2022
          </Highlight>
        </Heading>
        <Flex
          width="100%"
          justifyContent="center"
          alignItems="center"
          mt="3rem"
          color="primary"
          direction="column"
          textAlign="center"
        >
          <Heading fontWeight="medium ">Our First ever Hackathon...</Heading>
          <Text maxW="50%" mt=".5rem">
            Tech Optimum Hacks 2022 was our first ever hackathon. We had over
            300 participants from all over the world. We had 4 workshops where
            you got to learn new skills and apply them in the hackathon. All
            participants were awarded with cool things ranging from Replit
            Premium and Free Domains.
          </Text>
          <Heading fontSize="2xl" mt="1rem" mb="1rem" fontWeight="medium">
            Check out some notable projects
          </Heading>
          <VStack maxW="50%" mt={["30px", "0"]}>
            <Wrap  gap="5px" direction={["column", "row"]}>
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
              href="https://techoptimum.devpost.com/project-gallery"
              alignSelf="stretch"
            >
              View All 50 Projects <ExternalLinkIcon mx="7px" />
            </Button>
          </VStack>
        </Flex>
        <Heading
          color="primary"
          fontWeight={"medium"}
          fontSize={["3xl", "5xl"]}
          textAlign={"center"}
          mt="3rem"
        >
          Winners 
        </Heading>
        <Wrap my="2rem">
          <ExpandedProjectCard
            projectPlace="1st Place"
            projectName="Genfolio"
            projectUrl="https://devpost.com/software/genfolio"
            projectDescription="A portfolio generator that allows you to create a website portfolio in seconds using Svelte and Express.js"
           
            projectVideoIframe="https://www.youtube.com/embed/jKoOPKs_bSA"
          />
          <ExpandedProjectCard
            projectPlace="2nd Place"
            projectName="School Smart"
            projectUrl="https://devpost.com/software/school-smart"
            projectDescription="A project created to reduce the effort needed to take attendance, buy lunch using image recognition."
            projectVideoIframe="https://www.youtube.com/embed/WKyBhkX7ads"
          />
        </Wrap>
      </Flex>
    </>
  );
}
