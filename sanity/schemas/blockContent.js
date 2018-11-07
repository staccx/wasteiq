export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      type: "richText"
    },
    {
      type: "image",
      options: { hotspot: true }
    },
    { type: "story" },
    { type: "hero" },
    { type: "features" },
    { type: "callToAction" },
    { type: "fullWidthContainer" }
  ]
}
