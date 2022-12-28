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
        <Popover placement="top-start">
          <PopoverTrigger>
            <Flex direction={"column"}>
              <Button
                color={"white !important"}
                margin={"auto"}
                py="28px"
                borderRadius={"10px"}
                background="#124276"
                transition={"350ms"}
                _hover={{
                  transform: "scale(0.95)",
                }}
                _active={{
                  transform: "scale(1)",
                }}
                pt="8"
                pl="6"
                width={["250px", "380px"]}
              >
                <Heading fontWeight={"300"} fontSize={["18px", "26px"]}>
                  {role}
                </Heading>
              </Button>
            </Flex>
          </PopoverTrigger>
          <PopoverContent borderColor={"transparent"} background="#124276">
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader
              borderColor={"primary"}
              fontSize={"xl"}
              fontWeight={1000}
              margin={"0"}
            >
              {role}
              <Text>
                <Badge
                  margin={"0"}
                  variant="outline"
                  colorScheme={"whiteAlpha"}
                >
                  Department of <span>{department}</span>
                </Badge>
              </Text>
            </PopoverHeader>

            <PopoverBody>
              <List spacing={2.5}>
                <ListItem>
                  <Text fontWeight={800}>Responsibilites:</Text>
                  <ListIcon as={CheckCircleIcon} color="primary" />
                  {responsibilityOne}
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="primary" />
                  {responsibilityTwo}
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="primary" />
                  {responsibilityThree}
                </ListItem>
              </List>
            </PopoverBody>
            <Link
              isExternal
              _hover={{
                textDecoration: "none",
              }}
              href={application}
            >
              <PopoverBody>
                <Button
                fontSize={"sm"}
                  fontWeight={"normal"}
                  marginBottom={"10px"}
                  backgroundColor="blue.600"
                  _hover={{
                    backgroundColor: "blue.500",
                   
                  }}
                  borderRadius="10px"
                  rightIcon={
                    <ExternalLinkIcon position={"relative"} bottom={"2px"} />
                  }
                >
                  Apply for {role}
                </Button>
              </PopoverBody>
            </Link>
          </PopoverContent>
        </Popover>
      </Box>
    </>
  );
}
