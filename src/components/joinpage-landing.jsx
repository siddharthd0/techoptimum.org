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
        height={["70vh","80vh"]}
        width="100vw"
        paddingTop="5%"
        paddingBottom="10%"
        marginTop="0"
       
      >
        <Heading
        
          marginBottom={["-50px", "-20px"]}
          marginTop={"30px "}
          fontWeight={100}
          fontSize={["4xl", "6xl"]}

        >
          Tech Optimum
          <br/>
          Community
        </Heading>
      
        <Text px="20px" fontSize={["lg", "2xl"]}>
          Join our Discord community of like-minded <br />
          people who enjoy coding and building new projects!
        </Text>
        <Link
          _hover={{
            textDecoration: "none !important",
          }}
          href="./discord"
          isExternal
        >
          <Button
         marginTop={"-30px "}
            colorScheme="buttonBg"
            padding={["20px 25px 20px 25px","20px 30px 20px 30px"]}
            fontSize={["lg", "xl"]}
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
