import { Text, Flex, Box, Image } from "@chakra-ui/react";

export default function Volunteer({ src, name, role }) {
  return (
    <>
      <Box
      transition={"200ms"}
      _hover={{
        borderColor: "blue.700 !important",
      }}
        borderColor={"transparent !important"}
        border={"1px"}
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
            borderRadius="full"
          />
          <Flex direction="column">
            <Text color={"primary"} fontSize={"2xl"}>
              {name}
            </Text>
            <Text color={"blue.300"} fontSize={"md"}>
              {role}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
