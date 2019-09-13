import { theming } from "@staccx/base"
import styled from "styled-components"

const CenterContent = styled.div`
  @media only screen and (min-width: ${theming.wrapper.medium}) {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    a {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
  }
`

export default CenterContent
