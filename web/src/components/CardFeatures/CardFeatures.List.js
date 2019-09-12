import React from "react"
import styled from "styled-components"
import { SanityImage } from "@staccx/sanity"
import {
  List as ListBase,
  Heading,
  Paragraph,
  Layout,
  theming
} from "@staccx/base"
import { i18nInstance } from "@staccx/i18n"

const List = styled(ListBase)`
  img {
    width: 100%;
  }
  @media only screen and (min-width: ${theming.wrapper("medium")}) {
    li {
      flex-basis: calc(33% - 24px);
    }
  }
`

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
  margin: 0 6.7%;
  padding: 24px;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(254, 121, 77, 0.1);
`

export default FeaturesList
