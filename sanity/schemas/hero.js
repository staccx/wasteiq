export default {
  type: "object",
  name: "hero",
  title: "Hero",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title"
    },
    {
      type: "localeString",
      name: "localeTitle",
      title: "Title"
    },
    {
      type: "text",
      name: "lede",
      title: "Lede"
    },
    {
      type: "localeText",
      name: "localeLede",
      title: "Lede"
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
      title: "title"
    },
    prepare(selection, options) {
      const { title } = selection
      return {
        title,
        subtitle: "Hero"
      }
    }
  }
}
