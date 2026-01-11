import { Box, Flex, Link } from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const SponsorCard = ({ imagePath, link }) => {
  return (
    <Link href={link} isExternal>
      <Box
        mx={4}
        mb={4}
        borderRadius="md"
        width="140px"
        height="100px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        _hover={{ transform: "scale(1.05)" }}
        transition="transform 0.2s ease-in-out"
      >
        <Image src={imagePath} alt="Sponsor" width={140} height={100} style={{ width: "100%", height: "auto" }} />
      </Box>
    </Link>
  );
};
const TranslateWrapper = ({ children, reverse }) => {
  return (
    <>
      <motion.div
        initial={{ translateX: reverse ? "-100%" : "0%" }}
        animate={{ translateX: reverse ? "0%" : "-100%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {children}
        
      </motion.div>
    </>
  );
};
const Sponsors = ({ sponsors }) => {
  return (
    <Box
      mx="auto"
      mt="2rem"
      w={["100%", "80%"]}
      overflow="hidden"
      position="relative"
      sx={{
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: ["70px", "100px", "200px", "250px"],
          background:
            "linear-gradient(to right, #FCFCFC, rgba(255, 255, 255, 0))",
          zIndex: 2,
          pointerEvents: "none",
        },
        "::after": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: ["70px", "100px", "200px", "250px"],
          background:
            "linear-gradient(to left, #FCFCFC, rgba(255, 255, 255, 0))",
          zIndex: 2,
          pointerEvents: "none",
        },
      }}
    >
      <TranslateWrapper>
        <Flex direction="row">
          {sponsors.map((sponsor, index) => (
            <SponsorCard
              key={index}
              imagePath={sponsor.imagePath}
              link={sponsor.link}
            />
          ))}
        </Flex>
      </TranslateWrapper>
    </Box>
  );
};

export default Sponsors;
