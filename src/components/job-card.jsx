import {
  Text,
  Box,
  Flex,
  Heading,
  Button,
  Link,
  Badge,
} from "@chakra-ui/react";
import { CheckCircleIcon, ExternalLinkIcon } from "@chakra-ui/icons";

export default function JobPostingCard({
  role,
  description,
  application,
  department,
  responsibility,
}) {
  return (
    <>
      <Box
        position="relative"
        padding="2rem"
        borderRadius={"12.5px"}
        width="375px"
        className="job-card"
      >
        <Heading color="white" fontSize="24px" mb={"6px"}>
          {role}
        </Heading>
        <Badge mb="1rem">{department}</Badge>
        <Flex mb="5rem" direction="column">
          <ul>
            {responsibility.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ul>
        </Flex>

        <Link
          _hover={{
            textDecoration: "none",
          }}
          href={application}
          isExternal
        >
          <Button
            position="absolute"
            bottom="45px"
            float={"bottom"}
            fontWeight="light"
            color={"#white"}
            bgColor={"rgba(0, 0, 0, 0.05)"}
            _hover={{
              color: "#white",
              bgColor: "rgba(0, 0, 0, 0.2)",
            }}
            border={"1px solid rgba(0, 0, 0, 0.1)"}
          >
            Apply for {role}
          </Button>
        </Link>
      </Box>
    </>
  );
}
