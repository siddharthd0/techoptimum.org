import { Box, Flex, Link } from "@chakra-ui/react";

const SponsorCard = ({ imagePath, link }) => {
  return (
    <Link href={link} isExternal>
      <Box 
        mx={2} 
        mb={4} 
        borderRadius="md" 
        width="140px" 
        height="100px" 
        display="flex" 
        alignItems="center" 
        justifyContent="center"
        overflow="hidden"
        _hover={{ transform: 'scale(1.05)' }}
        transition="transform 0.2s ease-in-out"
      >
        <img src={imagePath} alt="Sponsor" width="100%" />
      </Box>
    </Link>
  );
}

const Sponsors = ({ sponsors }) => {
  const halfLength = Math.ceil(sponsors.length / 2);
  const firstRowSponsors = sponsors.slice(0, halfLength);
  const secondRowSponsors = sponsors.slice(halfLength);

  return (
    <Box mt="2rem" w="100%" >
      <Flex gap="10px" direction="row" justifyContent="center" wrap="wrap" mb={4}>
        {firstRowSponsors.map((sponsor, index) => (
          <SponsorCard key={index} imagePath={sponsor.imagePath} link={sponsor.link} />
        ))}
      </Flex>
      <Flex gap="10px" direction="row" justifyContent="center" wrap="wrap">
        {secondRowSponsors.map((sponsor, index) => (
          <SponsorCard key={index} imagePath={sponsor.imagePath} link={sponsor.link} />
        ))}
      </Flex>
    </Box>
  );
}

export default Sponsors;
