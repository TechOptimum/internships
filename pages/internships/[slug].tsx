import React from "react";
import { NotionRenderer, BlockMapType } from "react-notion";
import { Heading, Text, Box, Flex, Button, Stack, Image, useColorModeValue} from '@chakra-ui/react';

import { getAllPosts, Post } from "..";

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  // Get all posts again
  const posts = await getAllPosts();


  const post = posts.find((t) => t.slug === slug);

  const blocks = await fetch(
    `https://notion-api.splitbee.io/v1/page/${post!.id}`
  ).then((res) => res.json());

  return {
    props: {
      blocks,
      post,
    },
  };
}

const InternshipPost: React.FC<{ post: Post; blocks: BlockMapType }> = ({
  post,
  blocks,
}) => {
  if (!post) return null;

  return (
  <Box>
      <Heading fontSize="5xl">{post.title}</Heading>
 
      <NotionRenderer blockMap={blocks} />
    </Box>
  );
};

export async function getStaticPaths() {
  const table = await getAllPosts();
  return {
    paths: table.map((row) => `/internships/${row.slug}`),
    fallback: true,
  };
}

export default InternshipPost;
