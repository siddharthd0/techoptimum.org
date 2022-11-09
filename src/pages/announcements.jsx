import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { Text } from "./[id].js";
import Header from "../components/header";
import Footer from "../components/footer";
import { Heading,Flex } from "@chakra-ui/react";


export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Announcements({ posts }) {
  return (
   <>
<Header/>
    <div className="announcements-container">
        <Heading color="primary">Tech Optimum Announcements</Heading>
        <ol class="announcements">
          {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );
            return (
              <li  key={post.id} >
                <h3 >
                  <Link href={`/${post.id}`}>
                    <Text text={post.properties.Name.title} />
                  </Link>
                </h3>

                <p >{date}</p>
                <Link href={`/${post.id}`}>Read post </Link>
              </li>
            );
          })}
        </ol>
     
    </div>
    <Footer/>
    </>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  
  };
};
