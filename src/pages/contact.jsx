import Footer from "../components/footer";
import Header from "../components/header";
import Socials from "../components/socials";
import { Box } from "@chakra-ui/react";
import ContactForm from "../components/contact-form";

export default function Contact() {
  return (
    <>
      <Header />
    
       <ContactForm />

      <Socials />
      <Footer />
    </>
  );
}
