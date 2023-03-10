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
      <Flex marginTop={"3rem"} direction={"column"} alignItems="center">
        <Heading marginBottom={"2%"} color="primary" fontSize={["4xl", "5xl"]}>
          Executives
        </Heading>
        <Flex mb={"5%"} direction={["column", "row"]} >
        <Wrap justify="center" spacing="30px">
          <ExecutiveCard
            src="/sid.png"
            name="Siddharth Duggal"
            role="Chief Executive Officer"
            description={
              "Siddharth Duggal is a senior in high school who enjoys programming. He enjoys participating in hackathons and making projects that help people. Outside of programming, he enjoys playing the piano and playing video games. "
            }
            linkedin="https://www.linkedin.com/in/siddharth-duggal"
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
          <ExecutiveCard
          src="adityasahas.jpeg"
          name="Aditya Sahasranam"
          role="Chief Operating Officer"
          linkedin={"https://www.linkedin.com/in/adityasahas2025/"}
          description="Aditya is a sophomore  who enjoys coding and video games. He loves doing projects that have an impact on underserved communities. He also enjoys playing tennis and basketball."
          

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
        >
          Volunteers
        </Heading>
        <Flex mx="100px" alignItems={"center"}>
          <Wrap justify="center" spacing="30px">
            <Volunteer
              src="https://ui-avatars.com/api/?background=72a9ed&color=fff&name=Moustafa+Sanad&size=100"
              name="Moustafa Sanad"
              role="Director of Design"
            />
           <Volunteer
              src="aarush.jpg"
              name="Aarush Sah"
              role="Director of Product"/>
  <Volunteer
              src="https://cdn.discordapp.com/attachments/1083256324252504154/1083262089570816001/Screen_Shot_2023-03-08_at_10.36.43_PM.png"
              name="Kaushal Kurpad"
              role="Social Media"/>
              
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
              name="Aviral Dhingra"
              src="https://ui-avatars.com/api/?background=72a9ed&color=fff&name=Aviral+Dhingra&size=100"
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
            name="Neil Sangra"
        src="neils.jpg"
            role="HR Associate"
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
          borderRadius={"14px"}
          maxWidth={"400px"}
          className="missionbg"
          padding="24px"
          textAlign={"center"}
          mx="2rem"
        >
          <Heading
            color="primary"
            mb="5px"
            fontSize={"5xl"}
            alignContent={"center"}
          >
            Our Mission
          </Heading>
          <Text color={"primary"} fontSize={"md"}>
            Tech Optimum was founded on certain beliefs that make our mission
            possible, learn more about them!
          </Text>
          <Link href="/mission">
            <Button
              mt="1rem"
              fontSize={["sm", "md"]}
              rounded="full"
              px="2rem"
              colorScheme="joinTeamBtn"
              fontWeight={"100"}
              transition="300ms"
              _hover={{
                bgColor: "#6C7BE6",
              }}
            >
              Learn more
            </Button>
          </Link>
        </Box>
      </Flex>
    </>
  );
}
