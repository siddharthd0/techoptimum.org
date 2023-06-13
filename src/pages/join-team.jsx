import { useState, useEffect, useMemo } from "react";
import {
  Image,
  Button,
  Link,
  HStack,
  Heading,
  Tooltip,
  Spacer,
  Box,
  Flex,
  VStack,
  Wrap,
  Text,
  chakra,
  Badge,
} from "@chakra-ui/react";
import JobPostingCard from "../components/job-card";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function JoinTeam() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  const departments = [
    "Marketing",
    "Technology",
    "Human Resources",
    "Hackathon",
    "Education",
  ];

  const cardsInfo = useMemo(
    () => [
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
        role: "HR Associate",
        application: "https://forms.gle/GUD5T4cAPpRy2JYY6",
        department: "Human Resources",
        responsibility: [
          "Curate meticulous records of personnel information",
          "Actively seek out and onboard new volunteer associates",
          "Ensure the timely and accurate updating of all staff-related documentation",
        ],
        shortDescription:
          "Maintain personnel information and help onboard new associates.",
        requirements: [
          "Experience in HR or related field",
          "Excellent organizational skills",
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
        role: "Youtube Content Creator",
        application: "https://forms.gle/tqeJKWVQBCp52xi47",
        department: "Marketing",
        responsibility: [
          "Conceive and produce visually captivating and entertaining Youtube shorts for the programming community",
          "Utilize state-of-the-art video editing tools to meticulously edit and refine content",
        ],
        shortDescription:
          "Create captivating YouTube shorts for the programming community.",
        requirements: [
          "Proven experience with video content creation",
          "Proficiency in video editing tools",
        ],
      },
      {
        role: "Outreach Associate",
        application: "https://forms.gle/WhdUNtTjnNShN3wXA",
        department: "Human Resources",
        responsibility: [
          "Developing and implementing outreach strategies to reach new and diverse audiences",
          "Representing the organization at community events and meetings",
          "Contact famous software engineers/entrepreneurs to participate in TO Talks",
        ],
        shortDescription:
          "Develop outreach strategies and represent our organization in community events.",
        requirements: [
          "Experience in community outreach or related field",
          "Excellent communication skills",
        ],
      },
      {
        role: "Proof-reader",
        application: "https://forms.gle/EBVmKkgeJVxAXNPBA",
        department: "Human Resources",
        responsibility: [
          "Curate and elevate the verbiage and language used in digital mediums, such as the organizations website and social media platforms",
          "Conduct thorough revisions to eliminate grammatical errors and promote fluency in the written content",
        ],
        shortDescription:
          "Enhance the language used in our digital platforms and ensure error-free content.",
        requirements: [
          "Strong proficiency in English language",
          "Proven experience as a proof-reader or related role",
        ],
      },
      {
        role: "Discord Bot Developer",
        application: "https://forms.gle/WzU1TMsQ7WP18UcE6",
        department: "Technology",
        responsibility: [
          "Design and develop innovative and user-friendly bot commands for the Discord server",
          "Monitor server activities and proactively address any issues that arise with the bot",
          "Optimize bot performance to ensure seamless user experience and maximum uptime",
        ],
        shortDescription:
          "Design, develop, and monitor bot commands for our Discord server.",
        requirements: [
          "Experience in bot development",
          "Strong knowledge of Discord API",
        ],
      },
      {
        role: "Community Team",
        application: "https://forms.gle/MRcjD5Ytp5kWcyDy8",
        department: "Community",
        responsibility: [
          "Develop and implement strategies to increase engagement on the Discord server and other platforms",
          "Monitor and moderate community discussions to ensure a positive and inclusive environment",
          "Respond to user inquiries and concerns in a timely and professional manner",
          "Collaborate with other teams to organize events and activities that promote community engagement",
        ],
        shortDescription:
          "Increase community engagement and ensure a positive environment on our platforms.",
        requirements: [
          "Experience in community management",
          "Excellent communication and moderation skills",
        ],
      },
      {
        role: "Hackathon Organizer",
        application: "https://forms.gle/dTR7zvEaQioPxC7W7",
        department: "Hackathon",
        responsibility: [
          "Planning and organizing the hackathon event",
          "Developing the hackathon schedule, including workshops, keynote speeches, and judging sessions",
          "Recruiting and managing a team of volunteers and staff to assist with the event",
          "Developing and implementing marketing and promotion strategies to attract participants and sponsors",
          "Identifying and securing sponsors and partnerships to support the event financially",
        ],
        shortDescription:
          "Plan and organize hackathon events, develop schedules, and manage volunteers.",
        requirements: [
          "Experience in organizing hackathons or similar events",
          "Strong project management skills",
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
        <Box width={"100%"} height={["90vh", "95vh"]}>
          <Box
            mt={["10rem", "15rem"]}
            mx={["2rem", "auto"]}
            borderRadius={"lg"}
            maxWidth="800px"
            padding="1rem 2rem"
          >
            <Flex alignItems={"center"}>
              <Flex mr="2rem" direction={"column"}>
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
                  Become a catalyst for positive change,
                  impacting the lives of programmers globally.
                </Text>
                <Link
                  _hover={{
                    textDecoration: "none",
                  }}
                  href="#jobs"
                >
                  <Button
                   
                  >
                    {" "}
                    Search for volunteer opportunities
                  </Button>
                </Link>
              </Flex>
              <Flex >
                <Image src="join-team-logo.png" />
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Flex>
      <Text id="jobs"></Text>
      <HStack mt="3rem" justify="center">
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
      </HStack>
      <Flex py="2rem" direction={["column", "row"]} justify="center">
        <VStack pr="1rem" height="600px" overflow="scroll" spacing={4}>
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
        <Box pl="3rem" maxW="40%">
          {selectedJob ? (
            <>
              <Box bg="blue.100"borderRadius="md" px="1rem" py="1rem">
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
