// pages/api/getPosts.js
import { connectToDb } from '../../lib/mongoUtil';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const db = await connectToDb();
    const collection = db.collection('blogs');
    const posts = await collection.find({}).toArray();

    console.log(`Fetched posts: ${JSON.stringify(posts, null, 2)}`);

    res.status(200).json(posts);
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
