"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import HeroHeader from "@/components/homepage-landing";
import Courses from "@/components/courses";
import Finder from "@/components/internship-finder";
import Features from "@/components/features";
import Approach from "@/components/approach";
import Popup from "@/components/popup";
import { Box, Heading } from "@chakra-ui/react";
import TechGuru from "@/components/tech-guru-show-off";
import Sponsors from "@/components/sponsors";
const sponsorsData = [
  { imagePath: "/sponsors/open-ai.png", link: "https://openai.com" },
  { imagePath: "/sponsors/azure.png", link: "https://azure.microsoft.com" },
  {
    imagePath: "/sponsors/replit.png",
    link: "https://replit.com",
  },
  {
    imagePath: "/sponsors/mercury.png",
    link: "https://mercury.com",
  },

  { imagePath: "/sponsors/desmos.png", link: "https://desmos.com" },
  {
    imagePath: "/sponsors/wolfram.png",
    link: "https://wolfram.com",
  },

  { imagePath: "/sponsors/axure.svg", link: "https://axure.com" },

  {
    imagePath: "/sponsors/interview-cake.jpg",
    link: "https://interviewcake.com",
  },

  {
    imagePath: "/sponsors/aops.png",
    link: "https://artofproblemsolving.com",
  },

  { imagePath: "/sponsors/cocalc.png", link: "https://cocalc.com" },
  {
    imagePath: "/sponsors/taskade.png",
    link: "https://taskade.com",
  },
  {
    imagePath: "/sponsors/echo3d.png",
    link: "https://echo3d.co",
  },
  {
    imagePath: "/sponsors/xyz.png",
    link: "https://xyz.com",
  },
];

export default function Home() {
  return (
    <Box my={["20px", "130px"]} px={5}>
      <Popup />
      <HeroHeader />
      <Heading
        fontSize={["3xl", "4xl"]}
        textAlign="center"
        color="black"
        mt="70px"
      >
        Partners & Sponsors
      </Heading>
      <Heading
        fontSize={["md", "xl"]}
        textAlign="center"
        color="blackAlpha.800"
        fontWeight="medium"
        mt="10px"
      >
        We are proud to be supported by the following companies
      </Heading>

      <Sponsors sponsors={sponsorsData} />
      <Courses />
      
      <Features />
      <Approach />
      <Finder />
    </Box>
  );
}
