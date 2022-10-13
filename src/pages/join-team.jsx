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
        <Wrap justify="center" spacing="30px">
          <JobPostingCard
            role="Web Developer"
            description={
              "Develop the websites, Communicate with other web developers or senior developers, Implements designs & tasks complete the designated amount of tasks per week"
            }
            application="https://forms.gle/NXQomJvT7dmCq8nU9"
          />
          <JobPostingCard role="Instagram Social Media Manager" description={""} application="https://forms.gle/WmjFUvvWBHPRs2Z78" />
        </Wrap>
      </Box>
      <Socials />
      <Footer />
    </>
  );
}
