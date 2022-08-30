import Footer from "../components/footer";
import Header from "../components/header";
import Socials from "../components/socials";
import { Box } from "@chakra-ui/react";
import FaqComp from "../components/techoptimumfaq";

export default function Contact() {
  return (
    <>
      <Header />
       
       <FaqComp />

      <Socials />
      <Footer />
    </>
  );
}
