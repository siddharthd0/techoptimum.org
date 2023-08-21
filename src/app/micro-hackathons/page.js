"use client";
import {
  Box,
  Button,
  VStack,
  Text,
  Image,
  Flex,
  Link,
  List,
  Spacer,
  ListItem,
  ListIcon,
  Heading,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons"; // Placeholder, replace with your preferred icons
import { FaBook, FaCode, FaLaptopCode, FaUsers } from "react-icons/fa";
export default function MicroHackathons() {
  return (
    <Box color="primary" mt="7rem" p={4}>
      <Flex justify="center">
        <Image
          maxW="200px"
          src="/text-black-transparent-tight.png"
          alt="Micro Hackathon Logo"
          mb={6}
        />
      </Flex>

      <Heading textAlign="center" mb={4}>
        From Novice to Pro: Our Pipeline
      </Heading>
      <Text textAlign="center" mb={6}>
        Dive deep into our educational journey that takes you from the basics of
        coding to the excitement of real-world projects.
      </Text>

      <Box
        mx="5rem"
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        gap={4}
      >
        {/* Top Left */}
        <Box p={3} borderRadius="md" color="green.900" bg="green.100">
          <FaBook size={40} />
          <Flex>
            <Text fontWeight="bold" fontSize="lg" mt={2}>
              Quality Education
            </Text>
            <Spacer />
            <Link
              isExternal
              href="https://dashboard.techoptimum.org"
              _hover={{
                textDecoration: "none",
              }}
            >
              <Button colorScheme="green">Check out our courses</Button>
            </Link>
          </Flex>
          <Text mt={3}>
            We believe in giving free top-notch computer science education to
            everyone. That&apos;s why we started our online courses.
          </Text>
        </Box>

        {/* Top Right */}
        <Box p={3} borderRadius="md" color="purple.900" bg="purple.100">
          <FaLaptopCode size={40} />
          <Text fontWeight="bold" fontSize="lg" mt={2}>
            More Than Just Courses
          </Text>
          <Text mt={3}>
            Courses are a beginning. We believe people learn best by doing.
            That&apos;s why we created our micro hackathons cohort.
          </Text>
        </Box>

        {/* Bottom Left */}
        <Box p={3} borderRadius="md" color="cyan.900" bg="cyan.100">
          <FaCode size={40} />
          <Text fontWeight="bold" fontSize="lg" mt={2}>
            Micro Hackathons
          </Text>
          <Text mt={3}>
            Dive into our 8-hour coding competitions every other week. Transform
            from novice to professional.
          </Text>
        </Box>

        {/* Bottom Right */}
        <Box p={3} borderRadius="md" color="facebook.900" bg="facebook.100">
          <FaUsers size={40} color="blue.800" />
          <Text fontWeight="bold" fontSize="lg" mt={2}>
            Become an Epic Coder
          </Text>
          <Text mt={3}>
            Join our 3-month, 9-week program. Challenge yourself, collaborate,
            and evolve as an outstanding coder.
          </Text>
        </Box>
      </Box>

      <VStack mt={6} spacing={4}>
        <Button
          as="a"
          href="https://wait.techoptimum.org"
          mt={4}
          colorScheme="blue"

        
          size="lg"
          variant="solid"
        >
          Sign Up for the Next Micro Hackathon
        </Button>
        <Link color="blue.500" href="/contact">
          Have questions? Get in touch!
        </Link>
      </VStack>
    </Box>
  );
}
