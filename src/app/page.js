"use client";

import HeroHeader from "@/components/homepage-landing";
import Courses from "@/components/courses";
import Finder from "@/components/internship-finder";
import Features from "@/components/features";
import Approach from "@/components/approach";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box my={["20px", "130px"]} px={5}>
      <HeroHeader />
      <Courses />
      <Features />
      <Approach />
      <Finder />
    </Box>
  );
}
