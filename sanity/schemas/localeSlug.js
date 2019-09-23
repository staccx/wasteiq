const languages = ["nb", "en"]

export default {
  type: "document",
  name: "localeSlug",
  title: "Per-language slug",
  fields: [
    ...languages.map(languageCode => ({
      type: "slug",
      name: languageCode,
      title: `${languageCode}: Path`,
      options: {
        source: `name.${languageCode}`,
        maxLength: 96,
        auto: true
      },
      validation: Rule => Rule.required()
    }))
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
