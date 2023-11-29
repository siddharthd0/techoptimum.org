import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Image,
  useClipboard,
  IconButton,
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Spacer,
  Heading,
  AspectRatio,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { Prism } from "react-syntax-highlighter";
import dynamic from "next/dynamic";
import {
  CopyIcon,
  CheckIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import ReactMarkdown from "react-markdown";
import style from "@/styles/react-highlighter";

const ChapterContent = ({ content, index }) => {
  return (
    <Flex my="10px" direction="column">
      <Box
        // px="3rem"
        position="sticky"
        bg="white"
        top="56px"
        zIndex="2"
        py=".5rem"
      >
        <Flex direction={["column", "row"]} alignItems="center">
          <Breadcrumb
            fontSize={["10px", "md"]}
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem display={["none", "block"]} color="primary">
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem display={["none", "block"]} color="primary">
              <BreadcrumbLink href="/courses">Courses</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem display={["none", "block"]} color="primary">
              <BreadcrumbLink href={`/`}>
                Getting Started with Javascript
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem
              display={["none", "block"]}
              fontWeight="bold"
              color="blue.600 !important"
              isCurrentPage
            ></BreadcrumbItem>
          </Breadcrumb>
          <Menu color="primary">
            <MenuButton
              size={["sm", "md"]}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Variables
            </MenuButton>
            <MenuList color="primary">
              <MenuItem
                color="blue.600"
                as="a"
                textDecoration="none !important"
              >
                Lesson 1
              </MenuItem>
            </MenuList>
          </Menu>
          <Spacer />
          <CircularProgress
            display={["none", "block"]}
            trackColor="green.200"
            value={16}
            color="green.400"
          >
            <CircularProgressLabel color="primary">16%</CircularProgressLabel>
          </CircularProgress>
        </Flex>
      </Box>

      <Heading
        className="heading"
        fontWeight="500"
        // px="3rem"
        mb="10px"
        fontSize="3xl"
        color="primary"
        mt="1rem"
      >
        Lesson 1: Getting Setup & Basics
      </Heading>
      <AspectRatio
        my="1rem"
        // ml="3rem"
        // maxW={`90%`}
        maxW={`98%`}
        ratio={16 / 9}
      >
        <iframe
          src="https://www.youtube.com/embed/RQzB6oRgi2g?si=aMPvGOByXVSPy_8H"
          title="Intro to Javascript Lesson 1"
          allowFullScreen
        ></iframe>
      </AspectRatio>
      <Box>
        <Box px="10px" className="chapter-content">
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                const textToCopy = String(children).replace(/\n$/, "");
                const { hasCopied, onCopy } = useClipboard(textToCopy);

                return !inline && match ? (
                  <Box position="relative">
                    <Prism
                      {...props}
                      children={textToCopy}
                      style={style}
                      language={match[1]}
                      PreTag="div"
                    />
                    <Box position="absolute" top="5px" right="6px">
                      <IconButton
                        _hover={{
                          backgroundColor: "transparent !important",
                          color: "blue.200 !important",
                        }}
                        border="none"
                        background="none"
                        color="whiteAlpha.900"
                        onClick={onCopy}
                        aria-label="Copy to clipboard"
                        icon={
                          hasCopied ? (
                            <CheckIcon color="rgb(67, 155, 255)" />
                          ) : (
                            <CopyIcon />
                          )
                        }
                      />
                    </Box>
                  </Box>
                ) : (
                  <code {...props} className={className}>
                    {children}
                  </code>
                );
              },
            }}
            skipHtml
          >
            {content}
          </ReactMarkdown>
        </Box>
      </Box>
    </Flex>
  );
};

const ChapterPreview = () => {
  return (
    <Flex
      // width="700px"
      flexDirection="column"
      mx="auto"
      my={5}
    >
      <ChapterContent
        index={6}
        content={`JavaScript is a versatile, high-level programming language that is primarily used for adding interactive features to websites. It's one of the core technologies of the web, alongside HTML and CSS. Despite its name, it's unrelated to Java.

## **Running JavaScript**

There are two main ways to run JavaScript:

1. **In the browser**: JavaScript is built into all modern web browsers. You can write code directly in your browser's JavaScript console.
2. **On your computer**: You'll need to install Node.js, a JavaScript runtime that lets you run JavaScript on your machine. Node.js is essential for server-side JavaScript development.

To install Node.js, download it from the official [website](https://nodejs.org/). After installation, you can run JavaScript files using the \`node filename.js\` command in your terminal.

## **Basic JavaScript Syntax**

JavaScript syntax refers to the set of rules on how JavaScript programs should be written. Here's an example:

\`\`\`jsx
var x = 10; // This is a variable declaration
console.log(x); // This outputs the value of x to the console
\`\`\`

Each line of JavaScript code is typically ended with a semicolon (\`;\`). Also, JavaScript is case-sensitive.

## **Arithmetic Operators**

JavaScript supports a full suite of arithmetic operators that allow you to perform mathematical operations:

- Addition (\`+\`): \`5 + 2\` equals \`7\`
- Subtraction (\`-\`): \`5 - 2\` equals \`3\`
- Multiplication (\`*\`): \`5 * 2\` equals \`10\`
- Division (\`/\`): \`5 / 2\` equals \`2.5\`
- Remainder (\`%\`): \`5 % 2\` equals \`1\`

## **Your First JavaScript Code**

Now, let's write some JavaScript code to display a message and perform a simple calculation:

\`\`\`jsx
console.log("Hello, World!"); // prints "Hello, World!"
console.log(5 * 10); // prints 50
\`\`\`

If you're using Node.js, create a new file called \`index.js\` and write the above lines of code. Save the file, open your terminal, navigate to the folder containing your \`index.js\` file, and type \`node index.js\`.

You should see "Hello, World!" and "50" displayed in your console.

## **Experimenting with JavaScript**

At this stage, feel free to experiment with the \`console.log()\` function and arithmetic operators. Try creating different expressions and see what results you get. This will give you a taste of different operations in JavaScript, which we'll discuss in the next lesson.`}
      />
    </Flex>
  );
};

export default ChapterPreview;
