import React from "react"

import { Layout, Heading, Paragraph, Divider } from "@staccx/base"

import FeaturesList from "./Features.List"

const Features = ({ heading, lede, features }) => {
  return (
    <Layout as={"article"}>
      <header>
        <Layout rowGap={"small"}>
          {heading && (
            <Heading variant="lined" level={2}>
              {heading}
            </Heading>
          )}
          {lede && <Paragraph>{lede}</Paragraph>}
          <Divider />
        </Layout>
      </header>
      {features &&
        features.features && <FeaturesList features={features.features} />}
    </Layout>
  )
}

export default Features
