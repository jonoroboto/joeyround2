import React, { ReactElement } from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
const BlockContent = require("@sanity/block-content-to-react");
import { CodeBlock, dracula } from "react-code-blocks";

const BlockRenderer = (props) => {
  const { style = "normal", _key } = props.node;
  if (style === "normal") return <Text mb={4}>{props.children}</Text>;
  if (style === "h2")
    return (
      <Heading
        id={_key}
        sx={{
          ":target::before": {
            content: '""',
            display: "block",
            height: "80px",
            marginTop: "-80px",
          },
        }}
        size="2xl"
        mb={4}
        pt={8}
      >
        {props.children}
      </Heading>
    );
  if (style === "h3")
    return (
      <Heading
        id={_key}
        as="h3"
        sx={{
          ":target::before": {
            content: '""',
            display: "block",
            height: "80px",
            marginTop: "-80px",
          },
        }}
        size="xl"
        mb={4}
      >
        {props.children}
      </Heading>
    );
  if (style === "h4")
    return (
      <Heading
        id={_key}
        as="h4"
        sx={{
          ":target::before": {
            content: '""',
            display: "block",
            height: "80px",
            marginTop: "-80px",
          },
        }}
        size="lg"
        mb={4}
      >
        {props.children}
      </Heading>
    );
  if (style === "h5")
    return (
      <Heading
        id={_key}
        as="h5"
        sx={{
          ":target::before": {
            content: '""',
            display: "block",
            height: "80px",
            marginTop: "-80px",
          },
        }}
        size="md"
        mb={4}
      >
        {props.children}
      </Heading>
    );
  if (style === "h6")
    return (
      <Heading
        id={_key}
        as="h6"
        sx={{
          ":target::before": {
            content: '""',
            display: "block",
            height: "80px",
            marginTop: "-80px",
          },
        }}
        size="sm"
        mb={4}
      >
        {props.children}
      </Heading>
    );

  return BlockContent.defaultSerializers.types.block(props);
};

const serializers = {
  types: {
    code: (props) => (
      <Box mb={4}>
        <CodeBlock
          text={props.node.code}
          language={props.node.language}
          showLineNumbers={true}
          theme={dracula}
        />
      </Box>
    ),
    block: BlockRenderer,
  },
};

export default function RichTextUtil({ blocks }): ReactElement {
  return <BlockContent blocks={blocks} serializers={serializers} />;
}
