// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import page from "./page";
import article from "./article";
import homePage from "./homePage";
import richText from "./utils/richText/richText";
import hero from "./blocks/hero/hero";
import richTextBlock from "./blocks/richText/richText";
import pageBuilder from "./blocks/_pageBuilder/pageBuilder";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  types: schemaTypes.concat([
    page,
    article,
    homePage,
    pageBuilder,
    hero,
    richText,
    richTextBlock,
  ]),
});
