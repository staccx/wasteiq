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
      type: "text",
      name: "lede",
      title: "Lede"
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
        subtitle: "Story"
      }
    }
  }
}
