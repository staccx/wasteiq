export default {
  type: "object",
  name: "callToAction",
  title: "Call to action",
  fields: [
    {
      type: "color",
      name: "color",
      title: "Color"
    },
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
    },
    {
      type: "featuresList",
      name: "features"
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
        subtitle: "Call to action"
      }
    }
  }
}
