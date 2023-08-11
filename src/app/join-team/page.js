"use client";
import { useState, useEffect, useMemo } from "react";
import {
  Image,
  Button,
  Link,
  Heading,
  Spacer,
  Box,
  Flex,
  VStack,
  Wrap,
  Text,
  chakra,
  Badge,
} from "@chakra-ui/react";
import JobPostingCard from "@/components/job-card";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function JoinTeam() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  const departments = [
    "Marketing",
    "Technology",
    "Human Resources",
    "Education",
  ];

  const cardsInfo = useMemo(
    () => [
      {
        role: "Opportunities Team",
        application: "https://forms.gle/4e639XDZpXhjGxtZ8",
        department: "Education",
        responsibility: [
          "Identify, verify, and populate the database with summer 2024 software engineering internships.",
          "Maintain accurate records of sources and statuses of opportunities identified.",
          "Collaborate effectively with the team to avoid duplication and maximize coverage.",
        ],
        shortDescription:
          "The Opportunities Finder Team Volunteer is a remote role focused on identifying and validating 2024 summer software engineering internships, and updating our database accordingly. This role requires strong research skills, attention to detail, and an interest in software engineering.",
        requirements: [
          "Proficient in comprehensive online research and data management.",
          "Excellent attention to detail and organizational skills for accurate data entry.",
          "Strong written communication skills and interest in the software engineering field.",
        ],
      },
      {
        role: "Video Editor",
        application: "https://forms.gle/QtePyioQ8AykETAS6",
        department: "Technology",
        responsibility: [
          "Assemble and edit raw footage into broadcast-ready videos.",
          "Collaborate with content creators for optimal narrative and visual outcomes.",
          "Apply graphics and special effects to enhance video content.",
          "Incorporate audio elements like music, dialogue, and sound effects.",
          "Review and revise video content based on feedback. ",
        ],
        shortDescription:
          "Edit 3-5 minute videos for our nonprofit. This includes course content, Youtube content, and more",
        requirements: [
          "Proven Video Editing experience with a strong portfolio. ",
          "Familiarity with digital editing software packages (e.g., Adobe Premiere, After Effects, Filmora, etc.). ",
          "Strong understanding of storytelling and visual aesthetics. ",
          "Ability to work under tight deadlines.",
        ],
      },
      {
        role: "Insta Content Creator",
        application: "https://forms.gle/wAPeXbta2oE1WNMz6",
        department: "Marketing",
        responsibility: [
          "Conceptualize and craft compelling content that resonates with the target audience",
          "Deftly utilizing various graphic design platforms such as Canva, Photoshop, etc. to accomplish a set number of tasks per week",
        ],
        shortDescription:
          "Conceptualize and create captivating content for our Instagram platform.",
        requirements: [
          "Proven experience with content creation",
          "Proficiency in graphic design platforms such as Canva, Photoshop",
        ],
      },
      {
        role: "Coding Course Instructor",
        application: "https://forms.gle/q4m3r724RMQvP7F66",
        department: "Education",
        responsibility: [
          "Utilize acquired knowledge to craft polished and instructive programming lessons in the English language",
          "Create and maintain a comprehensive and up-to-date curriculum",
        ],
        shortDescription:
          "Craft polished and instructive programming lessons in English.",
        requirements: [
          "Strong knowledge of programming",
          "Experience in teaching or tutoring",
        ],
      },
      {
        role: "Tiktok Content Creator",
        application: "https://forms.gle/L4SN4CjxtUjijN9h6",
        department: "Marketing",
        responsibility: [
          "Craft visually stunning and engaging video content to delight and entertain the programming community",
          "Utilize state-of-the-art video editing tools to meticulously edit and refine content",
          "Conduct extensive research to identify and develop novel and compelling ideas.",
        ],
        shortDescription:
          "Create engaging video content for our TikTok platform.",
        requirements: [
          "Proven experience with video content creation",
          "Proficiency in video editing tools",
        ],
      },
      {
        role: "Web Designer",
        application: "https://forms.gle/9FayfQddFF6B4Ro39",
        department: "Technology",
        responsibility: [
          "Design visually appealing websites: Create attractive and user-friendly websites by using your creativity, design, Figma/AdobeXD skills.",
          "Collaborate with team: Work with others effectively.",
        ],
        shortDescription:
          "Design visually appealing and user-friendly websites while effectively collaborating with the team.",
        requirements: [
          "Proven experience as a Web Designer",
          "Proficiency in Figma or AdobeXD",
          "Excellent collaboration skills",
          "Strong creative and design skills",
        ],
      },
      {
        role: "Web Developer",
        application: "https://forms.gle/NXQomJvT7dmCq8nU9",
        department: "Technology",
        responsibility: [
          "Contribute to the development and maintenance of the website",
          "Execute designs and assignments utilizing a comprehensive array of cutting-edge technologies such as NodeJS, CSS, Next.js/React.js and more",
        ],
        shortDescription:
          "Develop and maintain the website using cutting-edge technologies such as NodeJS, CSS, Next.js/React.js.",
        requirements: [
          "Proven experience as a Web Developer",
          "Strong proficiency in NodeJS, CSS, Next.js/React.js",
          "Excellent problem-solving skills",
          "Ability to manage multiple assignments simultaneously",
        ],
      },
    ],
    []
  );
  useEffect(() => {
    setFilteredCards(cardsInfo);
  }, [cardsInfo]);
  useEffect(() => {
    setFilteredCards(
      cardsInfo.filter((cardInfo) =>
        cardInfo.department.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, cardsInfo]);

  return (
    <>
      <Flex>
        <Box width={"100%"} height={["60vh", "95vh"]}>
          <Box
            mt={["10rem", "15rem"]}
            mx={["1rem", "auto"]}
            borderRadius={"lg"}
            maxWidth="800px"
            padding="1rem 2rem"
          >
            <Flex alignItems={"center"}>
              <Flex mr="5rem" direction={"column"}>
                <Heading
                  fontWeight="medium"
                  fontSize={["4xl", "6xl"]}
                  color={"primary"}
                >
                  Join the Team
                </Heading>
                <Text
                  pr=".5rem"
                  mt=".3rem"
                  mb="1.3rem"
                  fontSize={["sm", "lg"]}
                  color={"blackAlpha.800"}
                >
                  Become a catalyst for positive change, impacting the lives of
                  programmers globally.
                </Text>
                <Link
                  _hover={{
                    textDecoration: "none",
                  }}
                  href="#jobs"
                >
                  <Button> Search for volunteer opportunities</Button>
                </Link>
              </Flex>
              <Flex>
                <Image src="join-team-logo.png" alt="Join Team Logo" />
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Flex>
      <Text id="jobs"></Text>
      <Wrap mt="3rem" justify="center">
        <Button
          onClick={() => setSearchQuery("")}
          backgroundColor={searchQuery === "" ? "blue.400" : "blue.900"}
          color={searchQuery === "" ? "white" : "blue.200"}
          border="none"
        >
          All Departments
        </Button>
        {departments.map((department) => (
          <Button
            key={department}
            onClick={() => setSearchQuery(department)}
            backgroundColor={
              searchQuery === department ? "blue.400" : "blue.900"
            }
            color={searchQuery === department ? "white" : "blue.200"}
            border="none"
          >
            {department}
          </Button>
        ))}
      </Wrap>
      <Flex py="2rem" direction={["column", "row"]} justify="center">
        <VStack
          px="1rem"
          height={["300px", "600px"]}
          overflow="scroll"
          spacing={4}
        >
          {/* Department selection buttons */}

          {/* Job cards */}
          {filteredCards.map((cardInfo) => (
            <JobPostingCard
              key={cardInfo.role}
              role={cardInfo.role}
              application={cardInfo.application}
              department={cardInfo.department}
              responsibility={cardInfo.responsibility}
              onSelect={() => setSelectedJob(cardInfo)}
              selected={selectedJob && selectedJob.role === cardInfo.role} // pass selected prop
            />
          ))}
        </VStack>
        {/* Job preview info section */}
        <Box
          margin={["auto", "0 !important"]}
          pl={["0", "3rem"]}
          maxW={["80%", "40%"]}
        >
          {selectedJob ? (
            <>
              <Box bg="blue.100" borderRadius="md" px="1rem" py="1rem">
                <Flex>
                  {" "}
                  <Heading color="primary" fontWeight="medium" fontSize="2xl">
                    {selectedJob.role}
                  </Heading>
                  <Spacer />{" "}
                  <Link
                    _hover={{
                      textDecoration: "none",
                    }}
                    href={selectedJob.application}
                    isExternal
                  >
                    <Button
                      border="none"
                      fontWeight="light"
                      backgroundColor="blue.400"
                      color="white"
                      _hover={{
                        bg: "blue.700",
                        color: "white",
                        borderColor: "blue.700",
                      }}
                    >
                      <ExternalLinkIcon marginRight="5px" /> Apply Now
                    </Button>
                  </Link>
                </Flex>

                <Badge colorScheme="teal">{selectedJob.department}</Badge>
              </Box>

              <Flex
                mt="1rem"
                bg="blue.100"
                borderRadius="md"
                px="2rem"
                py="1rem"
                mb="5rem"
                direction="column"
                color="primary"
              >
                <Heading fontWeight="medium" color="primary" fontSize="xl">
                  Responsiblities
                </Heading>
                <chakra.ul pt=".5rem" pb="1rem">
                  {selectedJob.responsibility.map((item, i) => {
                    return (
                      <chakra.li fontSize="sm" key={i}>
                        {item}
                      </chakra.li>
                    );
                  })}
                </chakra.ul>
                <Heading fontWeight="medium" color="primary" fontSize="xl">
                  Requirements
                </Heading>
                <chakra.ul pt=".5rem" pb="1rem">
                  {selectedJob.requirements.map((item, i) => {
                    return (
                      <chakra.li fontSize="sm" key={i}>
                        {item}
                      </chakra.li>
                    );
                  })}
                </chakra.ul>
                <Heading fontWeight="medium" color="primary" fontSize="xl">
                  Benefits
                </Heading>
                <chakra.ul fontSize="sm" pt=".5rem" pb="1rem">
                  <Text pb="6px">
                    As a volunteer at Tech Optimum, you will get numerous
                    benefits:
                  </Text>
                  <chakra.li>Official Volunteering Hours</chakra.li>
                  <chakra.li>
                    Opportunity for Presidents Volunteering Service Award
                  </chakra.li>
                  <chakra.li>Gain new skills and leadership</chakra.li>
                </chakra.ul>
              </Flex>
            </>
          ) : (
            <Text color="primary">Select a job to see more details.</Text>
          )}
        </Box>
      </Flex>
    </>
  );
}
