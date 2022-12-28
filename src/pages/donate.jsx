import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Box,
  Stack,
  Center,
} from "@chakra-ui/react";
import Header from "../components/header";
import Footer from "../components/footer";
import Socials from "../components/socials";
import Link from "next/link";
import { FaDollarSign } from "react-icons/fa";

export default function Donate() {
  return (
    <>
      <Header />
      <Box minH={"75vh"} pt={"80px"}>
        <Center flexDirection={"column"}>
          <Heading
            data-aos-delay="400"
            data-aos="fade-up-right"
            mt={"40px"}
            color="primary"
            fontSize={["4xl", "6xl"]}
          >
            Donations
          </Heading>
          <Box
            px="10px"
            w={"355px"}
            h={"1px"}
            bgColor={"white"}
            borderRadius={"15px"}
            my={"10px"}
          ></Box>
          <Text
            fontSize={["sm", "md"]}
            mt="10px"
            px={"20px"}
            color={"primary"}
            maxW={"550px"}
            textAlign={"center"}
          >
            Remember, our mission isn&apos;t small. We need your help to achieve
            our goals and create a larger and broader societal impact. More
            information about our mission statement is
            <Link href={"/mission"}>
              <Text
                color={"primary"}
                _hover={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "white",
                }}
              >
                here.
              </Text>
            </Link>
          </Text>
          {/* Description for why person X should donate */}
          <Button
            fontSize={["md", "lg"]}
            mt={"25px"}
            width={"190px"}
            height={"60px"}
            rightIcon={<FaDollarSign />}
            bgColor={"primaryButton.500"}
            _hover={{ bgColor: "primaryButton.600" }}
            onClick={async () => {
              window.open(
                "https://buy.stripe.com/8wM16Fa934Ce6LS9AA",
                "_blank"
              );
            }}
          >
            Donate
            {/* Change this to donate maybe?  */}
          </Button>
        </Center>
      </Box>
      <Socials />
      <Footer />
    </>
  );
}
