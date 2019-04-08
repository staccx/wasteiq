export default {
  type: "object",
  name: "features",
  title: "Features",
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
        subtitle: "Features"
      }
    }
  }
}
