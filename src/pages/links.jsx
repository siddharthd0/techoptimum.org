import { Flex, Heading, Button, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import { FaDiscord, FaYoutube, FaTiktok, FaReddit, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function LinkButton({ href, text, icon }) {
  const Icon = icon;

  return (
    <Link href={href}>
      <Button
        bgColor="buttonBg.500"
        _hover={{ bgColor: "buttonBg.600" }}
        _active={{
          bgColor: "buttonBg.500",
          transform: 'scale(.9)',
        }}
        padding="34px"
        marginBottom="2rem"
      >
        <Flex alignItems="center">
          <Icon size={24} style={{ marginRight: "11px" }} />
          <Heading fontWeight="light" mt="2px" fontSize="2xl">{text}</Heading>
        </Flex>
      </Button>
    </Link>
  );
}

export default function Links() {
  return (
    <>
      <Flex marginTop="3rem" direction="column" alignItems="center">
        <Heading fontSize="5xl" color="primary">Our Links</Heading>
      </Flex>
      <SimpleGrid
      margin="auto"
      maxW="600px"
        my="3rem !important"
      >
        <LinkButton href="https://discord.gg/J387natuAs" text="Discord" icon={FaDiscord} />
        <LinkButton href="https://www.youtube.com/channel/UCLk-3L7DN7ShIrtKSO2ip4A" text="Youtube" icon={FaYoutube} />
        <LinkButton href="https://www.tiktok.com/@techoptimum" text="TikTok" icon={FaTiktok} />
        <LinkButton href="https://www.reddit.com/r/techoptimum" text="Reddit" icon={FaReddit} />
        <LinkButton href="https://www.instagram.com/techoptimum_" text="Instagram" icon={FaInstagram} />
        <LinkButton href="https://twitter.com/TechOptimumHQ" text="Twitter" icon={FaTwitter} />
        <LinkButton href="https://www.linkedin.com/company/techoptimum" text="LinkedIn" icon={FaLinkedin} />
      </SimpleGrid>
    </>
  );
}
