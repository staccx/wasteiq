import React from "react"
import styled from "styled-components"
import {
  Box,
  Heading,
  Paragraph,
  Layout,
  ThemeComponent,
  theming
} from "@staccx/base"
import FeaturesList from "../Features/Features.List"
import getIconColor from "../../utils/getIconColor"
import ButtonGroup from "../ButtonGroup/ButtonGroup"

const CallToAction = ({
  color,
  icon,
  features,
  butons,
  lede,
  heading,
  buttons
}) => {
  return (
    <Box
      color={color}
      as={"article"}
      size={"medium"}
      variant={[theming.VARIANT_DEFAULT, "story"]}
    >
      <Layout rowGap={"large"}>
        <header>
          <Layout>
            {heading && <Heading level={2}>{heading}</Heading>}
            {lede && <Paragraph>{lede}</Paragraph>}
            {buttons && <ButtonGroup buttons={buttons} />}
          </Layout>
        </header>
        <Body>
          {icon && (
            <IconContainer>
              <ThemeComponent
                tagName={icon}
                color={getIconColor(color)}
                autoWidth
              />
            </IconContainer>
          )}
          {features &&
            features.features && (
              <div>
                <FeaturesList features={features.features} />
              </div>
            )}
          q
        </Body>
      </Layout>
    </Box>
  )
}

const Body = styled.div`
  @media (min-width: ${theming.wrapper("medium")}) {
    position: relative;
    display: flex;
    justify-content: space-between;

    > div:last-child {
      flex-basis: 75%;
    }
  }
`

const IconContainer = styled.div`
  @media (min-width: ${theming.wrapper("medium")}) {
    position: relative;
    max-height: 25vh;
    min-height: 240px;
    align-self: flex-end;

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

export default CallToAction
