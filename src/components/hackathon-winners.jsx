import { Container, Flex, Heading, Text, Button, Icon } from "@chakra-ui/react";
// import { ExternalLinkIcon } from "@chakra-ui/icons";
import { BsArrowUpRight } from "react-icons/bs";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";

export default function HackathonWinners() {
  return (
    <>
      <Heading fontSize="6xl"color="primary"align="center">Winners</Heading>
      <br></br>
      <Flex align="center" justify="center">
      <Stack spacing="40px"direction='row'>

        <Box>
          <Image width="400px"borderRadius='30px'fallbackSrc='https://via.placeholder.com/500'src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/002/034/353/datas/medium.png" alt="Dan Abramov" />
        </Box>
        <br />
        <Box boxSize="xxlg">
          <Image width="400px"borderRadius='30px'fallbackSrc='https://via.placeholder.com/500'src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/002/033/999/datas/medium.png" alt="Dan Abramov" />
        </Box>
        <br />
        <Box boxSize="xlg">
          <Image width="400px"borderRadius='30px'fallbackSrc='https://via.placeholder.com/500'src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/002/034/967/datas/medium.png" alt="Dan Abramov" />
        </Box>


        </Stack>
      </Flex>
    </>
  );
}
