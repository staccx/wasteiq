import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import { SanityImage } from "@staccx/sanity"
import { Layout } from "@staccx/base"
import Story from "../components/Story/Story"
import Hero from "../components/Hero/Hero"
import RichText from "../components/RichText/RichText"
import Features from "../components/Features/Features"
import CallToAction from "../components/CallToAction/CallToAction"
import FullWidthContainer from "../components/FullWidthContainer/FullWidthContainer"

const serializer = {
  container: props => <Layout rowGap="grid">{props.children}</Layout>,
  types: {
    hero: ({ node }) => (
      <Hero
        heading={node.title}
        lede={node.lede}
        buttons={node.buttons}
        key={node._key}
      />
    ),
    richText: ({ node }) => (
      <RichText>
        <BlockContent blocks={node.bodyContent} serializer={serializer} />
      </RichText>
    ),
    features: ({ node }) => (
      <Features
        heading={node.title}
        lede={node.lede}
        features={node.features}
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
      return (
        <FullWidthContainer background={node.background} blocks={node.blocks} />
      )
    },
    image: ({ node }) => {
      return <SanityImage image={node} />
    },
    story: ({ node }) => (
      <Story
        color={node.color}
        icon={node.icon}
        heading={node.title}
        lede={node.lede}
        sellingPoints={node.sellingPoints}
        key={node._key}
      />
    )
  }
}

export default serializer
