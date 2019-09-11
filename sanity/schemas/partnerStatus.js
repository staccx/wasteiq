export default {
  type: "document",
  name: "partnerStatus",
  title: "Partner status",
  fields: [{ type: "localeString", name: "name", title: "Name" }],
  preview: {
    select: {
      title: "name.en"
    },
    prepare(selection, options) {
      const { title } = selection
      return {
        title: title
      }
    }
  }
}
