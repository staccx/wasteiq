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
              type: "localeString",
              name: "label",
              title: "Label"
            },
            {
              type: "reference",
              name: "link",
              title: "Link",
              to: [{ type: "page" }]
            }
          ],
          preview: {
            select: {
              title: "label.en"
            }
          }
        },
        {
          type: "object",
          name: "menuItemOutbound",
          title: "Outbound link",
          fields: [
            {
              type: "localeString",
              name: "label",
              title: "Label"
            },
            {
              type: "string",
              name: "link",
              title: "Link"
            }
          ],
          preview: {
            select: {
              title: "label.en"
            }
          }
        }
      ]
    }
  ]
}
