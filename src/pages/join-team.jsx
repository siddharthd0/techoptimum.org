import Footer from "../components/footer";
import Header from "../components/header";
import Socials from "../components/socials";
import { Box, Flex, Wrap, Heading, Text } from "@chakra-ui/react";
import JoinTeamLanding from "../components/join-team-landing";
import JobPostingCard from "../components/job-card";

export default function JoinTeam() {
  return (
    <>
      <Header />
      <Box  position="relative" bottom="20px" top="-200px" overflow="hidden">
        <Flex display={["none","block"]}>
        <JoinTeamLanding />
        </Flex>
        <Text id="jobs"></Text>

        <Flex
        height={["700px","400px"]}
          margin={"auto"}
          width="350px"
          direction="column"
          justify="center"
          gap="25px"
         
          zIndex="100"
        >
          <JobPostingCard
            role="Web Developer"
            description={
              "Develop the websites, Communicate with other web developers or senior developers, Implements designs & tasks complete the designated amount of tasks per week"
            }
            application="https://forms.gle/NXQomJvT7dmCq8nU9"
            department={"Technology"}
            responsibilityOne="Develop the Website"
            responsibilityTwo={"Attend all required meetings"}
            responsibilityThree="Implement designs and complete tasks using NodeJS, CSS, Next.js/React.js, and more"
          />
          <JobPostingCard
            role="Social Media Manager"
            application="https://forms.gle/wAPeXbta2oE1WNMz6"
            responsibilityOne={"Create engaging content for the audience"}
            responsibilityTwo="Complete the designated amount of tasks per week using Canva, Photoshop, etc."
            responsibilityThree={"Attend all required meetings"}
            department="Marketing"
          />
          <JobPostingCard
            role="Course Instructor"
            application="https://forms.gle/q4m3r724RMQvP7F66"
            responsibilityOne={
              "Complete a designated programming course from start to finish"
            }
            responsibilityTwo="Work on creating programming lessons in English"
            responsibilityThree={"Proficient in multiple programming languages"}
            department="Education"
          />
        </Flex>
      </Box>
      <Socials />
      <Footer />
    </>
  );
}
