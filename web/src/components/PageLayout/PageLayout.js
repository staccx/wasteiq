import React from "react"
import { Layout, LayoutItem } from "@staccx/base"

const PageLayout = ({ children }) => {
  return (
    <Layout variant="page" columnGap={"flush"}>
      <LayoutItem area={"main"}>{children}</LayoutItem>
    </Layout>
  )
}

export default PageLayout
