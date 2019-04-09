import React from "react"
import { List, Heading, Paragraph, Layout } from "@staccx/base"
import { i18nInstance } from "@staccx/i18n"

const t = val => i18nInstance.convert(val)
const FeaturesList = ({ features }) => {
  return (
    <List variant={"columns"}>
      {features.map(feature => (
        <li key={feature._key}>
          <Layout rowGap={"tiny"}>
            {feature.title && <Heading level={4}>{t(feature.title)}</Heading>}
            {feature.body && <Paragraph>{t(feature.body)}</Paragraph>}
          </Layout>
        </li>
      ))}
    </List>
  )
}

export default FeaturesList
