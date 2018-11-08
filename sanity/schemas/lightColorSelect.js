export const colors = [
  {
    name: "Green (light)",
    color: "greenLight"
  },

  {
    name: "Blue (light)",
    color: "blueLight"
  },

  {
    name: "Pink (light)",
    color: "pinkLight"
  },

  {
    name: "Apricot (light)",
    color: "apricotLight"
  }
]

export default {
  title: "Select color",
  name: "colorLight",
  type: "string",
  options: {
    list: colors.map(entry => {
      return { title: entry.name, value: entry.color }
    }),
    layout: "dropdown"
  }
}
