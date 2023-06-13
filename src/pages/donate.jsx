
import { Box, Heading } from "@chakra-ui/react";
import Navbar from "../components/header";
import Script from "next/script";

export default function Donations() {
  return (
    <>
      <Box
        textAlign="center"
        mx="auto"
        alignItems="center"
        justifyContent="center"
      >
        <Heading fontSize={["3xl","5xl"]} pt="9rem" fontWeight="medium" color="primary">
          Donate to Tech Optimum
        </Heading>
        <Heading
          mt="1rem"
          fontSize={["lg","2xl"]}
          fontWeight="medium"
          color="blackAlpha.800"
          mb="3rem"
        >
          Help us continue to provide free resources to students
        </Heading>

        <iframe
          className="donation-form"
          src="https://givebutter.com/embed/c/tech-optimum-donations"
          name="givebutter"
          frameborder="0"
          scrolling="no"
          seamless
          allowpaymentrequest
          style={{ display: "block", margin: "0 auto", maxWidth: "90%"}}
        ></iframe>
        <Script src="https://givebutter.com/js/widget.js"></Script>
      </Box>
    </>
  );
}
