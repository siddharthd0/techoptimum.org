import { Link } from "@chakra-ui/react";
import {
  Divider,
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Highlight,
  Wrap,
} from "@chakra-ui/react";

export default function MissionValues() {
  return (
    <>
    <Wrap  id="accomplish" pt="5rem !important" gap="20px"spacing={"20px"} margin={"auto"} width={"1000px"}>
    <Box textAlign={"center"} height={"200px"} width={"300px"} className="missionValueBg">
        <Heading mt="1.5rem">Title</Heading>
        <Text> Description</Text>
    </Box>
    <Box height={"200px"} width={"300px"} className="missionValueBg">

    </Box>
    <Box height={"200px"} width={"300px"} className="missionValueBg">

    </Box>
    </Wrap>
    <br/>
    <br/>
    <br/>
     
    </>
  );
}
