import { Flex, Heading, Text, Link, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import AOS from "aos";
import Head from "next/head";
export default function Events() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Flex
      marginLeft={["2rem", "7rem"]}
      marginTop={["5rem", "8rem"]}
      direction={"column"}
    >
      <Head>
        <link
          href="https://unpkg.com/aos@next/dist/aos.css"
          rel="stylesheet"
          key="test"
        />
      </Head>

      <Heading
        color="primary"
        fontSize={["4xl", "5xl"]}
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        Events
      </Heading>

      <Link href="./hackathon">
        <Text
          color="primary"
          fontSize={["xl", "2xl"]}
          marginTop={"1.5rem"}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Participate in events hosted by Tech Optimum
        </Text>
      </Link>

      <Flex direction={["column", "row"]}>
        <Text
          color="primary"
          fontSize={["md", "lg"]}
          marginTop={"1rem"}
          mr="5rem"
          data-aos="fade-right"
          data-aos-duration="1000"
          maxWidth={"800px"}
        >
          We host yearly hackathons. A hackathon is 48-hour coding competition
          in which participants can code projects as a team or individually and
          compete for numerous prizes! Not only that but, we host fun
          tournaments. Check out the hackathon that we hosted in summer 2022
          with over 300 participants{" "}
          <Link isExternal href="/hackathon">
            here
          </Link>
          .
        </Text>
        <Image
          data-aos="zoom-in"
          data-aos-delay="450"
          mt={["0rem", "-10rem"]}
          p={"0"}
          boxSize="300px"
          src="https://media.discordapp.net/attachments/910672979401269258/1017251262422601870/stripy-90_1.png"
          alt="Tech Optimum Events"
        />
      </Flex>
    </Flex>
  );
}
