import React from "react"
import styled from "styled-components"
import { SanityImage } from "@staccx/sanity"
import { Heading, Layout, theming } from "@staccx/base"
import ButtonGroup from "../ButtonGroup/ButtonGroup"
import Lede from "../Lede/Lede"

const Hero = ({ heading, lede, buttons, image }) => {
  return (
    <Outer>
      <Layout rowGap={"gridSmall"}>
        {heading && <Heading level={1}>{heading}</Heading>}
        {lede && <Lede variant={"lede"}>{lede}</Lede>}
        {buttons && <ButtonGroup buttons={buttons} />}
      </Layout>
      <HeroImage>
        {image && <SanityImage image={image} width={700} />}
      </HeroImage>
    </Outer>
  )
}

const Outer = styled.div`
  h1 {
    font-weight: bold;
  }

  @media only screen and (min-width: ${theming.wrapper("medium")}) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div:first-child {
      flex-basis: 45%;
    }
    > div:last-child {
      flex-basis: 55%;
    }
  }
`

const HeroImage = styled.div`
  display: none;

  @media only screen and (min-width: ${theming.wrapper("medium")}) {
    display: block;
    padding-left: 50px;
  }
`

export default Hero
