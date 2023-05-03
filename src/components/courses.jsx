import {
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  Box,
  Spacer,
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
      "Learn how to create simple games, create real-world applications using languages like Javascript. Publish your very own functional game.",
  },
];

const CourseCard = ({ color, title, description }) => {
  const { ref, inView } = useInView({ once: true });

  return (
    <Box
      textAlign="center"
      ref={ref}
      data-aos-delay={inView ? "100" : "300"}
      data-aos="zoom-in-up"
      backgroundColor={color}
      borderRadius={"20px"}
      w="280px"
      pb="10px"
      alignItems="center"
      direction={"column"}
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
            textAlign="center"
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
    <>
      <Head>
        <link
          href="https://unpkg.com/aos@next/dist/aos.css"
          rel="stylesheet"
          key="test"
        />
      </Head>

      <Box mx="auto" maxW="980px" direction={"column"}>
        <Box>
          <Flex justifyContent={"center"} alignItems="center">
            <Box direction="column">
              <Heading
                color="primary"
                fontSize={["4xl", "6xl"]}
                data-aos="fade-up"
                data-aos-duration="800"
              >
                Courses
              </Heading>
              <Heading
                data-aos="fade-up"
                date-aos-delay="500"
                data-aos-duration="1400"
                color="primary"
                fontSize={["xl", "2xl"]}
                mb="1rem"
              >
                Featured Courses
              </Heading>
            </Box>
            <Spacer />
            <Button
              data-aos="fade-up"
              data-aos-duration="900"
              py="10px"
              mx="auto"
              px="50px"
              my="1.5rem"
              bgColor={"#4559E9"}
              borderRadius={"18px"}
              color={"#FFFFFF"}
              fontWeight={"400"}
              fontSize={["lg", "xl"]}
              _hover={{ bgColor: "#3244ca" }}
              _active={{ bgColor: "#3244ca" }}
              colorScheme={"blue"}
              as="a"
              href="https://dashboard.techoptimum.org"
            >
              View All Courses
            </Button>
          </Flex>
        </Box>
        <Stack
          justifyContent={"space-between"}
          direction={["column", "row"]}
          spacing="50px"
        >
          {coursesData.map(({ color, title, description }) => (
            <CourseCard
              key={title}
              color={color}
              title={title}
              description={description}
            />
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default Courses;
