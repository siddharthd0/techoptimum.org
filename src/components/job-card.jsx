import { Box, Flex, Heading, Button, Link, Badge } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function JobPostingCard({
  role,
  application,
  department,
  responsibility,
  onSelect,
  selected, // new prop
}) {
  return (
    <>
      <Box
        py=".7rem"
        px="1rem"
        position="relative"
        borderRadius={"md"}
        width={["300px","375px"]}
        onClick={onSelect}
        background={selected ? "blue.100" : "secondary"} // change color if selected
        transition="300ms"
        _hover={{
          color: "white",
          transform: "scale(.95)",
          cursor: "pointer",
        }}
      >
        <Heading fontWeight="600" color={selected ? "black" : "white"} fontSize="lg" mb={"6px"}>
          {role}
        </Heading>
        <Badge colorScheme="blue">{department}</Badge>
      </Box>
    </>
  );
}
