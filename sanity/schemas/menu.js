export default {
  type: "document",
  name: "menu",
  title: "Menus",
  fields: [
    { type: "string", name: "name", title: "Name" },
    {
      type: "array",
      name: "menuItems",
      title: "Menu items",
      of: [
        {
          type: "object",
          name: "menuItem",
          title: "Menu Item",
          fields: [
            {
              type: "string",
              name: "label",
              title: "Label"
            },
            {
              type: "reference",
              name: "link",
              title: "Link",
              to: [{ type: "page" }]
            }
          ]
        },
        {
          type: "object",
          name: "menuItemOutbound",
          title: "Outbound link",
          fields: [
            {
              type: "string",
              name: "label",
              title: "Label"
            },
            {
              type: "string",
              name: "link",
              title: "Link"
            }
          ]
        }
      ]
    }
  ]
}
