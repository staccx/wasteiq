import React from "react"

import { Layout } from "@staccx/base"
import styled from "styled-components"
import ButtonGroup from "../ButtonGroup/ButtonGroup"
import Heading from "../Heading/Heading"
import Lede from "../Lede/Lede"
import CardFeaturesList from "./CardFeatures.List"

const Header = styled.header`
  text-align: center;
`

const CardFeatures = ({ heading, lede, features, buttons }) => {
  return (
    <Layout as={"article"}>
      <Header>
        <Layout rowGap={"small"}>
          {heading && <Heading level={2}>{heading}</Heading>}
          {lede && <Lede>{lede}</Lede>}
          {buttons && <ButtonGroup buttons={buttons} />}
        </Layout>
      </Header>
      {features &&
        features.features && <CardFeaturesList features={features.features} />}
    </Layout>
  )
}

export default CardFeatures
