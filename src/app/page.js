"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import HeroHeader from "@/components/homepage-landing";
import Courses from "@/components/courses";
import Finder from "@/components/internship-finder";
import Features from "@/components/features";
import Approach from "@/components/approach";
import Popup from "@/components/popup";
import { Box } from "@chakra-ui/react";

export default function Home() {

  return (
    <Box my={["20px", "130px"]} px={5}>
      <Popup />
      <HeroHeader />
      <Courses />
      <Features />
      <Approach />
      <Finder />
    </Box>
  );
}
