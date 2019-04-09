export default {
  type: "object",
  name: "story",
  title: "Story box",
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
      type: "colorLight",
      name: "color",
      title: "Color"
    },
    {
      type: "icon",
      name: "icon",
      title: "Icon"
    },
    {
      type: "object",
      title: "Selling points",
      name: "sellingPoints",
      fields: [
        {
          type: "localeString",
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
                  type: "localeString",
                  title: "Text",
                  name: "text"
                },
                {
                  name: "image",
                  title: "Image",
                  type: "image"
                }
              ],
              preview: {
                select: {
                  title: "text.en"
                }
              }
            }
          ]
        }
      ]
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
        subtitle: "Story"
      }
    }
  }
}
