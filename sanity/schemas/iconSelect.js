export const icons = [
  {
    name: "Half circle",
    icon: "IconHalfCircle"
  },
  {
    name: "Quarter circle",
    icon: "IconQuarterCircle"
  },
  {
    name: "Diagonal line",
    icon: "IconDiagonalLine"
  }
]

export default {
  title: "Select icon",
  name: "icon",
  type: "string",
  options: {
    list: icons.map(entry => {
      return { title: entry.name, value: entry.icon }
    }),
    layout: "dropdown"
  }
}
