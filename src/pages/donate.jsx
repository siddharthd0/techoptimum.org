import Socials from "../components/socials";
import { Box, Heading } from "@chakra-ui/react";
import Navbar from "../components/header";
import Script from 'next/script'

export default function Donations() {
  return (
    <>
      <Box mb="100px" px="50px" textAlign="center" mx="auto" alignItems="center" justifyContent="center">
        <Heading fontSize="5xl" py="40px" color="primary">Donate to Tech Optimum</Heading>

        <iframe
          className="donation-form"
          src="https://givebutter.com/embed/c/tech-optimum-donations"
          name="givebutter"
          frameborder="0"
          scrolling="no"
          seamless
          allowpaymentrequest
          style={{ display: "block", margin: "0 auto" }}
        ></iframe>
        <Script src="https://givebutter.com/js/widget.js"></Script>
      </Box>
    </>
  );
}
