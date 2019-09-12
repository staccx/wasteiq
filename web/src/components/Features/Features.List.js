import React from "react"
import styled from "styled-components"
import { SanityImage } from "@staccx/sanity"
import { List, Heading, Paragraph, Layout, theming } from "@staccx/base"
import { i18nInstance } from "@staccx/i18n"

const t = val => i18nInstance.convert(val)
const FeaturesList = ({ features }) => {
  return (
    <List variant={"columns"}>
      {features.map(feature => (
        <li key={feature._key}>
          <Layout rowGap={"none"}>
            {feature.image && <SanityImage image={feature.image} />}

            <FeaturesCard>
              {feature.title && <Heading level={4}>{t(feature.title)}</Heading>}
              {feature.body && <Paragraph>{t(feature.body)}</Paragraph>}
            </FeaturesCard>
          </Layout>
        </li>
      ))}
    </List>
  )
}

const FeaturesCard = styled.div`
  padding: 40px;
`

export default FeaturesList
