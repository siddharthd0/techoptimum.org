import { useState, useEffect } from "react";
import {
  IconButton,
  Textarea,
  Button,
  Box,
  VStack,
  Avatar,
  Flex,
  Spinner,
  Input,
  Text,
  Heading,
  Spacer,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useToast,
  ModalCloseButton,
  Tooltip,
} from "@chakra-ui/react";
import { BsFillSendFill, BsFlag } from "react-icons/bs";
import { Prism } from "react-syntax-highlighter";
import dynamic from "next/dynamic";
import { CopyIcon, CheckIcon, ChatIcon, CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useClipboard } from "@chakra-ui/react";
const ReactMarkdown = dynamic(() => import("react-markdown"));
import style from "@/styles/react-highlighter";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

const messageFadeInOut = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const UserMessage = ({ message, user }) => (
  <motion.div variants={messageFadeInOut} initial="hidden" animate="show">
    <Flex color="black" my="10px" justifyContent="flex-end" alignItems="center">
      <Box
        borderBottomRightRadius={"0px !important"}
        border="1px"
        borderColor="green.300"
        px="8px"
        py="4px"
        borderRadius="lg"
        boxShadow="0 3.5px 16px 0px rgba(46, 182, 125, 0.5), 0 2px 4px -1px rgba(46, 182, 125, 0.1)"
      >
        <Text>{message}</Text>
      </Box>
      <Box px="10px" pb="2px" pt="5px">
        <Avatar name={user} size="sm" />
      </Box>
    </Flex>
  </motion.div>
);

const GuruMessage = ({ message }) => {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const onClose = () => setIsReportModalOpen(false);
  const cancelRef = useRef();
  const [reportIssue, setReportIssue] = useState("");
  const [reportToDiscord, setReportToDiscord] = useState(null);

  return (
    <>
      <motion.div variants={messageFadeInOut} initial="hidden" animate="show">
        <Flex my="10px" alignItems="flex-end">
          <Box px="10px" pb="2px" pt="5px">
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              height="100%"
            >
              <Tooltip
                label="Report error with Tech Guru"
                aria-label="Report error"
              >
                <IconButton
                  mb=".5rem"
                  variant="ghost"
                  size="sm"
                  colorScheme="red"
                  aria-label="Report error"
                  icon={<BsFlag />}
                  onClick={() => setIsReportModalOpen(true)}
                />
              </Tooltip>

              <Image
                src="/glyph-black-transparent.png"
                width="30px !important"
              />
            </Flex>
          </Box>
          <Box
            border="1px"
            borderColor="blue.300"
            mr="2rem"
            px="8px"
            borderBottomLeftRadius={"0px !important"}
            borderRadius="lg"
            boxShadow="0 3.5px 16px 0px rgba(66, 153, 225, 0.5), 0 2px 4px -1px rgba(66, 153, 225, 0.1)"
          >
            <Box px="10px" className="chapter-content">
              <ReactMarkdown
                children={message}
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
              />
            </Box>
          </Box>
        </Flex>
        <Modal isOpen={isReportModalOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent color="black">
            <ModalHeader pb="0 !important">
              Report Error with Tech Guru
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pt="0 !important">
              <Text>Are you sure you want to report this message?</Text>
              <Flex my="10px" alignItems="flex-end">
                <Box px="10px" pb="2px" pt="5px">
                  <Image
                    src={`https://dashboard.techoptimum.org/glyph-black-transparent-tight.png`}
                    width="20px !important"
                  />
                </Box>
                <Box
                  border="1px"
                  borderColor="blue.300"
                  mr="2rem"
                  px="8px"
                  borderBottomLeftRadius={"0px !important"}
                  borderRadius="lg"
                  boxShadow="0 3.5px 16px 0px rgba(66, 153, 225, 0.5), 0 2px 4px -1px rgba(66, 153, 225, 0.1)"
                >
                  <Box px="10px" className="chapter-content">
                    <ReactMarkdown
                      children={message}
                      components={{
                        code({ node, inline, className, children, ...props }) {
                          const match = /language-(\w+)/.exec(className || "");
                          const textToCopy = String(children).replace(
                            /\n$/,
                            ""
                          );
                          const { hasCopied, onCopy } =
                            useClipboard(textToCopy);

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
                    />
                  </Box>
                </Box>
              </Flex>
              <Text mt="2rem">What is the issue with this message?</Text>
              <Textarea
                mt="1rem"
                placeholder="e.g. I don't understand this message"
                size="sm"
                value={reportIssue}
                onChange={(e) => setReportIssue(e.target.value)}
              />

              <Text mt="1rem" fontSize="xs">
                Please note that this will not be sent to the course creator.
                This will be sent to the Tech Guru team for review.
              </Text>
            </ModalBody>
            <ModalFooter pt="0 !important">
              <Button variant="ghost" onClick={onClose} ref={cancelRef}>
                Cancel
              </Button>
              <Tooltip label="Reporting is not available in demo mode">
                <Button
                  colorScheme="red"
                  _hover={{
                    backgroundColor: "red.500",
                    color: "white",
                  }}
                  ml={3}
                  isDisabled
                >
                  Report
                </Button>
              </Tooltip>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </motion.div>
    </>
  );
};
const TechGuruFeature = () => {
  const messagesEndRef = useRef(null);

  const [userMessages, setUserMessages] = useState([]);
  const [query, setQuery] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [userMessages]);
  

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  const handleSend = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      setShowErrorMessage(true);
      return;
    }
    setShowErrorMessage(false);
    setUserMessages([...userMessages, query]);
    setQuery("");
  };

  return (
    <Flex width="500px" flexDirection="column" mx="auto" my={5}>
      <VStack alignItems="stretch" spacing={3}>
        <Box
          pt=".5rem"
          maxH="350px"
          minH="350px"
          overflowY="auto"
          className="custom-scrollbar"
        >
          <GuruMessage
            message={`Hi, I'm Tech Guru, your personal assistant built with [GPT-4](https://openai.com).\n\n- Summarize this lesson\n- Debug this code\n- I don't understand something, can you explain it to me?`}
          />
          <GuruMessage
            message={`Hi, I'm Tech Guru, your personal assistant built with [GPT-4](https://openai.com).\n\n- Summarize this lesson\n- Debug this code\n- I don't understand something, can you explain it to me?`}
          />

          <UserMessage
            message={`Can you help me understand how to use React hooks?`}
            user="User"
          />

          <GuruMessage
            message={`Sure, React hooks are a way to use state and other React features without writing a class. There are several hooks available, including useState, useEffect, useContext, and more. Which hook are you interested in learning about?`}
          />

          <UserMessage
            message={`I'm having trouble with the useEffect hook. Can you explain how it works?`}
            user="User"
          />

          <GuruMessage
            message={`Of course! The useEffect hook is used to perform side effects in a functional component. It takes two arguments: a function to run after rendering, and an array of dependencies. The function will run after every render if the dependencies array is empty, or if any of the dependencies have changed since the last render. What specific issue are you having with useEffect?`}
          />

          <UserMessage
            message={`I'm not sure how to use the dependencies array. Can you give me an example?`}
            user="User"
          />

          <GuruMessage
            message={`Certainly! Let's say you have a component that fetches data from an API. You only want to fetch the data when the component mounts, so you can use useEffect with an empty dependencies array to achieve this:

  \`\`\`javascript
  useEffect(() => {
    fetchData();
  }, []);
  \`\`\`

  If you want to refetch the data whenever a prop changes, you can include that prop in the dependencies array:

  \`\`\`javascript
  useEffect(() => {
    fetchData(prop);
  }, [prop]);
  \`\`\`

  Does that help?`}
          />

          {userMessages.map((msg, index) => (
            <UserMessage key={index} message={msg} user="User" />
          ))}
          <div ref={messagesEndRef}></div>
        </Box>

        <form onSubmit={handleSend}>
          <Flex alignItems="center">
            <Input
              borderRadius="md"
              size="sm"
              mt=".2rem"
              color="black"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={"What do you need help with?"}
              mr=".5rem"
            />
            <IconButton
              type="submit"
              size="sm"
              zIndex="100"
              colorScheme="teal"
              aria-label="Send message"
              icon={<BsFillSendFill />}
            />
          </Flex>
        </form>
        {showErrorMessage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Text
              my=".5rem"
              borderRadius="md"
              fontSize="xs"
              px="6px"
              bg="red.100"
              color="red.500"
            >
              No empty messages allowed!
            </Text>
          </motion.div>
        )}
      </VStack>
    </Flex>
  );
};

export default TechGuruFeature;
