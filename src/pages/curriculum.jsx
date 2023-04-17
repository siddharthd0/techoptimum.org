import CurriculmLanding from "../components/curriculm-landing";
import Socials from "../components/socials";
import CourseDetail from "../components/course-detail";
import { Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import {
  FaGraduationCap,
  FaPython,
  FaDatabase,
  FaJsSquare,
} from "react-icons/fa";

const courseData = [
  {
    title: "Intro to Web Dev.",
    color: "#FE9292",
    colorScheme: "red",
    icon: FaGraduationCap,
    type: "Introductory Course",
    introduction: `Ever wondered how websites are made? In this course, create simple
      websites using HTML, CSS and JS. Host, publish and share your new
      personalized website that you created from scratch. All concepts
      taught in this course are introductory concepts so people of all
      skill-levels can understand the curriculum. By the end of this
      course, you will have made 3 projects and you will have mastered the
      fundementals of HTML, CSS, and JS.`,
    curriculum: [
      "Lesson 1: Basics of HTML",
      "Lesson 2: Basics of CSS",
      "Lesson 3: Basics of JS in Web Dev.",
      "Lesson 4: Make your website and style it",
      "Lesson 5: Design and build your final project",
    ]
  },
  {
    title: "Intro to Python",
    type: "Introductory Course",
    color: "#ffd343",
    colorScheme: "yellow",
    icon: FaPython,
    introduction: `Python has become one of the most popular programming languages in
      the world in recent years. Python is a general-purpose language,
      meaning it can be used to create a variety of different programs and
      isn’t specialized for any specific problems. This versatility, along
      with its beginner-friendliness, has made it one of the most-used
      programming languages today. In this course, you will learn the most
      useful basics of python and how to incorporate said concepts into
      actual projects!`,
    curriculum: [
      "Lesson 1: Datatypes and Variables",
      "Lesson 2: Lists and Loops",
      "Lesson 3: Conditionals and Functions",
      "Lesson 2 and 3 Exercise",
      "Lesson 4: Dictionaries",
      "Lesson 5: Modules",
      "Final Project!"
    ]
  },
  {
    title: "Intro to SQL",
    type: "Introductory Course",
    color: "#fff",
    colorScheme: "blue",
    icon: FaDatabase,
    introduction: `SQL (Structured Query Language) is a standard programming language
      used for managing relational databases. It is used to create,
      modify, and query databases for storing and retrieving data. With
      SQL, you can insert, update, and delete data, retrieve data based on
      various conditions, and manipulate data in a database to meet
      specific requirements. SQL is used in many applications, including
      online shopping systems, financial systems, and customer
      relationship management systems, among others.`,
    curriculum: [
      "Lesson 1: Introduction to SQL",
      "Lesson 2: Postgre SQL",
      "Lesson 3: Foundation of SQL",
      "Lesson 4: Importing and Exporting External Data",
      "Lesson 5: Advanced SQL",
      "Lesson 6: Database Design and Normalisation",
      "Lesson 7: SQL Functions and Stored Procedures"
    ]
  },
  {
    title: "Intro to JavaScript",
    type: "Introductory Course",
    color: "#F0DB4F",
    colorScheme: "yellow",
    icon: FaJsSquare,
    introduction: `JavaScript is a high-level, interpreted programming language that is
      commonly used for web development. It is used to add interactivity
      and other dynamic elements to websites, such as form validation,
      creating animations, and handling user events like clicking a
      button. JavaScript runs on the client side, which means that the
      code is executed directly in the user&apos;s browser, making it fast and
      efficient. JavaScript can also be used for server-side development
      using technologies like Node.js. JavaScript is a flexible and
      versatile language that is widely used for creating dynamic and
      interactive web applications.`,
    curriculum: [
      "Lesson 1: Datatypes in JavaScript",
      "Lesson 2: Variables in JavaScript",
      "Lesson 3: Control Flow in JavaScript",
      "Lesson 4: Functions in JavaScript",
      "Lesson 5: Arrays in JavaScript",
      "Lesson 6: Objects in JavaScript",
      "Assessment: JavaScript Concepts",
    ]
  }
]

export default function Curriculm() {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  return (
    <>
      <CurriculmLanding />
      <Text mb={["2rem", "4rem"]} id="web-dev"></Text>
      {courseData.map((course, index) => <CourseDetail key={index} course={course} />)}
      <Socials />
    </>
  );
}
