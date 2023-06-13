import { SimpleGrid, Box, Image, Heading, Center } from "@chakra-ui/react";

const sponsorImages = [
  { alt: "xyzSponsor", src: "./xyz.png" },
  { alt: "taskadeSponsor", src: "./taskade.png" },
  { alt: "echo3dSponsor", src: "./echo3d-2.png" },
  { alt: "replitSponsor", src: "./replit-logoo.png" },
  { alt: "WolframSponsor", src: "./Wolfram-Language-Sponsor.png" },
];

export default function HackathonSponsors() {
  return (
    <>
      <Heading
        color="primary"
        fontWeight={"medium"}
        fontSize={["3xl", "5xl"]}
        textAlign={"center"}
        mt={["0rem","2rem"]}
        mb={["2rem","0rem"]}
      >
        Sponsors
      </Heading>

      <SimpleGrid
        pt="1rem"
        margin={["2rem", "auto"]}
        maxWidth="1300px"
        minChildWidth={["140px","200px"]}
        spacingX={["20px","10px"]}
        spacingY="30px"
      >
        {sponsorImages.map((sponsor, index) => (
          <Box margin="auto" textAlign="center" key={index}>
            <Image w={["140px","200px"]} alt={sponsor.alt} src={sponsor.src} />
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}
