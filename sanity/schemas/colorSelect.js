export const colors = [
  {
    name: "Green",
    color: "green"
  },
  {
    name: "Green (light)",
    color: "greenLight"
  },
  {
    name: "Blue",
    color: "blue"
  },
  {
    name: "Blue (light)",
    color: "blueLight"
  },
  {
    name: "Pink",
    color: "pink"
  },
  {
    name: "Pink (light)",
    color: "pinkLight"
  },
  {
    name: "Apricot",
    color: "apricot"
  },
  {
    name: "Apricot (light)",
    color: "apricotLight"
  },
  {
    name: "Black",
    color: "primary"
  },
  {
    name: "Black (light)",
    color: "primary"
  }
]

export default {
  title: "Select color",
  name: "color",
  type: "string",
  options: {
    list: colors.map(entry => {
      return { title: entry.name, value: entry.color }
    }),
    layout: "dropdown"
  }
}
