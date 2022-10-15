import {
  Text,
  Box,
  Flex,
  Heading,
  Button,
  Link,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  List,
  ListItem,
  ListIcon,
  PopoverAnchor,
} from "@chakra-ui/react";
import {
  MdCheckCircle,
  CheckCircleIcon,
  ExternalLinkIcon,
  InfoOutlineIcon,
} from "@chakra-ui/icons";
import { BsArrowUpRight } from "react-icons/bs";

export default function JobPostingCard({ role, description, application }) {
  return (
    <>
      <Box
        width={"300px"}
        borderRadius="10%"
        background={"#003B73"}
        pt="6"
        pl="6"
      >
        <Heading color="#FFF6AA" mb=".75rem;" fontSize={"3xl"}>
          {role}
        </Heading>
        <Text color="#FFF6AA">{description}</Text>

        <Popover>
          <PopoverTrigger>
            <Button
              _hover={{
                background: "#066AC8",
              }}
              fontWeight="100"
              marginTop={"10px"}
              marginBottom={"24px"}
              borderRadius={"10px"}
              px="10px"
              background="#0255A4"
            >
              More Info
            </Button>
          </PopoverTrigger>
          <PopoverContent zIndex={"100"} background="black">
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader fontSize={"2xl"} fontWeight={1000}>
              {role}
            </PopoverHeader>
           
            <PopoverBody>
              <List spacing={3}>
                <ListItem>
                  <Text fontWeight={800}>Responsibilites:</Text>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Assumenda, quia temporibus eveniet a libero incidunt suscipit
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
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
                fontWeight={"normal"}
                marginBottom={"10px"}
                  colorScheme="buttonBg"
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
