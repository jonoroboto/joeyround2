export default {
  title: "Home Page",
  name: "homePage",
  type: "document",
  fields: [
    { name: "title", type: "string" },
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
      name: "pageBuilder",
      title: "Page builder",
      type: "pageBuilder",
    },
  ],
};
