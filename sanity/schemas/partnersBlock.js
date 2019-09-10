export default {
  type: "object",
  name: "partnersBlock",
  title: "Partners",
  fields: [
    {
      type: "localeString",
      name: "title",
      title: "Title"
    },
    {
      type: "localeText",
      name: "lede",
      title: "Lede"
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
        subtitle: "Partners"
      }
    }
  }
}
