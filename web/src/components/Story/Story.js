import React from "react"
import styled from "styled-components"
import { SanityImage } from "@staccx/sanity"
import {
  Heading,
  Paragraph,
  Layout,
  Box,
  ThemeComponent,
  Flag,
  theming
} from "@staccx/base"
import getIconColor from "../../utils/getIconColor"

const Story = ({ color, icon, heading, lede, sellingPoints }) => {
  return (
    <Box
      variant={[theming.VARIANT_DEFAULT, "story"]}
      hasIcon={!!icon}
      color={color}
      as={"article"}
      size={"medium"}
    >
      <Layout variant={"storyContent"}>
        <header>
          {heading && <Heading level={2}>{heading}</Heading>}
          {icon && (
            <IconContainer>
              <ThemeComponent
                tagName={icon}
                color={getIconColor(color)}
                autoWidth
              />
            </IconContainer>
          )}
        </header>
        <div>
          <Layout rowGap={"gridSmall"}>
            {lede && <Paragraph>{lede}</Paragraph>}
            {sellingPoints && (
              <div>
                <Layout rowGap={"medium"}>
                  {sellingPoints.title && (
                    <Heading level={4}>{sellingPoints.title}</Heading>
                  )}
                  {sellingPoints.points && (
                    <Layout as={"ul"} rowGap={"medium"}>
                      {sellingPoints.points.map(point => (
                        <li key={point._key}>
                          <Flag img={<StyledImage image={point.image} />}>
                            {point.text}
                          </Flag>
                        </li>
                      ))}
                    </Layout>
                  )}
                </Layout>
              </div>
            )}
          </Layout>
        </div>
      </Layout>
    </Box>
  )
}

const StyledImage = styled(SanityImage)`
  display: block;
  min-width: 92px;
  max-height: 64px;
`

const IconContainer = styled.div`
  @media (min-width: ${theming.wrapper("medium")}) {
    position: relative;
    max-height: 25vh;
    min-height: 250px;

    > * {
      position: absolute;
      bottom: -${theming.spacing.large};
      left: -${theming.spacing.large};
    }
  }

  @media (max-width: ${theming.wrapper("medium")}) {
    > * {
      position: absolute;
      max-height: 23vh;
      bottom: 0;
      left: 0;
    }
  }
`

export default Story
