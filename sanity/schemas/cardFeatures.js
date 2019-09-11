export default {
  type: "object",
  name: "cardFeatures",
  title: "Card features",
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
      name: "bleedValues",
      title: "Specify bleed",
      type: "bleedValues",
      description: 'To be used for featured images that go "outside their box"',
      options: {
        collapsible: true,
        collapsed: true
      }
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
        subtitle: "Card features"
      }
    }
  }
}
