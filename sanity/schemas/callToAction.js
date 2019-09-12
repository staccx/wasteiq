export default {
  type: "object",
  name: "callToAction",
  title: "Call to action",
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
      type: "color",
      name: "color",
      title: "Color"
    },
    {
      type: "icon",
      name: "icon",
      title: "Icon"
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
        title,
        subtitle: "Call to action"
      }
    }
  }
}
