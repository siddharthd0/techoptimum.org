import { Text, Box, Flex, Heading } from "@chakra-ui/react";

export default function JobPostingCard({ role, description }) {
  return (
    <>
      <Box
        width={"300px"}
        borderRadius="10%"
        background={"footerBg"}
        pt="6"
        pl="6"
      >
        <Heading fontSize={"3xl"}>{role}</Heading>
        <Text>{description}</Text>

        <Flex
          margin="auto"
          description={description}
          role={role}
          width={"250px"}
          height={"100px"}
        ></Flex>
      </Box>
    </>
  );
}
