import React from "react"
import { List, Heading, Paragraph, Layout } from "@staccx/base"

const FeaturesList = ({ features }) => {
  return (
    <List variant={"columns"}>
      {features.map(feature => (
        <li key={feature._key}>
          <Layout rowGap={"tiny"}>
            {feature.title && <Heading level={4}>{feature.title}</Heading>}
            {feature.body && <Paragraph>{feature.body}</Paragraph>}
          </Layout>
        </li>
      ))}
    </List>
  )
}

export default FeaturesList
