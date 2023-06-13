import { motion } from "framer-motion";
import {
  FormControl,
  Input,
  Flex,
  Heading,
  Textarea,
  Button,
  Box,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BsArrowRight, BsDiscord, BsInstagram } from "react-icons/bs";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import { useRef } from "react";

export default function HeroHeader() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const resetValues = () => {
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  async function handleSubmit() {
    if (
      firstNameRef.current.value === "" ||
      lastNameRef.current.value === "" ||
      emailRef.current.value === "" ||
      messageRef.current.value === ""
    ) {
      toast({
        description: "Please fill in all the fields.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const template_params = {
      first_name: firstNameRef.current.value,
      last: lastNameRef.current.value,
      message: messageRef.current.value,
    };

    const data = {
      service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
      user_id: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
      template_params,
    };

    const response_support = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        body: JSON.stringify({
          ...data,
          template_id: process.env.NEXT_PUBLIC_SUPPORT_TEMPLATE_ID,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response_support.status == 200) {
      const response_user = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          body: JSON.stringify({
            ...data,
            template_id: process.env.NEXT_PUBLIC_USER_TEMPLATE_ID,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response_user);
      console.log(response_support);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Message Failed to Send.",
        description: "Email use instead at contact@techoptimum.org",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }

  const toast = useToast();
  return (
    <>
      <Flex justifyContent="center" margin={"auto"} color="primary" mt={["5rem","7rem"]}>
        <Flex
          direction={["column", "row"]}
          marginTop="50px"
          marginBottom="50px"
          mx="2rem"
        >
          <Box
            padding={"50px"}
            borderRadius="lg"
            shadow="lg"
            maxWidth="500px"
            bg="gray.50"
          >
            <Heading fontWeight="600" fontSize={"4xl"} mb={"30px"}>
              Get in Touch{" "}
            </Heading>
            <FormControl height="full">
              <Input
                mb={"40px"}
                _placeholder={{
                  color: "primary",
                }}
                padding="0"
                placeholder="Enter your email"
                type="email"
                border="none"
                borderRadius="0px"
                borderBottom="1px"
                borderBottomColor="primary"
                _focus={{
                  "box-shadow": "none",
                }}
                ref={emailRef}
              />
              <Flex mb="40px">
                <Box>
                  <Input
                    _placeholder={{
                      color: "primary",
                    }}
                    padding="0"
                    placeholder="Enter your first name"
                    border="none"
                    borderRadius="0px"
                    borderBottom="1px"
                    borderBottomColor="primary"
                    _focus={{
                      "box-shadow": "none",
                    }}
                    ref={firstNameRef}
                  />
                </Box>
                <Box ml="20px">
                  <Input
                    _placeholder={{
                      color: "primary",
                    }}
                    padding="0"
                    placeholder="Enter your last name"
                    border="none"
                    borderRadius="0px"
                    borderBottom="1px"
                    borderBottomColor="primary"
                    _focus={{
                      "box-shadow": "none",
                    }}
                    ref={lastNameRef}
                  />
                </Box>
              </Flex>
              <Textarea
                _placeholder={{
                  color: "primary",
                }}
                padding="0"
                placeholder="Enter your message here..."
                border="none"
                borderRadius="0px"
                borderBottom="1px"
                borderBottomColor="primary"
                marginBottom="30px"
                height="17vh"
                _focus={{
                  "box-shadow": "none",
                }}
                ref={messageRef}
              />
              <Button
                onClick={() => {
                  handleSubmit();
                }}
                marginTop={3}
                rightIcon={<BsArrowRight position={"relative"} />}
              >
                Send
              </Button>
            </FormControl>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
