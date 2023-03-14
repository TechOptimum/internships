import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  Spinner,
  Heading,
  Text,
  Box,
  Badge,
  Input,
  Wrap,
  Stack,
} from "@chakra-ui/react";
import Header from "../components/header";
import Mission from "../components/mission";
const NOTION_ID = process.env.NOTION_ID || "0f5efab227854df6a76079e7e73b9dd2";

export type Post = {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
};

export const getAllPosts = async (): Promise<Post[]> => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_ID}`
  ).then((res) => res.json());
};

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}

function HomePage({ posts }: { posts: Post[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    getAllPosts().then((fetchedPosts) => {
      setFilteredPosts(fetchedPosts);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchTerm, posts]);

  return (
    <>
      <Box margin="auto" maxW="1100px">
        <Header />
        <Mission />
        <Box alignItems="center" justifyContent="center" margin="auto">
          <Heading>
            <Text fontSize="4xl" color="brand.900">
            Search by Keyword or Organization for internships
            </Text>
          </Heading>
          <Input
            maxW="300px"
            margin="auto"
            textAlign="center"
            placeholder="Search by title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Wrap mt="5rem" spacing={4}>
            {filteredPosts.map((post) => (
              <Box
                mt="1.5rem"
                borderRadius="10px"
                padding="1rem 2rem"
                maxW="400px"
                backgroundColor="brand.700 !important"
              >
                <Link
                  href="/internships/[slug]"
                  as={`/internships/${post.slug}`}
                  key={post.slug}
                >
                  <Box>
                    <Heading color="brand.800" fontSize="2xl">
                      {post.title}
                    </Heading>
                    <Badge colorScheme="teal">{post.category}</Badge>
                    <Text color="brand.900">posted on {post.date}</Text>
                  </Box>
                </Link>
              </Box>
            ))}
          </Wrap>
          {loading && (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100vh"
            >
              <Spinner color="brand.900" />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
