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
    {
      title: "Partner status",
      name: "partnerStatus",
      type: "string",
      options: {
        list: [
          { title: "Certified integration", value: "certified-integration" },
          { title: "Planned integration", value: "planned-integration" },
          { title: "R&D collaboration", value: "r-and-d-collaboration" }
        ]
      }
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
