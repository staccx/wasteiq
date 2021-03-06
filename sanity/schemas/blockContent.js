export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      type: "localeRichText"
    },
    {
      type: "image",
      options: { hotspot: true }
    },
    { type: "story" },
    { type: "hero" },
    { type: "partnersBlock" },
    { type: "features" },
    { type: "cardFeatures" },
    { type: "callToAction" },
    { type: "fullWidthContainer" },
    { type: "examplesBlock" }
  ]
}
