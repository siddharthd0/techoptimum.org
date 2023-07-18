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
  Heading,
  Link,
} from "@chakra-ui/react";

const faqs = [
  {
    question: "What is Tech Optimum?",
    answer:
      "Tech Optimum is a student-led nonprofit organization dedicated to helping high school and college students in computer science. We provider services such as free and accessible programming courses, an internship finder, a community of like-minded individuals, and more.",
  },
  {
    question: "How can I volunteer at Tech Optimum?",
    answer: (
      <>
        <Link href="join-team">Click here to apply to volunteer at Tech
        Optimum.</Link>
      </>
    ),
  },
  {
    question: "How can I signup for the courses?",
    answer: (
      <>
        <Link href="https://courses.techoptimum.org">Click here to signup
        for our free programming courses.</Link>
      </>
    ),
  },
  {
    question: "Where can I report a bug on the website?",
    answer:
      "Please email team@techoptimum.org to report any bugs on the website.",
  },
  {
    question: "Who is the founder of Tech Optimum?",
    answer: (
      <>
        {" "}
        <Link href="https://siddharthduggal.com">Siddharth Duggal</Link> founded
        Tech Optimum in February of 2022.
      </>
    ),
  },
  {
    question: "How can I donate to Tech Optimum?",
    answer: (
      <>
        We appreciate all donations. Please click{" "}
        <Link href="/donate">here</Link> to donate.
      </>
    ),
  },
  {
    question: "Do we have a Discord server?",
    answer: (
      <>
        Yes, we do! Please click <Link href="/discord">here</Link> to join our
        Discord server.
      </>
    ),
  },
];

export default function FaqComp() {
  return (
    <>
      <Flex
        textAlign={"center"}
        alignContent={"center"}
        margin={"auto"}
        flexDir="column"
        maxWidth="700px"
        padding="3rem"
      >
        <Heading
          color="primary"
          fontWeight="medium"
          mt={"6rem"}
          fontSize={["4xl", "5xl"]}
        >
          {" "}
          FAQ
        </Heading>
        <Text color="primary" mb="1rem" mt=".5rem">
          Frequently Asked Questions
        </Text>

        <Accordion color="blackAlpha.800" allowToggle>
          {faqs.map((faq, index) => (
            <AccordionItem
              border="none"
              key={index}
              mt={index !== 0 ? ".75rem" : null}
            >
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {faq.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Flex>
    </>
  );
}
