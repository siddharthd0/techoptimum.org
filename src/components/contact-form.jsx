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

export default function HeroHeader() {
  return (
    <>
      <Flex width="100vw" justifyContent="center" margin={"auto"} color="#A7B2FF">
        <Flex marginTop="50px" marginBottom="50px" direction={{base:'column',md:'column',lg:'row'}}>
          <Box
            padding={"50px"}
            borderRadius={"20px"}
            backgroundImage={"/contact-card.svg"}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            w={{base:'300px',md:'500px',lg:'700px'}} 
           
          >
            <Heading fontSize={"4xl"} mb={"30px"}>
              Get in Touch
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
              />
              <Flex mb="40px" direction={{base:'column'}}>
                <Box mb="40px">
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
                  />
                </Box>
                <Box>
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
                  />
                </Box>
              </Flex>
              <Input
                _placeholder={{
                  color: "#A7B2FF",
                }}
                padding="0"
                placeholder="SUBJECT"
                border="none"
                borderRadius="0px"
                borderBottom="1px"
                borderBottomColor="#fff"
                marginBottom="30px"
                height={'40px'}
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
              >
                SEND
              </Button>
            </FormControl>
          </Box>
          <Flex
            paddingLeft="5rem"
            width="40vw"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            color="#A7B2FF"
          >
            <Box
              paddingBottom="2rem"
              borderBottom="1px"
              borderBottomColor="#A7B2FF"
              marginLeft={{base:'90px',md:'140px',lg:'100px'}} 
              marginTop={{base:'40px',md:'60px'}}
            >
              <Flex marginBottom="20px" alignItems="center">
                <img src="/contact-icon-1.svg" alt="talking icon" width="60" />
                <Text fontSize="3xl" ml="10px" fontWeight="bold" w={{base:'300px',md:'500px',lg:'700px'}}>
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
              marginLeft={{base:'90px',md:'140px',lg:'100px'}} 
              marginTop={{base:'40px',md:'60px'}}
            >
              <Flex marginBottom="20px" alignItems="center">
                <img src="/contact-icon-2.svg" alt="talking icon" width="60" />
                <Text fontSize="3xl" ml="10px" fontWeight="bold"  w={{base:'300px',md:'500px',lg:'700px'}}>
                  Fast Responding
                </Text>
              </Flex>
              <Text>
                We are always open and ready to respond. We won't make you wait that long, just 1-2 hours.  
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
