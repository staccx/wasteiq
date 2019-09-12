import styled from "styled-components"
import { Paragraph as ParagraphBase, theming } from "@staccx/base"

const Lede = styled(ParagraphBase)`
  max-width: ${theming.wrapper("maxTextWidth")};
  font-weight: 300;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
`

export default Lede
