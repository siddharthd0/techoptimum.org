import Footer from "../components/footer";
import Header from "../components/header";
import Socials from "../components/socials";
import { Box, Flex, Wrap } from "@chakra-ui/react";
import JoinTeamLanding from "../components/join-team-landing";
import JoinTeamJobs from "../components/join-team-jobs";
import JobPostingCard from "../components/job-card";

export default function JoinTeam() {
  return (
    <>
      <Header />
      <Box zIndex={"2"} position="relative" top="-120px" overflow="hidden">
        <JoinTeamLanding />
        {/*   <JoinTeamJobs />*/}
        <Flex margin={"auto"} width="500px" direction="column" justify="center" gap="30px">
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
          application=""
          />
        
        </Flex>
      </Box>
      <Socials />
      <Footer />
    </>
  );
}
