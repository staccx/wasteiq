import React from "react"

import { Layout, Paragraph, Heading } from "@staccx/base"
import ButtonGroup from "../ButtonGroup/ButtonGroup"
import CenterContent from "../CenterContent/CenterContent"
import CardFeaturesList from "./CardFeatures.List"

const CardFeatures = ({ heading, lede, features, buttons }) => {
  return (
    <Layout as={"article"}>
      <header>
        <Layout rowGap={"small"}>
          <CenterContent>
            {heading && <Heading level={2}>{heading}</Heading>}
            {lede && <Paragraph variant="lede">{lede}</Paragraph>}
          </CenterContent>
        </Layout>
      </header>
      {features &&
        features.features && <CardFeaturesList features={features.features} />}
      <CenterContent>
        {buttons && <ButtonGroup buttons={buttons} />}
      </CenterContent>
    </Layout>
  )
}

export default CardFeatures
