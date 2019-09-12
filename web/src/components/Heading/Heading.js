import styled from "styled-components"
import { Heading as HeadingBase, theming } from "@staccx/base"

const Heading = styled(HeadingBase)`
  font-weight: bold;
  max-width: ${theming.wrapper("maxTextWidth")};
  margin-left: auto;
  margin-right: auto;
`

export default Heading
