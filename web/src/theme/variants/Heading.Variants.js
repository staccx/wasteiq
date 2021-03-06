import { css } from "styled-components"
import { Heading, theming } from "@staccx/base"

const getResponsiveSize = level => {
  switch (level) {
    case 1:
      return theming.font.h2
    case 2:
      return theming.font("h25")
    default:
      return theming.font(`h${level}`)
  }
}

export const HeadingVariants = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      font-weight: bold;
      max-width: ${theming.wrapper("maxTextWidth")};
      @media (max-width: ${theming.wrapper("medium")}) {
        font-size: ${p => getResponsiveSize(p.level)};
      }
    `
  },
  Heading.themeProps.heading
)
