// pages/blog/index.jsx
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { connectToDb } from '../../lib/mongoUtil';

export default function BlogIndex({ posts }) {
  return (
    <VStack spacing={4} align="stretch">
      {posts.map(post => (
        <Box key={post._id} p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">{post.blogName}</Heading>
          <Text mt={4}>{post.content.substring(0, 100)}...</Text>
          <Link href={`/blog/${post._id}`}>Read more</Link>
        </Box>
      ))}
    </VStack>
  );
}

export async function getServerSideProps() {
  const db = await connectToDb();
  const collection = db.collection('blogs');
  const posts = await collection.find({}).toArray();
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}
