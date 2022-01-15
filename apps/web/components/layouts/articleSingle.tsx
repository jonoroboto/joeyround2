import React from "react";
import { NextSeo } from "next-seo";
import { Box, Container } from "@chakra-ui/react";
import { Article } from "../../schema";
import RichTextUtil from "../../utils/richText";

interface PageSingleProps {
  page: Article;
}

export default function PageSingle(pageData: PageSingleProps) {
  const { title, description, richText } = pageData.page;
  return (
    <>
      <NextSeo title={title} description={description} />
      <Box as="section" py="32">
        <Container>
          <RichTextUtil blocks={richText} />
        </Container>
      </Box>
    </>
  );
}
