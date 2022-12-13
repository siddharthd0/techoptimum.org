import Footer from "../components/footer";
import Header from "../components/header";
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
} from "@chakra-ui/react";
import PodcastHero from "../components/podcast-landing";
import PodcastPlayer from "../components/podcast-player";

export default function Podcasts() {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  return (
    <>
      <Header />
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
        <PodcastPlayer />
      </Box>
      <Socials />
      <Footer />
    </>
  );
}
