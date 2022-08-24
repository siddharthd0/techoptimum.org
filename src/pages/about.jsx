import Footer from "../components/footer";
import Header from "../components/header";
import ExecutiveCard from "../components/executive-card";
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
			<Header />

			<Flex
				marginLeft={"7rem"}
				marginTop={"5rem"}
				direction={"column"}
				data-aos={"fade-up"}
				data-aos-duration={"2000"}
			>
				<Heading marginBottom={"2%"} color="primary" fontSize="4xl">
					About Us
				</Heading>

				<Text width={"70%"} fontSize="2xl">Tech Optimum is an organization that is entirely managed by students and is commited to influence the next wave of technological leaders. <br /><br /> As you deepen your understanding of computer science, we want to support you in every way we can. To achieve this, we have a few principles:</Text>

				<br />
				<br />

				<Flex direction={"row"} gap="65px">
					<img src="/red_card.svg" alt="passion" width="360" height="320" gap="15px" />
					<img src="/blue_card.svg" alt="assist" width="360" height="320" gap="15px" />
					<img
						src="/green_card.svg"
						alt="excellence"
						width="360"
						height="320"
						gap="15px"
					/>
				</Flex>
			</Flex>

			<Flex
				marginLeft={"7rem"}
				marginTop={"5rem"}
				direction={"column"}
				data-aos={"fade-up"}
				data-aos-duration={"2000"}
			>
				<Heading marginBottom={"2%"} color="primary" fontSize="5xl">
					Executives
				</Heading>
				<Flex mb={"9%"} direction={"row"} gap="65px">
					<ExecutiveCard src="/sid.svg" name="Siddharth Duggal" role="CEO" />
					<ExecutiveCard src="/pran.svg" name="Pranith Molakalapalli" role="CTO" />
					<ExecutiveCard src="/arnav.svg" name="Arnav Pandey" role="COO" />
				</Flex>
			</Flex>

			<Footer />
		</>
	);
}
