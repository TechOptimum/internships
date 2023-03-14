import React from "react";
import {
  Flex,
  Text,
  Button,
  Heading,
  Box,
} from "@chakra-ui/react";

import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <>
        <Head>
            <link rel="icon" href="/TechOptimumLogo.png" />
            <meta name="title" content="Tech Optimum" />
            <meta name="description" content="A student-led organization helping and inspiring future leaders of the tech industry worldwide." />
            <meta name="og:title" content="Tech Optimum "></meta>
            <meta name="og:description" content="A student-led organization helping and inspiring future leaders of the tech industry worldwide." />
            <meta name="og:image" content="/TechOptimumLogo.png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Tech Optimum" />

            <meta name="twitter:description" content="A student-led organization helping and inspiring future leaders of the tech industry worldwide." />
            <meta name="twitter:image" content="/TechOptimumLogo.png" />
        </Head>
       <Box>
        <Heading
            color="blue.200"
            fontSize="3xl"
        >Our Mission:</Heading>
        <Text
        mt="11px"
            color="white"
            fontSize="lg"
    
        >
           We would like to make opportunities accessible to everyone, including high school students, especially those who don't have the pre-existing resources necessary to find an internship.
        </Text>
       </Box>
   
    </>
  );
}
