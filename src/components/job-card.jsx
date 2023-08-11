import { Box, Badge, Checkbox, HStack } from "@chakra-ui/react";
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
        py=".5rem"
        // px="1rem"
        position="relative"
        // borderRadius={"md"}
        width={"400px"}
        onClick={onSelect}
        transition="300ms"
        borderBottom={"1px solid black"}
        _hover={{
          backgroundColor: "twitter.300",
          borderBottom: "0px",
          transform: "scale(1.05)",
          cursor: "pointer",
        }}
        className="department-item"
      >
        <HStack spacing='24px' >
          <Box justify="center" w='200px' h='20px' color="black">
            {role}
          </Box>
          <Box justify="center" w="100px" h='20px'>
            <Badge>{department}</Badge>
          </Box>
        </HStack>
      </Box >
    </>
  );
}
