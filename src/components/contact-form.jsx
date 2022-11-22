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
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

export default function HeroHeader() {
  return (
    <>
      <Flex
        width="100vw"
        justifyContent="center"
        margin={"auto"}
        color="#A7B2FF"
      >
        <Flex width="70vw" marginTop="50px" marginBottom="50px">
          <Box
            padding={"50px"}
            borderRadius={"20px"}
            backgroundImage={"/contact-card.svg"}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            width="35vw"
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
                borderBottomColor="#fff"
                _focus={{
                  "box-shadow": "none",
                }}
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
                    borderBottomColor="#fff"
                    _focus={{
                      "box-shadow": "none",
                    }}
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
                    borderBottomColor="#fff"
                    _focus={{
                      "box-shadow": "none",
                    }}
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
                borderBottomColor="#fff"
                marginBottom="30px"
                height="17vh"
                _focus={{
                  "box-shadow": "none",
                }}
              />

              <Button
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
            paddingLeft="5rem"
            width="35vw"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            color="#A7B2FF"
          >
            <Box
              paddingBottom="2rem"
              borderBottom="1px"
              borderBottomColor="#A7B2FF"
            >
              <Flex marginBottom="20px" alignItems="center">
                <Image
                  src="/contact-icon-1.svg"
                  alt="talking icon"
                  width="60"
                  height="60"
                />
                <Text fontSize="3xl" ml="10px" fontWeight="bold">
                  Speak the truth
                </Text>
              </Flex>
              <Text>
                At Tech Optimum we thrive for your feedback! We always like
                people who speak the truth, so share your honest feedback, ask
                questions, and just speak the truth.
              </Text>
            </Box>
            <Box
              paddingTop="2rem"
              paddingBottom="2rem"
              borderBottom="1px"
              borderBottomColor="#A7B2FF"
            >
              <Flex marginBottom="20px" alignItems="center">
                <Image
                  src="/contact-icon-2.svg"
                  alt="talking icon"
                  width="60"
                  height="60"
                />
                <Text fontSize="3xl" ml="10px" fontWeight="bold">
                  Don&apos;t wait long
                </Text>
              </Flex>
              <Text>
                We are always here to respond. You won&apos;t have to wait a
                long time for a response from our team!
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
