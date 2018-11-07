export const backgrounds = [
  {
    name: "Dots pattern",
    bg: "dotsPattern"
  },
  {
    name: "Black",
    bg: "black"
  },
  {
    name: "Blue (light)",
    bg: "blueLight"
  }
]

export default {
  title: "Full width section",
  name: "fullWidthContainer",
  type: "object",
  fields: [
    {
      title: "Select background",
      name: "background",
      type: "string",
      options: {
        list: backgrounds.map(entry => {
          return { title: entry.name, value: entry.bg }
        }),
        layout: "dropdown"
      }
    },
    {
      title: "Blocks",
      name: "blocks",
      type: "array",
      of: [{ type: "story" }, { type: "features" }, { type: "callToAction" }]
    }
  ],
  preview: {
    select: {
      bg: "background"
    },
    prepare(selection, options) {
      const { bg } = selection
      return {
        title: "Full width container",
        subtitle: bg
      }
    }
  }
}
