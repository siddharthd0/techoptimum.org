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
import { BsArrowRight } from "react-icons/bs";
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
  }

  function validateForm() {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailRef.current.value)
    && firstNameRef.current.value !== ""
    && lastNameRef.current.value !== ""
    && messageRef.current.value.length > 10)
  }

  async function handleSubmit() {
    if (!validateForm()) {
      toast({
        title: "Error",
        description: "Please fill in all the fields correctly.",
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
  

  const toast = useToast()
  return (
    <>
      <Flex
        width="100vw"
        justifyContent="center"
        margin={"auto"}
        color="#A7B2FF"
      >
        <Flex
          direction={["column", "row"]}
          width="70vw"
          marginTop="50px"
          marginBottom="50px"
        >
          <Box
            padding={"50px"}
            borderRadius={"20px"}
            backgroundImage={"/contact-card.svg"}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            maxWidth="500px"
          >
            <Heading fontSize={"4xl"} mb={"30px"}>
              Get in Touch{" "}
            </Heading>
            <FormControl height="full">
              <Input
                mb={"40px"}
                _placeholder={{
                  color: "#A7B2FF",
                }}
                padding="0"
                placeholder="EMAIL"
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
                      color: "#A7B2FF",
                    }}
                    padding="0"
                    placeholder="FIRST NAME"
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
                      color: "#A7B2FF",
                    }}
                    padding="0"
                    placeholder="LAST NAME"
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
                  color: "#A7B2FF",
                }}
                padding="0"
                placeholder="MESSAGE"
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
                  handleSubmit()
                }
                }
                backgroundColor="#2E3569"
                borderRadius="full"
                px="10"
                marginTop={3}
                fontWeight="normal"
                rightIcon={<BsArrowRight position={"relative"} />}
                _hover={{
                  backgroundColor: "#272D56",
                }}
                _active={{
                  backgroundColor: "#272D56",
                }}
              >
                SEND
              </Button>
            </FormControl>
          </Box>

          <Flex
            marginTop={["5rem", "0px"]}
            paddingLeft={["0rem", "5rem"]}
            maxWidth="530px"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            color="#A7B2FF"
          >
            <Box

              paddingLeft="1.5rem"

            >
              <Flex marginBottom="20px" alignItems="center">
                <Image
                  src="/contact-icon-1.svg"
                  alt="talking icon"
                  width="60"
                  height="60"
                />
                <Text fontSize="3xl" ml="10px" fontWeight="bold">
                  Contact us
                </Text>
              </Flex>
              <Text>
                <Text mb="10px">Some alternative methods of contact:</Text>


                <b>Discord</b> <a href="https://discord.gg/HpRfm7kp3U">discord.gg/HpRfm7kp3U</a>
                <br />
                <b>Email:</b>
                <a href="mailto:contact.techoptimum@gmail.com"
                > contact.techoptimum@gmail.com</a>
                <br />
                <b>Instagram:</b> <a href="https://www.instagram.com/techoptimum_/">@techoptimum_</a>
              </Text>
            </Box>


          </Flex>
        </Flex>
      </Flex>
    </>
  );
}