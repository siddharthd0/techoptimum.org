import {
    Box,
    Button,
    VStack,
    Text,
    extendTheme,
    useTheme,
    ChakraProvider,
    Image,
    Flex,
    keyframes,
  } from "@chakra-ui/react";
  import { AnimatePresence, motion } from "framer-motion";
  import { useState, useEffect } from "react";
  
  const moveBackground = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 100% 0; }
`;
  const VerticalSlideFeatures = () => {
    const [selected, setSelected] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setSelected((prevSelected) => (prevSelected + 1) % FEATURES.length);
      }, 20000);
      return () => clearInterval(intervalId);
    }, []);
  
    return (
        <Flex mx="auto" px={{ base: 4, md: 8 }} py={12} bg="white" gap={6}>
          <VStack maxW="40%" align="start" spacing={4}>
            <Text fontSize="md" color="blackAlpha.800">
              {FEATURES[selected].description}
            </Text>
            <Tabs selected={selected} setSelected={setSelected} />
          </VStack>
          <AnimatePresence mode="wait">
            {FEATURES.map((tab, index) => {
              return selected === index ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  key={index}
                  className="w-full"
                >
                  <tab.Feature />
                </motion.div>
              ) : undefined;
            })}
          </AnimatePresence>
        </Flex>

    );
  };
  
  const Tabs = ({ selected, setSelected }) => {
    return (
      <VStack align="start" spacing={2}>
        {FEATURES.map((tab, index) => {
          return (
            <Tab
              key={index}
              setSelected={setSelected}
              selected={selected === index}
              title={tab.title}
              tabNum={index}
            />
          );
        })}
      </VStack>
    );
  };
  
  const Tab = ({ selected, title, setSelected, tabNum }) => {
    const theme = useTheme();
  
    return (
      <Button
        onClick={() => setSelected(tabNum)}
        p={4}
        d="flex"
        alignItems="center"
        justifyContent="start"
        position="relative"
        _hover={{ borderColor: theme.colors.blue[500] }}
        
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          bottom="0"
          bg="gray.200"
          transition="width 10s linear"
          width={selected ? "100%" : "0"}
          zIndex="-1"
        />
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          color={selected ? theme.colors.blue[500] : "black"}
          _hover={{ color: theme.colors.blue[500] }}
        >
          {title}  
        </Text>
      </Button>
    );
  };
  
  export default VerticalSlideFeatures;
  
  const FEATURES = [
    {
      title: "Practical Coding Experience",
      description:
        "Master the skills you need from our lessons and apply them to real-world projects.",
      Feature: () => <Image src="sneakpeak1.svg" />, 
    },
    {
      title: "AI Assistant",
      description:
        "Tech Guru will be there to provide hints and tips within lessons when you need them.",
      Feature: () => (
       <Image  src="sneakpeak2.svg" />
      ), 
    },
    {
      title: "Progress Checks & Quizzes",
      description:
        "Test your knowledge as you are learning with our quizzes and progress checks.",
      Feature: () => (
        <Image src="sneakpeak3.svg" />
      ),
    },
  ];
  