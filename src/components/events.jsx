import { Flex, Heading, Text } from "@chakra-ui/react";
import {useEffect} from 'react';
import AOS from 'aos';
import Head from 'next/head';
export default function Events() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);  
  return (
    <Flex marginLeft={"7rem"} marginTop={"10rem"} direction={"column"}>
      <Head>
        <link href="https://unpkg.com/aos@next/dist/aos.css" rel="stylesheet" key="test"/>
      </Head>
      <Heading color="primary" fontSize="5xl" data-aos="fade-right" data-aos-duration="1000">
        Events
      </Heading>
      <Text color="primary" fontSize="3xl" marginTop={"2.5rem"} data-aos="fade-right" data-aos-duration="1000">
        Participate in events hosted by Tech Optimum
      </Text>
      <Text color="primary" fontSize="xl" marginTop={"2.5rem"} width={"70%"} data-aos="fade-right" data-aos-duration="1000">
        We host yearly hackathons. A hackathon is 48-hour coding competition in
        which participants can code projects as a team or individually and
        competet for numerous prizes!. Not only that but, we host fun
        tournaments.
      </Text>
    </Flex>
  );
}
