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
 
  return (
    <>
      <Box mb="100px">
       

        <PodcastHero />
        <Flex margin="auto" maxWidth={"1100px"} alignItems={"center"}>
          <Wrap justify="center" spacing="30px">
           
          
          </Wrap>
        </Flex>
      </Box>
      <Socials />
    </>
  );
}
