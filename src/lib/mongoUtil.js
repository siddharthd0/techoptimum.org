import { MongoClient } from 'mongodb';

let client;
let db;

export async function connectToDb() {
  if (db) return db;

  try {
    client = await connectToClient();
    db = client.db(process.env.MONGODB_DB);
  } catch (err) {
    console.error("Failed to connect to the database", err);
    throw err;
  }

  return db;
}

export async function connectToClient() {
  if (client) return client;
  client = await (new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })).connect();
  return client;
}
