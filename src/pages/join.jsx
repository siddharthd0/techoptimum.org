import Footer from "../components/footer";
import Header from "../components/header";
import Socials from "../components/socials";
import { Box } from "@chakra-ui/react";
import JoinHero from "../components/joinpage-landing";


export default function Hackathons() {
	return (
		<>
			<Header />
			<Box mb="100px">
				<JoinHero />
			</Box>
			<Socials />
			<Footer />
		</>
	);
}
