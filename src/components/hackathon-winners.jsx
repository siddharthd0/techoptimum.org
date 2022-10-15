import { Container, Flex, Heading, Text, Button, Icon } from "@chakra-ui/react";
// import { ExternalLinkIcon } from "@chakra-ui/icons";
import { BsArrowUpRight } from "react-icons/bs";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

export default function HackathonWinners() {
  return (
    <>
      <Heading fontSize='5xl' color='primary' align='center'>
        Winners
      </Heading>
      <br></br>
      <Flex align='center' justify='center'>
        <Stack spacing='40px' direction='row'>
          <Box boxSize='xlg'>
            <Link href='https://devpost.com/software/genfolio' isExternal>
              <Image
                _hover={{
                  opacity: 0.65,
                }}
                transition='500ms'
                width='420px'
                borderRadius='30px'
                src='https://cdn.discordapp.com/attachments/995836673738940416/1007072533335506974/firstplace.png'
                alt='GenfolioDevpost'
              />
            </Link>
          </Box>
          <br />
          <Box boxSize='xlg'>
            <Link href='https://devpost.com/software/school-smart' isExternal>
              <Image
                _hover={{
                  opacity: 0.65,
                }}
                transition='500ms'
                width='400px'
                borderRadius='30px'
                src='https://media.discordapp.net/attachments/995836673738940416/1007072534082105374/2ndplace.png'
                alt='schoolSmart-secondplace'
              />
            </Link>
          </Box>
          <br />
          <Box boxSize='xlg'>
            <Link href='https://devpost.com/software/steve-s-pixels' isExternal>
              <Image
                _hover={{
                  opacity: 0.65,
                }}
                transition='500ms'
                width='400px'
                borderRadius='30px'
                src='https://media.discordapp.net/attachments/995836673738940416/1007072533637500938/3rdplace.png'
                alt='Steve-s-Pixels-thirdplace'
              />
            </Link>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
