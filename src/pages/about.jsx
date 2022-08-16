import Footer from "../components/footer";
import Header from "../components/header";

import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Icon,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { BsLayers, BsGraphUp, BsArrowUpRight } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import AOS from "aos";
import Head from "next/head";
import { useEffect } from "react";
export default function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/aos@next/dist/aos.css"
          rel="stylesheet"
          key="test"
        />
      </Head>
      <Flex
        marginLeft={"7rem"}
        marginTop={"10rem"}
        direction={"column"}
        data-aos={"fade-up"}
        data-aos-duration={"2000"}
      >
        <Heading marginBottom={"2%"} color="primary" fontSize="5xl">
          Executives
        </Heading>
		<Flex direction={"row"} gap='24px'>
				{/* import sid.svg from public */}
				<img src="/sid.svg" alt="sid" width="350" height="350" gap="10px" />
				<img src="/pran.svg" alt="pran" width="350" height="350" gap="10px" />
				<img src="/arnav.svg" alt="arnav" width="350" height="350" gap="10px" />
				</Flex>
			</Flex>
		</>
	);
}