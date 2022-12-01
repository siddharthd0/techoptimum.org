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
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { FaGraduationCap, FaPython } from "react-icons/fa";
export default function Curriculm() {
  return (
    <>
      <Header />
      <CurriculmLanding />
      <Text mb="4rem" id="web-dev"></Text>
      <Flex
        
        marginLeft={["4rem", "7rem"]}
        marginBottom="7rem"
       
      >
        <Flex direction={"column"} width="60%;">
          <Flex>
            <FaGraduationCap size={65} color="#FE9292" />
            <Heading marginLeft={"15px"} color="#FE9292" fontSize={"6xl"}>
              Intro to Web Dev.
            </Heading>
          </Flex>
          <Badge
            borderRadius={"full"}
            width="250px"
            px="10px"
            colorScheme={"red"}
            marginTop="1rem"
            marginBottom={"2rem"}
          >
            4 weeks · Introductory Course
          </Badge>
          <Text width="75%" marginBottom={"1rem"}>
            Ever wondered how websites are made? In this course, create simple
            websites using HTML, CSS and JS. Host, publish and share your new
            personalized website that you created from scratch. All concepts
            taught in this course are introductory concepts so people of all
            skill-levels can understand the curriculm. By the end of this
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
              <Link href="https://courses.techoptimum.org">
                <MenuItem className="link-navs-dd-text">View Course</MenuItem>
              </Link>
               <Link href="./discord">
                <MenuItem className="link-navs-dd-text">Course Help</MenuItem>
              </Link>
             
            </MenuList>
          </Menu>
        </Flex>
        <Box
          borderRadius={"15px"}
          width="500px"
          backgroundColor={"#2E3569"}
          padding={"1.5rem"}
          h="275px"
          marginTop={"2.5rem"}
          w="400px"
        >
          <Heading marginBottom={"1rem"} fontSize={"5xl"} color="primary">
            Curriculum
          </Heading>
          <Text>
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
        marginTop={"4rem"}
        marginLeft={["4rem", "7rem"]}
        marginBottom="7rem"
        id="web-dev"
      >
        <Flex direction={"column"} width="60%;">
          <Flex>
            <FaPython size={65} color="#3776ab" />
            <Heading marginLeft={"15px"} color="#ffd343 " fontSize={"6xl"}>
              Intro to Python.
            </Heading>
          </Flex>
          <Badge
            borderRadius={"full"}
            width="250px"
            px="10px"
            colorScheme={"yellow"}
            marginTop="1rem"
            marginBottom={"2rem"}
          >
            4 weeks · Introductory Course
          </Badge>
          <Text width="75%" marginBottom={"1rem"}>
          Python has become one of the most popular programming languages in 
          the world in recent years. Python is a general-purpose language, 
          meaning it can be used to create a variety of different programs 
          and isn’t specialized for any specific problems. This versatility, 
          along with its beginner-friendliness, has made it one of the most-used 
          programming languages today. In this course, you will learn the most useful
          basics of python and how to incorporate said concepts into actual projects!
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
              <Link href="https://courses.techoptimum.org">
                <MenuItem className="link-navs-dd-text">View Course (under work)</MenuItem>
              </Link>
               <Link href="./discord">
                <MenuItem className="link-navs-dd-text">Course Help</MenuItem>
              </Link>
             
            </MenuList>
          </Menu>
        </Flex>
        <Box
          borderRadius={"15px"}
          width="500px"
          backgroundColor={"#2E3569"}
          padding={"1.5rem"}
          h="275px"
          marginTop={"2.5rem"}
          w="400px"
        >
          <Heading marginBottom={"1rem"} fontSize={"5xl"} color="primary">
            Curriculum
          </Heading>
          <Text>
            Lesson 1: Datatypes and Variables<br />
            Lesson 2: Lists and Loops <br />
            Lesson 3: Conditionals and Functions <br />
          </Text>
          <br />
        </Box>
      </Flex>
      <Socials />
      <Footer />
    </>
  );
}
