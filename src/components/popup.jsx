import {
    Box,
    Button,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    Text,
    ModalBody,
    ModalFooter,
    useDisclosure,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  
  function Popup() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isFirstTime, setIsFirstTime] = useState(false);
  
    useEffect(() => {
      if (typeof window !== "undefined") {
        const seenPopup = localStorage.getItem("seenPopup");
        if (!seenPopup || seenPopup === "false") {
          setIsFirstTime(true);
          onOpen();
          localStorage.setItem("seenPopup", "true");
        }
      }
    }, [onOpen]);
  
    return (
      <Modal isOpen={isFirstTime && isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="blackAlpha.900">Check Out Our Dashboard</ModalHeader>
          
          <ModalCloseButton color="black" />
          <ModalBody>
            <Text color="blackAlpha.900">
                We have a learning platform where you can learn about various technologies and increase your knowledge for free.
            </Text>
            <Image src="/sneakpeak.svg" alt="Dashboard Image" />
          </ModalBody>
      
            <Button colorScheme="blue" my={4} mx={8} as="a" href="https://dashboard.techoptimum.org">
            Check out 15+ coding courses
            </Button>
           
     
        </ModalContent>
      </Modal>
    );
  }
  
  export default Popup;
  