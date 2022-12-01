import {
  Text,
  Flex,
  Box,
  Image,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Heading,
  Link
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
      <Box maxWidth={"420px"} borderRadius="20px" padding="10px 10px 10px 20px">
        <Flex alignItems={"center"} direction={"row"}>
          <Image
            marginRight={"1rem"}
            src={src}
            alt={name}
            width={"105px"}
            height={"105px"}
            borderRadius="full"
            transition={"300ms"}
            border= "2px solid transparent"
            _hover={{
              transition: "ease-in-out 300ms",
              border: "2px solid orange",
              brightness: ".2",
              cursor: "pointer",
            }}
            onClick={onOpen}
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
          <Flex mt="1.5rem"alignItems={"center"} >
        <Image
            marginRight={"1rem"}
            src={src}
            alt={name}
            width={"105px"}
            height={"105px"}
            borderRadius="full"
           
            margin="1.5rem"
          />
          <Flex  direction="column">
          <Heading fontWeight={"light"} fontSize={"3xl"}>{name}</Heading>
           <Text>{role}</Text>
           <Link isExternal href={linkedin}>
           <IoLogoLinkedin size={24}  className="linkedin" />
           </Link>
           </Flex>
           
           </Flex>
          <ModalCloseButton />
         
          <ModalBody>
         
          <Text>{description}</Text>
          
          </ModalBody>
          <ModalFooter>
       
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
