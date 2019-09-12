export default {
  type: "object",
  name: "hero",
  title: "Hero",
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
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true }
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
        subtitle: "Hero"
      }
    }
  }
}
