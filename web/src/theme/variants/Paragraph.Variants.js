import { css } from "styled-components"
import { Paragraph, theming } from "@staccx/base"

export const ParagraphVariants = theming.createVariants(
  {
    lede: css`
      max-width: ${theming.wrapper("maxTextWidth")};
      font-weight: 300;
      font-size: 20px;
    `
  },
  Paragraph.themeProps.paragraph
)
