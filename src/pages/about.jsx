import Footer from "../components/footer";
import Header from "../components/header";
import ExecutiveCard from "../components/executive-card";
import Volunteer from "../components/volunteer-card";
import React from "react";
import {
  Wrap,
  Box,
  Heading,
  Text,
  Flex,
  Stack,
  Center,
} from "@chakra-ui/react";
import AOS from "aos";
import Head from "next/head";
import { useEffect } from "react";
import ChatIcon from "../assets/chat-icon.svg";
import HeartIcon from "../assets/heart-icon.svg";
import SupportIcon from "../assets/lightning-icon.svg";

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
      <Header />

      <Flex alignItems={"center"} marginTop={"3rem"} direction={"column"}>
        <Heading
          data-aos-delay="400"
          data-aos="fade-up-right"
          marginBottom={"2%"}
          color="primary"
          fontSize={["4xl", "5xl"]}
        >
          About Us
        </Heading>

        <Text
          data-aos="fade-up-right"
          width={["80%", "70%"]}
          fontSize={["lg", "xl"]}
        >
          Tech Optimum is an organization that is entirely managed by students
          and is commited to influence the next wave of technological leaders.{" "}
          <br />
          <br /> As you deepen your understanding of computer science, we want
          to support you in every way we can. To achieve this, we have a few
          principles:
        </Text>

        <br />

        <Stack direction={["column", "row"]} spacing="30px">
          <Box
            minH={"220px"}
            data-aos="zoom-in"
            borderRadius={"20px"}
            w="300px"
            bg="#29368C"
          >
            <Text
              mb={"30px"}
              textAlign={"center"}
              pl={"2rem"}
              pr="2rem"
              marginTop="2rem"
            >
              <Flex textAlign={"center"} margin="auto">
                <Text margin="auto">
                  <HeartIcon />
                </Text>
              </Flex>
              <Heading
                pt={".2rem"}
                pb={".5rem"}
                fontWeight={"300"}
                fontSize={"3xl"}
                textAlign={"center"}
              >
                Passion
              </Heading>
              Passion drives our creativity. All projects, teams, and
              initiatives are led by passionate team members.
            </Text>
          </Box>
          <Box
            minH={"260px"}
            data-aos="zoom-in"
            borderRadius={"20px"}
            w="300px"
            bg="#29368C"
          >
            <Text textAlign={"center"} pl={"2rem"} pr="2rem" marginTop="2rem">
              <Flex textAlign={"center"} margin="auto">
                <Text margin="auto">
                  <ChatIcon />
                </Text>
              </Flex>
              <Heading
                pt={".2rem"}
                pb={".5rem"}
                fontWeight={"300"}
                fontSize={"3xl"}
                textAlign={"center"}
              >
                Support
              </Heading>
              We are here to assist you. Finding internships, learning CS, or
              having a community to talk to.
            </Text>
          </Box>
          <Box
            minH={"255px"}
            data-aos="zoom-in"
            borderRadius={"20px"}
            w="300px"
            bg="#29368C"
          >
            <Text textAlign={"center"} pl={"2rem"} pr="2rem" marginTop="2rem">
              <Flex textAlign={"center"} margin="auto">
                <Text margin="auto">
                  <SupportIcon />
                </Text>
              </Flex>
              <Heading
                pt={".4rem"}
                pb={".5rem"}
                fontWeight={"300"}
                fontSize={"3xl"}
                textAlign={"center"}
              >
                Excellence
              </Heading>
              We strive for excellence when it comes to computer science. We do
              not stop when we reach average.
            </Text>
          </Box>
        </Stack>
      </Flex>

      <Flex marginTop={"5rem"} direction={"column"} alignItems="center">
        <Heading marginBottom={"2%"} color="primary" fontSize={["4xl", "5xl"]}>
          Executives
        </Heading>
        <Flex mb={"5%"} direction={["column", "row"]} gap="45px">
          <ExecutiveCard
            src="/siddharthduggal.jpeg"
            name="Siddharth Duggal"
            role="Chief Executive Officer"
            description={
              "Siddharth Duggal is a senior in high school who enjoys programming. He enjoys participating in hackathons and making projects that help people. Outside of programming, he enjoys playing the piano and playing video games. "
            }
            linkedin="https://www.linkedin.com/in/siddharth-duggal"
          />
          <ExecutiveCard
            src="https://cdn.discordapp.com/attachments/934996871976480828/1047751981231521842/Screen_Shot_2022-11-30_at_10.52.03_PM.png"
            name="Pranith Molakalapalli"
            role="Chief Technology Officer"
            linkedin="https://www.linkedin.com/in/pranith-molakalapalli/"
            description={
              "Pranith is a senior in high school living life as a programming enthusiast looking forward to competing in hackathons and collaborating on projects that have a societal impact. Apart from his passion for computer science, he plays tennis, video games, and loves to sleep."
            }
          />
        </Flex>
      </Flex>
      <Flex direction={"column"} alignItems={"center"}>
        <Heading
          marginBottom={"2%"}
          color="primary"
          fontSize={["4xl", "5xl"]}
          textAlign={"center"}
        >
          Volunteers
        </Heading>
        <Flex alignItems={"center"}>
          <Wrap justify="center" spacing="30px">
            <Volunteer
              src="https://ui-avatars.com/api/?background=72a9ed&color=fff&name=Moustafa+Sanad&size=100"
              name="Moustafa Sanad"
              role="Director of Design"
            />
            <Volunteer
              src="https://cdn.discordapp.com/attachments/916543942139469884/1050303286697279518/Screen_Shot_2022-12-07_at_11.50.08_PM.png"
              name="Aditya Sahasranam"
              role="Community Manager"
            />
            <Volunteer
              src="https://cdn.discordapp.com/attachments/917279304453328907/1047685381346316328/Screen_Shot_2022-11-30_at_6.27.28_PM.png"
              name="Snehil Kakani"
              role="Web Developer"
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
              name="Ganesh Nathan"
              src="https://cdn.discordapp.com/attachments/916543942139469884/1048135087637667850/Screen_Shot_2022-12-02_at_12.14.31_AM.png"
              role="Web Developer"
            />
          </Wrap>
        </Flex>
        <Text mt="2rem" marginBottom={"5rem"} color="primary">
          and more...
        </Text>
      </Flex>

      <Footer />
    </>
  );
}
