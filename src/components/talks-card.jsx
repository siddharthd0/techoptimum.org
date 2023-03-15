import { Text, Flex, Box, Image, Badge } from "@chakra-ui/react";
import { BsYoutube } from "react-icons/bs";
import Link from "next/link";
export default function TalksCard({
  src,
  name,
  role,
  description,
  link,
  date,
}) {
  return (
    <>
      <Box maxWidth={"500px"} borderRadius="20px" padding="10px 10px 10px 20px">
        <Flex alignItems={"center"} direction={"column"}>
          <Flex alignItems={"center"} direction={["column", "row"]}>
            <Image
              marginRight={"1rem"}
              src={src}
              alt={name}
              maxWidth={"170px"}
              height={"170px"}
              borderRadius="full"
              border={"3px solid #00B4D8"}
            />
            <Flex mt={["2rem", "0"]} direction="column">
             
              <Text color={"primary"} fontSize={"3xl"}>
                {name}
              </Text>
              <Text color={"blue.300"} fontSize={"xl"}>
                {role}
              </Text>
              <Link
                _hover={{
                  cursor: "pointer !important",
                }}
                href={link}
              >
                <Badge
                  transition={"300ms"}
                  _hover={{
                    cursor: "pointer !important",
                    backgroundColor: "blue.300",
                  }}
                  width="120px"
                  borderRadius={"full"}
                  colorScheme="blue"
                  fontSize="11px"
                  marginBottom="0.5rem"
                  mt="8px"
                  mb="13px"
                >
                  <Flex mt="3px" ml="11px" alignItems={"center"}>
                    <BsYoutube /> <Text ml="10px">View Talk</Text>
                  </Flex>
                </Badge>
              </Link>
              <Text  fontSize={"sm"} color="primary" >
                {date}
              </Text>
              
            </Flex>
          </Flex>

          <Text
            paddingX={["60px", "2px"]}
            maxWidth="400px"
            mt={["27px", "18px"]}
            color={"primary"}
          >
            {description}
          </Text>
        </Flex>
      </Box>
    </>
  );
}
