import React, { useState } from "react"

import { Layout, Paragraph, Heading, theming } from "@staccx/base"
import { SanityQuery } from "@staccx/sanity"
import styled from "styled-components"
import { i18nInstance } from "@staccx/i18n"
import CenterContent from "../CenterContent/CenterContent"
import ItemsCarousel from "react-items-carousel"
import RichText from "../RichText/RichText"
import { useMediaQuery } from "react-responsive"

const t = val => i18nInstance.convert(val)

const FeaturesCard = styled.div`
  height: 100%
  padding: 24px;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(254, 121, 77, 0.1);
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  padding: 24px 0;
`

const Button = styled.button`
  color: ${theming.color("white")};
  text-decoration: none;
  border-radius: 100px;
  padding: 15px 20px;
  background-color: #7065b9;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #a396f5;
  }
`

const Slider = ({ heading, lede, examples = [] }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 600px)"
  })
  return (
    <Layout as="article">
      <CenterContent>
        <Layout rowGap={"medium"}>
          {heading && <Heading level={2}>{heading}</Heading>}
          {lede && <Paragraph variant="lede">{lede}</Paragraph>}
        </Layout>
      </CenterContent>
      {examples && (
        <Wrapper>
          <SanityQuery
            id={"examples-block"}
            query={buildExamplesQuery(examples)}
          >
            {({ result = [] }) => (
              <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={isDesktopOrLaptop ? 3 : 1}
                gutter={isDesktopOrLaptop ? 48 : 24}
                leftChevron={<Button>{"<"}</Button>}
                rightChevron={<Button>{">"}</Button>}
                chevronWidth={80}
                firstAndLastGutter={!isDesktopOrLaptop}
                showSlither
              >
                {result.map(({ _id, name, lede, path }) => (
                  <FeaturesCard key={_id}>
                    <Layout rowGap={"medium"}>
                      {name && (
                        <Heading level={4}>
                          <a href={`/examples/${path.current}`}>{t(name)}</a>
                        </Heading>
                      )}{" "}
                      {lede && <RichText>{t(lede)}</RichText>}
                    </Layout>
                  </FeaturesCard>
                ))}
              </ItemsCarousel>
            )}
          </SanityQuery>
        </Wrapper>
      )}
    </Layout>
  )
}

const buildExamplesQuery = examples => {
  const query = `*[_id in [${examples
    .map(({ _ref }) => `'${_ref}'`)
    .join(",")}]]{_id, name, lede, path}`
  return query
}
export default Slider
