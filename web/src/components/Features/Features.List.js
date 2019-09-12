import React from "react"
import styled from "styled-components"
import { SanityImage } from "@staccx/sanity"
import { List, Heading, Paragraph, Layout } from "@staccx/base"
import { i18nInstance } from "@staccx/i18n"
import BlockContent from "@sanity/block-content-to-react"
import RichText from "../RichText/RichText"

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
              {feature.body &&
                !feature.content && <Paragraph>{t(feature.body)}</Paragraph>}
              {feature.content && (
                <RichText>
                  <BlockContent
                    blocks={i18nInstance.convert(feature.content)}
                  />
                </RichText>
              )}
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
