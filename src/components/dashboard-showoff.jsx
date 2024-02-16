import React, { useState } from "react";
import ProgressCheck from "@/components/progress-check-show-off";
import ChapterContent from "@/components/chapter-content-show";
import TechGuru from "@/components/tech-guru-show-off";
import { Box, Heading, Text } from "@chakra-ui/react";

function dashboardShowoff() {
  const [ tab, setTab ] = useState("content");
  return (
    <Box
      pt="1rem"
      mt={["0rem", "4rem"]}
      maxW="1070px"
      mx="auto"
      direction={"column"}
      width="100%"
      display="flex"
      justifyContent="start"
      alignItems="center"
    >
      <Box>
        <Heading
          textAlign={{ base: "center", lg: "left" }}
          color="primary"
          fontSize={{ base: "3xl", md: "4xl" }}
          mb="10px"
        >
          Our Dashboard
        </Heading>
        <Box display="flex" justifyContent="center"
        alignItems="center" width="100%" mb="20px">
          <Text color={tab == "content" ? "blue.500" : "grey"} borderBottom="2px" borderColor={tab == "content" ? "blue.500" : "grey"} _hover={{ borderColor: "blue.200", color: "blue.200", cursor: "pointer" }} mr="30px" px="4px" onClick={() => setTab("content")}>1. Quality Content & Videos</Text>
          <Text color={tab == "questions" ? "blue.500" : "grey"} borderBottom="2px" borderColor={tab == "questions" ? "blue.500" : "grey"} _hover={{ borderColor: "blue.200", color: "blue.200", cursor: "pointer" }} mr="30px" px="4px" onClick={() => setTab("questions")}>2. Progress Check w/ Questions</Text>
          <Text color={tab == "ai" ? "blue.500" : "grey"} borderBottom="2px" borderColor={tab == "ai" ? "blue.500" : "grey"} _hover={{ borderColor: "blue.200", color: "blue.200", cursor: "pointer" }} mr="30px" px="4px" onClick={() => setTab("ai")}>3. AI Help (Tech Guru)</Text>
        </Box>
        {tab === "content" && (
          <ChapterContent />
        )}
        {tab === "questions" && (
          <ProgressCheck />
        )}
        {tab === "ai" && (
          <TechGuru />
        )}
      </Box>
    </Box>
  );
}

export default dashboardShowoff;
