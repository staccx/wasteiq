import { css } from "styled-components"
import { theming } from "@staccx/base"

export default css`
  html {
    font-size: ${theming.font.base};
    line-height: 1.7;
  }
  ::selection {
    background: #abecd1;
    color: #000;
  }

  h1 {
    font-weight: 400;
    line-height: 1.2;
  }

  h2,
  h3 {
    font-weight: 300;
    line-height: 1.3;
  }

  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: 1.4;
  }
`
