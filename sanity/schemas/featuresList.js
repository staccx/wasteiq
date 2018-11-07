export default {
  type: "object",
  title: "Features list",
  name: "featuresList",
  fields: [
    {
      type: "array",
      name: "features",
      of: [
        {
          type: "object",
          title: "Feature",
          name: "feature",
          fields: [
            {
              type: "string",
              title: "Title",
              name: "title"
            },
            {
              type: "text",
              title: "Body",
              name: "body"
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: "features[0].title",
      length: "features.length"
    },
    prepare(selection, options) {
      const { title, length } = selection
      return {
        title: title + " (" + length + " total features)",
        subtitle: "Feature list"
      }
    }
  }
}
