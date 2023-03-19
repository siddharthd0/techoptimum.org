import { Flex, Heading, Button, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";

function LinkButton({ href, text }) {
  return (
    <Link href={href}>
      <Button bgColor="buttonBg.500" _hover={{ bgColor: "buttonBg.600" }} padding="40px" width="75%" marginBottom="3rem" transform="translate(15%, 0%)">
        <Heading fontSize="2xl">{text}</Heading>
      </Button>
    </Link>
  );
}

export default function Links() {
  return (
    <>
      <Flex marginTop="3rem" direction="column" alignItems="center">
        <Heading color="primary">Our Socials</Heading>
      </Flex>
      <SimpleGrid marginTop="3rem" columns="3" alignItems="center" justifyContent="center" width="75%" marginLeft="12.5%">
        <LinkButton href="https://discord.gg/J387natuAs" text="Discord" />
        <LinkButton href="https://www.youtube.com/channel/UCLk-3L7DN7ShIrtKSO2ip4A" text="Youtube" />
        <LinkButton href="https://www.tiktok.com/@techoptimum" text="TikTok" />
        <LinkButton href="https://www.reddit.com/r/techoptimum" text="Reddit" />
        <LinkButton href="https://www.instagram.com/techoptimum_" text="Instagram" />
        <LinkButton href="https://twitter.com/TechOptimumHQ" text="Twitter" />
        <LinkButton href="https://www.linkedin.com/company/techoptimum" text="LinkedIn" />
      </SimpleGrid>
    </>
  );
}