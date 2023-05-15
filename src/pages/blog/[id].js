// pages/blog/[id].js
import { Box, Heading, Text, Image, Link, Tag, Avatar } from "@chakra-ui/react";
import { MongoClient, ObjectId } from 'mongodb';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';

const client = new MongoClient(process.env.MONGODB_URI);

export default function BlogPost({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  

  return (
    <Box>
      <Image src={post.backgroundImage} alt={post.blogName} />
      <Box p={5}>
        <Link href={post.authorLink}>
          <Avatar src={post.authorAvatar} alt={post.authorName} />
        </Link>
        <Heading>{post.blogName}</Heading>
        <Text>{post.authorName}</Text>
        {post.tags.map((tag, index) => (
          <Tag key={index} mr={2}>{tag}</Tag>
        ))}
        <ReactMarkdown>
          {post.content}
        </ReactMarkdown>
      </Box>
    </Box>
  );
}

export async function getServerSideProps(context) {
  await client.connect();
  const posts = client.db(process.env.MONGODB_DB).collection("blogs");
  const post = await posts.findOne({ _id: new ObjectId(context.params.id) });
  
  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post: JSON.parse(JSON.stringify(post)), // We need to stringify the post to convert _id to string
    },
  }
}
