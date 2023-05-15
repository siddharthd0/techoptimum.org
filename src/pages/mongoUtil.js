import { MongoClient } from 'mongodb';

let client;
let db;

async function connectToDb() {
  if (db) {
    return db;
  }

  try {
    client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    db = client.db(process.env.MONGODB_DB);
  } catch (err) {
    console.error("Failed to connect to the database", err);
    throw err;
  }

  return db;
}

export { connectToDb };
