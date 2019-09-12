import React from "react"
import styled from "styled-components"
import { theming } from "@staccx/base"

const RichText = ({ children }) => {
  return <BodyStyles>{children}</BodyStyles>
}

const BodyStyles = styled.div`
  p,
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-bottom: ${theming.spacing.small};
  }

  p,
  ul {
    max-width: 540px;
    margin-bottom: ${theming.spacing.medium};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: ${theming.spacing.small};
  }

  h1 {
    font-size: ${theming.font.h1};
  }

  h2 {
    font-size: ${theming.font.h2};
  }

  h3 {
    font-size: ${theming.font.h3};
  }

  h4 {
    font-size: ${theming.font.h4};
  }

  h5 {
    font-size: ${theming.font.h5};
  }

  h6 {
    font-size: ${theming.font.h6};
  }

  ul {
    list-style-type: disc;
    margin-left 20px;
  }

  a {
    color: ${theming.color.primary};
    text-decoration: underline;
  }
`

export default RichText
