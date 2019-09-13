import { theming } from "@staccx/base"
import styled from "styled-components"

const CenterContent = styled.div`
  @media only screen and (min-width: ${theming.wrapper.medium}) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`

export default CenterContent
