import Footer from "../components/footer";
import Header from "../components/header";
import Mission from "../components/mission";
import MissionLanding from "../components/mission-landing";
import MissionValues from "../components/mission-values";
import { Heading } from "@chakra-ui/react"

export default function Contact() {
  return (
    <>
      <Header />
      <MissionLanding />
      <Heading
       id="accomplish"
        pt="4rem"
        fontSize={["2xl", "5xl"]}
        color="primary"
        textAlign={"center"}
      >
        Our Values:
      </Heading>
      <MissionValues />
      <br />
      <br />
      <br />
      <br/>
      <Footer />
    </>
  );
}
