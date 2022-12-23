import { Box,Link, Heading, Flex, Text, Button } from "@chakra-ui/react";
// import JoinText from "../assets/Join-text-underline.svg";
import { ExternalLinkIcon } from "@chakra-ui/icons";
export default function JoinHero() {
  return (
    <>
      <Box
        bg="#29368C"
        textAlign="center"
        flexDir="column"
        justifyContent="space-around"
        alignItems="center"
        height={["70vh", "80vh"]}
        width="100vw"
        paddingTop="5%"
        paddingBottom="10%"
        marginTop="0"
      >
        <svg
          id="stroke"
          xmlns="http://www.w3.org/2000/svg"
          width="0"
          height="0"
        >
          <defs>
            <path
              id="line"
              d="M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              vector-effect="non-scaling-stroke"
            />
          </defs>
        </svg>

        <Heading
       
          marginTop={["80px", "80px "]}
          fontWeight={1000}
          fontSize={["3xl", "6xl"]}
        >
          Tech Optimum
        </Heading>

        <Text
          fontWeight="1000"
          fontSize={["3xl", "5xl"]}
          className="wavy"
          href="/"
        >
          Community
          <svg class="button-stroke" viewBox="0 0 154 13">
            <use href="#line"></use>
          </svg>
          <svg class="button-stroke" viewBox="0 0 154 13">
            <use href="#line"></use>
          </svg>
        </Text>

        <Text mt="2rem" px={["30px","20px"]} fontSize={["sm", "xl"]}>
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
          mt="25px"
            colorScheme="buttonBg"
            padding={["20px 25px 20px 25px", "20px 30px 20px 30px"]}
            fontSize={["md", "xl"]}
            fontWeight="normal"
            rounded="full"
            rightIcon={
              <ExternalLinkIcon position={"relative"} bottom={"2px"} />
            }
          >
            Take me there
          </Button>
        </Link>
      </Box>
    </>
  );
}
