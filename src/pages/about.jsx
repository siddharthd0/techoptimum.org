import ExecutiveCard from "../components/executive-card";
import Volunteer from "../components/volunteer-card";
import React from "react";
import {
  Button,
  Wrap,
  Box,
  Heading,
  Text,
  Flex,
  Stack,
} from "@chakra-ui/react";
import AOS from "aos";
import Head from "next/head";
import { useEffect } from "react";
import MissionValues from "../components/mission-values";
import Link from "next/link";

export default function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/aos@next/dist/aos.css"
          rel="stylesheet"
          key="test"
        />
      </Head>
      <Flex marginTop={"8rem"} direction={"column"} alignItems="center">
        <Heading
          fontWeight="medium"
          marginBottom={"2%"}
          color="primary"
          fontSize={["4xl", "5xl"]}
        >
          Executives
        </Heading>
        <Flex mb={"5%"} direction={["column", "row"]}>
          <Wrap justify="center" spacing="30px">
            <ExecutiveCard
              src="/sid.png"
              name="Siddharth Duggal"
              role="Chief Executive Officer"
              description={
                "Meet Siddharth, our Chief Executive Officer. He is a programmer heart, and wants to create an environment for programmers globally to learn & collaborate. He loves diving into hackathons, always eager to apply his coding skills to projects that could help someone. Siddharth firmly believes in the power of education and is on a mission to make Computer Science learning accessible to everyone. "
              }
              linkedin="https://www.linkedin.com/in/siddharth-duggal"
            />
            <ExecutiveCard
              src="adityasahas.jpg"
              name="Aditya Sahasranam"
              role="Chief Operating Officer"
              linkedin={"https://www.linkedin.com/in/adityasahas2025/"}
              description="Meet Aditya, a dedicated student with a keen interest in coding and helping people. He finds great satisfaction in applying his technical skills to projects that serve underserved communities, demonstrating a deep commitment to social impact. Outside the digital domain, Aditya enjoys staying active with tennis and basketball. "
            />
            <ExecutiveCard
              src="/PranithPortraitv2.JPG"
              name="Pranith Molakalapalli"
              role="Chief Technology Officer"
              linkedin="https://www.linkedin.com/in/pranith-molakalapalli/"
              description={
                "Pranith is a senior in high school living life as a programming enthusiast looking forward to competing in hackathons and collaborating on projects that have a societal impact. Apart from his passion for computer science, he plays tennis, video games, and loves to sleep."
              }
            />
          </Wrap>
        </Flex>
      </Flex>
      <Flex direction={"column"} alignItems={"center"}>
        <Heading
          marginBottom={"2%"}
          color="primary"
          fontSize={["4xl", "5xl"]}
          textAlign={"center"}
          mt={["60px", "0px"]}
          fontWeight="medium"
        >
          Volunteers
        </Heading>
        <Flex mx="100px" alignItems={"center"}>
          <Wrap justify="center" spacing="30px">
            <Volunteer
              src="kesh.jpg"
              name="Srinikesh Kanneluru"
              role="Director of Design"
            />
            <Volunteer
              name="Arnav Pandey"
              role="Director of Hackathon"
              src="https://arnavpandey.xyz/picture.png"
            />
            <Volunteer
              src="preetham.png"
              name="Preetham Manapuri"
              role="Director of HR"
            />
            <Volunteer
              src="azariah.png"
              name="Azariah Teklu"
              role="HR Coordinator"
            />

            <Volunteer
              name="Neil Sangra"
              src="neils.jpg"
              role="HR Coordinator"
            />
            <Volunteer src="sahil.png" name="Sahil Pai" role="HR Associate" />
            <Volunteer
              src="https://cdn.discordapp.com/attachments/917279304453328907/1047685381346316328/Screen_Shot_2022-11-30_at_6.27.28_PM.png"
              name="Snehil Kakani"
              role="Web Developer"
            />
            <Volunteer
              name="Vivaan Vora"
              src="https://cdn.discordapp.com/attachments/1065021922447999036/1079588343773413486/vivaan-vora.04d0429.png"
              role="Course Instructor"
            />
            <Volunteer
              name="Ryan Kert"
              src="https://ui-avatars.com/api/?background=72a9ed&color=fff&name=Ryan+Kert&size=100"
              role="Web Developer"
            />
            <Volunteer
              name="Lysander Q."
              src="https://cdn.discordapp.com/attachments/1008805810773708822/1047400317777608704/295565520_1002290440444502_1261252384820745655_n.jpg"
              role="Graphic Designer"
            />
            <Volunteer
              name="Aakarshan Kumar"
              src="https://cdn.discordapp.com/attachments/916543942139469884/1048134367949631488/Screen_Shot_2022-12-02_at_12.11.37_AM.png"
              role="Web Developer"
            />
            <Volunteer
              name="Ganesh Nathan"
              src="https://cdn.discordapp.com/attachments/916543942139469884/1048135087637667850/Screen_Shot_2022-12-02_at_12.14.31_AM.png"
              role="Web Developer"
            />
          </Wrap>
        </Flex>
        <Text mt="2rem" marginBottom={"5rem"} color="primary">
          and many more...
        </Text>

        <Box
          alignItems={"center"}
          alignContent={"center"}
          mb="4rem"
          padding="24px"
          textAlign={"center"}
        >
          <Heading
            color="primary"
            mb="10px"
            fontSize={"5xl"}
            alignContent={"center"}
            fontWeight="medium"
          >
            Our Mission
          </Heading>
          <Text color={"primary"} fontSize={"md"}>
            Tech Optimum was founded on certain beliefs that make our mission
            possible, learn more about them!
          </Text>
          <Link href="/mission">
            <Button px="2rem" mt="1rem" rounded="full" fontWeight="medium">
              Learn more
            </Button>
          </Link>
        </Box>
      </Flex>
    </>
  );
}
