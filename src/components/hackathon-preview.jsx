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
  AspectRatio,
  Image,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useInView } from "framer-motion";
import Head from "next/head";

const ProjectCard = ({ projectName, projectImage, projectUrl }) => {
  return (
    <Box
    data-aos="zoom-in" data-aos-delay="300"
      maxH="170px"
      position="relative"
      boxShadow="lg"
      bgColor="blue.700"
      borderRadius="xl"
      w="100%"
      maxW="500px"
      overflow="hidden"
      border={"2px solid"}
      borderColor="bgColor"
      _hover={{
        border: "2px solid",
        borderColor: "blue.500",
        transition: "400ms",
      }}
    >
      <Image opacity={0.5} src={projectImage} alt={projectName} />

      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        d="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={4}
        textAlign="center"
        color="white"
      >
        <Heading color="primary" fontSize="3xl">
          {projectName}
        </Heading>
        <Button
        
          opacity=".89"
          fontWeight={"100"}
          right="12px"
          colorScheme={"primaryButton"}
          as="a"
          position={"absolute"}
          bottom="10px"
          href={projectUrl}
          isExternal
          mt={2}
        >
          Visit Project <ExternalLinkIcon mb="3px" mx="5px" />
        </Button>
      </Box>
    </Box>
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

      <Box mx="auto" maxW="980px" direction={"column"}>
        <Box>
          <Flex justifyContent={"center"} alignItems="center">
            <Box direction="column">
              <Heading
                color="primary"
                fontSize={["4xl", "6xl"]}
                data-aos="fade-up"
                data-aos-duration="800"
              >
                Tech Optimum Hacks
              </Heading>
              <Flex mb="1rem">
                <Badge
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  mx="6px"
                  colorScheme="teal"
                >
                  300+ Participants
                </Badge>
                <Badge
                  colorScheme="blue"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                  mx="6px"
                >
                  50+ Projects
                </Badge>
              </Flex>
            </Box>
            <Spacer />
            <Button
              transition={"300ms !important"}
              data-aos="fade-up"
              data-aos-duration="900"
              py="10px"
              mx="auto"
              px="50px"
              my="1.5rem"
              bgColor={"#4559E9"}
              borderRadius={"18px"}
              color={"#FFFFFF"}
              fontWeight={"400"}
              fontSize={["lg", "xl"]}
              _hover={{ bgColor: "#3244ca" }}
              _active={{ bgColor: "#3244ca" }}
              colorScheme={"blue"}
              as="a"
              href="/hackathon"
            >
              Last Year&apos;s Recap
            </Button>
          </Flex>
        </Box>
        <Flex justifyContent="space-between">
          <Text
            fontSize="md"
            mr="20px"
            color="primary"
            flexBasis="50%"
            maxWidth="30%" data-aos="fade-up"
            data-aos-duration="1000"
          >
            Participate in our Annual Coding Competition, Tech Optimum Hacks.
            Build a project with a team or solo. Meet new friends Have the
            opportunity to win prizes & more. In our Hackathons, we encourage
            participants to learn new skills, build projects, and have fun!
          </Text>
          <VStack maxWidth="70%">
            <Stack gap="5px" direction="row">
              <ProjectCard
                projectName="Genfolio"
                projectImage="hackathon-preview-project-1.png"
                projectUrl="https://devpost.com/software/genfolio"
              />

              <ProjectCard
                projectName="Steve's Pixels"
                projectImage="hackathon-preview-project-2.png"
                projectUrl="#"
              />
            </Stack>
            <Button
              transition={"300ms !important"}
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="1000"
              py="10px"
              mx="auto"
              px="50px"
              my="1.5rem"
              bgColor={"#4559E9"}
              borderRadius={"18px"}
              color={"#FFFFFF"}
              fontWeight={"400"}
              fontSize={["md", "lg"]}
              _hover={{ bgColor: "#3244ca" }}
              _active={{ bgColor: "#3244ca" }}
              colorScheme={"blue"}
              as="a"
              href="https://techoptimum.devpost.com/project-gallery"
              variant="solid"
              alignSelf="stretch"
             
            >
              View All Projects <ExternalLinkIcon mb="3px" mx="5px" />
            </Button>
          </VStack>
        </Flex>
      </Box>
    </>
  );
};

export default Courses;
