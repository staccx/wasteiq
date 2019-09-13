import React from "react"
import styled from "styled-components"
import { SanityImage } from "@staccx/sanity"
import { i18nInstance } from "@staccx/i18n"
import BlockContent from "@sanity/block-content-to-react"
import { List as ListBase, Heading, Layout, theming } from "@staccx/base"
import RichText from "../RichText/RichText"

const List = styled(ListBase)`
  img {
    width: 100%;
  }

  li {
    max-width: 350px;
  }

  display: flex;
  flex-wrap: wrap;

  @media only screen and (min-width: ${theming.wrapper("medium")}) {
    justify-content: space-between;
    li {
      flex-basis: calc(33% - 24px);
    }
  }
`

const t = val => i18nInstance.convert(val)
const FeaturesList = ({ features }) => {
  return (
    <List>
      {features.map(feature => (
        <li key={feature._key}>
          <Layout rowGap={"none"}>
            {feature.image && <SanityImage image={feature.image} />}
            <FeaturesCard>
              {feature.title && <Heading level={3}>{t(feature.title)}</Heading>}
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
  margin: 0 6.7%;
  padding: 24px;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(254, 121, 77, 0.1);
`

export default FeaturesList
