import React from "react"

import { Layout, Paragraph, Heading } from "@staccx/base"
import styled from "styled-components"
import ButtonGroup from "../ButtonGroup/ButtonGroup"
import FeaturesList from "./Features.List"
import CenterContent from "../CenterContent/CenterContent"

const Features = ({ heading, lede, features, buttons }) => {
  return (
    <Layout as={"article"}>
      <header>
        <Layout rowGap={"large"}>
          <CenterContent>
            {heading && <Heading level={2}>{heading}</Heading>}
            {lede && <Paragraph variant="lede">{lede}</Paragraph>}
          </CenterContent>
        </Layout>
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
