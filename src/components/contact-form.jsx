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
              <Input mb={"15px"}placeholder="your lovely email"type="email" />
              <Flex>
              <FormLabel>First name</FormLabel>
                <Input placeholder='ur very interesting first name' />
                <FormLabel ml="20px">Last name</FormLabel>
                <Input placeholder='what is ur poggers last name' />
              </Flex>
              <FormLabel mt={"15px"} >Message</FormLabel>
              <Textarea placeholder='your super super important message' />
              <Button 
              mt="1rem"
              color="blue">Submit</Button>
            </FormControl>
            
          </div>
        </Flex>
      </Flex>
    </>
  );
}
