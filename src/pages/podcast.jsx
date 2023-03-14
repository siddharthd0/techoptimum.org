import Socials from "../components/socials";
import {
  Text,
  Box,
  ModalHeader,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Flex,
  Wrap,
} from "@chakra-ui/react";
import PodcastHero from "../components/talks-landing";
import TalksCard from "../components/talks-card";

export default function Podcasts() {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  return (
    <>
      <Box mb="100px">
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent backgroundColor={"blue.800"}>
            <ModalCloseButton />
            <ModalHeader color={"white"}>Under Construction</ModalHeader>
            <ModalBody>
              <Text>
                Our team is currently working hard to finish rework this page.
                Some buttons may not work, and information is not up-to-date.
                Please come back later!
              </Text>
            </ModalBody>
            <br />
          </ModalContent>
        </Modal>

        <PodcastHero />
        <Flex margin="auto" maxWidth={"1100px"} alignItems={"center"}>
          <Wrap justify="center" spacing="30px">
            <TalksCard
              src="./home-events-image.png"
              name="Dr. David Gunning"
              role="Professor at the University of Toronto"
              date={"April 2021"}
              description="A discussion with Dr. David Gunning, a professor at the University of Toronto, about the future of AI and how it will impact our lives."
              link="https://www.youtube.com/watch?v=Z1Z2Z3Z4Z5Z6Z7Z8Z9Z0"
  
              />
          
          </Wrap>
        </Flex>
      </Box>
      <Socials />
    </>
  );
}
