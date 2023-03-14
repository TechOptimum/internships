import React from "react";
import {
  Flex,
  Text,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  Spacer,
  NextChakraLink,
  SimpleButton,
  Image,
} from "@chakra-ui/react";

import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Header() {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();
  const {
    isOpen: isSecondOpen,
    onOpen: onSecondOpen,
    onClose: onSecondClose,
  } = useDisclosure();
  const buttonVariants = {
    hidden: {
      y: -10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "fade",
        damping: 10,
        stiffness: 150,
      },
    },
  };
  const buttonDelay = 0.15;
  return (
    <>
      <Head>
        <link rel="icon" href="/TechOptimumLogo.png" />
        <meta name="title" content="Tech Optimum" />
        <meta
          name="description"
          content="A student-led organization helping and inspiring future leaders of the tech industry worldwide."
        />
        <meta name="og:title" content="Tech Optimum "></meta>
        <meta
          name="og:description"
          content="A student-led organization dedicated to helping and inspiring the next generation of tech leaders."
        ></meta>
        <meta name="og:image" content=" /meta.png"></meta>
        <title>Tech Optimum</title>
      </Head>
      <Flex
        zIndex="100 !important"
        justifyContent="space-between"
        padding="15px 0"
        position={"relative"}
        direction={["column", "row"]}
        alignItems="center"
      >
        <motion.div
          variants={{
            ...buttonVariants,
            visible: {
              ...buttonVariants.visible,
              transition: {
                ...buttonVariants.visible.transition,
                delay: buttonDelay * 1,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          <Flex alignItems={"center"} justifyContent={"start"}>
            <Link _hover={{}} href={"./"}>
              <Image
                _hover={{
                  cursor: "pointer",
                }}
                display={{ base: "block", md: "block" }}
                w="45px"
                src="https://techoptimum.org/logo-transparent.png"
                alt={"Tech Optimum Logo"}
              ></Image>
            </Link>
            <Link href={"./"}>
              <Heading
                _hover={{
                  cursor: "pointer",
                }}
                textAlign={"center"}
                alignItems="left"
                href="https://techoptimum.org"
                fontSize="2xl"
                color="white"
                display={{ base: "none", md: "block" }}
              >
                Tech Optimum | Internships
              </Heading>
            </Link>
          </Flex>
        </motion.div>
        <motion.div
          variants={{
            ...buttonVariants,
            visible: {
              ...buttonVariants.visible,
              transition: {
                ...buttonVariants.visible.transition,
                delay: buttonDelay * 2,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            display={{ base: "none", md: "flex" }}
          >
            <Link
              href="https://techoptimum.org"
              _hover={{
                textDecoration: "none",
              }}
              mr="20px"
            >
              <Text color="white !important" fontSize="lg">
                Return to the Main Website
              </Text>
            </Link>
          </Flex>
        </motion.div>
      </Flex>
    </>
  );
}
