import React from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  Tooltip,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  Link,
  StatHelpText,
  SimpleGrid,
} from "@chakra-ui/react";
import { useEffect } from "react";
import AOS from "aos";
import Head from "next/head";

export default function Mission() {
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
      <Flex
        mt="3rem"
        px="20px"
        paddingTop={"80px"}
        id="learn-more"
        mb="6rem"
        alignItems="center"
        direction={"column"}
      >
        <Heading
          data-aos="fade-up"
          data-aos-duration="800"
          fontSize={["4xl", "6xl"]}
          color="primary"
        >
          Our Mission
        </Heading>
        <Text
          data-aos="fade-up"
          data-aos-duration="1300"
          color="primary"
          fontSize={["md", "lg"]}
          mt=".9rem"
          maxW={"760px"}
          textAlign={"center"}
        >
          More than one-third of the world&apos;s population, especially
          students, continues to be excluded from technology because of the{" "}
          <Link
            textDecor={"underline"}
            href="https://en.wikipedia.org/wiki/Digital_divide"
          >
            digital divide
          </Link>
          . We offer students in need accessible resources, tools, and a
          learning platform along with an inclusive community to learn more
          about their passion. Tech Optimum envisions a diverse community that
          strives for inclusion in the technology industry.
        </Text>

        <Box maxW={"760px"} textAlign={"center"}>
          <SimpleGrid mt="2rem" columns={[1, 2, 3]} spacing={10} mb="1.75rem">
          <Link
              _hover={{
                textDecoration: "none",
                color: "primary",
              }}
              href="https://advocacy.code.org/2022_state_of_cs.pdf"
            >
              <Tooltip label="Click to view the full Source of Computer Science Teachers Association, 2020">
            <Stat data-aos="zoom-in" data-aos-duration="500">
              <StatNumber fontSize="4xl" color="primary">
                54%
              </StatNumber>

              <StatHelpText>
                of public schools in the U.S. do not offer computer science
                courses.{" "}
              </StatHelpText>
              <StatHelpText fontSize="9px">
                {" "}
                (Computer Science Teachers Association, 2020)
              </StatHelpText>
            </Stat>
            </Tooltip>
            </Link>
            <Link
              _hover={{
                textDecoration: "none",
                color: "primary",
              }}
              href="https://www.un.org/en/delegate/itu-29-billion-people-still-offline"
            >
              <Tooltip label="Click to view the full Source of United Nations 2021">
                <Stat data-aos="zoom-in" data-aos-duration="1000">
                  <StatNumber fontSize="4xl" color="primary">
                    37%
                  </StatNumber>
                  <StatHelpText>
                    of the global population lack access to the Internet;
                    preventing them from accessing the tools to learn about
                    computer science.
                  </StatHelpText>
                  <StatHelpText fontSize="9px">
                    {" "}
                    (United Nations (2021))
                  </StatHelpText>
                </Stat>
              </Tooltip>
            </Link>
            <Link
              _hover={{
                textDecoration: "none",
                color: "primary",
              }}
              href="https://www.igi-global.com/gateway/article/full-text-html/294447&riu=true"
            >
              <Tooltip label="Click to view the full Source of National University of Public Service, Hungary, UN, 2018">
                <Stat data-aos="zoom-in" data-aos-duration="1500">
                  <StatNumber fontSize="4xl" color="primary">
                    87%
                  </StatNumber>
                  <StatHelpText>
                    of students who begin an online coding course do not
                    complete it.
                  </StatHelpText>
                  <StatHelpText fontSize="9px">
                    {" "}
                    (National University of Public Service, Hungary, UN (2018)
                  </StatHelpText>
                </Stat>
              </Tooltip>
            </Link>
          </SimpleGrid>
        </Box>
      </Flex>
    </>
  );
}
