import Footer from "../components/footer";
import Header from "../components/header";
import Socials from "../components/socials";
import { Box } from "@chakra-ui/react";
import PodcastHero from "../components/podcast-landing";

export default function Hackathons() {
	return (
		<>
			<Header />
        <Box mb="100px">
					<PodcastHero />
        </Box>
			<Socials />
			<Footer />
		</>
	);
}
