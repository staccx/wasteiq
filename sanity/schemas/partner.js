export default {
  type: "document",
  name: "partner",
  title: "Partners",
  fields: [
    { type: "localeString", name: "name", title: "Name" },
    {
      name: "partnerLogo",
      title: "Partner logo",
      type: "image",
      options: { hotspot: true }
    },
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
