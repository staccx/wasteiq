import React from "react"

import { Layout, Paragraph, Heading } from "@staccx/base"
import ButtonGroup from "../ButtonGroup/ButtonGroup"
import FeaturesList from "./Features.List"
import CenterContent from "../CenterContent/CenterContent"

const Features = ({ heading, lede, features, buttons }) => {
  return (
    <Layout as={"article"} rowGap={"large"}>
      <header>
        <CenterContent>
          <Layout rowGap={"large"}>
            {heading && <Heading level={2}>{heading}</Heading>}
            {lede && <Paragraph variant="lede">{lede}</Paragraph>}
          </Layout>
        </CenterContent>
      </header>
      {features &&
        features.features && <FeaturesList features={features.features} />}
      {buttons && (
        <CenterContent>
          <ButtonGroup buttons={buttons} />
        </CenterContent>
      )}
    </Layout>
  )
}

export default Features
