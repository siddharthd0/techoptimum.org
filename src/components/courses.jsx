import { Flex, Heading, Text, Button, Box, Container } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";
import AOS from "aos";
import Head from "next/head";
export default function Courses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const basicBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    
      <Flex marginLeft={"7rem"} direction={"column"}>
        <Head>
          <link
            href="https://unpkg.com/aos@next/dist/aos.css"
            rel="stylesheet"
            key="test"
          />
        </Head>
        <Heading
          color="primary"
          fontSize="5xl"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Courses
        </Heading>
        <Box
          width={"20vw"}
          backgroundColor="#003B73"
          borderRadius={"22px"}
          direction={"column"}
          gap={"45px"}
          padding={"2rem"}
          data-aos={"fade-up"}
          data-aos-duration={"1000"}
          className="course-cards">
            <Heading
              color="#FFF6AA"
              fontSize="2xl"
              fontWeight={"400"}
              height={"25%"}
            >
              MongoDB.
            </Heading>      
            <Text
              color={"rgba(255, 246, 170, 0.7)"}
              fontWeight={"400"}
              fontSize="sm"
              height={"50%"}
              
            >
              Use databases in your own website. Discover how data can be stored
              in DB's like Mongo and learn how to control the data.
            </Text>
            <Flex height={"25%"} alignItems={"center"}>
              <Button
                backgroundColor="transparent"
                transition={"700"}
                _hover={{ 
                  backgroundColor: "transparent" ,
                  color:"#9DB2F6"
                }}
                width="fit-content"
                padding={"0"}
                color="#FFF6AA"
                fontWeight={"400"}
                rightIcon={
                  <ExternalLinkIcon position={"relative"} bottom={"2px"} />
                }
                
              >
                LEARN MORE
              </Button>
            </Flex>
            </Box>
        <Box
          width={"20vw"}
          backgroundColor="#05445E"
          borderRadius={"22px"}
          direction={"column"}
          gap={"45px"}
          padding={"2rem"}
          data-aos={"fade-up"}
          data-aos-duration={"1000"}
          className="course-cards">
            <Heading
              color="#FFF6AA"
              fontSize="2xl"
              fontWeight={"400"}
              height={"25%"}
            >
              Web Dev.
            </Heading>
            <Text
              color={"rgba(255, 246, 170, 0.7)"}
              fontWeight={"400"}
              fontSize="sm"
              height={"50%"}
            >
              Create simple websites using HTML, CSS and JS. Host, publish and
              share your new personalized website that you created from scratch.
            </Text>
            <br></br>
            <Flex height={"25%"} alignItems={"center"}>
            <Button
                backgroundColor="transparent"
                transition={"700"}
                _hover={{ 
                  backgroundColor: "transparent" ,
                  color:"#9DB2F6"
                }}
                width="fit-content"
                padding={"0"}
                color="#FFF6AA"
                fontWeight={"400"}
                rightIcon={
                  <ExternalLinkIcon position={"relative"} bottom={"2px"} />
                }
                
              >
                LEARN MORE
              </Button>
          </Flex>
        </Box>
        <Box
          width={"20vw"}
          backgroundColor="#145DA0"
          borderRadius={"22px"}
          direction={"column"}
          gap={"45px"}
          padding={"2rem"}
          data-aos={"fade-up"}
          data-aos-duration={"1000"}
          className="course-cards">
          <Heading
              color="#FFF6AA"
              fontSize="2xl"
              fontWeight={"400"}
              height={"20%"}
            >
              Game Dev.
            </Heading>
            <Text
              fontWeight={"400"}
              fontSize="sm"
              color={"rgba(255, 246, 170, 0.7)"}
              height={"50%"}
            >
              Learn how to create simple games, create real-world applications
              using languages like Javascript.
            </Text>
            <br></br>
            <Flex height={"25%"} alignItems={"center"}>
            <Button
                backgroundColor="transparent"
                transition={"700"}
                _hover={{ 
                  backgroundColor: "transparent" ,
                  color:"#9DB2F6"
                }}
                width="fit-content"
                padding={"0"}
                color="#FFF6AA"
                fontWeight={"400"}
                rightIcon={
                  <ExternalLinkIcon position={"relative"} bottom={"2px"} />
                }
                
              >
                LEARN MORE
              </Button>
            </Flex>      
          </Box>
        </Flex>
    )
  }
