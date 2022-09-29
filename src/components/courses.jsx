import { Flex, Heading, Text, Button, Container, Stack, Box, Center } from "@chakra-ui/react";
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
        mb="2rem"
      >
        Courses
      </Heading>



      <Stack direction={["column", "row"]} spacing="60px">
          <Box data-aos-delay="100"
             data-aos="zoom-in-up" backgroundColor="#003B73"borderRadius={"20px"} h="250px"w="280px" >
            <div text-align="center">
              <Text color="#FFF6AA"fontSize="sm"pl={"2rem"} pr="2rem" marginTop="2rem">
     
                <Heading
                  pt={".2rem"}
                  pb={".7rem"}
                  fontWeight={"300"}
                  fontSize={"3xl"}
                >
                 MongoDB.
                </Heading>
                Use databases in your own website. Discover how data can be stored in DB's like Mongo and learn how to control the data.
                <Button
              backgroundColor="transparent"
              transition={"700"}
              _hover={{ 
                backgroundColor: "transparent" ,
                color:"#9DB2F6"
              }}
         
              padding={"0"}
              color="#FFF6AA"
              fontWeight={"400"}
              rightIcon={
                <ExternalLinkIcon position={"relative"} bottom={"2px"} />
              }
              
            >
              LEARN MORE
            </Button> </Text>
              
            </div>
          </Box>
          <Box data-aos-delay="300"
             data-aos="zoom-in-up"backgroundColor="#05445E"borderRadius={"20px"} h="250px"w="280px" >
            <Center>
              <Text color="#FFF6AA"fontSize="sm"pl={"2rem"} pr="2rem" marginTop="2rem">
               
                <Heading
                  pt={".2rem"}
                  pb={".7rem"}
                  fontWeight={"300"}
                  fontSize={"3xl"}
                >
                  Web Dev.
                </Heading>
                Create simple websites using HTML, CSS and JS. Host, publish and share your new personalized website that you created from scratch.
                <Button
              backgroundColor="transparent"
              transition={"700"}
              _hover={{ 
                backgroundColor: "transparent" ,
                color:"#9DB2F6"
              }}
         
              padding={"0"}
              color="#FFF6AA"
              fontWeight={"400"}
              rightIcon={
                <ExternalLinkIcon position={"relative"} bottom={"2px"} />
              }
              
            >
              LEARN MORE
            </Button>
              </Text>
            </Center>
          </Box>
          <Box  data-aos-delay="600"
             data-aos="zoom-in-up"backgroundColor="#145DA0"borderRadius={"20px"} h="250px"w="280px" >
            <Center>
              <Text color="#FFF6AA"fontSize="sm"pb="4rem" pl={"2rem"} pr="2rem" marginTop="2rem">
               
                <Heading
                  pt={".2rem"}
                  pb={".7rem"}
                  fontWeight={"300"}
                  fontSize={"3xl"}
                >
                 Game Dev.
                </Heading>
                Learn how to create simple games, create real-world applications using languages like Javascript.
                <br />
                <br />
                <Button
              backgroundColor="transparent"
              transition={"700"}
              _hover={{ 
                backgroundColor: "transparent" ,
                color:"#9DB2F6"
              }}
         
              padding={"0"}
              color="#FFF6AA"
              fontWeight={"400"}
              rightIcon={
                <ExternalLinkIcon position={"relative"} bottom={"2px"} />
              }
              
            >
              LEARN MORE
            </Button>
              </Text>
            </Center>
          </Box>
        </Stack>
 




     </Flex>
  );
}
