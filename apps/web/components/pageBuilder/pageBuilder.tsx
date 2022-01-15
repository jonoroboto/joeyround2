import React from "react";
import { PageBuilder } from "../../schema";
import { Box } from "@chakra-ui/react";
import { RichTextComponent } from "../richTextBlock/richText";
import HeroComponent from "../hero/hero";
import { hero, richText } from "./types";

interface Props {
  pageBuilder?: PageBuilder;
}

export const PageBuilderComponent = ({ pageBuilder }: Props) => {
  return (
    <Box as="main" py="32">
      {pageBuilder?.map((block) => {
        const { _key } = block;
        switch (block._type) {
          case richText:
            return <RichTextComponent {...block} key={_key} />;
          case hero:
            return <HeroComponent {...block} key={_key} />;
          default:
            null;
        }
      })}
    </Box>
  );
};
