import React from "react"
import styled from "styled-components"
import BlockContent from "@sanity/block-content-to-react"
import { SanityImage } from "@staccx/sanity"
import { Layout, theming } from "@staccx/base"
import { i18nInstance } from "@staccx/i18n"
import Story from "../components/Story/Story"
import Hero from "../components/Hero/Hero"
import RichText from "../components/RichText/RichText"
import Features from "../components/Features/Features"
import CardFeatures from "../components/CardFeatures/CardFeatures"
import Partners from "../components/Partners/Partners"
import CallToAction from "../components/CallToAction/CallToAction"
import FullWidthContainer from "../components/FullWidthContainer/FullWidthContainer"

const TweakedLayout = styled(Layout)`
  grid-row-gap: ${theming.spacing.large};
  @media (min-width: ${theming.wrapper("medium")}) {
    grid-row-gap: ${theming.spacing.huge};
  }
`

const t = val => i18nInstance.convert(val)
const serializer = {
  container: props => (
    <TweakedLayout rowGap="large">{props.children}</TweakedLayout>
  ),
  types: {
    hero: ({ node }) => (
      <Hero
        heading={t(node.title)}
        lede={t(node.lede)}
        image={node.image}
        buttons={node.buttons}
        key={node._key}
      />
    ),
    partnersBlock: ({ node }) => (
      <Partners
        heading={t(node.title)}
        lede={t(node.lede)}
        buttons={node.buttons}
        partners={node.relatedPartners}
        key={node._key}
      />
    ),
    examplesBlock: ({ node }) => (
      <Slider
        heading={t(node.title)}
        lede={t(node.lede)}
        examples={node.examples}
        key={node._key}
      />
    ),
    localeRichText: ({ node }) => {
      return (
        <RichText>
          <BlockContent blocks={i18nInstance.convert(node)} />
        </RichText>
      )
    },
    richText: ({ node }) => (
      <RichText>
        <BlockContent blocks={node.bodyContent} serializers={serializer} />
      </RichText>
    ),
    features: ({ node }) => (
      <Features
        heading={t(node.title)}
        lede={t(node.lede)}
        features={node.features}
        buttons={node.buttons}
      />
    ),
    cardFeatures: ({ node }) => (
      <CardFeatures
        heading={t(node.title)}
        lede={t(node.lede)}
        features={node.features}
        buttons={node.buttons}
        image={node.image}
      />
    ),
    callToAction: ({ node }) => (
      <CallToAction
        buttons={node.buttons}
        lede={node.lede}
        heading={node.title}
        icon={node.icon}
        features={node.features}
        color={node.color}
      />
    ),
    fullWidthContainer: ({ node }) => {
      return <FullWidthContainer {...node} />
    },
    image: ({ node }) => {
      return (
        <ImageContainer>
          <SanityImage image={node} />
        </ImageContainer>
      )
    },
    story: ({ node }) => (
      <Story
        color={node.color}
        icon={node.icon}
        heading={t(node.title)}
        lede={t(node.lede)}
        sellingPoints={node.sellingPoints}
        key={node._key}
      />
    )
  }
}

const ImageContainer = styled.div`
  text-align: center;
`

export default serializer
