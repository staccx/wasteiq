export default {
  type: "object",
  name: "callToAction",
  title: "Call to action",
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
