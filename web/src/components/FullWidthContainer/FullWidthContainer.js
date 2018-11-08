import React from "react"
import styled from "styled-components"
import BlockContent from "@sanity/block-content-to-react"
import { Layout, ThemeComponent } from "@staccx/base"
import FullWidth from "../FullWidth/FullWidth"
import PageLayout from "../PageLayout/PageLayout"
import blockContentSerializer from "../../pages/blockContentSerializer"

const PatternContainer = ({ blocks }) => {
  return (
    <FullWidth>
      <Container>
        <ThemeComponent tagName={"DotsPattern"} />
      </Container>
      <PageLayout>
        <Layout paddingTop={"gridSmall"} paddingBottom={"gridSmall"}>
          <BlockContent
            blocks={blocks}
            serializers={blockContentSerializer}
            renderContainerOnSingleChild
          />
        </Layout>
      </PageLayout>
    </FullWidth>
  )
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

export default PatternContainer
