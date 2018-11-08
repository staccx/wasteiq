import React from "react"
import styled from "styled-components"
import { Heading, Paragraph, Layout } from "@staccx/base"
import ButtonGroup from "../ButtonGroup/ButtonGroup"

const Hero = ({ heading, lede, buttons }) => {
  return (
    <Outer>
      <Layout rowGap={"gridSmall"}>
        {heading && <Heading level={1}>{heading}</Heading>}
        {lede && <Paragraph variant={"lede"}>{lede}</Paragraph>}
        {buttons && <ButtonGroup buttons={buttons} />}
      </Layout>
    </Outer>
  )
}

const Outer = styled.div``

export default Hero
