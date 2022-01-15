import React, { ReactElement } from "react";
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { Hero } from "../../schema";
const BlockContent = require("@sanity/block-content-to-react");

export default function HeroComponent({
  title,
  eyebrow,
  richText,
}: Hero): ReactElement {
  return (
    <Box as="section">
      <Box
        maxW="3xl"
        mx="auto"
        px={{ base: "6", lg: "8" }}
        py={{ base: "16", sm: "20" }}
        textAlign="center"
      >
        <Text
          fontWeight="semibold"
          color={useColorModeValue("pink.600", "pink.200")}
        >
          {eyebrow}
        </Text>
        <Heading
          my="4"
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="extrabold"
          letterSpacing="tight"
          lineHeight="1.2"
        >
          {title}
        </Heading>
        <Box fontSize="lg" maxW="xl" mx="auto">
          <BlockContent blocks={richText} />
        </Box>
      </Box>
    </Box>
  );
}
