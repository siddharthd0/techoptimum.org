import React from "react";
import { Flex, Text, Button, Heading } from "@chakra-ui/react";

import Link from "next/link";

export default function Header() {
	return (
		<>
			<Flex
				justifyContent="space-between"
				alignItems="center"
				padding="20px 10%"
			>
				<Heading fontSize="3xl" color="primary">
					Tech Optimum
				</Heading>
				<nav>
					<ul className="nav-links">
						<li>
							<Text color="primary">
								<Link href="/">HOME</Link>
							</Text>
						</li>
						<li>
							<Text color="primary"><Link href="/join">JOIN</Link></Text>
						</li>
						<li>
							<Text color="primary"><Link href="/hackathon">HACKATHON</Link></Text>
						</li>
						<li>
							<Text color="primary"><Link href="/podcast">PODCAST</Link></Text>
						</li>
						
						
						<li>
							<Text color="primary"><Link href="/about">ABOUT</Link></Text>
						</li>
					</ul>
				</nav>
				<Flex alignItems="right" justifyContent="space-between">
					<Button
						colorScheme="secondaryButton"
						borderRadius="full"
						px="6"
						fontWeight="normal"
					>
						Sign up
					</Button>
					<Button
						colorScheme="primaryButton"
						borderRadius="full"
						px="6"
n						fontWeight="normal"
						marginLeft="20px"
					>
						Log in
					</Button>
				</Flex>
			</Flex>
		</>
	);
}
