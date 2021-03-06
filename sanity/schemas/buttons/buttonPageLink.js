export default {
  type: "object",
  title: "Button page link",
  name: "buttonPageLink",
  fields: [
    {
      type: "localeString",
      name: "text",
      title: "Text"
    },
    {
      type: "reference",
      name: "page",
      title: "Page",
      to: [{ type: "page" }]
    },
    {
      type: "color",
      name: "color",
      title: "Color"
    }
  ]
}
