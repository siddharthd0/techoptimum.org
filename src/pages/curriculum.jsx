import CurriculmLanding from "../components/curriculm-landing";
import Footer from "../components/footer";
import Header from "../components/header";
import Socials from "../components/socials";
import {
  Box,
  Flex,
  Heading,
  Text,
  Badge,
  Button,
  useDisclosure,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem, 
} from "@chakra-ui/react";
import React from "react";
import {
  FaGraduationCap,
  FaPython,
  FaDatabase,
  FaJsSquare,
} from "react-icons/fa";
export default function Curriculm() {
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  return (
    <>
      <Header />
     
      
      <CurriculmLanding />
      <Text mb={["2rem", "4rem"]} id="web-dev"></Text>
      <Flex
        alignItems={"center"}
        marginLeft={["2rem", "7rem"]}
        marginBottom={["4rem", "7rem"]}
        direction={["column", "row"]}
      >
        <Flex direction={"column"} maxW="800px">
          <Flex alignItems={"center"}>
            <FaGraduationCap size={65} color={"#FE9292"} />
            <Heading
              marginLeft="15px"
              color="#FE9292"
              fontSize={["3xl", "5xl"]}
            >
              Intro to Web Dev.
            </Heading>
          </Flex>
          <Badge
            borderRadius={"full"}
            width="175px"
            px="10px"
            colorScheme={"red"}
            marginTop="1rem"
            marginBottom={"2rem"}
          >
            Introductory Course
          </Badge>
          <Text fontSize={["sm", "md"]} width="75%" marginBottom={"1rem"}>
            Ever wondered how websites are made? In this course, create simple
            websites using HTML, CSS and JS. Host, publish and share your new
            personalized website that you created from scratch. All concepts
            taught in this course are introductory concepts so people of all
            skill-levels can understand the curriculum. By the end of this
            course, you will have made 3 projects and you will have mastered the
            fundementals of HTML, CSS, and JS.
          </Text>
          <Menu>
            <MenuButton
              width="130px"
              fontWeight={"light"}
              colorScheme="buttonBg"
              as={Button}
            >
              Learn More
            </MenuButton>
            <MenuList className="link-navs-dropdown">
              <Link
                _hover={{
                  textDecoration: "none",
                }}
                href="https://courses.techoptimum.org"
              >
                <MenuItem className="link-navs-dd-text">
                  View Course (under work)
                </MenuItem>
              </Link>
              <Link
                _hover={{
                  textDecoration: "none",
                }}
                href="./discord"
              >
                <MenuItem className="link-navs-dd-text">Course Help</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Flex>
        <Box
          borderRadius={"15px"}
          w={["320px", "400px"]}
          backgroundColor={"#2E3569"}
          padding={"1.5rem"}
          h={["230px", "265px"]}
          mt={["2rem", "0rem"]}
          marginRight={["2rem", "0rem"]}
        >
          <Heading
            marginBottom={["5px", "1rem"]}
            fontSize={["3xl", "5xl"]}
            color="primary"
          >
            Curriculum
          </Heading>
          <Text fontSize={["sm", "md"]}>
            Lesson 1: Basics of HTML
            <br />
            Lesson 2: Basics of CSS <br />
            Lesson 3: Basics of JS in Web Dev. <br />
            Lesson 4: Make your website and style it <br />
            Lesson 5: Design and build your final project <br />
          </Text>
          <br />
        </Box>
      </Flex>
      <Flex
        marginLeft={["2rem", "7rem"]}
        marginBottom="5rem"
        direction={["column", "row"]}
      >
        <Flex direction={"column"} maxW="800px">
          <Flex alignItems={"center"}>
            <FaPython size={65} color="#ffd343 " />
            <Heading
              marginLeft={"15px"}
              color="#ffd343 "
              fontSize={["3xl", "5xl"]}
            >
              Intro to Python
            </Heading>
          </Flex>
          <Badge
            borderRadius={"full"}
            width="175px"
            px="10px"
            colorScheme={"yellow"}
            marginTop="1rem"
            marginBottom={"2rem"}
          >
            Introductory Course
          </Badge>
          <Text fontSize={["sm", "md"]} width="75%" marginBottom={"1rem"}>
            Python has become one of the most popular programming languages in
            the world in recent years. Python is a general-purpose language,
            meaning it can be used to create a variety of different programs and
            isn’t specialized for any specific problems. This versatility, along
            with its beginner-friendliness, has made it one of the most-used
            programming languages today. In this course, you will learn the most
            useful basics of python and how to incorporate said concepts into
            actual projects!
          </Text>
          <Menu>
            <MenuButton
              width="130px"
              fontWeight={"light"}
              colorScheme="buttonBg"
              as={Button}
            >
              Learn More
            </MenuButton>
            <MenuList className="link-navs-dropdown">
              <Link
                _hover={{
                  textDecoration: "none",
                }}
                href="https://courses.techoptimum.org"
              >
                <MenuItem className="link-navs-dd-text">View Course</MenuItem>
              </Link>
              <Link
                _hover={{
                  textDecoration: "none",
                }}
                href="./discord"
              >
                <MenuItem className="link-navs-dd-text">Course Help</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Flex>
        <Box
          borderRadius={"15px"}
          w={["320px", "415px"]}
          backgroundColor={"#2E3569"}
          padding={"1.5rem"}
          h={["230px", "295px"]}
          marginTop={"2.5rem"}
          marginRight={["2rem", "0rem"]}
        >
          <Heading
            marginBottom={["5px", "1rem"]}
            fontSize={["3xl", "5xl"]}
            color="primary"
          >
            Curriculum
          </Heading>
          <Text fontSize={["sm", "md"]}>
            Lesson 1: Datatypes and Variables
            <br />
            Lesson 2: Lists and Loops <br />
            Lesson 3: Conditionals and Functions <br />
            Lesson 2 and 3 Exercise
            <br />
            Lesson 4: Dictionaries <br />
            Lesson 5: Modules <br />
            Final Project!
          </Text>
          <br />
        </Box>
      </Flex>
      <Flex
        marginLeft={["2rem", "7rem"]}
        marginBottom="5rem"
        direction={["column", "row"]}
      >
        <Flex direction={"column"} maxW="800px">
          <Flex alignItems={"center"}>
            <FaDatabase size={65} color="#fff" />
            <Heading marginLeft={"15px"} color="#fff" fontSize={["3xl", "5xl"]}>
              Intro to SQL
            </Heading>
          </Flex>
          <Badge
            borderRadius={"full"}
            width="175px"
            px="10px"
            colorScheme={"blue"}
            marginTop="1rem"
            marginBottom={"2rem"}
          >
            Introductory Course
          </Badge>
          <Text fontSize={["sm", "md"]} width="75%" marginBottom={"1rem"}>
            SQL (Structured Query Language) is a standard programming language
            used for managing relational databases. It is used to create,
            modify, and query databases for storing and retrieving data. With
            SQL, you can insert, update, and delete data, retrieve data based on
            various conditions, and manipulate data in a database to meet
            specific requirements. SQL is used in many applications, including
            online shopping systems, financial systems, and customer
            relationship management systems, among others.
          </Text>
          <Menu>
            <MenuButton
              width="130px"
              fontWeight={"light"}
              colorScheme="buttonBg"
              as={Button}
            >
              Learn More
            </MenuButton>
            <MenuList className="link-navs-dropdown">
              <Link
                _hover={{
                  textDecoration: "none",
                }}
                href="https://courses.techoptimum.org"
              >
                <MenuItem className="link-navs-dd-text">View Course</MenuItem>
              </Link>
              <Link
                _hover={{
                  textDecoration: "none",
                }}
                href="./discord"
              >
                <MenuItem className="link-navs-dd-text">Course Help</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Flex>
        <Box
          borderRadius={"15px"}
          w={["320px", "415px"]}
          backgroundColor={"#2E3569"}
          padding={"1.5rem"}
          h={["285px", "345px"]}
          marginTop={"2.5rem"}
          marginRight={["2rem", "0rem"]}
        >
          <Heading
            marginBottom={["5px", "1rem"]}
            fontSize={["3xl", "5xl"]}
            color="primary"
          >
            Curriculum
          </Heading>
          <Text fontSize={["sm", "md"]}>
            Lesson 1: Introduction to SQL
            <br />
            Lesson 2: Postgre SQL <br />
            Lesson 3: Foundation of SQL <br />
            Lesson 4: Importing and Exporting External Data <br />
            Lesson 5: Advanced SQL <br />
            Lesson 6: Database Design and Normalisation <br />
            Lesson 7: SQL Functions and Stored Procedures <br />
          </Text>
          <br />
        </Box>
      </Flex>
      <Flex
        marginLeft={["2rem", "7rem"]}
        marginBottom="5rem"
        direction={["column", "row"]}
      >
        <Flex direction={"column"} maxW="800px">
          <Flex alignItems={"center"}>
            <FaJsSquare size={65} color="#F0DB4F" />
            <Heading
              marginLeft={"15px"}
              color="#FFE66D"
              fontSize={["3xl", "5xl"]}
            >
              Intro to JavaScript
            </Heading>
          </Flex>
          <Badge
            borderRadius={"full"}
            width="175px"
            px="10px"
            colorScheme={"yellow"}
            marginTop="1rem"
            marginBottom={"2rem"}
          >
            Introductory Course
          </Badge>
          <Text fontSize={["sm", "md"]} width="75%" marginBottom={"1rem"}>
            JavaScript is a high-level, interpreted programming language that is
            commonly used for web development. It is used to add interactivity
            and other dynamic elements to websites, such as form validation,
            creating animations, and handling user events like clicking a
            button. JavaScript runs on the client side, which means that the
            code is executed directly in the user&apos;s browser, making it fast and
            efficient. JavaScript can also be used for server-side development
            using technologies like Node.js. JavaScript is a flexible and
            versatile language that is widely used for creating dynamic and
            interactive web applications.
          </Text>
          <Menu>
            <MenuButton
              width="130px"
              fontWeight={"light"}
              colorScheme="buttonBg"
              as={Button}
            >
              Learn More
            </MenuButton>
            <MenuList className="link-navs-dropdown">
              <Link
                _hover={{
                  textDecoration: "none",
                }}
                href="https://courses.techoptimum.org"
              >
                <MenuItem className="link-navs-dd-text">View Course</MenuItem>
              </Link>
              <Link
                _hover={{
                  textDecoration: "none",
                }}
                href="./discord"
              >
                <MenuItem className="link-navs-dd-text">Course Help</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Flex>
        <Box
          borderRadius={"15px"}
          w={["320px", "415px"]}
          backgroundColor={"#2E3569"}
          padding={"1.5rem"}
          h={["255px", "300px"]}
          marginTop={"2.5rem"}
          marginRight={["2rem", "0rem"]}
        >
          <Heading
            marginBottom={["5px", "1rem"]}
            fontSize={["3xl", "5xl"]}
            color="primary"
          >
            Curriculum
          </Heading>
          <Text fontSize={["sm", "md"]}>
            Lesson 1: Datatypes in JavaScript
            <br />
            Lesson 2: Variables in JavaScript <br />
            Lesson 3: Control Flow in JavaScript <br />
            Lesson 4: Functions in JavaScript <br />
            Lesson 5: Arrays in JavaScript <br />
            Lesson 6: Objects in JavaScript <br />
            Assessment: JavaScript Concepts <br />
          </Text>
          <br />
        </Box>
      </Flex>
      <Socials />
      <Footer />
    </>
  );
}
