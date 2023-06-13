import HeroHeader from "../components/homepage-landing";
import Courses from "../components/courses";
import Finder from "../components/internship-finder";
import TestimonialCard from "../components/testimonials-card";
import HackathonPreview from "../components/hackathon-preview";
import Approach from "../components/approach";
import { useToast, Button, Box } from "@chakra-ui/react";
import Link from "next/link";
export default function Home() {
  const toast = useToast();

  return (
    <>
      <Box my={["20px", "130px"]}>
        <HeroHeader />

        <Courses />
        <Approach />
        <Finder />
      </Box>
    </>
  );
}
