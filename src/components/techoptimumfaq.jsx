import React from "react";
import {
  Box,
  Text,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Center,
  Heading,
  Link,
} from "@chakra-ui/react";
export default function FaqComp() {
  return (
    <>
      <Flex
        textAlign={"center"}
        alignContent={"center"}
        margin={"auto"}
        flexDir="column"
        width="700px"
        padding="3rem"
      >
        <Heading color="primary" mt={"1rem"}fontSize={"5xl"}>
          {" "}
          FAQ
        </Heading>
        <Text mb="1rem" mt=".5rem">Frequently Asked Questions</Text>
  
       
        <Accordion allowToggle>
          <AccordionItem className="faq-item faq-button">
            <h2>
              <AccordionButton className="faq-button">
                <Box className="faq-button" flex="1" textAlign="left">

                  What is Tech Optimum?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Tech Optimum is a student-led nonprofit organization dedicated to 
              helping high schooler and college students in computer science. We 
              provider services such as free and accessible programming courses, 
              an internship finder, a community of like-minded individuals, and more.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mt=".75rem" className="faq-button">
            <h2>
              <AccordionButton className="faq-button">
                <Box flex="1" textAlign="left">
                 How can I volunteer at Tech Optimum?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Click <Link>here</Link> to apply to volunteer at Tech Optimum.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mt=".75rem" className="faq-button">
            <h2>
              <AccordionButton className="faq-button">
                <Box flex="1" textAlign="left">
                How can I signup for the courses?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Click <Link>here</Link> to signup for our free programming courses.
            </AccordionPanel>
          </AccordionItem>

        </Accordion>
      </Flex>
    </>
  );
}
