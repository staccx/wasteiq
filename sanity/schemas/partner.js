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
      type: "reference",
      name: "partnerStatus",
      title: "Partner status",
      to: [{ type: "partnerStatus" }]
    },
    {
      type: "localeText",
      name: "lede",
      title: "Lede"
    },
    { type: "localeRichText", name: "description", title: "Description" }
  ],
  preview: {
    select: {
      title: "name.en",
      partnerLogo: "partnerLogo",
      partnerStatus: "partnerStatus.name.en"
    },
    prepare(selection, options) {
      const { title, partnerLogo, partnerStatus } = selection
      return {
        title: title,
        subtitle: partnerStatus,
        media: partnerLogo
      }
    }
  }
}
