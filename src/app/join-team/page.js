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
import Form from "@/components/form";
import { Fade, ScaleFade, Slide, SlideFade, Collapse, IconButton, } from "@chakra-ui/react";
import { AiOutlineArrowDown} from "react-icons/ai";
export default function JoinTeam() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const departments = ["Marketing", "Technology", "Education"];

  const cardsInfo = useMemo(
    () => [
      {
        role: "Video Editor",

        department: "Technology",
        responsibility: [
          "Assemble and edit raw footage into broadcast-ready videos.",
          "Collaborate with content creators for optimal narrative and visual outcomes.",
          "Apply graphics and special effects to enhance video content.",
          "Incorporate audio elements such as music, dialogue, and sound effects.",
          "Review and revise video content based on feedback.",
        ],
        shortDescription:
          "Edit 3-5 minute videos for our nonprofit, including course content, YouTube content, and more.",
        requirements: [
          "Proven video editing experience with a strong portfolio.",
          "Familiarity with digital editing software packages (e.g., Adobe Premiere, After Effects, Filmora, etc.).",
          "Strong understanding of storytelling and visual aesthetics.",
          "Ability to work under tight deadlines.",
        ],
        questions: [
          { type: "shortAnswer", question: "What is your full name?" },
          { type: "shortAnswer", question: "How old are you?" },
          {
            type: "longAnswer",
            question: "What does Tech Optimum's mission mean to you?",
          },
          {
            type: "shortAnswer",
            question: "In which timezone are you located?",
          },
          {
            type: "shortAnswer",
            question: "How many years of video editing experience do you have?",
          },
          {
            type: "longAnswer",
            question:
              "Describe a challenging video editing project you have completed. What obstacles did you face and how did you overcome them?",
          },
          {
            type: "checkbox",
            question:
              "By pressing yes, you confirm that you understand the requirements and responsibilities should you be chosen for this position.",
            options: ["Yes"],
          },
        ],
      },
      {
        role: "Instagram Content Manager",

        department: "Marketing",
        responsibility: [
          "Conceptualize and craft compelling content that resonates with the target audience.",
          "Deftly utilize various graphic design platforms such as Canva, Photoshop, etc., to accomplish a set number of tasks per week.",
        ],
        shortDescription:
          "Conceptualize and create captivating content for our Instagram platform.",
        requirements: [
          "Proven experience with content creation.",
          "Proficiency in graphic design platforms such as Canva, Photoshop.",
        ],
        questions: [
          { type: "shortAnswer", question: "What is your full name?" },
          { type: "shortAnswer", question: "How old are you?" },
          {
            type: "longAnswer",
            question: "What does Tech Optimum's mission mean to you?",
          },
          {
            type: "shortAnswer",
            question: "In which timezone are you located?",
          },
          {
            type: "longAnswer",
            question:
              "Provide an example of captivating Instagram content you've created. What was the objective and outcome?",
          },
          {
            type: "checkbox",
            question:
              "By pressing yes, you confirm that you understand the requirements and responsibilities should you be chosen for this position.",
            options: ["Yes"],
          },
        ],
      },
      
      {
  role: "Fundraising Manager",
  department: "Fundraising",
  responsibility: [
    "Develop and execute a comprehensive fundraising strategy for the organization.",
    "Identify, research, and target potential donors, grants, and fundraising opportunities.",
    "Coordinate and lead fundraising events and campaigns, both online and offline.",
    "Manage and update donor databases.",
    "Prepare and present regular fundraising reports and updates."
  ],
  shortDescription: "Lead the charge in fundraising efforts to support Tech Optimum's initiatives.",
  requirements: [
    "Experience in fundraising and donor relations.",
    "Strong organizational and project management skills.",
    "Excellent communication skills, both written and verbal.",
    "Ability to meet fundraising targets and deadlines."
  ],
  questions: [
    { type: "shortAnswer", question: "What is your full name?" },
    { type: "shortAnswer", question: "How old are you?" },
    { type: "longAnswer", question: "What does Tech Optimum's mission mean to you?" },
    { type: "shortAnswer", question: "In which timezone are you located?" },
    { type: "longAnswer", question: "Describe a successful fundraising campaign you have managed. What were the key factors that contributed to its success?" },
    { type: "shortAnswer", question: "What strategies would you employ to achieve fundraising targets for Tech Optimum?" },
    { type: "checkbox", question: "By pressing yes, you confirm that you understand the requirements and responsibilities should you be chosen for this position.", options: ["Yes"] }
  ]
},

      {
        role: "Coding Course Instructor",

        department: "Education",
        responsibility: [
          "Utilize acquired knowledge to craft polished and instructive programming lessons in English.",
          "Create and maintain a comprehensive and up-to-date curriculum.",
        ],
        shortDescription:
          "Craft polished and instructive programming lessons in English.",
        requirements: [
          "Strong knowledge of programming.",
          "Experience in teaching or tutoring.",
        ],
        questions: [
          { type: "shortAnswer", question: "What is your full name?" },
          { type: "shortAnswer", question: "How old are you?" },
          {
            type: "longAnswer",
            question: "What does Tech Optimum's mission mean to you?",
          },
          {
            type: "shortAnswer",
            question: "In which timezone are you located?",
          },
          {
            type: "longAnswer",
            question:
              "Describe your teaching methodology for coding courses. How do you keep students engaged?",
          },
          {
            type: "shortAnswer",
            question: "In which programming languages are you proficient?",
          },
          {
            type: "checkbox",
            question:
              "By pressing yes, you confirm that you understand the requirements and responsibilities should you be chosen for this position.",
            options: ["Yes"],
          },
        ],
      },
      {
        role: "TikTok Content Manager",

        department: "Marketing",
        responsibility: [
          "Craft visually stunning and engaging video content to delight and entertain the programming community.",
          "Utilize state-of-the-art video editing tools to meticulously edit and refine content.",
          "Conduct extensive research to identify and develop novel and compelling ideas.",
        ],
        shortDescription:
          "Create engaging video content for our TikTok platform.",
        requirements: [
          "Proven experience with video content creation.",
          "Proficiency in video editing tools.",
        ],
        questions: [
          { type: "shortAnswer", question: "What is your full name?" },
          { type: "shortAnswer", question: "How old are you?" },
          {
            type: "longAnswer",
            question: "What does Tech Optimum's mission mean to you?",
          },
          {
            type: "shortAnswer",
            question: "In which timezone are you located?",
          },
          {
            type: "longAnswer",
            question:
              "Share an example of a TikTok video you've produced or contributed to. Describe the objective and the impact it had.",
          },
          {
            type: "checkbox",
            question:
              "By pressing yes, you confirm that you understand the requirements and responsibilities should you be chosen for this position.",
            options: ["Yes"],
          },
        ],
      },

      {
        role: "Website Designer",

        department: "Technology",
        responsibility: [
          "Design visually appealing and user-friendly websites using creativity, design skills, and tools like Figma or AdobeXD.",
          "Effectively collaborate with team members.",
        ],
        shortDescription:
          "Design visually appealing and user-friendly websites while collaborating effectively with the team.",
        requirements: [
          "Proven experience as a Website Designer",
          "Proficiency in Figma or AdobeXD",
          "Excellent collaboration skills",
          "Strong creative and design skills",
        ],
        questions: [
          { type: "shortAnswer", question: "What is your full name?" },
          { type: "shortAnswer", question: "How old are you?" },
          {
            type: "longAnswer",
            question: "What does Tech Optimum's mission mean to you?",
          },
          {
            type: "shortAnswer",
            question: "In which timezone are you located?",
          },
          {
            type: "shortAnswer",
            question: "Do you prefer Figma or AdobeXD? Why?",
          },
          {
            type: "longAnswer",
            question:
              "Share an example of a website design you're particularly proud of.",
          },
          {
            type: "checkbox",
            question:
              "By pressing yes, you confirm that you understand the requirements and responsibilities should you be chosen for this position.",
            options: ["Yes"],
          },
        ],
      },
      {
        role: "Website Developer",

        department: "Technology",
        responsibility: [
          "Contribute to the development and maintenance of the website.",
          "Execute design implementations using technologies such as NodeJS, CSS, and Next.js/React.js.",
        ],
        shortDescription:
          "Develop and maintain the website using cutting-edge technologies like NodeJS, CSS, and Next.js/React.js.",
        requirements: [
          "Proven experience as a Web Developer",
          "Strong proficiency in NodeJS, CSS, Next.js/React.js",
          "Excellent problem-solving skills",
          "Ability to manage multiple assignments simultaneously",
        ],
        questions: [
          { type: "shortAnswer", question: "What is your full name?" },
          { type: "shortAnswer", question: "How old are you?" },
          {
            type: "longAnswer",
            question: "What does Tech Optimum's mission mean to you?",
          },
          {
            type: "shortAnswer",
            question: "In which timezone are you located?",
          },
          {
            type: "shortAnswer",
            question:
              "Describe your level of experience with Next.js/React.js.",
          },
          {
            type: "longAnswer",
            question:
              "Share a challenging bug or problem you encountered and how you resolved it.",
          },
          {
            type: "checkbox",
            question:
              "By pressing yes, you confirm that you understand the requirements and responsibilities should you be chosen for this position.",
            options: ["Yes"],
          },
        ],
      },
      {
        role: "Coding Course Assessment Creator",
        department: "Education",
        responsibility: [
          "Design coding challenges, quizzes, and project-based assessments tailored to the objectives of our coding courses.",
          "Collaborate with coding instructors to ensure the assessments align with the course material and learning objectives.",
          "Analyze student performance data to refine and improve assessment quality.",
          "Ensure assessments test not only basic coding syntax but also problem-solving and algorithmic thinking."
        ],
        shortDescription: "Create assessments to gauge student proficiency and understanding in our coding courses.",
        requirements: [
          "Strong knowledge in various programming languages and coding paradigms.",
          "Understanding of pedagogical methods related to coding and computer science.",
          "Experience in educational settings, specifically around coding or computer science education.",
          "Excellent attention to detail."
        ],
        questions: [
          { type: "shortAnswer", question: "What is your full name?" },
          { type: "shortAnswer", question: "How old are you?" },
          { type: "longAnswer", question: "What does Tech Optimum's mission mean to you?" },
          { type: "shortAnswer", question: "In which timezone are you located?" },
          { type: "longAnswer", question: "Describe your experience in creating coding assessments. What are some key elements you focus on?" },
          { type: "shortAnswer", question: "In which programming languages are you proficient?" },
          { type: "checkbox", question: "By pressing yes, you confirm that you understand the requirements and responsibilities should you be chosen for this position.", options: ["Yes"] }
        ]
      },
      {
        role: "Online Hackathon Organizer",
        department: "Events",
        responsibility: [
          "Plan, coordinate, and execute online hackathons focused on coding and technology.",
          "Work closely with sponsors, mentors, and team members to ensure a smooth and enriching experience for participants.",
          "Manage all logistical details such as platform selection, participant communication, and prize distribution.",
          "Oversee the creation of marketing materials to promote the event, such as social media posts, emails, and website updates.",
          "Analyze post-event data and feedback for continuous improvement."
        ],
        shortDescription: "Organize and manage online hackathons to provide a valuable and enriching experience for participants.",
        requirements: [
          "Prior experience in organizing events, particularly online hackathons or coding events.",
          "Strong organizational and multitasking skills.",
          "Excellent communication and interpersonal skills.",
          "Ability to work well under pressure and meet deadlines."
        ],
        questions: [
          { type: "shortAnswer", question: "What is your full name?" },
          { type: "shortAnswer", question: "How old are you?" },
          { type: "longAnswer", question: "What does Tech Optimum's mission mean to you?" },
          { type: "shortAnswer", question: "In which timezone are you located?" },
          { type: "longAnswer", question: "Describe a successful event you've helped organize in the past. What were the key factors that contributed to its success?" },
          { type: "shortAnswer", question: "How familiar are you with various online event platforms?" },
          { type: "checkbox", question: "By pressing yes, you confirm that you understand the requirements and responsibilities should you be chosen for this position.", options: ["Yes"] }
        ]
      },
      {
        role: "Partnership/Sponsorship Manager",
        application: "https://forms.gle/YourGoogleFormLinkHere",
        department: "Partnerships",
        responsibility: [
          "Identify, contact, and negotiate with potential sponsors and partners to secure financial and in-kind support.",
          "Maintain and manage relationships with existing sponsors and partners.",
          "Coordinate with other departments to ensure sponsor and partner obligations are fulfilled.",
          "Develop and manage sponsorship packages and promotional materials.",
          "Prepare regular updates and reports on partnership activities and outcomes."
        ],
        shortDescription: "Manage and secure partnerships and sponsorships to support Tech Optimum's initiatives and events.",
        requirements: [
          "Proven experience in partnership or sponsorship management.",
          "Strong networking and relationship-building skills.",
          "Excellent communication and negotiation skills.",
          "Ability to work independently and meet deadlines."
        ],
        questions: [
          { type: "shortAnswer", question: "What is your full name?" },
          { type: "shortAnswer", question: "How old are you?" },
          { type: "longAnswer", question: "What does Tech Optimum's mission mean to you?" },
          { type: "shortAnswer", question: "In which timezone are you located?" },
          { type: "longAnswer", question: "Describe a successful partnership or sponsorship deal you've negotiated in the past. What were the key factors that contributed to its success?" },
          { type: "shortAnswer", question: "How would you approach a potential new sponsor for Tech Optimum?" },
          { type: "checkbox", question: "By pressing yes, you confirm that you understand the requirements and responsibilities should you be chosen for this position.", options: ["Yes"] }
        ]
      }
      
      
      
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
            <IconButton
            variant="ghost"
            colorScheme="blue"
            size="lg"
            mt="1rem"
            alignSelf="flex-end"
            alignItem="center"
            textAlign="center"
            mx="auto"
            justifySelf="flex-end"
                justifyContent="center"
              icon={<AiOutlineArrowDown/>}
              aria-label="Scroll down"
/>
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
                  <Button
                    border="none"
                    fontWeight="light"
                    backgroundColor={showForm ? "red.400" : "blue.400"}
                    color="white"
                    _hover={{
                      bg: showForm ? "red.700" : "blue.700",
                      color: "white",
                      borderColor: showForm ? "red.700" : "blue.700",
                    }}
                    onClick={() => setShowForm(!showForm)}
                  >
                    {showForm ? (
                      "Back"
                    ) : (
                      <>
                        <ExternalLinkIcon marginRight="5px" /> Apply Now
                      </>
                    )}
                  </Button>
                </Flex>

                <Badge colorScheme="teal">{selectedJob.department}</Badge>
              </Box>

              <SlideFade in={!showForm} unmountOnExit={true} offsetY="20px">
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
              </SlideFade>
              <SlideFade in={showForm} unmountOnExit={true} offsetY="20px">
                <Form
                  role={selectedJob.role}
                  questions={selectedJob.questions}
                />
              </SlideFade>
            </>
          ) : (
            <Text color="primary">Select a job to see more details.</Text>
          )}
        </Box>
      </Flex>
    </>
  );
}
