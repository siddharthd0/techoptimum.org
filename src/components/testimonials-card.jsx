import React, { useEffect } from "react";
import { Flex, Box, Image, chakra, Link } from "@chakra-ui/react";
import AOS from "aos";

export default function TestimonialCard() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const testimonials = [
    {
      name: "John Doe",
      title: "CEO of ABC Company",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Jane Doe",
      title: "CEO of ABC Company",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Jane Doe",
      title: "CEO of ABC Company",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <>
      <Flex
        overflow={"none"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={5}
      >
        {testimonials.map((testimonial, i) => (
          <Box
            key={i}
            w="md"
            py={4}
            px={8}
            bg="#29368C"
            shadow="lg"
            rounded="2xl"
            data-aos="fade-up"
            data-aos-duration={`${i * 1000}`}
            data-aos-delay={`${i * 100}`}
          >
            <Flex
              justifyContent={{
                base: "center",
                md: "end",
              }}
              mt={-16}
            >
              <Image
                w={20}
                h={20}
                fit="cover"
                rounded="full"
                borderStyle="solid"
                borderWidth={2}
                color="brand.500"
                alt="Testimonial avatar"
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
              />
            </Flex>

            <chakra.h2
              color="white"
              fontSize={{
                base: "2xl",
                md: "3xl",
              }}
              mt={{
                base: 2,
                md: 0,
              }}
              fontWeight="bold"
            >
              {testimonial.title}
            </chakra.h2>

            <chakra.p mt={2} color="white">
              <chakra.span fontSize={"20px"} fontWeight={"700"} pr={"3px"}>
                &quot;
              </chakra.span>
              {testimonial.description}
              <chakra.span fontSize={"20px"} fontWeight={"700"} pl={"3px"}>
                &quot;
              </chakra.span>
            </chakra.p>

            <Flex mt={4}>
              <Link fontSize="lg" color="white" pb={"10px"}>
                {testimonial.name}
              </Link>
            </Flex>
          </Box>
        ))}
      </Flex>
    </>
  );
}
