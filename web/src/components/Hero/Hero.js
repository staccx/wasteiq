import React from "react"
import styled from "styled-components"
import { SanityImage } from "@staccx/sanity"
import { Heading, Paragraph, Layout } from "@staccx/base"
import ButtonGroup from "../ButtonGroup/ButtonGroup"

const Hero = ({ heading, lede, buttons, image }) => {
  return (
    <Outer>
      <Layout rowGap={"gridSmall"}>
        {heading && <Heading level={1}>{heading}</Heading>}
        {lede && <Paragraph variant={"lede"}>{lede}</Paragraph>}
        {buttons && <ButtonGroup buttons={buttons} />}
        {image && <SanityImage image={image} />}
      </Layout>
    </Outer>
  )
}

const Outer = styled.div`
  h1 {
    font-weight: bold;
  }
`

export default Hero
