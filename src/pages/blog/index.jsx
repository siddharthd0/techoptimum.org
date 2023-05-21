// pages/blog/index.jsx
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

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

export async function getStaticProps() {
  try {
    const res = await fetch(`http://localhost:4269/api/getPosts`);
    console.log(`Response status: ${res.status}`);

    const posts = await res.json();
    console.log(`Posts: ${JSON.stringify(posts, null, 2)}`);

    return {
      props: {
        posts: JSON.parse(JSON.stringify(posts)),
      },
    };
  } catch (_) {
    return {
      props: {
        posts: [],
      },
      revalidate: 1
    }
  }
}
