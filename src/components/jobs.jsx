import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Icon,
  Spacer,
  Button,
} from "@chakra-ui/react";
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
        marginLeft={"7rem"}
        marginTop={"10rem"}
        direction={"column"}
        data-aos={"fade-up"}
        data-aos-duration={"2000"}
      >
        <Heading marginBottom={"2%"} color="primary" fontSize="5xl">
          Jobs
        </Heading>
        <Box
          maxW="1210px"
          bgColor={"#29368C"}
          borderRadius={"27px"}
          border={"3px solid #4559E9"}
        >
          <Flex className="job-cards" mx={"50px"} mt={"80px"}>
            <Box
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
                    fontSize="36px"
                    width="158px"
                  >
                    Graphic Design
                  </Text>
                </Flex>
                <Text
                  fontWeight="400"
                  fontSize="14px"
                  lineHeight="14px"
                  mt={"0.7rem"}
                >
                  As a graphic developer you will be making various logos &
                  designs that are needed for the website & social media
                </Text>

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
              </Flex>
            </Box>
            <Box
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

                <Button
                  mt="20%"
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
              </Flex>
            </Box>
            <Box
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
              </Flex>
            </Box>
          </Flex>
          <Flex justifyContent={"flex-end"} mt={"4%"} mr={"50px"}>
            <Button
              bgColor={"#4559E9"}
              borderRadius={"30px"}
              variant={"unstyled"}
              pr="20px"
              pl="20px"
              _hover={{
                bgColor: "#4558eb",
              }}
            >
              <Flex flexDirection={"row"} alignItems="center">
                <Text color={"#FFFFFF"} fontWeight={"400"} fontSize={"xl"}>
                  MORE JOBS
                </Text>
                <Icon
                  as={BsArrowUpRight}
                  color={"#FFFFFF"}
                  fontSize={"1.3rem"}
                />
              </Flex>
            </Button>
          </Flex>
          <br></br>
        </Box>
      </Flex>
    </>
  );
}