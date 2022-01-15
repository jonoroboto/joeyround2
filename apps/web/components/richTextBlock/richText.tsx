import { Container, Box } from "@chakra-ui/react";
import React from "react";
import { RichTextBlock } from "../../schema";
import RichTextUtil from "../../utils/richText";

export const RichTextComponent = ({ richText }: RichTextBlock) => {
  return (
    <Box as="section" py="xl">
      <Container>
        <RichTextUtil blocks={richText} />
      </Container>
    </Box>
  );
};
