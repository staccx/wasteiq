import React from "react"
import { Link } from "react-router-dom"
import { SanityDocument } from "@staccx/sanity"
import { ItemGroup, theming } from "@staccx/base"
import { i18nInstance } from "@staccx/i18n"
import styled from "styled-components"

const Button = styled.a`
  color: ${theming.color("white")};
  text-decoration: none;
  border-radius: ${theming.borderRadius()};
  padding: ${theming.spacing("small")} ${theming.spacing("medium")};
  background-color: #7065b9;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #a396f5;
  }
`

const ButtonGroup = ({ buttons }) => {
  return (
    <ItemGroup variant={"buttons"}>
      {buttons.map(button => {
        if (button._type === "buttonLink") {
          return (
            <Button href={button.url} key={button._key}>
              {i18nInstance.convert(button.text)}
            </Button>
          )
        }
        return (
          <SanityDocument id={button.page._ref} pick={"path"} key={button._key}>
            {({ document }) => {
              if (!document) {
                return null
              }
              return (
                <Button as={Link} to={document.path} key={button._key}>
                  {i18nInstance.convert(button.text)}
                </Button>
              )
            }}
          </SanityDocument>
        )
      })}
    </ItemGroup>
  )
}

export default ButtonGroup
