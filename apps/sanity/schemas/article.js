import { slugWithType } from "./utils/slugWithType/slugWithType";

export default {
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    slugWithType(`article`, `title`),
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      validation: (Rule) =>
        Rule.required().warning("At least write a short description"),
      validation: (Rule) =>
        Rule.max(160).warning("Any more and it will get truncated"),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "richText",
      title: "Rich Text",
      type: "richText",
    },
  ],
};
