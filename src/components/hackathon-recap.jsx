import ChessIcon from "../assets/chess.svg";

import { Container, Flex, Heading, Text, Button } from "@chakra-ui/react";
// import { ExternalLinkIcon } from "@chakra-ui/icons";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function HackathonRecap() {
	return (
		<>
			<Flex height={"80vh"} width={"100%"} direction={"column"}>
				<Flex direction={"column"} width={"100%"} align="center">
					<Heading color="primary" fontSize="5xl" marginBottom={"2.5rem"}>
						Quick Recap
					</Heading>
				</Flex>
				<Container
					maxWidth={"40%"}
					backgroundColor="#29368C"
					height={"15vh"}
					margin={"0 auto"}
					borderRadius={"36px"}
					paddingTop={"1rem"}
					as={motion.div}
					initial={{ opacity: 0, y: 40 }}
					animate={{
						opacity: 1,
						transition: { duration: 1 },
						ease: "easeIn",
						y: 0,
					}}
				>
					<Flex alignItems={"center"} height={"100%"}>
						<Heading
							color="white"
							fontSize="2xl"
							fontWeight={"400"}
							width={"47.5%"}
							textAlign={"center"}
						>
							<CountUp end={300} duration={4} useEasing={true} delay={1.5} />+
							PARTICAPENTS
						</Heading>
						<Heading
							color="white"
							fontSize="6xl"
							fontWeight={"400"}
							width={"5%"}
						>
							/
						</Heading>
						<Heading
							color="white"
							fontSize="2xl"
							fontWeight={"400"}
							width={"47.5%"}
							textAlign={"center"}
						>
							$<CountUp end={40000} duration={4} useEasing={true} delay={1.5} />+
							PRIZES
						</Heading>
					</Flex>
				</Container>
				<Flex direction={"row"} left="37.5%" width={"25%"} marginTop={"2.5rem"}>
					<ChessIcon width="20%" height="auto" />
					<Heading width="80%" color="primary" fontSize="3xl">
						Chess Tournament
					</Heading>
				</Flex>
			</Flex>
		</>
	);
}
