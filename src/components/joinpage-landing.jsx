import { Link, Heading, Flex, Text, Button } from "@chakra-ui/react";
// import JoinText from "../assets/Join-text-underline.svg";
import { BsArrowUpRight } from "react-icons/bs";
import { ExternalLinkIcon } from "@chakra-ui/icons";
export default function JoinHero() {
  return (
    <>
      <Flex
        bg="#29368C"
        textAlign="center"
        flexDir="column"
        justifyContent="space-around"
        alignItems="center"
        height="100vh"
        width="100vw"
        paddingTop="5%"
        paddingBottom="10%"
        marginTop={"-11.5vh"}
      >
        <Heading marginTop={"140px "} fontWeight={100} fontSize={"7xl"}>
          Tech Optimum
          <br />
          Community
        </Heading>
        <Text fontSize="2xl">
          Join a community of like-minded <br/>people who enjoy coding. 
          
        </Text>
        <Link _hover={{
              textDecoration: "none !important",
            }}href="./discord"
            isExternal>
          <Button
            colorScheme="buttonBg"
            padding="25px 35px 25px 35px"
            fontSize="2xl"
            fontWeight="normal"
            rounded="full"
            rightIcon={
              <ExternalLinkIcon position={"relative"} bottom={"2px"} />
            }
          >
           Take me there
          </Button>
        </Link>
      </Flex>
    </>
  );
}
