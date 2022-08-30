import { motion } from "framer-motion";
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Heading,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
export default function HeroHeader() {
  return (
    <>
      <Flex width="1000px" margin={"auto"}>
        <Flex
          padding={"30px"}
          borderRadius={"20px"}

          backgroundColor={"#444867"}
          marginBottom={"60px"}
          marginTop={"50px"}
          width="700px"
        >
          <div>
            <Heading fontSize={"4xl"} mb={"15px"}>Get in Touch </Heading>
            <FormControl>
              <FormLabel >Email</FormLabel>
              <Input mb={"15px"}placeholder="siddharthduggal2013@gmail.com"type="email" />
              <Flex>
              <FormLabel>First name</FormLabel>
                <Input placeholder='Siddharth' />
                <FormLabel ml="20px">Last name</FormLabel>
                <Input placeholder='Duggal' />
              </Flex>
              <FormLabel mt={"15px"} >Message</FormLabel>
              <Textarea placeholder='Explain what you need help with here!' />
          
               <Button
            backgroundColor="#2E3569"
            borderRadius="full"
            px="10"
            marginTop={3}
            fontWeight="normal"
            rightIcon={
              <BsArrowRight position={"relative"}  />
            }
            _hover={{
              backgroundColor:"#272D56",
            }}

          >
            SEND
          </Button>
            </FormControl>
            
          </div>
        </Flex>
      </Flex>
    </>
  );
}
