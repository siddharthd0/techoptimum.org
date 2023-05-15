import { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, useToast, Stack, Textarea } from "@chakra-ui/react";
import { useRouter } from 'next/router';

export default function Admin() {
  const [password, setPassword] = useState("");
  const [tags, setTags] = useState("");
  const [authorAvatar, setAuthorAvatar] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [authorLink, setAuthorLink] = useState("");
  const [blogName, setBlogName] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== "test") {
      // Handle incorrect password
      toast({
        title: "Access Denied.",
        description: "Incorrect password.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    
    const response = await fetch('/api/createPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content, tags, authorAvatar, authorName, backgroundImage, authorLink, blogName }),
    });

    if (response.ok) {
      toast({
        title: "Success.",
        description: "Blog post has been created.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      router.push('/');
    } else {
      toast({
        title: "Error.",
        description: "An error occurred while creating the blog post.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box margin="auto" maxW="500px">
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Tags</FormLabel>
            <Input type="text" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Enter tags, separated by commas" />
          </FormControl>
          <FormControl>
            <FormLabel>Author Avatar URL</FormLabel>
            <Input type="text" value={authorAvatar} onChange={(e) => setAuthorAvatar(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Author Name</FormLabel>
            <Input type="text" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Background Image URL</FormLabel>
            <Input type="text" value={backgroundImage} onChange={(e) => setBackgroundImage(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Author Link</FormLabel>
            <Input type="text" value={authorLink} onChange={(e) => setAuthorLink(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Blog Name</FormLabel>
            <Input type="text" value={blogName} onChange={(e) => setBlogName(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Blog Content</FormLabel>
            <Textarea type="text" value={content} onChange={(e) => setContent(e.target.value)} />
          </FormControl>
          <Button type="submit">Post Blog</Button>
        </Stack>
      </form>
    </Box>
  );
}

