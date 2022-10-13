import { Text, Box, Flex, Heading,Button,Link } from "@chakra-ui/react";
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
        height={"300px"}
      >
        <Heading fontSize={"3xl"}>{role}</Heading>
        <Text>{description}</Text>
        <Link  _hover={{
          textDecoration: "none",
        }
        }
        href={application}>
        <Button
            colorScheme="buttonBg"
            borderRadius="full"
            px="6"
            marginTop={3}
            fontWeight="normal"
            rightIcon={
              <ExternalLinkIcon position={"relative"} bottom={"2px"} />
            }
            
          >
            Apply
          </Button>
          </Link>
      </Box>
    </>
  );
}
