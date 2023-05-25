import HeroHeader from "../components/homepage-landing";
import Courses from "../components/courses";
import Jobs from "../components/jobs";
import Finder from "../components/internship-finder";
import Socials from "../components/socials";
import Mission from "../components/mission";
import TestimonialCard from "../components/testimonials-card";
import HackathonPreview from "../components/hackathon-preview";
import { useEffect } from "react";
import { useToast, Button, Box } from "@chakra-ui/react";
import Link from "next/link";
export default function Home() {
  const toast = useToast();


  return (
    <>
    
      <Box my={["20px", "65px"]}>
        <HeroHeader />
        <Mission />
        <Courses />
        <Finder />
        <HackathonPreview />
       
       <Box mt="100px"><TestimonialCard />
       </Box> 
      </Box>
      <Socials />
    </>
  );
}
