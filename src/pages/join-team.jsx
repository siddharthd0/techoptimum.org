import Footer from "../components/footer";
import { useState, useEffect, useMemo } from "react";
import Header from "../components/header";
import Socials from "../components/socials";
import { Box, Flex, Wrap, Text, chakra } from "@chakra-ui/react";
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
          "Develop the Website",
          "Attend all required meetings",
          "Implement designs and complete tasks using NodeJS, CSS, Next.js/React.js, and more",
        ],
      },
      {
        role: "Insta Content Manager",
        application: "https://forms.gle/wAPeXbta2oE1WNMz6",
        department: "Marketing",
        responsibility: [
          "Create engaging content for the audience",
          "Complete the designated amount of tasks per week using Canva, Photoshop, etc.",
          "Attend all required meetings",
        ],
      },
      {
        role: "Course Instructor",
        application: "https://forms.gle/q4m3r724RMQvP7F66",
        department: "Education",
        responsibility: [
          "Complete a designated programming course from start to finish",
          "Work on creating programming lessons in English",
          "Proficient in multiple programming languages",
        ],
      },
      {
        role: "HR Associate",
        application: "https://forms.gle/GUD5T4cAPpRy2JYY6",
        department: "Human Resources",
        responsibility: [
          "Maintain staff information logs",
          "Recruit new volunteers",
          "Update staff information documents",
        ],
      },
      {
        role: "Tiktok Content Creator",
        application: "https://forms.gle/L4SN4CjxtUjijN9h6",
        department: "Marketing",
        responsibility: [
          "Create videos to entertain programmers",
          "Edit content using advanced video editing software",
          "Research content ideas",
        ],
      },
      {
        role: "Youtube Content Creator",
        application: "https://forms.gle/tqeJKWVQBCp52xi47",
        department: "Marketing",
        responsibility: [
          "Create Youtube shorts to entertain programmers",
          "Edit content using advanced video editing software",
          "Research new techniques on how to create engaging content",
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
      <Box position="relative" bottom="20px" top="-200px" overflow="hidden">
        <Flex display={["none", "block"]}>
          <JoinTeamLanding />
        </Flex>
        <Text id="jobs"></Text>
        <form>
          <chakra.input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            placeholder="Search..."
            borderRadius={"10px"}
            padding="12px 20px"
            backgroundColor={"blue.500"}
            margin="auto"
            color="white"
          />
        </form>
        <Wrap
          maxW={"1200px"}
          margin={"auto"}
          direction="row"
          justify="center"
          spacing={"30px"}
          zIndex="100"
          marginTop={["150px", "0px"]}
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
      </Box>
      <Socials />
      <Footer />
    </>
  );
}
