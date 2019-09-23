import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import PageLayout from "../components/PageLayout/PageLayout"
import blockContentSerializer from "./blockContentSerializer"

/**
 * At the outset any page is built from an array of blocks. For this example
 * page we only have some fields. So, what we do then is to lean on the
 * existing block system by creating blocks from the fields and feeding them
 * to the BlockContent component as an array.
 *
 * This allows the editor to think less about building blocks and focus more on
 * the data that they want to capture about examples.
 */
const ExamplePage = ({ example }) => {
  const { name, lede, description = {}, _id } = example
  const hero = {
    _key: `hero-${_id}`,
    _type: "hero",
    title: name,
    lede
  }
  const { nb = [], en = [] } = description
  const localeRichText = {
    _key: `description-${_id}`,
    _type: "localeRichText",
    nb,
    en
  }
  return (
    <PageLayout>
      <BlockContent
        blocks={[hero, localeRichText]}
        serializers={blockContentSerializer}
        renderContainerOnSingleChild
      />
    </PageLayout>
  )
}

export default ExamplePage
