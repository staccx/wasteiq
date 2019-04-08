export default {
  type: "object",
  name: "story",
  title: "Story box",
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
      type: "localeText",
      name: "localeLede",
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
          type: "string",
          title: "Title",
          name: "title"
        },
        {
          type: "localeString",
          title: "Title",
          name: "localeTitle"
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
                  type: "localeString",
                  title: "Text",
                  name: "localeText"
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
