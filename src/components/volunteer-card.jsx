import { Text, Flex, Box, Image } from "@chakra-ui/react";

export default function Volunteer({ src, name, role }) {
  return (
    <>
      <Box
   
        
        width={"350px"}
        borderRadius="20px"
        padding="10px 10px 10px 20px"
      >
        <Flex alignItems={"center"} direction={"row"}>
          <Image
            marginRight={"1rem"}
            src={src}
            alt={name}
            width={"100px"}
            height={"100px"}
            borderRadius="md"
          />
          <Flex direction="column">
            <Text color={"primary"} fontSize={"2xl"}>
              {name}
            </Text>
            <Text color={"blue.500"} fontSize={"md"}>
              {role}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
