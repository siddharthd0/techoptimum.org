// pages/blog/index.jsx
import {
  Button,
  Wrap,
  Box,
  Heading,
  Text,
  VStack,
  Avatar,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { connectToDb } from "../../lib/mongoUtil";
import Fonts from "./font";

export default function BlogIndex({ posts }) {
  const router = useRouter();

  return (
    <>
      <VStack
        justifyContent="center"
        margin="auto"
        py="4rem"
        spacing={4}
        align="stretch"
      >
        <Wrap px="10rem" spacing="40px">
          {posts.map((post) => (
           
            <Box
            isGroup
           
              w="300px"
              borderColor="transparent"
              _hover={{
                borderColor: "blue.900",
                shadow: "xl",
                cursor: "pointer",
              }}
              borderRadius="10px"
              backgroundColor="footerBg"
              key={post._id}
              shadow="md"
              borderWidth="1px"
            >
              <Image
                src={post.backgroundImage}
                alt={post.blogName}
                borderRadius="10px 10px 0 0"
                objectFit="cover"
              />

              <Box p={5}>
                <Heading _groupHover={{
                  color: "blue.300",
                }} pb="10px" color="primary" fontSize="3xl">
                  {post.blogName}
                </Heading>
                <Flex as="a" href={post.authorLink} alignItems="center">
                  {" "}
                  <Avatar
                    size={"sm"}
                    src={post.authorAvatar}
                    alt={post.authorName}
                  />
                  <Text
                    _hover={{
                      color: "blue.300",
                      cursor: "pointer",
                    }}
                    pl="8px"
                  >
                    {post.authorName}
                  </Text>
                  <Text>
                    {post.createdAt}
                  </Text>

                </Flex>

                <Button
                  mt="1rem"
                  fontWeight="light"
                  as="a"
                  colorScheme="buttonBg"
                  href={`/${post._id}`}
                >
                  Read more
                </Button>
              </Box>
            </Box>
          ))}
        </Wrap>
      </VStack>
    </>
  );
}

export async function getServerSideProps() {
  const db = await connectToDb();
  const collection = db.collection("blogs");
  const posts = await collection.find({}).toArray();

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}
