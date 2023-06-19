import {
  Text,
  Flex,
  Box,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Heading,
  Link,
} from "@chakra-ui/react";
import { IoLogoLinkedin } from "react-icons/io";

export default function ExecutiveCard({
  src,
  name,
  role,
  description,
  linkedin,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        onClick={onOpen}
        transition={"250ms"}
        _hover={{
         bg: "gray.100",
          cursor: "pointer",
        }}
        borderColor={"transparent !important"}
        border={"1px"}
        maxWidth={"350px"}
        borderRadius="md"
        padding="10px 10px 10px 10px"
        _groupActive={{
          bg: "gray.500",
        }}
      >
        <Flex alignItems={"center"} direction={"row"}>
          <Image
            marginRight={"1rem"}
            src={src}
            alt={name}
            width={"105px"}
            height={"105px"}
            borderRadius="md"
          />
          <Flex direction="column">
            <Text color={"primary"} fontSize={"2xl"}>
              {name}
            </Text>
            <Text color={"blue.400"} fontSize={"md"}>
              {role}
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent bgColor={"gray.50"} color="primary">
          <Flex mt="1rem" alignItems={"center"}>
            <Image
              marginRight={"1rem"}
              src={src}
              alt={name}
              width={"105px"}
              height={"105px"}
              borderRadius="md"
              margin="1.5rem"
            />
            <Flex direction="column">
              <Heading fontWeight={"light"} fontSize={"3xl"}>
                {name}
              </Heading>
              <Text>{role}</Text>
              <Link transition="300ms !important" isExternal href={linkedin}>
                <IoLogoLinkedin
                  transition="300ms !important"
                  size={24}
                  className="linkedin"
                />
              </Link>
            </Flex>
          </Flex>
          <ModalCloseButton />

          <ModalBody pb="2rem">
            <Text>{description}</Text>
          </ModalBody>
     
        </ModalContent>
      </Modal>
    </>
  );
}
