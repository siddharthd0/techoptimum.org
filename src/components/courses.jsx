import {
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  Box,
  Center,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useInView } from "framer-motion";
import Head from "next/head";

const coursesData = [
  {
    color: "#003B73",
    title: "Python Basics",
    description:
      "Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis.",
  },
  {
    color: "#05445E",
    title: "Web Dev.",
    description:
      "Create simple websites using HTML, CSS and JS. Host, publish and share your new personalized website that you created from scratch.",
  },
  {
    color: "#145DA0",
    title: "Game Dev.",
    description:
      "Learn how to create simple games, create real-world applications using languages like Javascript.",
  },
];

const CourseCard = ({ color, title, description }) => {
  const { ref, inView } = useInView({ once: true });

  return (
    <Box
      ref={ref}
      data-aos-delay={inView ? "100" : "0"}
      data-aos="zoom-in-up"
      backgroundColor={color}
      borderRadius={"20px"}
      w="280px"
      pb="10px"
    >
      <Center>
        <Text
          color="#FFF6AA"
          fontSize="sm"
          pl={"2rem"}
          pr="2rem"
          marginTop="2rem"
        >
          <Heading
            pt={".2rem"}
            pb={".7rem"}
            fontWeight={"300"}
            fontSize={["2xl", "3xl"]}
          >
            {title}
          </Heading>
          {description}
          <br />
          <br />
          <Link _hover={{ textDecoration: "none" }} href="./curriculum">
            <Button
              backgroundColor="transparent"
              transition={"700"}
              _hover={{ backgroundColor: "transparent", color: "#9DB2F6" }}
              _active={{ backgroundColor: "transparent", color: "#9DB2F6" }}
              padding={"0"}
              color="#FFF6AA"
              fontWeight={"400"}
              rightIcon={
                <ExternalLinkIcon position={"relative"} bottom={"2px"} />
              }
            >
              LEARN MORE
            </Button>
          </Link>
        </Text>
      </Center>
    </Box>
  );
};

const Courses = () => {
  return (
    <Flex marginLeft={["2rem", "7rem"]} direction={"column"}>
      <Head>
        <link
          href="https://unpkg.com/aos@next/dist/aos.css"
          rel="stylesheet"
          key="test"
        />
      </Head>
      <Heading
        color="primary"
        fontSize={["4xl", "5xl"]}
        data-aos="fade-right"
        data-aos-duration="1000"
        mb="2rem"
      >
        Courses
      </Heading>
      <Stack direction={["column", "row"]} spacing="50px">
        {coursesData.map(({ color, title, description }) => (
          <CourseCard
            key={title}
            color={color}
            title={title}
            description={description}
          />
        ))}
      </Stack>
    </Flex>
  );
};

export default Courses;
