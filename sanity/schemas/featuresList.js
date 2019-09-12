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
              type: "localeString",
              title: "Title",
              name: "title"
            },
            {
              type: "localeText",
              title: "Body",
              name: "body"
            },
            {
              type: "localeRichText",
              title: "Body",
              name: "content"
            },
            {
              type: "image",
              name: "image",
              options: { hotspot: true }
            }
          ],
          preview: {
            select: {
              title: "title.en"
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: "features[0].title.en",
      length: "features.length"
    },
    prepare(selection, options) {
      const { title, length } = selection
      console.log(selection)
      return {
        title: title + " (" + length + " total features)",
        subtitle: "Feature list"
      }
    }
  }
}
