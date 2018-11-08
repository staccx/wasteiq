import React from "react"
import { Link } from "react-router-dom"
import { SanityDocument } from "@staccx/sanity"
import { ItemGroup, Button } from "@staccx/base"

const ButtonGroup = ({ buttons }) => {
  return (
    <ItemGroup variant={"buttons"}>
      {buttons.map(button => {
        if (button._type === "buttonLink") {
          return (
            <Button
              color={button.color}
              as={"a"}
              href={button.url}
              key={button._key}
            >
              {button.text}
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
                <Button
                  color={button.color}
                  as={Link}
                  to={document.path}
                  key={button._key}
                >
                  {button.text}
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
