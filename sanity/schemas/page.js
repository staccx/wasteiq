export default {
  type: "document",
  name: "page",
  title: "Pages",
  fields: [
    { type: "string", name: "name", title: "Name" },
    { type: "localeString", name: "localeName", title: "Name" },
    {
      type: "slug",
      name: "path",
      title: "Path",
      options: {
        source: "name",
        maxLength: 96,
        auto: true
      },
      validation: Rule => Rule.required()
    },
    {
      type: "blockContent",
      name: "blocks",
      title: "Blocks"
    }
  ]
}
