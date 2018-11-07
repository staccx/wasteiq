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
      type: "text",
      name: "lede",
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
