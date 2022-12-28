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
          borderColor: "blue.700 !important",
          cursor: "pointer",
        }}
        borderColor={"transparent !important"}
        border={"1px"}
        maxWidth={"425px"}
        borderRadius="20px"
        padding="10px 10px 10px 20px"
      >
        <Flex alignItems={"center"} direction={"row"}>
          <Image
            marginRight={"1rem"}
            src={src}
            alt={name}
            width={"105px"}
            height={"105px"}
            borderRadius="full"
          />
          <Flex direction="column">
            <Text color={"primary"} fontSize={"2xl"}>
              {name}
            </Text>
            <Text color={"blue.300"} fontSize={"md"}>
              {role}
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent bgColor={"bgColor"} color="primary">
          <Flex mt="1.5rem" alignItems={"center"}>
            <Image
              marginRight={"1rem"}
              src={src}
              alt={name}
              width={"105px"}
              height={"105px"}
              borderRadius="full"
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

          <ModalBody>
            <Text>{description}</Text>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
