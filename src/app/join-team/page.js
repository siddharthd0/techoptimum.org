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

  const departments = ["Marketing", "Technology", "Education", "Operations"];

  const cardsInfo = useMemo(
    () => [
      {
        role: "Software Engineer",

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
          { type: "shortAnswer", question: "What is your email?" },
          {
            type: "longAnswer",
            question: "What does Tech Optimum's mission mean to you?",
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
        role: "Development Roadmap Specialist",
        department: "Technology",
        responsibility: [
          "Collaborate with educational and technical teams to design coding roadmaps for different programming languages and technologies.",
          "Research and stay updated on the latest trends and best practices in the tech industry to ensure the relevance and quality of the roadmaps.",
          "Create visually engaging and easy-to-follow roadmap graphics.",
          "Develop supplementary materials and resources to support the learning journey outlined in the roadmaps.",
          "Collect and analyze feedback from users to continuously improve and update the coding roadmaps.",
        ],
        shortDescription:
          "Create and maintain coding roadmaps that guide learners through a structured path to mastering different programming languages and technologies.",
        requirements: [
          "Proven experience in educational content creation or instructional design, preferably in the tech field.",
          "Strong knowledge of various programming languages and technologies.",
          "Ability to break down complex technical topics into manageable learning paths.",
          "Proficiency in graphic design software to create visually engaging roadmap materials.",
        ],
        questions: [
          { type: "shortAnswer", question: "What is your full name?" },
          { type: "shortAnswer", question: "How old are you?" },
          { type: "shortAnswer", question: "What is your email?" },
          {
            type: "longAnswer",
            question: "What does Tech Optimum's mission mean to you?",
          },

          {
            type: "shortAnswer",
            question: "How many years of experience do you have in creating educational content or coding roadmaps?",
          },
          {
            type: "longAnswer",
            question:
              "Describe a challenging project where you had to create a learning roadmap or curriculum. What obstacles did you face and how did you overcome them?",
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
          { type: "shortAnswer", question: "What is your email?" },
          {
            type: "longAnswer",
            question: "What does Tech Optimum's mission mean to you?",
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
        role: "Social Media Manager",
    
        department: "Marketing",
        responsibility: [
          "Conceptualize and craft compelling content that resonates with the target audience on both Instagram and TikTok.",
          "Deftly utilize various graphic design platforms such as Canva, Photoshop, etc., to accomplish a set number of tasks per week.",
          "Adapt content strategies to leverage the unique features and audience demographics of both Instagram and TikTok."
        ],
        shortDescription:
          "Conceptualize and create captivating content for our Instagram and TikTok platforms.",
        requirements: [
          "Proven experience with content creation on Instagram and TikTok.",
          "Proficiency in graphic design platforms such as Canva, Photoshop.",
        ],
        questions: [
          { type: "shortAnswer", question: "What is your full name?" },
          { type: "shortAnswer", question: "How old are you?" },
          { type: "shortAnswer", question: "What is your email?" },
          {
            type: "longAnswer",
            question: "What does Tech Optimum's mission mean to you?",
          },
       
          {
            type: "longAnswer",
            question:
              "Provide an example of captivating Instagram or TikTok content you've created. What was the objective and outcome?",
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
        role: "Computer Science Instructor",

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
          { type: "shortAnswer", question: "What is your email?" },
          {
            type: "longAnswer",
            question: "What does Tech Optimum's mission mean to you?",
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
        role: "UX Designer",

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
          { type: "shortAnswer", question: "What is your email?" },
          {
            type: "longAnswer",
            question: "What does Tech Optimum's mission mean to you?",
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
        role: "Hackathon Organizer",
        department: "Operations",
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
          { type: "shortAnswer", question: "What is your email?" },
          { type: "longAnswer", question: "What does Tech Optimum's mission mean to you?" },
          { type: "longAnswer", question: "Describe a successful event you've helped organize in the past. What were the key factors that contributed to its success?" },
          { type: "shortAnswer", question: "How familiar are you with various online event platforms?" },
          { type: "checkbox", question: "By pressing yes, you confirm that you understand the requirements and responsibilities should you be chosen for this position.", options: ["Yes"] }
        ]
      },
      {
        role: "Partnerships Manager",
        department: "Operations",
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
          { type: "shortAnswer", question: "What is your email?" },
          { type: "longAnswer", question: "What does Tech Optimum's mission mean to you?" },
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
                  <Text fontSize="sm">
                    If you have any questions, please contact us at{" "}
                    <Link
                      color="blue.800"
                      href="mailto:team@techoptimum.org"
                      isExternal
                    >
                      team@techoptimum.org
                    </Link>
                  </Text>

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
