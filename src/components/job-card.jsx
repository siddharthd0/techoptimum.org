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
        <Popover placement='top-start'>
          <PopoverTrigger>
            <Flex direction={"column"}>
              <Button
              margin={"auto"} 
                px="30px"
                py="30px"
                borderRadius={"18px"}
                background="footerBg"
                transition={"500ms"}
                _hover={{
                  transform: "scale(0.95)",
                }}
                _active={{
                  transform: "scale(0.99)",
                }}
                pt="8"
                pl="6"
                width={["250px", "390px"]}
              >
                <Heading fontWeight={"300"} color="primary" fontSize={["18px","26px"]}>
                  {role}
                </Heading>
              </Button>
            </Flex>
          </PopoverTrigger>
          <PopoverContent borderColor={"transparent"} background="footerBg">
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader
              color={"primary"}
              borderColor={"primary"}
              fontSize={"xl"}
              fontWeight={1000}
              margin={"0"}
            >
              {role}
              <Text>
                <Badge margin={"0"} variant="outline" colorScheme={"blue"}>
                  Department of <span>{department}</span>
                </Badge>
              </Text>
            </PopoverHeader>

            <PopoverBody color={"primary"}>
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
                  borderColor={"primary"}
                  fontWeight={"normal"}
                  marginBottom={"10px"}
                  border={"1px"}
                  color={"primary"}
                  backgroundColor="footerBg"
                  _hover={{
                    backgroundColor:"primary",
                    color: "black"
                  }}
                  borderRadius="10px"
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
