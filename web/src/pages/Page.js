import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import PageLayout from "../components/PageLayout/PageLayout"
import blockContentSerializer from "./blockContentSerializer"

const Page = ({ page }) => {
  return (
    <PageLayout>
      <BlockContent
        blocks={page.blocks}
        serializers={blockContentSerializer}
        renderContainerOnSingleChild
      />
    </PageLayout>
  )
}

export default Page
