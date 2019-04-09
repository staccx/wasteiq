export default {
  type: "object",
  name: "features",
  title: "Features",
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
      title: "title.en"
    },
    prepare(selection, options) {
      const { title } = selection
      return {
        title: title,
        subtitle: "Features"
      }
    }
  }
}
