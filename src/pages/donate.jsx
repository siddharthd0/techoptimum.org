import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Divider,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Box,
  Tooltip,
  Center,
  Link,
  Stat,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";
import Header from "../components/header";
import Footer from "../components/footer";
import Socials from "../components/socials";
import { FaDollarSign } from "react-icons/fa";
import TestimonialCard from "../components/testimonials-card";
import { SlRocket } from "react-icons/sl";
import { MdAttachMoney, MdOutlinePeopleAlt } from "react-icons/md";

export default function Donate() {
  return (
    <>
      <Header />
      <Box pt={["0px", "30px"]}>
        <Center flexDirection={"column"}>
          <Heading
            data-aos-delay="400"
            data-aos="fade-up-right"
            mt={["2rem", "2rem"]}
            color="primary"
            fontSize={["5xl", "6xl"]}
          >
            Donations
          </Heading>
          <Flex
            justifyContent="center"
            padding="15px 0"
            direction={["column", "row"]}
            alignItems="center"
            borderBottom={"1px "}
            borderBottomColor="blue.500"
            borderBottomWidth="1px !important"
            width={"70%"}
          >
            <Flex mb="10px" marginTop={["1.5rem", "0px"]} textAlign={"center"}>
              <nav>
                <ul className="nav-links">
                  <Link className="link-navs" href="#mission">
                    <li>
                      <Tooltip
                        openDelay={175}
                        label="Learn more about Tech Optimum's goal "
                        placement="bottom"
                      >
                        <Button
                          mb={["1rem !important", "0rem !important"]}
                          className="link-navs  donate-li"
                          color="primary"
                          rightIcon={<SlRocket className="donate-icons" />}
                        >
                          What is our mission?
                        </Button>
                      </Tooltip>
                    </li>
                  </Link>
                  <Link href="#my-money">
                    <li>
                      <Tooltip
                        openDelay={175}
                        label="The breakdown of your donation "
                        placement="bottom"
                      >
                        <Button
                          mb={["1rem !important", "0rem !important"]}
                          className="link-navs  donate-li"
                          color="primary"
                          rightIcon={<MdAttachMoney className="donate-icons" />}
                        >
                          Where will my money go?
                        </Button>
                      </Tooltip>
                    </li>
                  </Link>
                  <Link href="#testimonials">
                    <li>
                      <Tooltip
                        openDelay={175}
                        label="The affect your donation will have "
                        placement="bottom"
                      >
                        <Button
                          className="link-navs  donate-li"
                          color="primary"
                          rightIcon={
                            <MdOutlinePeopleAlt className="donate-icons" />
                          }
                        >
                          What do members at Tech Optimum say?
                        </Button>
                      </Tooltip>
                    </li>
                  </Link>
                </ul>
              </nav>
            </Flex>
          </Flex>
        </Center>
        <Flex
          mt="3rem !important"
          margin={"auto"}
          maxWidth={"900px"}
          direction={["column", "row"]}
          alignItems={"center"}
          id="mission"
        >
          <Flex ml={["2rem", "0rem"]} direction={"column"}>
            <Heading
              fontWeight={"100"}
              mb="8px"
              fontSize={"4xl"}
              color={"primary"}
            >
              Our Mission:
            </Heading>
            <Text maxWidth={"500px"}>
              More than one-third of the world&apos;s population especially
              students continues to be excluded from technology because of the
              digital divide. We offer students in need accessible resources,
              tools, and a learning platform along with an inclusive community
              to learn more about their passion. We envision a diverse community
              that strives for inclusion in the technology industry.
            </Text>
          </Flex>
          <Flex direction={"column"}>
            <Image
              mt={["2rem", "0rem"]}
              ml={["-1rem", "4rem"]}
              maxW={["250px", "300px"]}
              src="/mission-blue-abstract.png"
            />
          </Flex>
        </Flex>

        <Flex
          mt="4rem !important"
          margin={"auto"}
          maxWidth={"900px"}
          direction={["column", "row"]}
          alignItems={"center"}
          id="my-money"
        >
          <Flex direction={["column", "row"]}>
            <Stat>
              <Heading
                ml={["2rem", "0rem"]}
                color={"primary"}
                fontWeight={"100"}
                fontSize={["2xl", "4xl"]}
              >
                How will my donation be used?
              </Heading>
              <Flex direction={["column", "row"]} mt="10px">
                <Flex ml={["2rem", "0rem"]} direction="column">
                  <StatNumber fontSize={"4xl"}>20%</StatNumber>
                  <StatHelpText mt="-7px">
                    {" "}
                    goes to Tech Optimum&apos;s discretionary fund
                  </StatHelpText>
                </Flex>
                <Flex ml="2rem" direction="column">
                  <StatNumber fontSize={"4xl"}>40%</StatNumber>
                  <StatHelpText mt="-7px">
                    goes towards organization maintance and online subscriptions{" "}
                  </StatHelpText>
                </Flex>
                <Flex ml="2rem" direction="column">
                  <StatNumber fontSize={"4xl"}>40%</StatNumber>
                  <StatHelpText mt="-7px">
                    goes directly towards our mission
                  </StatHelpText>
                </Flex>
              </Flex>
            </Stat>
            <Flex mt={["3rem", "0rem"]} maxW={"400px"} ml={["2rem", "5rem"]}>
              <Box px="14px">
                <Heading
                  mb="10px"
                  color={"primary"}
                  fontWeight={"100"}
                  fontSize={["2xl", "4xl"]}
                >
                  Our initiatives include:
                </Heading>

                <ul className="initatives-list">
                  <li>
                    Hosting annual hackathons{" "}
                    <Link href="./hackathon">(Tech Optimum Hacks)</Link>
                  </li>
                  <li>
                    Providing free and accessible programming courses to high
                    school and college students{" "}
                    <Link href="https://courses.techoptimum.org">
                      (Check them out here)
                    </Link>
                  </li>
                  <li>
                    A Discord chatting community open to all skill-levels of
                    programming, offering CS help to everyone!{" "}
                    <Link href="/discord">(Join here)</Link>
                  </li>
                  <li>
                    Free internship opportunities for students to get real-world
                    programming experience
                  </li>
                </ul>
              </Box>
            </Flex>
          </Flex>
          <Flex direction={"column"}></Flex>
        </Flex>
        <Center flexDirection="column">
          <Heading
            mt="3rem !important"
            mb="4rem"
            color="primary"
            fontSize={["2xl", "4xl"]}
            id="testimonials"
            fontWeight={"100"}
            ml={["2rem", "0rem"]}
          >
            What do members at Tech Optimum say?
          </Heading>
          <TestimonialCard />
        </Center>
        <Flex
          mb="10px !important"
          direction="column"
          margin={["1.5rem","auto"]}
          maxWidth={"900px"}

        >
          <Heading
            mb="10px"
            color="primary"
            fontSize={["3xl", "4xl"]}
            id="testimonials"
            fontWeight={"100"}
            ml={["2rem", "0rem"]}
          >
            Your donation will:
          </Heading>
          <ul className="initatives-list">
            <li>
              Bring computer science skills to high schoolers and college
              students worldwide through providing more courses
            </li>
            <li>
              Make us one step closer to closing the gap in the digital divide
            </li>
            <li>Allow us to grow our team</li>
            <li>
              Help us host better hackathons with more prizes and resources for
              participants
            </li>
            <li>
              Let us use better online products to develop things like our
              websites and services (e.g. Figma premium, Notion premium, etc.)
            </li>
            <li>Insipre teenagers to pursue computer science and technology</li>
          </ul>
        </Flex>

        <Center flexDir={"column"}>
          <Box mx={["2rem", "0rem"]}>
            <Divider my="1.5rem" />

            <Text
            mx={["2rem", "0rem"]}
              mb="1rem"
              fontSize={["md", "lg"]}
              fontWeight={"100"}
              color="primary"
            >
              The Tech Optimum team greatly appreciates your consideration for a
              donation,
            </Text>
            <Flex direction={["column", "row"]}>
            <Text mb={["1rem", "0rem"]} ml={["3rem","0rem"]}>
                <Image />
                <Text>
                  Siddharth Duggal, <br />
                  Founder & CEO
                </Text>
              </Text>
              <Text mb={["1rem", "0rem"]}ml={["3rem","2rem"]}>
                <Image />
                <Text>
                  Pranith Molakalapalli,
                  <br /> Chief Technology Officer
                </Text>
              </Text>
              <Text ml={["3rem","10rem"]}>
                <Image />
                <Text>
                  For any questions, please send an email to <br />{" "}
                  <Link href="mailto:contact.techoptimum@gmail.com">
                    contact.techoptimum@gmail.com
                  </Link>
                </Text>
              </Text>
            </Flex>
          </Box>
          <Button
            mb="2rem"
            fontSize={["md", "lg"]}
            mt={"3rem"}
            px="40px"
            py="30px"
            rightIcon={<FaDollarSign />}
            bgColor={"primaryButton.500"}
            _hover={{ bgColor: "primaryButton.600" }}
            onClick={async () => {
              window.open(
                "https://buy.stripe.com/8wM16Fa934Ce6LS9AA",
                "_blank"
              );
            }}
          >
            Donate
            {/* Change this to donate maybe?  */}
          </Button>
        </Center>
      </Box>
      <Socials />
      <Footer />
    </>
  );
}
