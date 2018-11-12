import { css } from "styled-components"
import { Divider, theming } from "@staccx/base"

export const DividerVariants = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: currentColor;
    `
  },
  Divider.themeProps.rule
)
