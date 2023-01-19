import Footer from "../components/footer";
import { useState, useEffect, useMemo } from "react";
import Header from "../components/header";
import Socials from "../components/socials";
import {
  Image,
  Button,
  Link,
  Heading,
  Tooltip,
  Box,
  Flex,
  Wrap,
  Text,
  chakra,
} from "@chakra-ui/react";
import JoinTeamLanding from "../components/join-team-landing";
import JobPostingCard from "../components/job-card";

export default function JoinTeam() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);

  const cardsInfo = useMemo(
    () => [
      {
        role: "Web Developer",
        application: "https://forms.gle/NXQomJvT7dmCq8nU9",
        department: "Technology",
        responsibility: [
          "Contribute to the development and maintenance of the website",
          "Execute designs and assignments utilizing a comprehensive array of cutting-edge technologies such as NodeJS, CSS, Next.js/React.js and more",
        ],
      },
      {
        role: "Insta Content Manager",
        application: "https://forms.gle/wAPeXbta2oE1WNMz6",
        department: "Marketing",
        responsibility: [
          "Conceptualize and craft compelling content that resonates with the target audience",
          "Deftly utilizing various graphic design platforms such as Canva, Photoshop, etc. to accomplish a set number of tasks per week",
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
      },
      {
        role: "Youtube Content Creator",
        application: "https://forms.gle/tqeJKWVQBCp52xi47",
        department: "Marketing",
        responsibility: [
          "Conceive and produce visually captivating and entertaining Youtube shorts for the programming community",
          "Utilize state-of-the-art video editing tools to meticulously edit and refine content",
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
      },
      {
        role: "Proof-reader",
        application: "https://forms.gle/EBVmKkgeJVxAXNPBA",
        department: "Human Resources",
        responsibility: [
          "Curate and elevate the verbiage and language used in digital mediums, such as the organizations website and social media platforms",
          " Conduct thorough revisions to eliminate grammatical errors and promote fluency in the written content",
        ],
      },
      {
        role: "Discord Bot Developer",
        application: "https://forms.gle/WzU1TMsQ7WP18UcE6",
        department: "Technology",
        responsibility: [
          "Implement advanced and dynamic bot commands",
          "Proactively monitor and handle server-related issues",
          "Continuously improve and optimize bot performance",
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
      <Header />

      <Flex display={["none", "block"]}>
        <Box
          height={"80vh"}
          backgroundImage={"/desk-modified.png"}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          backdropFilter={"blur(10px)"}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Box
            marginX="auto"
            className="missionbg"
            borderRadius={"20px"}
            maxWidth="800px"
            padding="1.3rem 2rem"
            opacity={".95"}
          >
            <Flex alignItems={"center"}>
              <Flex direction={"column"}>
                <Heading fontSize={"6xl"} color={"blue.100"}>
                  Join the Team
                </Heading>
                <Text mt=".3rem" mb="1rem" fontSize={"lg"} color={"blue.200"}>
                  Join our team and become a catalyst for positive change,
                  impacting the lives of programmers globally.
                </Text>
                <Link
                  _hover={{
                    textDecoration: "none",
                  }}
                  href="#jobs"
                >
                  <Button
                    mr={"18px"}
                    px={"25px"}
                    borderRadius={"20px"}
                    colorScheme={"blue"}
                    fontWeight="light"
                  >
                    {" "}
                    Search for volunteer opportunities
                  </Button>
                </Link>
              </Flex>
              <Flex>
                <Image src="puzzle.png" />
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Flex>
      <Text id="jobs"></Text>
      <Flex justify={"center"}>
        <chakra.form justify="center" my="2rem">
          <Tooltip
            placement="right"
            label="Try searching for Marketing, or Tech"
          >
            <chakra.input
              justify="center"
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              placeholder="Search by department..."
              borderRadius={"10px"}
              padding="12px 20px"
              backgroundColor={"blue.500"}
              margin="auto !important"
              color="white"
            />
          </Tooltip>
        </chakra.form>
      </Flex>
      <Wrap
        mb="5rem !important"
        maxW={"1200px"}
        margin={"auto"}
        direction="row"
        justify="center"
        spacing={"30px"}
        zIndex="100"
        marginTop={["150px", "5px"]}
      >
        {filteredCards.map((cardInfo) => (
          <JobPostingCard
            key={cardInfo}
            role={cardInfo.role}
            application={cardInfo.application}
            department={cardInfo.department}
            responsibility={cardInfo.responsibility}
          />
        ))}
      </Wrap>

      <Socials />
      <Footer />
    </>
  );
}
