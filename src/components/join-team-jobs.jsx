import { Image, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import JoinWebDev from "../assets/web-developer-graphic.svg";
export default function JoinTeamJobs() {
  return (
    <>
      <Flex
        zIndex={"2"}
        mt="-15rem"
        flexDir="column"
        width="50%"
        height={"600px"}
        backgroundImage={
          "https://cdn.discordapp.com/attachments/910672979401269258/1014761300431208578/Rectangle_5939.png"
        }
      >
        <Heading
          pt="4rem"
          textAlign={"center"}
          marginX="auto"
          className="development-heading"
        >
          Development
        </Heading>
        <Text
          mt={"2rem"}
          mb="2rem"
          width={"60%"}
          marginX="auto"
          textAlign={"center"}
          color={"#495DE6"}
        >
          As a website developer, you will be working on the Tech optimum
          Website to improve & maintain it.
        </Text>
        <Button
          backgroundColor="transparent"
          _hover={{
            backgroundColor: "transparent",
            color: "#9DB2F6",
          }}
          padding={"0"}
          color="#1B76FF"
          fontWeight={"400"}
          marginX={"auto"}
          rightIcon={<ExternalLinkIcon position={"relative"} bottom={"2px"} />}
        >
          LEARN MORE
        </Button>
        <JoinWebDev width="50vw" />
      </Flex>
    </>
  );
}
