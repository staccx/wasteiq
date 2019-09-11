export default {
  type: "document",
  name: "partner",
  title: "Partners",
  fields: [
    { type: "localeString", name: "name", title: "Name" },
    {
      name: "partnerLogo",
      title: "Partner logo",
      type: "image",
      options: { hotspot: true }
    },
    {
      title: "URL to partner site",
      name: "partnerUrl",
      type: "url"
    },
    { type: "localeRichText", name: "description", title: "Description" }
  ],
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
