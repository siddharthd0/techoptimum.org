'use client';

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
      name: "Kaushal Kurpad, Student",
      title: "Community Member",
      description:
        "Tech Optimum has the best community for coding. The staff are wonderful and experienced! They will help you with any problem you have. I would recommend Tech Optimum to anyone who wants to learn coding.",
      src: "https://ui-avatars.com/api/?background=72a9ed&color=fff&name=Kaushal+Kurpad&size=100",
    },
    {
      name: "Aditya Sahasranam, Student",
      title: "Community Manager",
      description:
        "Tech Optimum is an incredible organization that is making a real difference in the world. Its commitment to its community, its dedication to providing access to technology and education, and its exceptional team make it truly special and a worthy cause.",
      src: "https://cdn.discordapp.com/attachments/916543942139469884/1057191127016542238/Screen_Shot_2022-12-27_at_12.00.00_AM.png",
    },
    {
      name: "Viachaslau M., Software Engineer",
      title: "Hackathon Judge",
      description:
        "I had a great time judging for Tech Optimum Hacks. Before that, I participated in 15+ hackathons and can say that this was an awesome and well-organized event. This event was great for experienced hackers as well as novices. I'd like to thank Tech Optimum team for the opportunity and would love to participate again! ",
      src: "https://media.discordapp.net/attachments/996113402902614126/996114010351091763/headshot-matsukevich2.jpg?width=858&height=1045",
    },
  ];
  return (
    <>
      <Flex
        margin="auto"
      
        overflow={"none"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={10}
        mb={"60px"}
        px="2rem"
      >
        {testimonials.map((testimonial, i) => (
          <Box
            mt="20px"
            key={i}
            maxW="300px"
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
                borderWidth={3}
                color="brand.500"
                alt="Testimonial avatar"
                src={testimonial.src}
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
              <chakra.span fontSize={"md"} fontWeight={"700"} pr={"3px"}>
                &quot;
              </chakra.span>
           <chakra.span fontSize="sm">  {testimonial.description}</chakra.span> 
              <chakra.span fontSize={"md"} fontWeight={"700"} pl={"3px"}>
                &quot;
              </chakra.span>
            </chakra.p>

            <Flex mt={4}>
              <Link fontSize="sm" color="white" pb={"10px"}>
                {testimonial.name}
              </Link>
            </Flex>
          </Box>
        ))}
      </Flex>
    </>
  );
}
