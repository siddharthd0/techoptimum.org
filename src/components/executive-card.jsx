import { Text, Flex, Box, Image, Badge } from "@chakra-ui/react";

export default function ExecutiveCard({ src, width = "400", alt, name, role }) {
  return (
    <>
      <Box
        backgroundImage={"url('/static-exec-bg.png')"}
        width={"400px"}
        height="400px"
        backgroundRepeat="no-repeat"
      >
        {/* <Image src="/static-exec-bg.png" alt="bg" width="450" height="400" /> */}
        <Box pt="6" pl="6">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {role}
          </Badge>
          <Text>{name}</Text>
        </Box>
        <Image src={src} alt={alt} width={"400px"} height={"320px"}></Image>
      </Box>
    </>
  );
}
