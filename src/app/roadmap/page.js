"use client";
import {
  Box,
  Center,
  Flex,
  Heading,
  Spacer,
  Text,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import { Element } from "react-scroll";
import React from "react";
const Roadmap = () => {
  const accomplishments = [
    {
      title: "Learning Platform",
      description:
        "We launched our learning platform with several courses and a brand new dashboard.",
      date: "June 2023",
    },
    {
      title: "50 Volunteers",
      description:
        "Our team expanded to over 50 volunteers contributing to the mission.",
      date: "February 2023",
    },
    {
        title: "Initial Launch of our Courses",
        description: "Our first courses were launched on a beta version of our platform, including Pythn, SQL, and JS. Available here: https://courses.techoptimum.org",
        date: "December 2023",
    },
    {
      title: "The First Tech Optimum Talks",
      description:
        "We hosted our first Tech Optimum Talks with guest speaker, Julie Braun, the Founder & CEO of Super Purposes.",
      date: "August 2022",
    },
    {
      title: "Tech Optimum Hacks 2022",
      description:
        "Tech Optimum Hacks 2022 was a 48-hour hackathon where students from all over the world come together to create a project that solves a problem in society",
      date: "July 2022",
    },
    {
      title: "The Beginning",
      description:
        "Tech Optimum was founded in early 2022 with the goal to provide a programming community for all ages and skill levels.",
      date: "January 2022",
    },
  ];

  const comingSoon = [
    {
      title: "Tech Guru",
      description:
        "Tech Optimum's premium AI assistant built into all courses on our platform.",
    },
    {
      title: "25+ Coding Courses",
      description:
        "We will be expanding our course library to over 25 courses.",
    },
    {
      title: "Teacher Dashboard",
      description:
        "We will be launching a dashboard for teachers to manage their students and courses.",
    },
    {
      title: "Tech Optimum Technology Drive",
      description:
        "We will be hosting a technology drive to collect and donate technology (specifically computers) to students in need.",
    },
    {
      title: "Tech Optimum Game",
      description:
        "We will be launching our first game that allows for interactive learning in a fun way.",
    },

    {
      title: "Tech Optimum Hacks 2023",
      description:
        "We will be hosting our second annual hackathon, Tech Optimum Hacks 2023.",
    },
  ];

  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const lineColor = useColorModeValue("gray.400", "gray.600");

  const Milestone = ({ milestone, index, showDate = true }) => (
    <Flex
      direction={index % 2 === 0 ? "row-reverse" : "row"}
      justify="center"
      py={4}
    >
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg={bg}
        borderColor={borderColor}
        p={4}
        boxShadow="lg"
        maxWidth="350px"
        flex="1"
      >
        <Flex alignItems="center">
          <Heading fontSize="lg">{milestone.title}</Heading>
          <Spacer />
          {showDate && (
            <Badge h="19px" colorScheme="green">
              {milestone.date}
            </Badge>
          )}
        </Flex>
        <Text fontSize="sm" mt={2}>
          {milestone.description}
        </Text>
      </Box>
    </Flex>
  );

  const Line = () => <Box bg={lineColor} h="40px" w="1px" my={3} />;

  return (
    <Box mx="1rem">
      <Center
        textAlign="center"
        mt={["7rem", "12rem"]}
        flexDirection="column"
        bg={bg}
        color={color}
      >
        <Heading as="h1" size="2xl" mb={5}>
          Roadmap
        </Heading>
        <Text fontSize="xl" mb={5}>
          Check out where we are and what&apos;s next for Tech Optimum.
        </Text>
      </Center>

      <Element>
        <Box mt="2rem" color="primary" maxWidth="600px" mx="auto">
          <Heading as="h2" size="lg" textAlign="center" mb={3} mt={8}>
            Coming Soon
          </Heading>
          <Flex direction="column" align="center">
            {comingSoon.map((item, i) => (
              <React.Fragment key={i}>
                <Milestone milestone={item} index={i} showDate={false} />
                {i < comingSoon.length - 1 && <Line />}
              </React.Fragment>
            ))}
          </Flex>
          <Heading as="h2" size="lg" textAlign="center" mb={3} mt={8}>
            Shipped
          </Heading>
          <Flex mb="4rem" direction="column" align="center">
            {accomplishments.map((accomplishment, i) => (
              <React.Fragment key={i}>
                <Milestone milestone={accomplishment} index={i} />
                {i < accomplishments.length - 1 && <Line />}
              </React.Fragment>
            ))}
          </Flex>
        </Box>
      </Element>
    </Box>
  );
};

export default Roadmap;
