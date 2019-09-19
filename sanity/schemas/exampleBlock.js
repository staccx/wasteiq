export default {
  type: "object",
  name: "exampleBlock",
  title: "Examples",
  fields: [
    {
      type: "localeString",
      name: "title",
      title: "Title"
    },
    {
      type: "localeText",
      name: "lede",
      title: "Lead paragraph"
    },
    {
      type: "array",
      name: "examples",
      title: "Examples",
      of: [
        {
          type: "reference",
          to: [{ type: "example" }]
        }
      ]
    },
    {
      type: "array",
      name: "buttons",
      title: "Buttons",
      of: [
        {
          type: "buttonLink"
        },
        {
          type: "buttonPageLink"
        }
      ]
    }
  ],
  preview: {
    select: {
      title: "title.en"
    },
    prepare(selection, options) {
      const { title } = selection
      return {
        title,
        subtitle: "Examples"
      }
    }
  }
}
