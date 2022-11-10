import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { Text } from "./[id].js";
import Header from "../components/header";
import Footer from "../components/footer";
import { Heading, Flex } from "@chakra-ui/react";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Announcements({ posts }) {
  return (
    <>
      <Header />
      <div className="announcements-container">
        <Heading marginBottom={"20px "} color="primary">
          Announcements
        </Heading>
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
              <li className="post" key={post.id}>
                <h3 className="postTitle">
                  <Link href={`/${post.id}`}>
                    <Text text={post.properties.Name.title} />
                  </Link>
                </h3>

                <p className="postDescription">{date}</p>
                <Link className="readMoreLink" href={`/${post.id}`}>
                  Read more →{" "}
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
      <Footer />
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
