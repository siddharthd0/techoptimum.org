// pages/blog/[id].js
import { Flex,Box, Heading, Text, Image, Link, Tag, Avatar } from "@chakra-ui/react";
import { MongoClient, ObjectId } from "mongodb";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import Fonts from "./font";
const client = new MongoClient(process.env.MONGODB_URI);

export default function BlogPost({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Fonts />
      <Flex justifyContent="center"  alignItems="center" margin="auto !important">
        <Box maxW="700px">
          <Image maxW="700px" src={post.backgroundImage} alt={post.blogName} />
          <Box p={5}>
            
            <Heading>{post.blogName}</Heading>
            <Text>{post.authorName}</Text>
            {post.tags.map((tag, index) => (
              <Tag key={index} mr={2}>
                {tag}
              </Tag>
            ))}
            <Box>
                <Avatar src={post.authorAvatar} />
                <Text as="a" href={post.authorLink}>{post.authorName}</Text>
                <Text>{post.createdAt}</Text>
                
            </Box>
            <ReactMarkdown className="markdown">{post.content}</ReactMarkdown>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export async function getServerSideProps(context) {
  await client.connect();
  const posts = client.db(process.env.MONGODB_DB    ).collection("blogs");
  const post = await posts.findOne({ _id: new ObjectId(context.params.id) });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: JSON.parse(JSON.stringify(post)), // We need to stringify the post to convert _id to string
    },
  };
}
