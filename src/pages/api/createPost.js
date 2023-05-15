// pages/api/createPost.js
import { connectToDb } from '../mongoUtil';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, content, tags, authorAvatar, authorName, backgroundImage, authorLink, blogName } = req.body;

    const db = await connectToDb();
    await db.collection('blogs').insertOne({
      tags: tags.split(",").map(tag => tag.trim()),
      authorAvatar,
      authorName,
      backgroundImage,
      authorLink,
      blogName,
      content
    });

    res.status(200).json({ message: 'Blog post created successfully.' });
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
