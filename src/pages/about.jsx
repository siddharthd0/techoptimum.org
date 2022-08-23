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
			<Header />

			<Flex
				marginLeft={"7rem"}
				marginTop={"10rem"}
				direction={"column"}
				data-aos={"fade-up"}
				data-aos-duration={"2000"}
			>
				<Heading marginBottom={"2%"} color="primary" fontSize="5xl">
					About Us
				</Heading>

				<Text fontSize="2xl">Tech Optimum is an organization that is entirely managed by students and is commited to influence the next wave of technological leaders. <br /><br /> As you deepen your understanding of computer science, we want to support you in every way we can. To achieve this, we have a few principles:</Text>

				<br />
				<br />

				<Flex mb={"9%"} direction={"row"} gap="65px">
					<img src="/red_card.svg" alt="passion" width="460" height="420" gap="15px" />
					<img src="/blue_card.svg" alt="assist" width="460" height="420" gap="15px" />
					<img
						src="/green_card.svg"
						alt="excellence"
						width="460"
						height="420"
						gap="15px"
					/>
				</Flex>
			</Flex>

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
				<Flex mb={"9%"} direction={"row"} gap="65px">
					{/* import sid.svg from public */}
					<img src="/sid.svg" alt="sid" width="300" height="350" gap="15px" />
					<img src="/pran.svg" alt="pran" width="300" height="350" gap="15px" />
					<img
						src="/arnav.svg"
						alt="arnav"
						width="300"
						height="350"
						gap="15px"
					/>
				</Flex>
			</Flex>

			<Footer />
		</>
	);
}
