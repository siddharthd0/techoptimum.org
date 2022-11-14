import {
  Text,
  Box,
  Flex,
  Heading,
  Button,
  Link,
  Badge,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  List,
  ListItem,
  ListIcon,
  Image,
} from "@chakra-ui/react";
import { CheckCircleIcon, ExternalLinkIcon } from "@chakra-ui/icons";

export default function JobPostingCard({
  role,
  description,
  application,
  department,
  responsibilityOne,
  responsibilityTwo,
  responsibilityThree,
}) {
  return (
    <>
      <Box>
        <Popover placement="top">
          <PopoverTrigger>
            <Flex direction={"column"}>
              <Button
                class="job-listing"
                px="30px"
                py="20px"
                borderRadius={"20px"}
                background="linear-gradient(164.59deg, #530041 10.8%, #28006B 125.52%);"
                transition={"500ms"}
                _hover={{
                  transform: "scale(0.92)",
                }}
                _active={{
                  transform: "scale(0.99)",
                }}
                pt="6"
                pl="6"
              >
              

                <Heading color="#BD75E5;" fontSize={"3xl"}>
               
                  {role}
                </Heading>
              </Button>
            </Flex>
          </PopoverTrigger>
          <PopoverContent
            borderColor={"transparent"}
            background="linear-gradient(164.59deg, #530041 10.8%, #28006B 125.52%);"
          >
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader
              color={"#BD75E5"}
              borderColor={"#BD75E5"}
              fontSize={"xl"}
              fontWeight={1000}
              margin={"0"}
            >
              {role}
              <Text>
                <Badge margin={"0"} variant="outline" colorScheme={"purple"}>
                  Department of <span>{department}</span>
                </Badge>
              </Text>
            </PopoverHeader>

            <PopoverBody color={"#BD75E5"}>
              <List spacing={2.5}>
                <ListItem>
                  <Text fontWeight={800}>Responsibilites:</Text>
                  <ListIcon as={CheckCircleIcon} color="purple.300" />
                  {responsibilityOne}
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="purple.300" />
                  {responsibilityTwo}
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="purple.300" />
                  {responsibilityThree}
                </ListItem>
              </List>
            </PopoverBody>
            <Link
              isExternal
              _hover={{
                textDecoration: "none",
                color: "skyblue",
              }}
              href={application}
            >
              <PopoverBody>
                <Button
                  borderColor={"#BD75E5"}
                  fontWeight={"normal"}
                  marginBottom={"10px"}
                  background="linear-gradient(164.59deg, #530041 10.8%, #28006B 125.52%);"
                  _hover={{
                    boxShadow: "2px 9px 50px -15px #000000;",
                  }}
                  borderRadius="full"
                  px="6"
                  rightIcon={
                    <ExternalLinkIcon position={"relative"} bottom={"2px"} />
                  }
                >
                  Apply
                </Button>
              </PopoverBody>
            </Link>
          </PopoverContent>
        </Popover>
      </Box>
    </>
  );
}
