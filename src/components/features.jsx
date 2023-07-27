import React from "react";
import {
  Box,
  Flex,
  GridItem,
  Image,
  Icon,
  SimpleGrid,
  Text,
  Stack,
  chakra,
} from "@chakra-ui/react";
import { AiOutlineCheck } from "react-icons/ai";
const Feature = (props) => {
  return (
    <Flex color="black">
       
      <Box ml={4}>
        <Flex alignItems="center">
        <Image mr="7px" src={props.icon} w="50px" h="50px"/>
          <chakra.dt fontSize="lg" fontWeight="bold">
            {props.title}
          </chakra.dt>
        </Flex>
        <chakra.dd mt={2} color="gray.500">
          {props.children}
        </chakra.dd>
      </Box>
    </Flex>
  );
};

const DashboardPage = () => {
  return (
    <Flex mt="1rem" mx="auto" maxW="1070px" justifyContent="center" alignItems="center">
      <Box shadow="xl" bg="white" px={8} py={20} mx="auto">
        <SimpleGrid
          alignItems="center"
          columns={{
            base: 1,
            lg: 3,
          }}
          spacingY={{
            base: 10,
            lg: 32,
          }}
          spacingX={{
            base: 10,
            lg: 21,
          }}
        >
          <Box >
            <chakra.h4
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
              color="blue.500"
            >
             An ecosystem for you to excel
            </chakra.h4>
            <chakra.h2
              mb={3}
              fontSize={{
                base: "3xl",
                md: "4xl",
              }}
              fontWeight="extrabold"
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color="primary"
              lineHeight="shorter"
              letterSpacing="tight"
            >
              Learn, Create, and Apply
            </chakra.h2>
            <chakra.p
              mb={6}
              fontSize={{
                base: "lg",
                md: "xl",
              }}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color="gray.600"
              _dark={{
                color: "gray.500",
              }}
            >
              Join our platform to gain in-depth knowledge of coding, earn
              rewards and find internships - all in one place!
            </chakra.p>
          </Box>
          <GridItem colSpan={2}>
            <Stack
              spacing={{
                base: 10,
                md: 0,
              }}
              display={{
                md: "grid",
              }}
              gridTemplateColumns={{
                md: "repeat(2,1fr)",
              }}
              gridColumnGap={{
                md: 8,
              }}
              gridRowGap={{
                md: 10,
              }}
            >
              <Feature icon="progress-check.svg" title="Progress Checks & Quizzes">
                Validate your knowledge with our in-built progress checks and
                quizzes. Ensure mastery of a topic before moving on to the next
                lesson.
              </Feature>
              <Feature icon="videos.svg" title="Quality Video Lessons">
                Understand concepts thoroughly with our high-quality video
                lessons in each module.
              </Feature>
              <Feature icon="coins.svg" title="Tech Optimum Coins System">
                Earn Tech Optimum Coins with each lesson completed. Redeem your
                coins in our virtual marketplace, even for things like a
                30-minute web development tutoring session.
              </Feature>
              <Feature icon="internships.svg" title="Internship Finder">
                Seamlessly apply your skills in the real world with our
                integrated Internship Finder. It is your one-stop platform for
                learning and applying!
              </Feature>
         
            </Stack>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default DashboardPage;
