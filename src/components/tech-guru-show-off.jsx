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
  useClipboard,
  Tooltip,
} from "@chakra-ui/react";
import { BsFillSendFill } from "react-icons/bs";
import { Prism } from "react-syntax-highlighter";
import dynamic from "next/dynamic";
import { CopyIcon, CheckIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
const ReactMarkdown = dynamic(() => import("react-markdown"));
import style from "@/styles/react-highlighter";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

const chatVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3, // 0.3 second delay between each message
    },
  }),
};

const UserMessage = ({ message, user, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true, // This ensures the animation happens only once
  });

  return (
    <motion.div
      ref={ref}
      variants={chatVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
    >
      <Flex
        ml="3rem"
        color="black"
        my="10px"
        justifyContent="flex-end"
        alignItems="center"
      >
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
          <Avatar name={user} size="xs" />
        </Box>
      </Flex>
    </motion.div>
  );
};

const GuruMessage = ({ message, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <motion.div
        ref={ref}
        variants={chatVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={index}
      >
        <Flex mr=".9rem" my="10px" alignItems="flex-end">
          <Box pb="2px">
            <Image
            minW="35px"
              src="/glyph-black-transparent.png"
              width="30px !important"
              alt="Guru Icon"
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
                {message}
              </ReactMarkdown>
            </Box>
          </Box>
        </Flex>
      </motion.div>
    </>
  );
};
const TechGuruFeature = () => {
  const [userMessages, setUserMessages] = useState([]);
  const [query, setQuery] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

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
            index={0}
            message="Hi there! Welcome to the ReactJS course. I'm Tech Guru, here to assist you with any questions you might have. How can I help you today?"
          />

          <UserMessage
            index={1}
            message="Thanks, Guru! I've been hearing a lot about the component lifecycle in React. Can you explain it to me?"
            user="User"
          />

          <GuruMessage
            index={2}
            message={
              "In React class components, the lifecycle is a series of methods that automatically get called as your component achieves certain milestones. For instance:\n\n- **Mounting Phase**: Methods like `constructor()`, `render()`, and `componentDidMount()`.\n\n- **Updating Phase**: Includes methods like `render()` and `componentDidUpdate()`.\n\n- **Unmounting Phase**: Mainly `componentWillUnmount()`.\n\nWould you like a deeper dive into any of these?"
            }
          />

          <UserMessage
            index={3}
            message="That's super helpful, thanks! But I heard React function components don't use these lifecycle methods. How does lifecycle work in function components?"
            user="User"
          />

          <GuruMessage
            index={4}
            message={
              'You are right! Function components in React utilize Hooks, which provide a way to "hook into" React features without classes. The primary hook is **useEffect** which can mimic the behavior of lifecycle methods. For example:\n\n- **componentDidMount**: Using `useEffect` with an empty dependency array.\n\n- **componentDidUpdate**: By passing specific values in the dependency array.\n\n- **componentWillUnmount**: By returning a function inside the `useEffect`.\n\nDo you want examples or more explanations?'
            }
          />

          <UserMessage
            index={5}
            message="That's enlightening! I think I'm getting the hang of it now. Thanks, Tech Guru!"
            user="User"
          />

          <GuruMessage
            index={6}
            message="You're welcome! Remember, practice makes perfect. If you have any more questions as you dive deeper into React, don't hesitate to ask. Happy coding!"
          />

          {userMessages.map((msg, index) => (
            <UserMessage
              key={index + 7}
              index={index + 2}
              message={msg}
              user="User"
            />
          ))}
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
