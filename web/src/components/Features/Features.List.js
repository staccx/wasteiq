import React from "react"
import styled from "styled-components"
import { SanityImage } from "@staccx/sanity"
import { List, Heading, Paragraph, Layout, theming } from "@staccx/base"
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
            <FeaturesCard>
              {feature.image && (
                <SanityImage image={feature.image} width={200} />
              )}
              <div>
                {feature.title && (
                  <Heading level={4}>{t(feature.title)}</Heading>
                )}
                {feature.body &&
                  !feature.content && <Paragraph>{t(feature.body)}</Paragraph>}
                {feature.content && (
                  <RichText>
                    <BlockContent
                      blocks={i18nInstance.convert(feature.content)}
                    />
                  </RichText>
                )}
              </div>
            </FeaturesCard>
          </Layout>
        </li>
      ))}
    </List>
  )
}

const FeaturesCard = styled.div`
  max-width: 600px;
  padding-bottom: ${theming.spacing.medium};
  display: flex;
  align-items: center;
  height: 100%;
  img {
    margin-right: ${theming.spacing.medium};
    margin-bottom: ${theming.spacing.medium};
  }
  * > {
    flex-basis: 33%;
  }
  flex-wrap: wrap;
  @media only screen and (min-width: 500px) {
    flex-flow: row;
    flex-wrap: nowrap;
  }
  @media only screen and (min-width: ${theming.wrapper.medium}) {
    padding: ${theming.spacing.large};
  }
`

export default FeaturesList
