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

export default function HeroHeader() {
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
              />

              <Button
               onClick={() =>
                toast({
                  title: 'Message Sent!',
                  description: "We'll get back to you as soon as possible.",
                  status: 'success',
                  duration: 9000,
                  isClosable: true,
                })
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
              paddingLeft="2rem"
              borderLeftColor="#A7B2FF"
              borderLeftWidth={"3px"}
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
                <br/>
                <b>Instagram:</b> <a href="https://www.instagram.com/techoptimum_/">@techoptimum_</a>
              </Text>
            </Box>
           
            
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
