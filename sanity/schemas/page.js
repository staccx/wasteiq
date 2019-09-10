export default {
  type: "document",
  name: "page",
  title: "Pages",
  fields: [
    { type: "localeString", name: "name", title: "Name" },
    {
      type: "slug",
      name: "path",
      title: "Path",
      options: {
        source: "name.en",
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
  ],
  preview: {
    select: {
      title: "name.en"
    },
    prepare(selection, options) {
      const { title } = selection
      return {
        title: title
      }
    }
  }
}
