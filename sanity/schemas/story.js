export default {
  type: "object",
  name: "story",
  title: "Story box",
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
      type: "object",
      title: "Selling points",
      name: "sellingPoints",
      fields: [
        {
          type: "string",
          title: "Title",
          name: "title"
        },
        {
          type: "array",
          name: "points",
          title: "Points",
          of: [
            {
              type: "object",
              title: "Selling points",
              name: "sellingPoints",
              fields: [
                {
                  type: "string",
                  title: "Text",
                  name: "text"
                },
                {
                  name: "image",
                  title: "Image",
                  type: "image"
                }
              ]
            }
          ]
        }
      ]
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
