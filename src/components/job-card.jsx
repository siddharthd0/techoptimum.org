import { Text, Box, Flex, Heading, Button, Link, useDisclosure } from "@chakra-ui/react";
import { ExternalLinkIcon, InfoOutlineIcon } from "@chakra-ui/icons";

export default function JobPostingCard({ role, description, application }) {
    
  return (
   

    <>
      <Box
        width={"300px"}
        borderRadius="10%"
        background={"footerBg"}
        pt="6"
        pl="6"
     
      >
        <Heading mb=".75rem;" color="secondary" fontSize={"3xl"}>{role}</Heading>
        <Text color="primary">{description}</Text>
        <Link
        isExternal
          _hover={{
            textDecoration: "none",
          }}
          href={application}
        >
          <Button
            colorScheme="buttonBg"
            borderRadius="full"
            px="6"
            marginTop={3}
            fontWeight="normal"
            rightIcon={
              <ExternalLinkIcon position={"relative"} bottom={"2px"} />
            }
            mb="2rem;"
          >
            Apply
          </Button>
        </Link>
      </Box>
    </>
  );
}
