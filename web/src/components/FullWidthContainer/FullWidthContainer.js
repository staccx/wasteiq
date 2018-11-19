import React from "react"
import styled from "styled-components"
import BlockContent from "@sanity/block-content-to-react"
import { Layout, ThemeComponent, theming, fontSmoothing } from "@staccx/base"
import FullWidth from "../FullWidth/FullWidth"
import PageLayout from "../PageLayout/PageLayout"
import blockContentSerializer from "../../pages/blockContentSerializer"

const PatternContainer = ({ blocks, background }) => {
  console.log(background)
  return (
    <Outer>
      <StyledFullWidth background={background}>
        {background && (
          <Container background={background}>
            {background === "dotsPattern" && (
              <ThemeComponent tagName={"DotsPattern"} />
            )}
          </Container>
        )}
        <PageLayout>
          <Layout paddingTop={"gridSmall"} paddingBottom={"gridSmall"}>
            <BlockContent
              blocks={blocks}
              serializers={blockContentSerializer}
              renderContainerOnSingleChild
            />
          </Layout>
        </PageLayout>
      </StyledFullWidth>
    </Outer>
  )
}

const getBgColor = background => {
  switch (background) {
    case "dotsPattern":
      return theming.color.white

    case "black":
      return theming.color.black

    case "blueLight":
      return theming.color("blueLight")

    default:
      return "transparent"
  }
}

const Outer = styled.div`
  & ~ & {
    margin-top: -${theming.spacing("grid")};
  }

  &:last-child {
    margin-bottom: -${theming.spacing("grid")};
  }
`

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: ${p => p.background && getBgColor(p.background)};
`

const StyledFullWidth = styled(FullWidth)`
  color: ${p => p.background === "black" && theming.color.white};
  ${p => p.background === "black" && fontSmoothing};
`

export default PatternContainer
