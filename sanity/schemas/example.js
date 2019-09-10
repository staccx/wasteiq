export default {
  type: "document",
  name: "example",
  title: "Examples",
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
      type: "array",
      name: "relatedPartners",
      title: "Partners",
      of: [
        {
          type: "reference",
          to: [{ type: "partner" }]
        }
      ]
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
