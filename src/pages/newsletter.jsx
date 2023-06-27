import React, { useState } from "react";
import {
  Flex,
  Box,
  Input,
  Heading,
  Text,
  useToast,
  Button,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function newsletter() {
  const toast = useToast();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      toast({
        title: "Subscription successful",
        description: "Thank you for subscribing to our newsletter!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error:", error);

      toast({
        title: "An error occurred.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false); // Reset loading state when the operation is finished
    }
  };

  const bgImage = useBreakpointValue({
    base: "https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=667&q=80", // smaller image for mobile
    md: "https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", // larger image for desktop
  });

  return (
    <>
      <Flex
        color="primary"
        minH="100vh"
        justifyContent={"center"}
        align={"center"}
        flexDirection={"column"}
        bgImage={`url(${bgImage})`}
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <Box
          textAlign={"center"}
          bg="rgba(255, 255, 255, 0.1)"
          backdropFilter="blur(10px)"
          borderRadius="md"
          p="1rem"
          boxShadow="0 4px 6px 0 rgba(31, 38, 135, 0.37)"
          border="1px solid rgba(255, 255, 255, 0.18)"
          h={"222px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading fontSize="lg" mt="1rem">
            Receive Weekly Emails
          </Heading>
          <Text mt="5px">
            Get the latest news, event updates, and more from Tech Optimum.
          </Text>
          <Flex mt="6px" alignItems={"center"} justifyContent={"center"}>
            <form onSubmit={handleSubmit}>
              <Input
                variant={"flushed"}
                width="220px"
                color="primary"
                borderColor={"black"}
                placeholder="Enter your email"
                _placeholder={{
                  color: "primary",
                }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                type="submit"
                color="primary"
                border="none"
                isLoading={isLoading}
              >
                <ArrowForwardIcon />
              </Button>
            </form>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
