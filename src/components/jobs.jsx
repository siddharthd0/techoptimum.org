import React from "react";
import { Box, Heading, Text, Flex, Icon, Button, Link } from "@chakra-ui/react";
import { BsLayers, BsGraphUp, BsArrowUpRight } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import AOS from "aos";
import Head from "next/head";
import { useEffect } from "react";
export default function Jobs() {
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
        marginLeft={["2rem", "7rem"]}
        marginTop={["4rem", "10rem"]}
        direction={"column"}
        data-aos={"fade-up"}
        data-aos-duration={"2000"}
        marginRight="2rem"
      >
        <Heading marginBottom={"2%"} color="primary" fontSize={["4xl", "5xl"]}>
          Volunteer with us
        </Heading>
        <Box
          maxW="1210px"
          bgColor={"#29368C"}
          borderRadius={"27px"}
          border={"3px solid #4559E9"}
        >
          <Flex
            display={["none", "flex"]}
            className="job-cards"
            mx={"50px"}
            mt={"80px"}
          >
            <Box
              data-aos="zoom-in-down"
              data-aos-delay="200"
              className="job-card1"
              bgColor={"#4559E9"}
              borderRadius={"32px"}
              mr={"5%"}
            >
              <Flex p={"20px"} flexDirection={"column"}>
                <Flex flexDirection={"row"} alignItems="center">
                  <Box
                    w={"106px"}
                    h={"98px"}
                    bgColor={"#ACFFAA"}
                    borderRadius={"20px"}
                  >
                    <Flex justifyContent="center" p={"25%"}>
                      <Icon
                        as={BsLayers}
                        color={"#32373f"}
                        w={"43px"}
                        h={"43px"}
                      />
                    </Flex>
                  </Box>
                  <Text
                    ml={"1.7rem"}
                    fontWeight="800"
                    lineHeight="35px"
                    fontSize={"4xl"}
                    width="158px"
                  >
                    Course Writer
                  </Text>
                </Flex>
                <Text
                  fontWeight="400"
                  fontSize="14px"
                  lineHeight="14px"
                  mt={"0.7rem"}
                >
                  As a course instructor, you will assist us in building
                  programming courses. This includes writing, colloborating, and
                  revising courses.
                </Text>
                <Link
                  _hover={{
                    textDecoration: "none",
                  }}
                  isExternal
                  href="https://forms.gle/CpcuX7kdhRpiJLZL8"
                >
                  <Button
                    mt="20%"
                    variant={"unstyled"}
                    w={"175px"}
                    h={"46px"}
                    borderRadius={"20px"}
                    bgColor={"#ACFFAA"}
                    textColor={"#000000"}
                    _hover={{
                      bgColor: "#60c25e",
                    }}
                    ml={"35%"}
                  >
                    APPLY NOW
                  </Button>
                </Link>
              </Flex>
            </Box>
            <Box
              data-aos-delay="400"
              data-aos="zoom-in-down"
              className="job-card2"
              bgColor={"#4559E9"}
              borderRadius={"32px"}
              mr={"5%"}
            >
              <Flex p={"20px"} flexDirection={"column"}>
                <Flex flexDirection={"row"} alignItems="center">
                  <Box
                    w={"106px"}
                    h={"98px"}
                    bgColor={"#FFF6AA"}
                    borderRadius={"20px"}
                  >
                    <Flex justifyContent="center" p={"25%"}>
                      <Icon
                        as={RiComputerLine}
                        color={"#32373f"}
                        w={"43px"}
                        h={"43px"}
                      />
                    </Flex>
                  </Box>
                  <Text
                    ml={"1.7rem"}
                    fontWeight="800"
                    lineHeight="35px"
                    fontSize="36px"
                    width="158px"
                  >
                    Web Dev
                  </Text>
                </Flex>
                <Text
                  w={"260px"}
                  fontWeight="400"
                  fontSize="14px"
                  lineHeight="14px"
                  mt={"0.7rem"}
                >
                  As a website developer you will be working on the Tech Optimum
                  website to improve & maintain it.
                </Text>
                <Link
                  _hover={{
                    textDecoration: "none",
                  }}
                  isExternal
                  href="https://forms.gle/NXQomJvT7dmCq8nU9"
                >
                  <Button
                    mt="24%"
                    variant={"unstyled"}
                    w={"175px"}
                    h={"46px"}
                    borderRadius={"20px"}
                    bgColor={"#FFF6AA"}
                    textColor={"#000000"}
                    _hover={{
                      bgColor: "#d6c63a",
                    }}
                    ml={"7rem"}
                  >
                    APPLY NOW
                  </Button>
                </Link>
              </Flex>
            </Box>
            <Box
              data-aos-delay="600"
              data-aos="zoom-in-down"
              className="job-card3"
              bgColor={"#4559E9"}
              mr={"5%"}
              borderRadius={"32px"}
            >
              <Flex p={"20px"} flexDirection={"column"}>
                <Flex flexDirection={"row"} alignItems="center">
                  <Box
                    w={"106px"}
                    h={"98px"}
                    bgColor={"#FFC4AA"}
                    borderRadius={"20px"}
                  >
                    <Flex justifyContent="center" p={"25%"}>
                      <Icon
                        as={BsGraphUp}
                        color={"#32373f"}
                        w={"43px"}
                        h={"43px"}
                      />
                    </Flex>
                  </Box>
                  <Text
                    ml={"1.7rem"}
                    fontWeight="800"
                    lineHeight="35px"
                    fontSize="36px"
                    width="158px"
                  >
                    Media Handler
                  </Text>
                </Flex>
                <Text
                  w={"260px"}
                  fontWeight="400"
                  fontSize="14px"
                  lineHeight="14px"
                  mt={"0.7rem"}
                >
                  As a social media manager, you will be handling our socials.
                </Text>
                <br></br>
                <Link
                  _hover={{
                    textDecoration: "none",
                  }}
                  isExternal
                  href="https://forms.gle/2gUHAWRiKXvjBZSZ7"
                >
                  <Button
                    mt="20%"
                    variant={"unstyled"}
                    w={"175px"}
                    h={"46px"}
                    borderRadius={"20px"}
                    bgColor={"#FFC4AA"}
                    textColor={"#000000"}
                    _hover={{
                      bgColor: "#fb9b72",
                    }}
                    ml={"7rem"}
                  >
                    APPLY NOW
                  </Button>
                </Link>
              </Flex>
            </Box>
          </Flex>
          <Flex
            marginLeft={["2rem", "0rem"]}
            justifyContent={["flex-start", "flex-end"]}
            mt={"30px"}
            mr={"50px"}
          >
            <Link
              href="./join-team"
              _hover={{
                textDecoration: "none",
              }}
            >
              <Button
                bgColor={"#4559E9"}
                borderRadius={"15px"}
                variant={"unstyled"}
                pr="20px"
                pl="20px"
                fontWeight={100}
                _hover={{
                  bgColor: "#6C7BE6",
                }}
              >
                View More
              </Button>
            </Link>
          </Flex>
          <br></br>
        </Box>
      </Flex>
    </>
  );
}
