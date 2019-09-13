import React from "react"

import { Layout } from "@staccx/base"
import styled from "styled-components"
import ButtonGroup from "../ButtonGroup/ButtonGroup"
import Heading from "../Heading/Heading"
import Lede from "../Lede/Lede"
import FeaturesList from "./Features.List"

const Header = styled.header`
  text-align: center;
`

const ButtonGroupWrapper = styled.div`
  a {
    margin-left: auto;
    margin-right: auto;
  }
`

const Features = ({ heading, lede, features, buttons }) => {
  return (
    <Layout as={"article"}>
      <Header>
        <Layout rowGap={"large"}>
          {heading && <Heading level={2}>{heading}</Heading>}
          {lede && <Lede>{lede}</Lede>}
        </Layout>
      </Header>
      {features &&
        features.features && <FeaturesList features={features.features} />}

      {buttons && (
        <ButtonGroupWrapper>
          <ButtonGroup buttons={buttons} />
        </ButtonGroupWrapper>
      )}
    </Layout>
  )
}

export default Features
